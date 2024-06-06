import React, {useState} from 'react';
import {Col, Row} from 'antd';
import {useMediaQuery} from 'react-responsive';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './ImageGallery.module.scss';

const ImageGallery = ({images}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const isDesktop = useMediaQuery({minWidth: 1024});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1023});
    const isMobile = useMediaQuery({maxWidth: 767});

    const handleClick = (index) => {
        setSelectedImageIndex(index);
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    const handleModalClick = (event) => {
        if (event.target === event.currentTarget) {
            handleCloseModal();
        }
    };

    const getGalleryLayout = () => {
        if (isDesktop) {
            return (
                <Row gutter={[0, 0]}>
                    {images.slice(0, 6).map((image, index) => (
                        <Col span={4} key={index}>
                            <img
                                src={image}
                                alt={`Gallery ${index}`}
                                className={styles.image}
                                onClick={() => handleClick(index)}
                            />
                        </Col>
                    ))}
                </Row>
            );
        } else if (isTablet) {
            return (
                <Row gutter={[0, 0]}>
                    {images.slice(0, 6).map((image, index) => (
                        <Col span={8} key={index}>
                            <img
                                src={image}
                                alt={`Gallery ${index}`}
                                className={styles.image}
                                onClick={() => handleClick(index)}
                            />
                        </Col>
                    ))}
                </Row>
            );
        } else if (isMobile) {
            return (
                <Row gutter={[0, 0]}>
                    {images.slice(0, 6).map((image, index) => (
                        <Col span={12} key={index}>
                            <img
                                src={image}
                                alt={`Gallery ${index}`}
                                className={styles.image}
                                onClick={() => handleClick(index)}
                            />
                        </Col>
                    ))}
                </Row>
            );
        }
    };

    return (
        <div className="tw-mx-[-2rem]">
            {getGalleryLayout()}
            {isModalVisible && (
                <div className={styles.modal} onClick={handleModalClick}>
                    <div className={styles.modalContent}>
                        <Carousel
                            selectedItem={selectedImageIndex}
                            showThumbs={false}
                            infiniteLoop
                            useKeyboardArrows
                        >
                            {images.map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt={`Gallery ${index}`} className={styles.modalImage}/>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
