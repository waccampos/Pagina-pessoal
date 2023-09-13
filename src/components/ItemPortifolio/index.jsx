import "./style.scss"
import "../TitleSessao"


export default function ItemPortifolio({title,text,link,children}){
    return(
        <a href={link}>
            <div className="container-itemportifolio">
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="container-language">
                    <p>linguagens:</p>{children}
                </div>
            </div>
        </a>
    )
}