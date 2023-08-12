
import Header from '../../Header/Header';

import styles from './Home.module.css';
import styled from 'styled-components';

import ImageFundo from './imagens/barbearia3.png';
import ImagemServicos from './imagens/corte-cabelo-masculino-trabalho-profissional-02.webp';
import ImagemProdutos from './imagens/gel-cera-pierry.webp';
import ImagemContato from './imagens/map-1272165_1280.png';
import ImagemSobre from './imagens/833961_people_512x512.png';
import { Link } from 'react-router-dom';

const TitleImage=styled.h3`
   border-radius: 10%;
   font-family: serif;
   font-size: 4.5rem;
   text-align: center;
   margin: -80px;
   margin-bottom: 60px;
   padding-bottom: 50px;
   margin-right: 10%;
   color: blue;

   &:hover{
      font-size: 6.5rem;
      color: black;
   }
`;

const ImageF= styled.body`
   background-image: url(${ImageFundo});
   background-size: 100%;
   background-attachment: fixed;
   background-color: rgba(255, 255, 255, 0.5);
`;


function Home1(){
  return(
    <>
        <Header/>
        <ImageF>
          <section className={styles.home}>
         
            <div>
               <Link to={'../Servicos'}>
                  <img src={ImagemServicos} alt='Foto de um homem com o cabelo cortado.'></img>
                  <div>
                     <TitleImage>Serviços</TitleImage>
                  </div>
               </Link>   
            </div>

            <div>
               <Link to={'../Produtos'}>
                  <img src={ImagemProdutos} alt='Foto de vários potes de gel para cabelo masculino marca piery.'></img>
                  <div>
                     <TitleImage>Produtos</TitleImage>
                  </div>
               </Link>
            </div>
         </section>
         <section className={styles.home}>
            <div>
               <Link to={'../Profile'}>
                  <img src={ImagemContato} alt='Foto de um homem com o cabelo cortado.'></img>
                  <div>
                     <TitleImage>Contato e Endereço</TitleImage>
                  </div>
               </Link>
            </div>

            <div>
               <Link to={'../About'}>
                  <img src={ImagemSobre} alt='Foto de um homem com o cabelo cortado.'></img>
                  <div>
                     <TitleImage>Sobre</TitleImage>
                  </div>
               </Link>
            </div>

          </section>
          </ImageF>      

        
    </>
  );
}
export default Home1;

