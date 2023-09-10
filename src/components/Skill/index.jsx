import './style.scss'

export default function Skill({logo,title,text}){
    return(
        <div className="container-skill">
            <div>
                {logo}
            </div>
            <h3>
                {title}
            </h3>
            <p>
                {text}
            </p>
            
        </div>  
    )
}