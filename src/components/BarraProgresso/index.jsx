import './style.scss'

export default function BarraProgresso({link1,link2,link3,link4,progress}){
    
    const div1 = `bola-progresso ${progress === 1 ? "selected" : ""}`
    const div2 = `bola-progresso ${progress === 2 ? "selected" : ""}`
    const div3 = `bola-progresso ${progress === 3 ? "selected" : ""}`
    const div4 = `bola-progresso ${progress === 4 ? "selected" : ""}`

    return(
        <div className="container-barra-progresso">
            <a href={link1}>
                <div className={div1} ></div>
            </a>
                <div className="stick-progresso" ></div>
            <a href={link2}>
                <div className={div2} ></div>
            </a>
            <div className="stick-progresso" ></div>
            <a href={link3}>
                <div className={div3} ></div>
            </a>

            <div className="stick-progresso" ></div>

            <a href={link4}>
                <div className={div4} ></div>
            </a>
        </div>
        
    )
}