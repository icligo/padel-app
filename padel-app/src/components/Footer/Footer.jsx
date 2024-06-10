import React from 'react';
import {FacebookOutlined, InstagramOutlined, YoutubeOutlined} from '@ant-design/icons';
import styles from './Footer.module.scss';
import logo from '../../assets/astra-logo.png';

const Footer = () => {
    return (
        <footer id="footer" className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3 style={{color: "white"}}>Contactos:</h3>
                    <p>Email: contato@astrapadel.com</p>
                    <p>Telefone: +351 123 456 789</p>
                </div>
                <div className={styles.column}>
                    <h3 style={{color: "white"}}>Localização:</h3>
                    <p>R. Várzea de Cima Nº149, 4620-513 Lousada</p>
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
