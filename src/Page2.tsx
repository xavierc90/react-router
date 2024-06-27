import { NavLink } from 'react-router-dom'

function Page2() {

  return (
    <>
      <h1 className='text-green-500 font-bold'>Page 2</h1>
      <NavLink to="/">Retour à l'accueil</NavLink>
    </>
  )
}

export default Page2
