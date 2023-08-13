import Header from '../../Header/Header';

import styles from './Profile.module.css'
import styled from 'styled-components';

import Mapa from '..////..//Mapa/Mapa';

import { Link } from 'react-router-dom';


const Title = styled.h1`
    font-size: 3rem;
    margin: 42px;

    @media (max-width: 320px){
        font-size: 6rem;
        margin: 45px;
    }
`;


const Title2 = styled.h1`
    font-size: 60px;
    margin: 91px;
    padding: 7px;

    @media (max-width: 320px){
        font-size: 115px;
    }
`;

const SubTitle = styled.h3`
    font-size: 2rem;
    margin-top: -28px;
    margin-left: 0px;
    color: #0a4d05f2;

    @media (max-width: 320px){
        font-size: 56px;
        margin-left: -76px;
    }    
`;

const MapUsar = styled.section`
    border: 2px solid black;
    margin-top: -98px;
    margin-bottom: 30px;
    margin-left: 90px;

    @media (max-width: 320px){
        border: 2px solid black;
        margin-top: -98px;
        margin-bottom: 65px;
        margin-left: 35px;
        width: 93%;
    }
`;
    
const DivDisplay= styled.section`
    display: flex;

    @media (max-width: 320px){
        display: flex;
        flex-direction: column;
    }
`;

function Profile(){
    return (
        <>
        <Header/>
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
        
        </>
    )
}

export default Profile;