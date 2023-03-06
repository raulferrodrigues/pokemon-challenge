import './StatsList.css'
import { useEffect, useState } from 'react';

function StatsList(props: any) {
  const [stats, setStats] = useState({
    hp: '0',
    atk: '0',
    def: '0',
    spAtk: '0',
    spDef: '0',
    spd: '0',
  })
  
  useEffect(() => {
    setStats(props)
  })

  return (
  <div className='container'>
    <StatsNames/>
    <StatsValues {...stats}/>
  </div>
  )
}

function StatsNames() {
  return (
    <div className='names-container'>
      <div className="name">HP</div>
      <div className="name">Attack</div>
      <div className="name">Defense</div>
      <div className="name">Sp. Attack</div>
      <div className="name">Sp. Defense</div>
      <div className="name">Speed</div>
    </div>
  )
}

function StatsValues(stats: any) {
  return (
    <div className='values-container'>
      <div className="value">{stats.hp}</div>
      <div className="value">{stats.atk}</div>
      <div className="value">{stats.def}</div>
      <div className="value">{stats.spAtk}</div>
      <div className="value">{stats.spDef}</div>
      <div className="value">{stats.spd}</div>
    </div>
  )
}




export default StatsList