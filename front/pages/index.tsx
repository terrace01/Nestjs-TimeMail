import type {NextPage} from 'next'

import {
    Layout,
    Nav,
    Button,
    Breadcrumb,
    Skeleton,
    Avatar,
    Table,
    Empty,
    Row,
    Col,
    Card,
    Banner,
    Typography
} from '@douyinfe/semi-ui';
import {
    IconBell,
    IconHelpCircle,
    IconBytedanceLogo,
    IconHome,
    IconHistogram,
    IconLive,
    IconSetting,
} from '@douyinfe/semi-icons';
import Siderr from '../component/Sider'
import Header from '../component/Header'
import Footer from '../component/Footer'
import {PageSEO} from '../component/PageSeo'
import {useState} from "react";
import {timetrans} from "../utils/time"
import {IllustrationConstruction, IllustrationConstructionDark} from '@douyinfe/semi-illustrations';

const Home: NextPage = (y) => {
    const {Content} = Layout
    const {Title} = Typography;

    return (

        <>
            <PageSEO title={"时光邮局 - TimePost"} description={"时光邮局"}/>
            <Layout>


                <Header/>
                <div className="grid grid-flex">
                    <Row type="flex" justify="center">
                        <Col span={12}>
                            <Content
                                style={{
                                    padding: '24px',
                                    backgroundColor: 'var(--semi-color-bg-0)',
                                }}
                            >

                                <br/> <br/>
                                <Title style={{margin: '8px 0'}}>花有重开日 人无再少年</Title>

                                <br/> <br/>

                                <iframe style={{
                                    width: '100%',
                                    height: '600px',
                                    border: '0'

                                }} src="//player.bilibili.com/player.html?aid=680968412" scrolling="no">

                                </iframe>
                            </Content>

                        </Col>

                    </Row>

                </div>
                <Footer/>
            </Layout>

        </>

    )
}

export default Home
