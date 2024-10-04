import {useEffect, useState} from 'react';
import {Button, Drawer} from 'antd';
import {FacebookOutlined, InstagramOutlined, MenuOutlined, YoutubeOutlined} from '@ant-design/icons';
// eslint-disable-next-line no-unused-vars
import {animateScroll as scroll, Link} from 'react-scroll';
import styles from './Navbar.module.scss';
import logo from '../../assets/astra-logo.png';

const Navbar = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [navbarBackground, setNavbarBackground] = useState('white');
    const [top, setTop] = useState(window.innerWidth <= 768 ? 72 : 24);

    const handleScroll = () => {
        if (window.scrollY > 60) {
            setNavbarBackground('#f5f5f5');
            setTop(0);
        } else {
            setNavbarBackground('#f5f5f5');
            if (window.innerWidth <= 768) {
                setTop(72);
            } else {
                setTop(24);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const closeDrawer = () => {
        setDrawerVisible(false);
    };

    return (
        <>
            <div className={styles.navbar} style={{backgroundColor: navbarBackground, top: top}}>
                <div className={styles.logo}>
                    <img src={logo} alt="Logo"/>
                </div>
                <div className={styles.menu}>
                    <Link to="about" smooth={true} duration={500} offset={-55}>Sobre</Link>
                    <Link to="schedule" smooth={true} duration={500} offset={-60}>Agenda</Link>
                    <Link to="footer" smooth={true} duration={500}>Contactos</Link>
                </div>
                <div className={styles.social}>
                    <a href="https://www.instagram.com/astrapadel_clube/?fbclid=IwZXh0bgNhZW0CMTEAAR0-xy5aomADuMqJuUuq31fTC60jrXUv_WthxBnZt8P6fhZX2dnh6NGNN2Q_aem_5rYO25y8fPP18XE6fEJ3pQ" target="_blank"
                       rel="noopener noreferrer"><InstagramOutlined/></a>
                    <a href="https://www.facebook.com/people/Astra-Padel/61562037321528/" target="_blank" rel="noopener noreferrer"><FacebookOutlined/></a>
                </div>
                <div className={styles.mobile}>
                    <Button type="black" style={{color: "black", borderColor: "black"}} icon={<MenuOutlined/>} onClick={showDrawer}/>
                </div>
                <Drawer
                    className="tw-z-[5000]"
                    title="Menu"
                    placement="right"
                    onClose={closeDrawer}
                    visible={drawerVisible}
                >
                    <div className="tw-flex tw-flex-col">
                        <Link to="about" smooth={true} duration={500} onClick={closeDrawer}>Sobre</Link>
                        <Link to="schedule" smooth={true} duration={500} onClick={closeDrawer}>Agenda</Link>
                        <Link to="footer" smooth={true} duration={500} onClick={closeDrawer}>Contactos</Link>
                    </div>
                    <div className={styles.drawerSocial}>
                        <a href="https://www.instagram.com" target="_blank"
                           rel="noopener noreferrer"><InstagramOutlined/></a>
                        <a href="https://www.youtube.com" target="_blank"
                           rel="noopener noreferrer"><YoutubeOutlined/></a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FacebookOutlined/></a>
                    </div>
                </Drawer>
            </div>
        </>
    );
};

export default Navbar;
