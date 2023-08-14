import styles from './Mapa.css';

const Mapa= () => {
    return (
      <div>
        <iframe  title="This is a unique title"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.2233068972523!2d-44.97065192565561!3d-22.382937619357687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9dffa99a40dfbb%3A0xd32713cfe5a8ea81!2sSalao%20Do%20Nego!5e0!3m2!1spt-BR!2sbr!4v1691432336880!5m2!1spt-BR!2sbr"
          width={styles.largura}
          height={styles.altura}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };
  
  export default Mapa;