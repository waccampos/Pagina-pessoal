import { Children } from "react"
import "./style.scss"

export default function BubbleSocial({ children, url }){
    return(
        <a href={url} target="_blank">
        <div className="bubble">
            {children}
        </div>
        </a>
    )
}