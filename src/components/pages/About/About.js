import Header from '../../Header/Header';

import styles from './About.module.css';
import styled from 'styled-components';

const TitleSobre = styled.h1`
    color: #9c330ce6;
    text-decoration: underline;
    font-size: 5rem;
`;

const Description = styled.h3`
    color: #1b0603d6;
    text-decoration: none;
    font-size: 2.5rem;
`;


function About(){
    return (
        <>
        <Header/>
        <div className={styles.about}>
            <div>
                <TitleSobre>Informações sobre o site</TitleSobre>
                <Description>
                    <p>
                        Salão do Nego, fundado em 1976 pelo Giovani...<br/>
                        <br/>
                        Essa página foi criada para realizar um exercício do curso. <br/>
                        <br/>
                        O salão realmente existe, mas a idéia era apenas  cria um site simples, <br/>
                        usando o React.js, Styled-Components, e que tenha 5 Páginas.
                    </p>
                    <p>
                        Obrigado pela sua visita e volte sempre!<br/>
                    </p>
                </Description>
            </div>
        </div>

        </>
    );
}
export default  About;