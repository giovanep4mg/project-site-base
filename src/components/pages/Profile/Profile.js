import Layout from '../../Layout/layout';

import styles from './Profile.module.css'
import styled from 'styled-components';

import Mapa from '..////..//Mapa/Mapa';

import { Link } from 'react-router-dom';


const Title = styled.h1`
    font-size: 3.5rem;
    margin: 40px;

    @media (max-width: 320px){
        font-size: 40px;
        margin-left: -30px;
    }
`;


const Title2 = styled.h1`
    font-size: 60px;
    margin: 91px;
    padding: 7px;

    @media (max-width: 320px){
        font-size: 37px;
        text-align: center;
        margin-left: -16px;
        margin-top: 0px;
        margin-bottom: 120px;
    }
`;

const SubTitle = styled.h3`
    font-size: 2rem;
    margin-top: -28px;
    margin-left: 0px;
    color: #0a4d05f2;

    @media (max-width: 320px){
        font-size: 25px;
        margin-left: -70px;
    }    
`;

const MapUsar = styled.section`
    border: 2px solid black;
    margin-top: -98px;
    margin-bottom: 30px;
    margin-left: 29px;
    width: 85%;
    height: 40%;

    @media (max-width: 320px){
        border: 2px solid black;
        margin-top: -107px;
        margin-bottom: 65px;
        margin-left: 0px;
    }
`;
    
const DivDisplay= styled.section`
    display: flex;
    margin-top: 30px;

    @media (max-width: 320px){
        display: flex;
        flex-direction: column;
    }
`;

function Profile(){
    return (
        <Layout>
        
        <DivDisplay>
            <section className={styles.profile}>
            
                
                <Title>Endereço:</Title>
               
                    <SubTitle>
                        <p>
                            Cidade: Passa-Quatro, Minas Gerais. <br/>
                            Bairro: Santa Terezinha, s/n. <br/>
                            Rua: Dr. Daniel de Carvalho. <br/>
                        </p>
                        <p>
                            Telefone para contato: <br/>
                            (xx) x xxxx-xxxx
                        </p>
                        <p>
                            <span>Rede sociais:</span> <br/>
                            <br/>
                            <Link to="">Facebook</Link>  <br/>
                            <br/>
                            <Link to="">Instagram</Link>  <br/>
                            <br/>
                            <Link to="" type="email">Email</Link>  <br/>
                            <br/>
                        </p>
                    </SubTitle>
                    
            </section> 

            <section className={styles.profile1}>

                <div>
                    <Title2>Localização do salão:</Title2>

                        <MapUsar>
                            <Mapa></Mapa> 
                        </MapUsar>

                </div>

            </section>
        </DivDisplay>
        
        </Layout>
    )
}

export default Profile;