import './style.scss'

export default function TitleSessao({title,id}){
    return(
        <section className='TitleSessao' id={id}>
            <h2>
                {title}
            </h2>
        </section>
    )
}