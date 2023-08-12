import Header from '../../Header/Header';

import styles from './Profile.module.css'
import styled from 'styled-components';

import Mapa from '..////..//Mapa/Mapa';

import { Link } from 'react-router-dom';


const Title = styled.h1`
    font-size: 5rem;
    margin-top: -10px;
    margin-left: 30px;
`;

const SubTitle = styled.h3`
    font-size: 2rem;
    margin-top: -75px;
    margin-left: 30px;
`;

const MapUsar = styled.section`
    border: 2px solid black;
    margin-top: -75px;
    margin-bottom: 30px;
    margin-left: 30px;
`;

function Profile(){
    return (
        <>
        <Header/>
            <section className={styles.profile}>
                <div>
                <Title>Endereço:</Title>
               
                    <SubTitle>
                    <p>
                        Cidade: Passa-Quatro, Minas Gerais.
                        Bairro: Santa Terezinha, s/n. <br/>
                        Rua: Dr. Daniel de Carvalho.
                    </p>
                    <p>
                        Telefone para contato: <br/>
                        (xx) x xxxx-xxxx
                    </p>
                    <p>
                        Rede sociais: <br/>
                        <br/>
                        <Link to="">Facebook</Link>  <br/>
                        <br/>
                        <Link to="">Instagram</Link>  <br/>
                        <br/>
                        <Link to="" type="email">Email</Link>  <br/>
                        <br/>
                    </p>
                    </SubTitle>
                    </div>
            </section> 

            <section className={styles.profile1}>

                <div>
                <Title>Localização do salão:</Title>

                    <MapUsar>
                        <Mapa></Mapa> 
                    </MapUsar>

                </div>

            </section>

        
        </>
    )
}

export default Profile;