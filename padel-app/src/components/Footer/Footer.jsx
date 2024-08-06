import {FacebookOutlined, InstagramOutlined, YoutubeOutlined} from '@ant-design/icons';
import styles from './Footer.module.scss';
import logo from '../../assets/astra-logo.png';

const Footer = () => {
    return (
        <footer id="footer" className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3 style={{color: "black"}}>Contactos:</h3>
                    <p>Email: astrapadel.suporte@gmail.com</p>
                    <p>Telefone: +351 914 445 464</p>
                </div>
                <div className={styles.column}>
                    <h3 style={{color: "black"}}>Localização:</h3>
                    <p>Rua do Monte de Além nº11, Sobrosa</p>
                    <h3>Horário de Funcionamento</h3>
                    <p>De segunda-feira a sexta-feira das 9h até as 24h
                        Sábado, Domingo e Feriados das 8:30h as 20h</p>
                </div>
                <div className={styles.company}>
                    <img src={logo} alt="Logo" className={styles.logo}/>
                    <div className={styles.social}>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <InstagramOutlined/>
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <YoutubeOutlined/>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FacebookOutlined/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
