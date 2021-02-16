import React from "react";
import DoisP from "../../assets/imagens/DoisP-tudoresolvido.jpeg";
import Abri from "../../assets/imagens/abri_minha_empresa_patrocinio.png";
import Otimize from "../../assets/imagens/organize.png";

import Patrocinio from './Patrocinio';

const Apoio = () => {
    return (
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <Patrocinio image={DoisP} style={{margin:20}} description="Dois P.com"></Patrocinio>                   
            
            <Patrocinio image={Abri} style={{margin:20}} description="abri minha empresa . com"></Patrocinio>               
                                          
            <Patrocinio image={Otimize} style={{margin:20}} description="Otimeze seu negócio"></Patrocinio>               
                     
        </div>
    )
}

export default Apoio;