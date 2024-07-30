import { Typography } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import styles from './ContactInfo.module.scss';

const ContactInfo = () => {
    return (
        <div className={`${styles.contactInfo} tw-cursor-default tw-bg-black tw-py-1 tw-px-4 tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-center tw-gap-2 md:tw-gap-8 tw-text-xs tw-font-medium tw-text-center md:tw-text-left`}>
            <div className="tw-flex tw-items-center tw-justify-center tw-text-center mb-4 md:tw-mb-0">
                <PhoneOutlined className="tw-mr-1" />
                <Typography.Text className="tw-text-white">+351 123 456 789</Typography.Text>
            </div>
            <div className="tw-flex tw-items-center tw-justify-center tw-text-center mb-4 md:tw-mb-0">
                <MailOutlined className="tw-mr-1" />
                <Typography.Text className="tw-text-white">contato@astrapadel.com</Typography.Text>
            </div>
            <div className="tw-flex tw-items-center tw-justify-center tw-text-center mb-4 md:tw-mb-0">
                <EnvironmentOutlined className="tw-mr-1" />
                <Typography.Text className="tw-text-white">R. Várzea de Cima Nº149, 4620-513 Lousada</Typography.Text>
            </div>
        </div>
    );
};

export default ContactInfo;
