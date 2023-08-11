import styled from 'styled-components';

const TitleSobre = styled.h1`
    color: blue;
    text-decoration: underline;
`;


function About(){
    return (
        <div className="pages">
            <div>
                <TitleSobre>Informações sobre o site</TitleSobre>
                <h3>
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
                </h3>
            </div>
        </div>
    )
}
export default  About;