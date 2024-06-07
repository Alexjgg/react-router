import { Link } from "../Link"
export default function DinamicPage({routeParams}) {
    return (
        <>
        <h1>Url dinamica</h1>
         <h2>Has buscado </h2>
        <h3 style={{color:'#9D8075'}}>{routeParams.query}</h3>
        <div><Link to="/">Volver a la home</Link>
        </div>
        </>
    )
}