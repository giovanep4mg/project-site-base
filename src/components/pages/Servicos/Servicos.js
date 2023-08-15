import Layout from '../../Layout/layout';

import styles from  './Servicos.module.css';
import styled from 'styled-components';

import Imagem1 from './imagens/corte-de-cabelo-masculino.jpg';
import Imagem2 from './imagens/jovem-barbudo-fazendo-a-barba-com-uma-lamina-de-barbear-por-cabeleireiro-em-barbearia_1153-9488.avif'

const Title=styled.h1`
    font-size: 56px;
    margin: 50px;
    text-decoration: none;
    margin-top: 135px;
`;

const TitleImage=styled.h3`
   border-radius: 10%;
   font-family: serif;
   font-size: 3rem;
   text-align: center;
   margin: -15px;

   @media (max-width: 320px){
    font-size: 30px;
    text-align: center;
   }

`;

function Servicos(){
    return (
        <Layout>
        
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
        
        </Layout>
    )
}
export default Servicos;