import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

import styles from './Home.module.css';
import styled from 'styled-components';

import ImagemServicos from './imagens/corte-cabelo-masculino-trabalho-profissional-02.webp';
import ImagemProdutos from './imagens/gel-cera-pierry.webp';
import ImagemContato from './imagens/map-1272165_1280.png';
import ImagemSobre from './imagens/833961_people_512x512.png';

const TitleImage=styled.h3`
   border-radius: 10%;
   font-family: serif;
   font-size: 4.5rem;
   text-align: center;
   margin: -60px;

   &{
      font-size: 5.5rem;
   }
`;

function Home1(){
  return(
    <>
        <Header/>
          <div className={styles.home}>
         
            <div>
               <img src={ImagemServicos}
                  alt='Foto de um homem com o cabelo cortado.'>
               </img>
               <div>
                  <TitleImage>Serviços</TitleImage>
               </div>
            </div>

            <div>
               <img src={ImagemProdutos}
                  alt='Foto de vários potes de gel para cabelo masculino marca piery.'>
               </img>
               <div>
                  <TitleImage>Produtos</TitleImage>
               </div>
            </div>
         </div>
         <div className={styles.home}>
            <div>
               <img src={ImagemContato}
                  alt='Foto de um homem com o cabelo cortado.'>
               </img>
               <div>
                  <TitleImage>Contatos</TitleImage>
               </div>
            </div>

            <div>
               <img src={ImagemSobre}
                  alt='Foto de um homem com o cabelo cortado.'>
               </img>
               <div>
                  <TitleImage>Sobre</TitleImage>
               </div>
            </div>

          </div>
            

        <Footer/>
    </>
  );
}
export default Home1;

