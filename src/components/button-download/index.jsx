import './style.scss'
import { AiOutlineDownload } from 'react-icons/ai';

import documento from '../../assets/documento.pdf';

export default function ButtonDownload(){
    const DownloadCurriculo = () => {

        console.log("baixando ...")
        const link = document.createElement('a');
        link.href = documento;
        link.download = 'documento.pdf';
        link.click();
        console.log("baixado com sucesso")
      };

    return(
        <>
        <button type="button" onClick={DownloadCurriculo}>
            <p>baixe meu cv</p> <AiOutlineDownload size={24}/>
        </button>
        </>
    )
}