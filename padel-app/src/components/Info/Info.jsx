import {Col, Image, Row, Typography} from 'antd';
import styles from "../../containers/LandingPage/LandingPage.module.scss";
import padelIcon from "../../assets/images/padel-icon.png";
import barIcon from "../../assets/images/bar.png";
import restaurantIcon from "../../assets/images/restaurant.png";

const Info = () => {
    return (
        <Row>
            <Col xs={24} md={8} className="tw-bg-[#099cfe]">
                <div className="tw-px-6 tw-py-6">
                    <Image
                        width={'80px'}
                        preview={false}
                        src={padelIcon}
                    />
                    <Typography.Title level={2} style={{color: 'white'}}>Padel</Typography.Title>
                    <Typography.Text style={{color: 'white'}}>O nosso clube é o lugar perfeito para jogadores de todos os níveis, desde
                        iniciantes até profissionais. O clube conta com campos de elevada qualidade, iluminados e
                        mantidos em perfeitas condições para garantir o melhor desempenho e conforto durante os jogos.
                        Além disso, oferecemos uma variedade de serviços e comodidades, incluindo aulas com treinadores
                        experientes, torneios, eventos sociais e uma loja com os melhores equipamentos e acessórios de
                        padel.</Typography.Text>
                </div>
            </Col>
            <Col xs={24} md={8} className="tw-bg-[#2262d8]">
                <div className="tw-px-6 tw-py-6">
                    <Image
                        width={'80px'}
                        preview={false}
                        src={barIcon}
                    />
                    <Typography.Title level={2} style={{color: 'white'}}>Bar</Typography.Title>
                    <Typography.Text style={{color: 'white'}}>Um dos nossos principais objetivos é reforçar a ligação entre o Padel e os momentos
                        de lazer. O nosso clube tem ao dispor dos seus clientes um espaço totalmente pensado em momentos
                        de convívio com todas as comodidades para que passe grandes momentos com seus amigos. O nosso
                        bar está aberto das 06:00 às 02:00, equipado com uma grande televisão onde poderá ver os
                        melhores eventos desportivos. Para além disto teremos eventos como Happay Hour, sunsets e muito
                        mais...</Typography.Text>
                </div>
            </Col>
            <Col xs={24} md={8} className="tw-bg-[#09a6ff]">
                <div className="tw-px-6 tw-py-6">
                    <Image
                        width={'95px'}
                        preview={false}
                        src={restaurantIcon}
                    />
                    <Typography.Title level={2} style={{color: 'white'}}>Restaurante</Typography.Title>
                    <Typography.Text style={{color: 'white'}}>Os nossos jogadores têm ao seu dispor uma ampla variedade de refeições completas.
                        Recarregar as energias depois de um jogo intenso nunca foi tão fácil. Poderá contar ainda com
                        opções mais económicas como o pack Jogo + Refeição. Pensamos no seu conforto e por isso também
                        temos a opção de take-away para que não precise de se preocupar em cozinhar depois de jogos mais
                        longos.</Typography.Text>
                </div>
            </Col>
        </Row>
    );
};

export default Info;