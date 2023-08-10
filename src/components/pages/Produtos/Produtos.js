
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';




export default function Produtos(){
    return (
        
        <>
            <Header/>
            <div>
            <div className='imagem-produtos'>
                <div className="imagem-prod">
                    <img src="../src/assets/gel-bozano.jpg"
                    alt="imagem do produto gel para cabelo masculino da marca Bozano." />
                    <h3>Gel Bozano</h3>
                </div>
                <div className="imagem-prod">
                    <img src="../src/assets/pomada-fox-laranja.jpg"
                    alt="imagem do produto pomada para cabelo masculino da marca Fox." />
                    <h3>Pomada Fox-laranja</h3>
                </div>
                <div className="imagem-prod">
                    <img src="../src/assets/gel-cera-pierry.webp"
                    alt="imagem do produto gel cera, para cabelo masculino da marca pierry." />
                    <h3>Gel Cera Pierry</h3>
                </div>
            </div>
            <div className='imagem-produtos'>
                <div className="imagem-prod">
                    <img src="../src/assets/gel-cola-fox.webp"
                    alt="imagem do produto gel cola, para cabelo masculino da marca Fox." />
                    <h3>Gel Cola Fox</h3>
                </div>
                <div className="imagem-prod">
                    <img src="../src/assets/pomada-fox-laranja.jpg"
                    alt="imagem do produto pomada, para cabelo masculino da marca Fox." />
                    <h3>Pomada Fox-laranja</h3>
                </div>
                <div className="imagem-prod">
                    <img src="../src/assets/gel-bozano.jpg"
                    alt="imagem do produto gel para cabelo masculino da marca Bonzano." />
                    <h3>Gel Bozano</h3>
                </div>
            </div>
            </div>

            <Footer/>
        </>
    )
}