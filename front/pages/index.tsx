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
    Typography,
    Steps
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
import Header from '../component/Header'
import Footer from '../component/Footer'
import {PageSEO} from '../component/PageSeo'
import {useState} from "react";
import {timetrans} from "../utils/time"
import {IllustrationNoContent, IllustrationNoContentDark} from '@douyinfe/semi-illustrations';
import Router from 'next/router';

const Home: NextPage = (y) => {
    const {Content} = Layout
    const {Title, Paragraph} = Typography;

    return (

        <>
            <PageSEO title={"时光邮局 - TimePost"} description={"时光邮局"}/>
            <Layout>
                <Header/>


                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <div style={{
                                padding: '24px',

                            }}>




                                <Card style={{
                                    marginBottom: '20px',

                                }}>

                                    <Title style={{margin: '8px 0'}}>锦瑟无端五十弦 一弦一柱思华年</Title>
                                    <Paragraph>
                                        一封写给未来的信，<br/>
                                        收信人可能是您自己，也可能是您的家人、朋友，<br/>
                                        甚至是那个还未出现的人，譬如您的爱人、<br/>
                                        甚至可能是未出世宝宝...。<br/>
                                        收取时间可能是一年之后、三年之后、<br/>
                                        五年之后、十年之后甚至更久...<br/>
                                        也可为你永久封存直至那个人出现。</Paragraph>


                                </Card>



                                <Empty

                                    title="给未来写一封信"
                                    description="开始创建你的第一个仪表盘吧！"
                                    style={{
                                        padding: '60px 0'
                                    }}
                                >
                                    <div>
                                        <Button style={{padding: '6px 24px', marginRight: 12}} type="primary"
                                                onClick={() => {
                                                    Router.push({
                                                        pathname: '/mail',

                                                    })
                                                }}>
                                            写信
                                        </Button>
                                        <Button style={{padding: '6px 24px'}} theme="solid" type="primary"
                                                onClick={() => {
                                                    Router.push({
                                                        pathname: '/public',

                                                    })
                                                }}>
                                            看看大家的信
                                        </Button>
                                    </div>

                                    <br />


                                </Empty>
                              <div className="steps" style={{marginBottom:'20px'}}>



                                  <Row gutter={{xs:16,sm:16,md:16,lg:24,xl:24,xxl:24}}>

                                      <Col xs={16} sm={16} md={16} lg={24} xl={24}>
                                              <Steps current={1}>
                                              <Steps.Step title="写一封信" description="write a mail"/>
                                          <Steps.Step title="忘记时间" description="waiting for time"/>
                                          <Steps.Step title="接收" description="receive"/>


                                              </Steps>
                                     </Col>
                                  </Row>
                              </div>



                                <Card style={{
                                    marginBottom: '20px',
                                }}>
                                    <div>
                                        <Paragraph style={{textAlign: 'center'}}>
                                            也许有一天，我已经渐渐老去<br/>
                                            也许有一天，<br/>
                                            我不再坚持我曾坚持的，<br/>
                                            不再爱我曾深爱的<br/>
                                            不再恨我所痛恨的<br/>
                                            也许有一天，<br/>
                                            突然发现邮箱中<br/>
                                            多了一封信<br/>
                                            曾经的自己<br/>
                                            写给未来的自己<br/>
                                            仿佛瞬间，<br/>
                                            穿越时间，<br/>
                                            看到了，十年前，<br/>
                                            那个年轻的自己，<br/>
                                            微笑地打着招呼——<br/>
                                            “你，还好么？<br/>
                                            我，好好么？” <br/> </Paragraph>
                                    </div>

                                </Card>


                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </Layout>
        </>

    )
}

export default Home
