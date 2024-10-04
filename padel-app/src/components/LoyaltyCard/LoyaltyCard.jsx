import { useState } from 'react';
import { Button, Modal } from 'antd';
import styles from './LoyaltyCard.module.scss';
import useClient from "../../services/useClient.js";
import { ReloadOutlined } from '@ant-design/icons';

// eslint-disable-next-line react/prop-types
const LoyaltyCard = ({ voucher }) => {
    const {data, isLoading} = useClient(voucher);
    console.log('test data: ', data)

    if (isLoading) return <p>Loading...</p>;

    const [gamesPlayed, setGamesPlayed] = useState(data?.games);
    const [modalVisible, setModalVisible] = useState(false);


const handleRefresh = () => {
    location.reload();
    }

    const handlePlayGame = () => {
        if (gamesPlayed < 10) {
            setGamesPlayed(gamesPlayed + 1);
        }
        if (gamesPlayed + 1 === 10) {
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
                        {index < gamesPlayed && <div className={styles.tennisBall} />}
                    </div>
                ))}
            </div>
            <Button type="primary" onClick={handleRefresh}>
                Refresh
                <ReloadOutlined />
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
