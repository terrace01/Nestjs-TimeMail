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
import {Head} from "next/document";
import {getMailsList} from "../utils/mail"
import {useState} from "react";
import {timetrans} from "../utils/time"
import * as dayjs from 'dayjs'
const Write: NextPage = (props: any) => {
    let [dataSource, setData]:any = useState([]);
    dataSource = props.data.data
    const {Content} = Layout
    const columns = [
        {
            title: '寄件人名称',
            dataIndex: 'name',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
        },
        {
            title: '内容',
            dataIndex: 'content',
        },
        {
            title: '发送时间',
            dataIndex: 'time_start',
        },
        {
            title: '寄往时间',
            dataIndex: 'time_end',
        }
    ];

    return (

            <Layout>
                <Header/>
                <Content
                    style={{
                        padding: '24px',
                        backgroundColor: 'var(--semi-color-bg-0)',
                    }}
                >
                    {/*<Breadcrumb*/}
                    {/*    style={{*/}
                    {/*        marginBottom: '24px',*/}
                    {/*    }}*/}
                    {/*    routes={['首页', '当这个页面标题很长时需要省略', '上一页', '详情页']}*/}
                    {/*/>*/}
                    <div
                        style={{
                            borderRadius: '10px',
                            border: '1px solid var(--semi-color-border)',

                            padding: '32px',
                        }}
                    >

                        <Table columns={columns} dataSource={dataSource}/>
                    </div>
                </Content>
                <Footer/>
            </Layout>

    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const {data} = await getMailsList()


    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            data,
        },
    }
}

export default Write
