import './style.scss'

export default function BarraProgresso({link1, link2, link3, link4, progress}){

    return(
        <div className="container-barra-progresso">
            <a href={link1}>
                <div className={`bola-progresso ${progress === 1 ? "selected" : ""}`} ></div>
            </a>
                <div className="stick-progresso" ></div>
            <a href={link2}>
                <div className={`bola-progresso ${progress === 2 ? "selected" : ""}`} ></div>
            </a>
            <div className="stick-progresso" ></div>
            <a href={link3}>
                <div className={`bola-progresso ${progress === 3 ? "selected" : ""}`} ></div>
            </a>

            <div className="stick-progresso" ></div>

            <a href={link4}>
                <div className={`bola-progresso ${progress === 4 ? "selected" : ""}`} ></div>
            </a>
            
        </div>
        
    )
}