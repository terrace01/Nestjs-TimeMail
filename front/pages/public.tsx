import type {NextPage} from 'next'

import {Layout, Nav, Button, Breadcrumb, Skeleton, Avatar, Table, Card, Switch,Typography } from '@douyinfe/semi-ui';
import {
    IconBell,
    IconHelpCircle,
    IconBytedanceLogo,
    IconHome,
    IconHistogram,
    IconLive,
    IconSetting
} from '@douyinfe/semi-icons';
import Siderr from '../component/Sider'
import Header from '../component/Header'
import Footer from '../component/Footer'
import {Head} from "next/document";
import {getMailsList} from "../utils/mail"
import {useEffect, useMemo, useState} from "react";
import {timetrans} from "../utils/time"
import * as dayjs from 'dayjs'
import axios from '../utils/axios';

const Home: NextPage = (props: any) => {
    const [loading, setLoading] = useState(true);
    let [dataSource, setData]: any = useState([]);
    const {Content} = Layout
    const { Meta } = Card;
    const { Title, Paragraph, Image } = Skeleton;

    useEffect(() => {
        handleGetMail()
    }, []);
    const handleGetMail = async()=>{
        const {data} = (await getMailsList()).data
        for (let i in data) {
            data[i]["time_end"] = timetrans(data[i]["time_end"] )
            data[i]["time_start"] = timetrans(data[i]["time_start"] )
        }

        setData(data);
        setLoading(false);
    }
    return (

        <Layout>
            <Header/>
            <Content
                style={{
                    padding: '24px',
                    backgroundColor: 'var(--semi-color-bg-0)',
                }}
            >

                    {
                        dataSource.map((item:any, index:any) => {
                            return <>

                                <Card

                                    title={
                                        <Meta
                                            title={
                                                <Skeleton
                                                    style={{ width:80 }}
                                                    placeholder={<Title />}
                                                    loading={loading}
                                                >
                                                    <Typography.Title heading={5}>
                                                        {item.name}
                                                    </Typography.Title>
                                                </Skeleton>
                                            }
                                            description={
                                                <Skeleton
                                                    style={{ width:150, marginTop: 12 }}
                                                    placeholder={<Paragraph rows={1} />}
                                                    loading={loading}
                                                >
                                                    <Typography.Text>
                                                        {item.time_start} 发往 {item.time_end}
                                                    </Typography.Text>
                                                </Skeleton>
                                            }
                                            avatar={
                                                <Skeleton placeholder={<Skeleton.Avatar />} loading={loading}>
                                                    <Avatar
                                                        alt='Card meta img'
                                                        size="default"
                                                        src='https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg'
                                                    />
                                                </Skeleton>
                                            }
                                        />
                                    }
                                    headerExtraContent={
                                        <Skeleton style={{ width: 50 }} placeholder={<Paragraph rows={1} />} loading={loading}>
                                            <Typography.Text link>
                                                More
                                            </Typography.Text>
                                        </Skeleton>
                                    }
                                    cover={
                                        <p>{item.content}</p>
                                    }
                                >
                                </Card>
                            </>
                        })
                    }


            </Content>
            <Footer/>
        </Layout>

    )
}

export async function getStaticProps() {


    return {
        props: {

        },
    }
}

export default Home


