import {navigate} from '../Link.jsx'
export default function HomePage() {
    return (
      <>
        <h1>Home</h1>
        <p>Esta e suna pagina home de ejemplo para crear un rear roucter desde cero</p>
        <button onClick={() => navigate('/about')}>ir about</button>
      </>
    )
  }