import {navigate} from '../Link.jsx'
export default 
function AboutPage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es suna pagina de about ejemplo para crear un rear roucter desde cero</p>
      <button onClick={() => navigate('/')} >Ir a home</button>
    </>
  )
}