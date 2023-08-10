import styled from 'styled-components';

const FundoServico =styled.div`
    background-image: url('./src/assets/barbearia3.png');
    background-size: 150%;
    background-repeat: no-repeat;
    position: relative;
    margin: -29px;
    padding-top: 15px;
    padding-bottom: 117px;
    width: 102%;
`;

const TodaPg = styled.div`
    background-color: #7fffd457;
    margin: 15;
    padding: 10;
    font-size: 30px;
    text-align: center;
    text-decoration: underline;
`;

const AlinhaDiv = styled.div`
    display: inline-flex;
    margin: -10px;
    padding: 0px;
    justify-content: center;
    width: 80%;

`
const TamanhoDiv = styled.div`
    width: 48%;
    border: 6px solid #dec129;
    
`;
const Img = styled.img`
    width: -webkit-fill-available;
`;

const SubTitulo = styled.h2`
    color: black;
    background-color: #efef32
`;


function Servicos(){
    return (
        <FundoServico>
        <TodaPg>

            <h1>Serviços oferecidos:</h1>
            
            <AlinhaDiv>
                
                <TamanhoDiv>
                    <SubTitulo> Cortes de cabelo masculino </SubTitulo>
                    <Img src="./src/assets/corte-cabelo-masculino-trabalho-profissional-02.webp" 
                    alt="imagem de um homem, mostrando o corte de cabelo." />
                </TamanhoDiv>

                <TamanhoDiv>
                    <SubTitulo> Barba </SubTitulo>
                    <Img src="./src/assets/fazendo barba.jpg" 
                    alt="imagem de um homem fazendo a barba." />
                </TamanhoDiv>
            </AlinhaDiv>

        </TodaPg>
        </FundoServico>
    )
}
export default Servicos;