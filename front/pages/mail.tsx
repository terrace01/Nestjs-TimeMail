import type {NextPage} from 'next'

import {Layout, Nav, Button, Breadcrumb, Skeleton, Avatar, Table} from '@douyinfe/semi-ui';
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
import {getMailsAll} from "../utils/mail"
import {useState} from "react";
import {timetrans, regEmail} from "../utils/time"
import {PageSEO} from '../component/PageSeo'

const Home: NextPage = (props: any) => {
    let [dataSource, setData]: any = useState([]);

    dataSource = props.data


    const {Content} = Layout
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            render: (text: string, record: any, index: number) => {
                return (
                    <div>
                        <Avatar size="small" color={record.avatarBg} style={{marginRight: 4}}>
                            {typeof text === 'string' && text.slice(0, 1)}
                        </Avatar>
                        {text}
                    </div>
                );
            }
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            render: (text: string) => {
                return regEmail(text)
            }
        },
        {
            title: '发送时间',
            dataIndex: 'time_start',
        },
        {
            title: '寄往时间',
            dataIndex: 'time_end',
        },
        {
            title: '状态',
            dataIndex: 'type',
            // render: (text: string, record: any, index: number) => {
            //
            //     if (text == '0') {
            //         return <Button theme='solid' type='tertiary' style={{marginRight: 8}}>等待发送</Button>
            //     } else if (text == '1') {
            //         return <Button theme='solid' type='primary' style={{marginRight: 8}}>发送成功</Button>
            //     } else {
            //         return <Button theme='solid' type='danger' style={{marginRight: 8}}>发送失败</Button>
            //     }
            // }
        },
    ];

    return (
        <>
            <PageSEO title={"邮件列表 - 时光邮局"} description={"邮件列表 - 时光邮局"}/>
            <Layout>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div
                                style={{

                                    padding: '10px',
                                }}
                            >

                                <div><Table columns={columns} dataSource={dataSource}/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library

    const {data} = (await getMailsAll()).data

    for (let i in data) {
        data[i]["time_end"] = timetrans(data[i]["time_end"])
        data[i]["time_start"] = timetrans(data[i]["time_start"])
    }

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            data,
        },
    }
}

export default Home
