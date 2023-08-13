import Header from '../../Header/Header';

import styles from './Profile.module.css'
import styled from 'styled-components';

import Mapa from '..////..//Mapa/Mapa';

import { Link } from 'react-router-dom';


const Title = styled.h1`
    font-size: 3rem;
    margin-top: -10px;
    margin-left: 103px;
`;

const Title2 = styled.h1`
    font-size: 60px;
    margin-top: 100px;
    margin-left: 87px;
`;

const SubTitle = styled.h3`
    font-size: 2rem;
    margin-top: -28px;
    margin-left: 0px;
    color: #0a4d05f2;
`;

const MapUsar = styled.section`
    border: 2px solid black;
    margin-top: -40px;
    margin-bottom: 30px;
    margin-left: 30px;
`;

const DivDisplay= styled.section`
    display: flex;
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
                            Cidade: Passa-Quatro, Minas Gerais.
                            Bairro: Santa Terezinha, s/n. <br/>
                            Rua: Dr. Daniel de Carvalho.
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