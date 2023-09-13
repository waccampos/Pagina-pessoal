
import './style.scss'

export default function Skill({title,text,children}){
    return(
        <div className="container-skill">
            <div>
                {children}
            </div>
            <h3>
                {title}
            </h3>
            <div className="container-text">
                <p>
                    {text}
                </p>
            </div>
        </div>  
    )
}