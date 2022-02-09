import type {NextPage} from 'next'

import {
    Layout,
    Nav,
    Button,
    Breadcrumb,
    Skeleton,
    Avatar,
    Table,
    Card,
    Switch,
    Typography,
    Row,
    Col,
    Collapse
} from '@douyinfe/semi-ui';
import {
    IconBell,
    IconHelpCircle,
    IconBytedanceLogo,
    IconHome,
    IconHistogram,
    IconLive,
    IconSetting
} from '@douyinfe/semi-icons';
import Header from '../component/Header'
import Footer from '../component/Footer'
import {PageSEO} from '../component/PageSeo'
import {useEffect, useMemo, useState} from "react";
import {timetrans} from "../utils/time"
import questionData from '../utils/question'
import axios from '../utils/axios';

const Public: NextPage = (props: any) => {
    const [loading, setLoading] = useState(true);
    let [dataSource, setData]: any = useState([]);
    const {Content} = Layout


    return (
        <>
            <PageSEO title={"关于 - 时光邮局"} description={"关于 - 时光邮局"}/>
            <Layout>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-12">


                            <div style={{padding: '10px', width: "100%"}}>
                                <Card>
                                    <img src="/bg.jpg" alt="" style={{width: '100%'}}/>
                                    <Collapse accordion>
                                        {
                                            questionData.map((item: any, index: any) => {
                                                return <>


                                                    <Collapse.Panel header={item.title} itemKey={index}>

                                                        <p
                                                            dangerouslySetInnerHTML={{__html: item.content}}/>
                                                    </Collapse.Panel>


                                                </>
                                            })
                                        }
                                    </Collapse>
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


export default Public


