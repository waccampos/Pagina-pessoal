import './style.scss'
export default function BotoesHeader({link1,link2,link3,link4}){
    return(
        <nav className='menu'>
            
            <a href="#" className='link-sessao'>
                Home 
            </a>

            <a href={link1} className='link-sessao'>
                Sobre mim
            </a>

            <a href={link2} className='link-sessao'>
                Skills
            </a>

            <a href={link3} className='link-sessao'>
                Portifolio
            </a>

            <a href={link4} className='link-sessao'>
                Contato
            </a>
        </nav>
    )
}