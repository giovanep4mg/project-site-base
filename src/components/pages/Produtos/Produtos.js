import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

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
    margin: -55px;
    margin-right: 35px;

    @media (max-width: 320px){
        font-size: 2.5rem;
    }

   
`;

const DivS =styled.div`
    margin-top: 111px;
    display: flex;
    width: 60%;
    align-items: center;
    img{
        width: 75%;
        margin-left: 130px;
    }
    h3{
        margin-right: -174px;
        margin-top: 0px;
        margin-bottom: 65px;
        padding-bottom: 40px;
    }
    @media (max-width: 320px) {
        /* Estilos para telas menores que 768px de largura */
        width: 100%;
        flex-direction: column;
        padding-bottom: 15rem;

        img {
            width: 100%;
            margin-left: 0;
            margin-bottom: 20px;
        }

        h3 {
            margin-right: 0;
            margin-bottom: 20px;
            padding-bottom: 20px;
            font-size: 28px;
        }
    }
`;

function Produtos(){
    return (
        
    <>
        <Header/>
            
            <div className={styles.produtos}>
         
                <div>
                    <img src={Produto1} alt='Foto de gel cera, para cabelo masculino, da marca Pierry Lohan.'></img>
                    <div>
                        <TitleImage>Gel Cola Pierry Lohan</TitleImage>
                    </div>
                </div>
                <div>
                    <img src={Produto2}alt='Foto de gel para cabelo masculino da marca Bozzano.'></img>
                    <div>
                        <TitleImage>Gel Bozzano</TitleImage>
                    </div>
                </div>
            </div>
            <DivS>
                <div>
                    <img src={Produto3}alt='Foto de gel para cabelo masculino, da marca Fox.'></img>
                    <div>
                        <TitleImage>Gel Cola Fox </TitleImage>
                    </div>
                </div>
                <div>
                    <img src={Produto4}alt='Foto de gel para cableo masculino.'></img>
                    <div>
                        <TitleImage>Pomada Fox Laranja</TitleImage>
                    </div>
                </div>
            </DivS>
           
        <Footer/> 
    </>
    )
}
export default Produtos;