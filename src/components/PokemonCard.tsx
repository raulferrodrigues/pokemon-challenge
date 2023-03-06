import { useCallback, useEffect, useState } from 'react'
import StatsList from './StatsList'

import { getPokemon } from '../PokemonAPI'

function PokemonCard(props: any) {
  const [id, setId] = useState('0')
  const [stats, setStats] = useState({})

  useEffect(() => {
    setId(props.id)
    setStats(props.stats)
  })

  return (
    <div className='pokemon-card'>
      <img src={'/sprites/' + id + '.png'} alt="Pokemon sprite" />
      <StatsList {...stats}></StatsList>
    </div>
  )
}

export default PokemonCard