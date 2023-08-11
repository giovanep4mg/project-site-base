import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

import styles from  './Servicos.module.css';
import styled from 'styled-components';

import Imagem1 from './imagens/corte-cabelo-masculino-trabalho-profissional-02.webp';

const TitleImage=styled.h3`
   border-radius: 10%;
   font-family: serif;
   font-size: 2rem;
   text-align: center;
   margin: -60px;

   
`;

function Servicos(){
    return (
        <>
        <Header/>
            <div className={styles.servicos}>
    
                <h1>Serviços oferecidos:</h1>
                <div>
                    <div>
                        <img src={Imagem1} 
                        alt="imagem de um homem, mostrando o corte de cabelo." />
                        <div>
                            <TitleImage> Cortes de cabelo masculino </TitleImage>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={Imagem1} 
                    alt="imagem de um homem fazendo a barba." />
                    <div>
                        <TitleImage> Barba </TitleImage>
                    </div>
                </div>

            </div>

        
        <Footer/>
        </>
    )
}
export default Servicos;