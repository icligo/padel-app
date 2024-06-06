import {useEffect, useState} from 'react';
import {Button, Image, Typography} from 'antd';
import {Link as ScrollLink} from 'react-scroll';
import bannerImg from '../../assets/images/banner-img.jpg';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LeadsForm from "../../components/LeadsForm/LeadsForm";
import styles from './LandingPage.module.scss';
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import ImageGallery from "../../components/ImageGallery/ImageGallery";

const LandingPage = () => {
    const [contactInfoVisible, setContactInfoVisible] = useState(true);
    const images = [
        'https://www.bnlitalymajorpremierpadel.com/media_contents/news/146413/main/20220522_Campo_padel_MONDO_superficie.jpg',
        'https://cdn.record.pt/images/2023-12/img_476x268$2023_12_08_08_14_23_2198719.jpg',
        'https://agrupamentoidanha.com/wp-content/uploads/2023/03/p3.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR8RbRTc5EL3XV5mcWahmyTwRYm87O3xV7rQ&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSBQ8yrlc_dSgUJe3BcoNFZnvt-julIPF02oVOzJuVlL9KVgIw8rGsee9vkRr96d9xcSY&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLMPH7DsZSPjzm1IwuKv4lVNfuKqcWC2RIg&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqax2mB1rS0_MuvHWJsJU9qwyGtOsUfzYgLA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7fcg8ni4G0Tme3NsPKIyzOJdlvaJrlhvd-w&s',
        'https://openpadelstore.com/wp-content/uploads/2022/06/cabecera.jpg',
    ];

    const handleScroll = () => {
        if (window.scrollY > 60) {
            setContactInfoVisible(false);
        } else {
            setContactInfoVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.root}>
            <div className={`${styles.contactInfo} ${!contactInfoVisible ? styles.hidden : ''}`}>
                <ContactInfo/>
            </div>
            <Navbar/>
            <div className={`tw-relative ${styles.banner}`}>
                <Image
                    className={`${styles.bannerImage}`}
                    height={"80vh"}
                    width={"100vw"}
                    preview={false}
                    src={bannerImg}
                />
                <div
                    className={`tw-absolute tw-text-white tw-text-start tw-grid tw-grid-cols-1 md:tw-grid-cols-6 tw-gap-6 tw-bottom-16 md:tw-bottom-12 tw-px-4 md:tw-px-0`}>
                    <Typography.Title level={1} className="tw-mt-4 md:tw-ml-[2rem] md:tw-col-span-2"
                                      style={{color: "white"}}>
                        TREINE NO SEU TEMPO.
                    </Typography.Title>
                    <div
                        className={`tw-flex tw-justify-end md:tw-col-span-2 md:tw-col-end-7 md:tw-mr-[2rem] tw-items-end tw-pb-4`}>
                        <ScrollLink to="schedule" smooth={true} duration={500} offset={-40}>
                            <Button className="tw-bg-transparent">Faça parte da nossa academia!</Button>
                        </ScrollLink>
                    </div>
                </div>
            </div>
            <div id="about"
                 className={`tw-bg-black tw-text-white tw-grid tw-grid-cols-1 md:tw-grid-cols-6 tw-gap-6 tw-text-start tw-py-12 tw-px-[2rem] tw-mt-[-10px] tw-mx-[-2rem]`}>
                <Typography.Title level={1} className="tw-mb-4 tw-mt-4 md:tw-col-span-3" style={{color: "white"}}>
                    SOMOS UMA ACADEMIA DE ALTA QUALIDADE, DEDICADA À SAÚDE E BEM-ESTAR ACESSÍVEIS.
                </Typography.Title>
                <Typography.Text className="tw-mb-4 tw-mt-4 md:tw-col-span-3" style={{color: "white"}}>
                    A Klipsan Fitness é uma academia para você frequentar do seu jeito, e fazer o seu melhor. Ao
                    associar-se, você terá acesso a uma programação digital e presencial na academia para ajudá-lo a
                    atingir seus objetivos de condicionamento físico. Veja abaixo todos os serviços oferecidos pela
                    academia.
                </Typography.Text>
            </div>
            <div id="schedule"
                 className={`tw-grid tw-grid-cols-1 md:tw-grid-cols-6 tw-gap-6 tw-text-start tw-py-8 tw-px-4 md:tw-px-0`}>
                <div className="tw-mb-4 tw-mt-4 md:tw-col-span-3">
                    <Typography.Title level={1} className="tw-mt-0">
                        Agendar visita
                    </Typography.Title>
                    <Typography.Text>
                        Faça um teste gratuito de 30 minutos em qualquer um dos nossos estabelecimentos para decidir se
                        a Klipsan é a academia certa para você. Você poderá experimentar os equipamentos, observar as
                        aulas e receber respostas diretas para todas as suas perguntas.
                    </Typography.Text>
                </div>
                <div className="tw-mb-4 tw-mt-4 md:tw-col-span-3">
                    <LeadsForm/>
                </div>
            </div>
            <ImageGallery images={images} />
            <Footer/>
        </div>
    );
};

export default LandingPage;
