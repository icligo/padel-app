import { useState } from 'react';
import { Button, Checkbox, Col, Form, Input, Modal, Row, message } from 'antd';
import useMutateClient from "../../services/useMutateClient";
import ReactPixel from 'react-facebook-pixel';

const LeadsForm = () => {
    const { createClientMutate } = useMutateClient();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onFinish = async (values) => {
        try {
            await createClientMutate.mutateAsync({ ...values, voucherIsValid: true });
            message.success('Formulário enviado com sucesso!');

            ReactPixel.track('Lead', {
                content_name: 'Leads Form Submission',
                content_category: 'Lead Generation'
            });
        } catch (e) {
            console.log('Error: ', e.response.data);
            message.error(`${e.response.data}`);
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
                            labelCol={{ span: 24 }}
                            wrapperCol={{
                                span: 24,
                            }}
                        >
                            <Input placeholder="Nome" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[8, 16]}>
                    <Col xs={24} sm={24} md={12}>
                        <Form.Item
                            name="email"
                            label="E-mail"
                            labelCol={{ span: 24 }}
                            wrapperCol={{
                                span: 24,
                            }}
                        >
                            <Input placeholder="E-mail" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                        <Form.Item
                            name="phone"
                            label="Telemóvel"
                            labelCol={{ span: 24 }}
                            wrapperCol={{
                                span: 24,
                            }}
                        >
                            <Input placeholder="Telemóvel" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Form.Item
                            name="termsAndConditions"
                            valuePropName="checked"
                            labelCol={{ span: 24 }}
                            wrapperCol={{
                                span: 24,
                            }}
                        >
                            <Checkbox>
                                Aceito os{' '}
                                <span
                                    onClick={showModal}
                                    style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
                                >
                                    Termos e Condições
                                </span>
                            </Checkbox>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={createClientMutate.isLoading}>
                        Enviar
                    </Button>
                </Form.Item>
            </Form>
            <Modal
                title="Termos e Condições"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <p>
                Ao subscrever a newsletter do AstraPadel, você concorda com os seguintes termos e condições:
                </p>
                <p>
                <h4>Dados Pessoais</h4>
                Ao inscrever-se, você fornece voluntariamente suas informações pessoais (nome, endereço de e-mail e outros dados relevantes). Essas informações serão usadas exclusivamente para o envio de comunicações relacionadas ao AstraPadel, como notícias, atualizações, promoções e descontos.
                </p>
                <p>
                <h4>Descontos Exclusivos</h4>
                <p>
                Como assinante da nossa newsletter, você terá acesso a ofertas e descontos exclusivos. Esses descontos podem estar sujeitos a termos específicos e serão válidos por períodos limitados, conforme descrito nas respectivas comunicações.
                </p>
                <h4>Envio de Conteúdos</h4>
                <p>
                A newsletter do AstraPadel será enviada periodicamente e poderá conter informações sobre eventos, competições, novidades sobre o clube, promoções, descontos especiais e outros conteúdos relevantes.
                </p>
                <h4>Cancelamento da Subscrição</h4>
                <p>
                Você pode cancelar a sua subscrição a qualquer momento, clicando no link de cancelamento incluído no rodapé de cada e-mail. Após o cancelamento, você deixará de receber futuras comunicações, mas seus dados poderão ser retidos por um período para fins administrativos.
                </p>
                <h4>Proteção de Dados</h4>
                <p>
                Garantimos que os seus dados pessoais serão tratados com total confidencialidade e segurança, em conformidade com as leis de proteção de dados aplicáveis. Não partilhamos as suas informações com terceiros sem o seu consentimento explícito.
                </p>
                <h4>Alterações aos Termos e Condições</h4>
                <p>
                O AstraPadel reserva-se o direito de modificar estes termos a qualquer momento. Quaisquer alterações serão comunicadas através da nossa newsletter ou por outros meios apropriados.
                </p>

                <h4>Aceitação dos Termos</h4>
                <p>
                Ao subscrever a newsletter do AstraPadel, você declara ter lido e concordado com estes Termos e Condições.
                </p>
                </p>
            </Modal>
        </>
    );
};

export default LeadsForm;
