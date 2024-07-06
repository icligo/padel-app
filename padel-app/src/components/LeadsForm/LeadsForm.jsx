import {useState} from 'react';
import {Button, Checkbox, Col, Form, Input, Modal, Row} from 'antd';
import useMutateClient from "../../services/useMutateClient";


const LeadsForm = () => {
    const {createClientMutate} = useMutateClient();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [submitMessage, setSubmitMessage] = useState({text: '', type: ''});

    const onFinish = async (values) => {
        try {
            await createClientMutate.mutateAsync({...values, voucherIsValid: true});
            setSubmitMessage({text: 'Formulário enviado com sucesso!', type: 'success'});
        } catch (e) {
            console.log('Error: ', e.response.data);
            setSubmitMessage({text: `Erro: ${e.response.data.message}`, type: 'error'});
        }
    };
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Form
                name="leads-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Row>
                    <Col span={24}>
                        <Form.Item
                            name="name"
                            label="Nome"
                            labelCol={{span: 24}}
                            wrapperCol={{
                                span: 24,
                            }}
                        >
                            <Input placeholder="Nome"/>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[8, 16]}>
                    <Col xs={24} sm={24} md={12}>
                        <Form.Item
                            name="email"
                            label="E-mail"
                            labelCol={{span: 24}}
                            wrapperCol={{
                                span: 24,
                            }}
                        >
                            <Input placeholder="E-mail"/>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                        <Form.Item
                            name="phone"
                            label="Telemóvel"
                            labelCol={{span: 24}}
                            wrapperCol={{
                                span: 24,
                            }}
                        >
                            <Input placeholder="Telemóvel"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Form.Item
                            name="termsAndConditions"
                            valuePropName="checked"
                            labelCol={{span: 24}}
                            wrapperCol={{
                                span: 24,
                            }}
                        >
                            <Checkbox>
                                Aceito os{' '}
                                <span
                                    onClick={showModal}
                                    style={{color: 'blue', textDecoration: 'underline', cursor: 'pointer'}}
                                >
                                    Termos e Condições
                                </span>
                            </Checkbox>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Enviar
                    </Button>
                </Form.Item>
                {submitMessage.text && (
                    <p style={{marginTop: 10, color: submitMessage.type === 'error' ? 'red' : null}}>
                        {submitMessage.text}
                    </p>
                )}
            </Form>
            <Modal
                title="Termos e Condições"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <p>
                    Aqui você pode adicionar o texto dos Termos e Condições. Este é um exemplo de como os termos podem
                    ser exibidos. Você pode incluir parágrafos, listas, links, e qualquer outro tipo de conteúdo que
                    seja necessário para os termos e condições do seu serviço.
                </p>
                <p>
                    É importante que os termos sejam claros e compreensíveis para todos os usuários, detalhando todas as
                    condições de uso, políticas de privacidade, responsabilidades e direitos dos usuários e da empresa.
                </p>
            </Modal>
        </>
    );
};

export default LeadsForm;
