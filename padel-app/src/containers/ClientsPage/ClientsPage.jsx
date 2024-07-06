import React, {useState} from 'react';
import {Table, Input, Button, Space, Row, Col} from 'antd';
import {CheckCircleOutlined, CloseCircleOutlined} from '@ant-design/icons';
import useClients from "../../services/useClients";
import styles from './ClientsPage.module.scss';
import bannerImg from "../../assets/images/banner-img.jpg";
import PageSeo from "../../components/SEO/PageSeo";

const ClientsPage = () => {
    const [filters, setFilters] = useState({name: '', email: '', phone: ''});
    const {data, isLoading, error, refetch} = useClients(filters);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading clients</p>;

    const handleSearch = () => {
        refetch();
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFilters((prevFilters) => ({...prevFilters, [name]: value}));
    };

    const handleNavigate = () => {
        window.open('/voucher/reader', '_blank');
    };

    const columns = [
        {
            title: 'Nome',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Contacto',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Primeiro jogo?',
            dataIndex: 'firstGame',
            key: 'firstGame',
            render: firstGame => (
                firstGame ? <CheckCircleOutlined style={{color: 'green'}}/> :
                    <CloseCircleOutlined style={{color: 'red'}}/>
            ),
        },
        {
            title: 'Voucher',
            dataIndex: 'voucherToken',
            key: 'voucherToken',
            render: (text, record) => (
                <Space>
                    {text}
                    {record.voucherIsValid ? <CheckCircleOutlined style={{color: 'green'}}/> :
                        <CloseCircleOutlined style={{color: 'red'}}/>}
                </Space>
            ),
        },
    ];

    const pageTitle = `Lista de Clientes - AstraPadel`;
    const pageDescription = 'Página com o lista de clientes';

    return (
        <>
            <PageSeo
                title={pageTitle}
                description={pageDescription}
                imageUrl={bannerImg}
                imageAlt="Imagem do banner do voucher"
                siteUrl={`https://astrapadel.pt/clients`}
            />
            <div className={styles.pageContainer}>
                <Row gutter={16} className={styles.filterRow}>
                    <Col className={styles.filterCol}>
                        <Input
                            placeholder="Nome"
                            name="name"
                            value={filters.name}
                            onChange={handleChange}
                            className={styles.input}
                            allowClear
                        />
                    </Col>
                    <Col className={styles.filterCol}>
                        <Input
                            placeholder="Email"
                            name="email"
                            value={filters.email}
                            onChange={handleChange}
                            className={styles.input}
                            allowClear
                        />
                    </Col>
                    <Col className={styles.filterCol}>
                        <Input
                            placeholder="Contacto"
                            name="phone"
                            value={filters.phone}
                            onChange={handleChange}
                            className={styles.input}
                            allowClear
                        />
                    </Col>
                    <Col className={styles.filterCol}>
                        <Button block className={styles.button} onClick={handleSearch}>Pesquisar</Button>
                    </Col>
                    <Col className={styles.filterCol}>
                        <Button block className={styles.button} onClick={handleNavigate}>Ir para Voucher Reader</Button>
                    </Col>
                </Row>
                <Table className={styles.table} dataSource={data?.content} columns={columns} rowKey="id"
                       loading={isLoading}/>
            </div>
        </>
    );
};

export default ClientsPage;
