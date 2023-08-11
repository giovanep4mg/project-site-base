import Mapa from '..////..//Mapa/Mapa';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const TodaPag = styled.div`
    text-align: center;
    font-family: sans-serif;
    font-size: 2rem;
    
    display: inline-flex;
    width: 100%;
`;

const Div1 = styled.div`
    border: 1px solid black;
    width:50%;
    padding-top: 0.5rem;
`;

const Div2 = styled.div`
    border: 1px solid black;
    width: 50%;
`;



function Profile(){
    return (
    <TodaPag>
        <Div1>
            <h1>Endereço:</h1>
            <h3>
                <p>
                    Cidade: Passa-Quatro, Minas Gerais.
                    Bairro: Santa Terezinha, s/n.
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
            </h3>
        </Div1>
        <Div2>
            <h2>Localização do salão:</h2>
            
                <Mapa></Mapa>
           
        </Div2>  
    </TodaPag>
    )
}

export default Profile;