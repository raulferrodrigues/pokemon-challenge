import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard';
import { getPokemon } from './PokemonAPI';

function App() {
  const [name, setName] = useState('')
  const [pokemon, setPokemon] = useState({})
  const [pokemonFound, setPokemonFound] = useState(false)

  const handleInputChange = (event: any) => {
    event.preventDefault();
    const { value } = event.target;
    setName(value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.debug('name', name)

    function parseStats(data: any) {
      let stats: any = {}
      stats['hp'] = data.stats[0].base_stat
      stats['atk'] = data.stats[1].base_stat
      stats['def'] = data.stats[2].base_stat
      stats['spAtk'] = data.stats[3].base_stat
      stats['spDef'] = data.stats[4].base_stat
      stats['spd'] = data.stats[5].base_stat
  
      return stats
    }
    
    getPokemon(name)
      .then(data => {
        const pokemon = {
          id: data.id,
          stats: parseStats(data)
        }
        setPokemon(pokemon)
        setPokemonFound(true)
      })
      .catch(error => console.error(error))
  }

  return (
    <div className="App">
      <div className="card">
        
        <form onSubmit={handleSubmit}>
          <label style={{marginRight: '10px'}}>
            Pokemon name:
            <input type="text" name="pokemon-name" style={{marginLeft: '10px'}} onChange={handleInputChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>

        {pokemonFound && <PokemonCard {...pokemon}/>}
      </div>
    </div>
  )
}

export default App
