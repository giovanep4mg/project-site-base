import Layout from '../../Layout/layout';

import styles from  './Produtos.module.css';
import styled from 'styled-components';

import Produto1 from './imagens/gel-cera-pierry.webp';
import Produto2 from './imagens/gel-bozano.jpg';
import Produto3 from './imagens/gel-cola-fox.webp';
import Produto4 from './imagens/pomada-fox-laranja.jpg';

const TitleImage=styled.h3`
   font-family: serif;
    font-size: 2rem;
    text-align: center;
    margin: -30px;
    margin-right: -25px;

    @media (max-width: 320px){
        font-size: 2.5rem;
    }

   
`;


function Produtos(){
    return (
        
    <Layout>
        
            
            <div className={styles.produtos}>
         
                <div>
                    <img src={Produto1} alt='Foto de gel cera, para cabelo masculino, da marca Pierry Lohan.'></img>
                    <div>
                        <TitleImage>Gel Cola Pierry Lohan</TitleImage>
                    </div>
                </div>
                <div>
                    <img src={Produto2} alt='Foto de gel para cabelo masculino da marca Bozzano.'></img>
                    <div>
                        <TitleImage>Gel Bozzano</TitleImage>
                    </div>
                </div>
            </div>
            <div className={styles.produtoCSS1}>
                <div>
                    <img src={Produto3}alt='Foto de gel para cabelo masculino, da marca Fox.'></img>
                    <div>
                        <TitleImage>Gel Cola Fox </TitleImage>
                    </div>
                </div>
                <div>
                    <img  src={Produto4}alt='Foto de gel para cableo masculino.'></img>
                    <div>
                        <TitleImage>Pomada Fox Laranja</TitleImage>
                    </div>
                </div>
            </div>
           
       </Layout>
    
    )
}
export default Produtos;