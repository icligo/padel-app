import FeatureCard from "./FeatureCard/FeatureCard.jsx";
import { MdSportsTennis, MdOutlineRestaurant, MdSportsBar } from "react-icons/md";
import { GiTennisCourt } from "react-icons/gi";

import styles from "./Features.module.scss";
const Features = () => {
    return (
        <div className={styles.root}>
            <div className={styles.features}>
                <FeatureCard
                    icon={<GiTennisCourt />}
                    title="Padel"
                    description="O nosso clube é o lugar perfeito para jogadores de todos os níveis, desde iniciantes até profissionais. O clube conta com campos de elevada qualidade, iluminados e mantidos em perfeitas condições para garantir o melhor desempenho e conforto durante os jogos. Além disso, oferecemos uma variedade de serviços e comodidades, incluindo aulas, torneios, eventos sociais e muito mais..."
                />
                <FeatureCard
                    icon={<MdSportsBar />}
                    title="Snack-bar"
                    description="O nosso clube tem ao dispor dos seus clientes um espaço totalmente pensado em momentos de convívio com todas as comodidades para que passe grandes momentos com os seus amigos. O nosso snack-bar está aberto das 07:30 às 02:00, aqui poderá usufruir de uma refeição, beber um copo com os amigos e passar tempo de qualidade. Para além disto teremos eventos como Happy Hour e muito mais..."
                />
                <FeatureCard
                    icon={<MdOutlineRestaurant />}
                    title="Take-away"
                    description="Os nossos jogadores têm ao seu dispor uma ampla variedade de refeições completas. Recarregar as energias depois de um jogo intenso nunca foi tão fácil. Poderá contar ainda com opções mais económicas como o pack Jogo + Refeição. Pensamos no seu conforto e por isso também temos a opção de take-away para que não precise de se preocupar em cozinhar depois de jogos mais longos."
                />
            </div>
        </div>
    );
};

export default Features;