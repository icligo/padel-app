import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import styles from './LoyaltyCard.module.scss';

const LoyaltyCard = () => {
    const [gamesPlayed, setGamesPlayed] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

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
