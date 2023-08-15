import Layout from '../../Layout/layout';

import styles from './Home.module.css';
import styled from 'styled-components';

import ImagemServicos from './imagens/corte-cabelo-masculino-trabalho-profissional-02.webp';
import ImagemProdutos from './imagens/gel-cera-pierry.webp';
import ImagemContato from './imagens/map-1272165_1280.png';
import ImagemSobre from './imagens/833961_people_512x512.png';
import { Link } from 'react-router-dom';


const TitleImage=styled.h3`
   border-radius: 10%;
    font-family: serif;
    font-size: 4.0rem;
    text-align: center;
    margin: 0px;
    margin-bottom: 60px;
    padding-bottom: 50px;
    margin-right: 10%;
    color: #052346;

   @media (max-width: 320px){
      font-size: 46px;
      padding-right: 100px;
      padding: 0px;
      margin: 0px;
      margin-right: 30px;

    &:hover{
      font-size: 43px;
      color: #d22ffe;
   }
   }

   &:hover{
      font-size: 40px;
      color: #d22ffe;
   }
`;



function Home1(){
   return(
   <>
   <Layout>
      <section className={styles.home}>
         <div>
            <Link to={'../Servicos'}>
               <img src={ImagemServicos} alt='Foto de um homem com o cabelo cortado.'></img>
               <span>
                  <TitleImage>Serviços</TitleImage>
               </span>
            </Link>   
         </div>

         <div>
            <Link to={'../Produtos'}>
               <img src={ImagemProdutos} alt='Foto de vários potes de gel para cabelo masculino marca piery.'></img>
               <span>
                  <TitleImage>Produtos</TitleImage>
               </span>
            </Link>
         </div>
      </section>
      <section className={styles.home1}>
         <div>
            <Link to={'../Profile'}>
               <img src={ImagemContato} alt='Foto de um homem com o cabelo cortado.'></img>
               <span>
                  <TitleImage>Contato e Endereço</TitleImage>
               </span>
            </Link>
         </div>

         <div>
            <Link to={'../About'}>
               <img src={ImagemSobre} alt='Foto de um homem com o cabelo cortado.'></img>
               <span>
                  <TitleImage>Sobre</TitleImage>
               </span>
            </Link>
         </div>

      </section>
   </Layout>
        
   </>
   );
}
export default Home1;

