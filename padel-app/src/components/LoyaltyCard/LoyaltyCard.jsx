import {useState} from 'react';
import {Button, Modal} from 'antd';
import styles from './LoyaltyCard.module.scss';
import useClient from "../../services/useClient.js";

// eslint-disable-next-line react/prop-types
const LoyaltyCard = ({voucher}) => {
    const [gamesPlayed, setGamesPlayed] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    const {data} = useClient(voucher);

    console.log('test voucher: ', voucher);
    console.log('test data loyalty: ', data);

    const handlePlayGame = () => {
        if (data.voucherGames < 10 && !data.freeGame) {
            setGamesPlayed(gamesPlayed + 1);
        } else {
            setModalVisible(true);
        }
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div className={styles.cardContainer}>
            <div className={styles.circlesContainer}>
                {[...Array(10)].map((_, index) => (
                    <div key={index} className={styles.circle}>
                        {index < data.voucherGames && <div className={styles.tennisBall}/>}
                    </div>
                ))}
            </div>
            <Button type="primary" onClick={handlePlayGame}>
                Jogar Jogo
            </Button>
            <Modal
                title="Parabéns!"
                visible={modalVisible}
                onOk={closeModal}
                onCancel={closeModal}
            >
                <p>Você ganhou um jogo grátis!</p>
            </Modal>
        </div>
    );
};

export default LoyaltyCard;
