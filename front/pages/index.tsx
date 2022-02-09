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
import Header from '../component/Header'
import Footer from '../component/Footer'
import {PageSEO} from '../component/PageSeo'
import {useState} from "react";
import {timetrans} from "../utils/time"
import { IllustrationNoContent, IllustrationNoContentDark } from '@douyinfe/semi-illustrations';
const Home: NextPage = (y) => {
    const {Content} = Layout
    const {Title,Paragraph} = Typography;

    return (

        <>
            <PageSEO title={"时光邮局 - TimePost"} description={"时光邮局"}/>
            <Layout>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-12">


                          <div    style={{
                              padding: '24px',
                              backgroundColor: 'var(--semi-color-bg-0)',
                          }}>
                              <Card>


                                  <Title style={{margin: '8px 0'}}>花有重开日 人无再少年</Title>


                                  <div>
                                    <img src="/bg.jpg" alt="" style={{width:'100%'}}/>
                                </div>

                                      <br/> <br/>

                                <div>
                                    <Paragraph style={{textAlign:'center'}}>
                                        写给我自己<br />
                                        也许有一天，我已经渐渐老去<br />
                                        也许有一天，<br />
                                        我不再坚持我曾坚持的，<br />
                                        不再爱我曾深爱的<br />
                                        不再恨我所痛恨的<br />
                                        也许有一天，<br />
                                        突然发现邮箱中<br />
                                        多了一封信<br />
                                        曾经的自己<br />
                                        写给未来的自己<br />
                                        仿佛瞬间，<br />
                                        穿越时间，<br />
                                        看到了，十年前，<br />
                                        那个年轻的自己，<br />
                                        微笑地打着招呼——<br />
                                        “你，还好么？<br />
                                        我，好好么？”    <br />                              </Paragraph>
                                </div>
                                  <br />

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
