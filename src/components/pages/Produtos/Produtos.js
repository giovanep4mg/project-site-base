import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

import styles from  './Produtos.module.css';
import styled from 'styled-components';

import Produto1 from './imagens/gel-cera-pierry.webp';


const TitleImage=styled.h3`
   border-radius: 10%;
   font-family: serif;
   font-size: 2rem;
   text-align: center;
   margin: -60px;

   
`;



function Produtos(){
    return (
        
        <>
            <Header/>
            <div className={styles.produtos}>
         
            <div>
                <img src={Produto1}
                    alt='Foto de gel para cableo masculino.'>
                </img>
                <div>
                    <TitleImage>Gel Cola Pierry Lohan</TitleImage>
                </div>
            </div>
            <div>
                <img src={Produto1}
                    alt='Foto de gel para cableo masculino.'>
                </img>
                <div>
                    <TitleImage>Gel Cola Pierry Lohan</TitleImage>
                </div>
            </div>
            </div>
            <div className={styles.produtos}>
            <div>
                <img src={Produto1}
                    alt='Foto de gel para cableo masculino.'>
                </img>
                <div>
                    <TitleImage>Gel Cola Pierry Lohan</TitleImage>
                </div>
            </div>
            <div>
                <img src={Produto1}
                    alt='Foto de gel para cableo masculino.'>
                </img>
                <div>
                    <TitleImage>Gel Cola Pierry Lohan</TitleImage>
                </div>
            </div>

         
       </div>

            <Footer/>
        </>
    )
}
export default Produtos;