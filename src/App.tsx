import { NavLink } from 'react-router-dom'

function App () {

  return (
    <>
      <h1 className='text-red-500'>Page d'accueil</h1>
      <NavLink to="/page2">Page 2</NavLink>
    </>
  )
}

export default App
