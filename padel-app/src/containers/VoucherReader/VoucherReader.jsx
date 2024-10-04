import { Alert, Button } from 'antd';
import { CameraFilled } from '@ant-design/icons';
import { QrScanner } from '@yudiel/react-qr-scanner';
import styles from "./VoucherReader.module.scss";
import bannerImg from '../../assets/images/banner-img.jpg';
import { useRef, useState, useEffect } from 'react';
import logo from '../../assets/astra-logo.png';
import PageSeo from "../../components/SEO/PageSeo";
import PasswordModal from '../../components/PasswordModal/PasswordModal';
import Cookies from 'js-cookie';
import useMutateVoucher from "../../services/useMutateVoucher.js";

const VoucherReader = () => {
    const [stopDecoding, setStopDecoding] = useState(true);
    const [modeEnvironment, setModeEnvironment] = useState(true);
    const [message, setMessage] = useState(null);
    const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
    const ref = useRef();
    const { readVoucherMutate } = useMutateVoucher();

    useEffect(() => {
        const accessToken = Cookies.get('access_token');
        if (!accessToken || accessToken !== 'your_password') {
            setIsPasswordModalVisible(true);
        }
    }, []);

    const readTicket = async (result) => {
        setStopDecoding(!stopDecoding);

        ref.current = result;

        const isValidTicket = result.includes('voucher');

        try {
            if (isValidTicket) {
                let obj = {};
                result.split('&').forEach(function(part) {
                    let item = part.split('=');
                    obj[item[0]] = item[1];
                });
                await readVoucherMutate.mutateAsync({ voucherToken: obj.voucher });
                console.log('readVoucherMutate: ', readVoucherMutate.message, readVoucherMutate)
                setMessage({type: 'success', message: readVoucherMutate?.data ? readVoucherMutate.data : `Voucher validado!`});
            } else {
                setMessage({type: 'error', message: 'Código inválido!'});
            }
        } catch (e) {
            setMessage({type: 'error', message: e.response?.data || e.message});
        }
    };

    const pageTitle = `Leitor de Vouchers - AstraPadel`;
    const pageDescription = 'Página com o leitor de vouchers';

    const handlePasswordSubmit = () => {
        setIsPasswordModalVisible(false);
    };

    return (
        <>
            <PasswordModal visible={isPasswordModalVisible} onPasswordSubmit={handlePasswordSubmit} />
            {!isPasswordModalVisible && (
                <>
                    <PageSeo
                        title={pageTitle}
                        description={pageDescription}
                        imageUrl={bannerImg}
                        imageAlt="Imagem do banner do voucher"
                        siteUrl={"https://astrapadel.pt/voucher/reader"}
                    />
                    <div className={styles.message}>
                        <h5>Última leitura:</h5>
                        <div className={styles.alert}>
                            {message && <Alert message={message?.message} type={message?.type} showIcon closable />}
                        </div>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-center">
                        <img src={logo} className={styles.logo_icon} alt="iCliGo logo" />
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-center tw-mt-2">
                        <div className={styles.root}>
                            <div className={styles.headerImg}>
                                <div className={styles.mainImg}>
                                    <img alt={`banner image`} src={bannerImg} /></div>
                                <div className={styles.qrCodeImg}>
                                    <QrScanner
                                        constraints={{ facingMode: modeEnvironment ? 'environment' : 'user' }}
                                        onDecode={readTicket}
                                        onError={(error) => console.log(error?.message)}
                                        stopDecoding={stopDecoding}
                                    />
                                </div>
                            </div>
                            {stopDecoding && (
                                <div className={styles.activateCamara}>
                                    <Button
                                        size="large"
                                        style={{ width: 80, height: 80 }}
                                        shape="circle"
                                        type="primary"
                                        icon={<CameraFilled style={{ fontSize: 40 }} />}
                                        onClick={() => {
                                            setStopDecoding(!stopDecoding);
                                        }}
                                    />
                                </div>
                            )}
                            <div className={styles.info}>
                                <h4>
                                    <b>Voucher title</b>
                                </h4>
                                <span style={{ color: '#545454' }}
                                      className={'tw-mb-4 tw-text-xs tw-text-gray-500'}></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.actions}>
                        <Button
                            className="tw-my-2"
                            type="primary"
                            onClick={() => {
                                setModeEnvironment(!modeEnvironment);
                            }}>
                            Mudar para câmara {modeEnvironment ? 'frontal' : 'traseira'}
                        </Button>
                    </div>
                </>
            )}
        </>
    );
};

export default VoucherReader;
