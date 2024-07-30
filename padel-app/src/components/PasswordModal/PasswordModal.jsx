import { useState } from 'react';
import { Modal, Input, Button } from 'antd';
import Cookies from 'js-cookie';

// eslint-disable-next-line react/prop-types
const PasswordModal = ({ visible, onPasswordSubmit }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        if (password === 'your_password') {  // substitua 'your_password' pela senha desejada
            Cookies.set('access_token', 'your_password', { expires: 1 });  // guarda a senha no cookie por 1 dia
            onPasswordSubmit();
        } else {
            setError('Senha incorreta, tente novamente.');
        }
    };

    return (
        <Modal
            title="Senha Necessária"
            visible={visible}
            footer={null}
            closable={false}
        >
            <div className={"tw-flex tw-flex-col tw-items-center tw-justify-center"}>
                <Input
                    type="password"
                    placeholder="Digite a senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Button type="primary" className={"tw-mt-4"} onClick={handleSubmit}>
                    Submeter
                </Button>
            </div>
        </Modal>
    );
};

export default PasswordModal;
