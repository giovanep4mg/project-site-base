import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

import styles from  './Servicos.module.css';
import styled from 'styled-components';

import Imagem1 from './imagens/corte-de-cabelo-masculino.jpg';
import Imagem2 from './imagens/homem-em-um-salao-de-barbearia-fazendo-o-corte-de-cabelo-e-barba.jpg'

const Title=styled.h1`
    padding-top: 70px;
    margin-top: 30;
    display: flex;
    font-size: 5rem;
    margin: 40px;
    text-decoration: none;
`;

const TitleImage=styled.h3`
   border-radius: 10%;
   font-family: serif;
   font-size: 3rem;
   text-align: center;
   margin: -15px;

`;

function Servicos(){
    return (
        <>
        <Header/>
            <div>
                <Title>Serviços oferecidos:</Title>

                <div className={styles.servicos}>
                    <div>
                        <div>
                            <TitleImage> Cortes de cabelo masculino </TitleImage>
                        </div>
                        <div>
                            <img src={Imagem1} alt="imagem de um homem, mostrando o corte de cabelo." />
                        </div>    
                    </div>
                    <div>
                    <div>
                            <TitleImage> Barba </TitleImage>
                        </div>
                        <div>
                            <img src={Imagem2} alt="imagem de um homem, mostrando o corte de cabelo." />
                        </div>    
                    </div>
                </div>

            </div>
        <Footer/>
        </>
    )
}
export default Servicos;