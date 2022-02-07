import type {NextPage} from 'next'
import {PageSEO} from '../component/PageSeo'
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
    Pagination
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
import Siderr from '../component/Sider'
import Header from '../component/Header'
import Footer from '../component/Footer'
import {getMailBySkip} from "../utils/mail"
import {useEffect, useMemo, useState} from "react";
import {timetrans} from "../utils/time"
import * as dayjs from 'dayjs'
import axios from '../utils/axios';

const Public: NextPage = (props: any) => {
    const [loading, setLoading] = useState(true);
    let [dataSource, setData]: any = useState([]);
    const {Content} = Layout
    const {Meta} = Card;
    const {Title, Paragraph, Image} = Skeleton;
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState()
    useEffect(() => {

        onPageChange(1)
    }, []);


    const onPageChange = async (currentPage: any) => {

        setPage(currentPage);
        console.log(currentPage)
        const {data} = (await getMailBySkip((currentPage * 2) - 2)).data
        for (let i in data.result) {
            data.result[i]["time_end"] = timetrans(data.result[i]["time_end"])
            data.result[i]["time_start"] = timetrans(data.result[i]["time_start"])
        }
        setData(data.result);
        setTotal(data.total)
        setLoading(false);
    }

    return (
        <>
            <PageSEO title={"公开信 - 时光邮局"} description={"公开信 - 时光邮局"}/>
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

                                <div className="mail">

                                    {
                                        dataSource.map((item: any, index: any) => {
                                            return <>

                                                <Card
                                                    key={item.id}
                                                    title={
                                                        <Meta
                                                            title={
                                                                <Skeleton
                                                                    style={{width: 80}}
                                                                    placeholder={<Title/>}
                                                                    loading={loading}
                                                                >
                                                                    <Typography.Title heading={5}>
                                                                        {item.name}
                                                                    </Typography.Title>
                                                                </Skeleton>
                                                            }
                                                            description={
                                                                <Skeleton
                                                                    style={{width: 150, marginTop: 12}}
                                                                    placeholder={<Paragraph rows={1}/>}
                                                                    loading={loading}
                                                                >
                                                                    <Typography.Text>
                                                                        {item.time_start} 发往 {item.time_end}
                                                                    </Typography.Text>
                                                                </Skeleton>
                                                            }
                                                            avatar={
                                                                <Skeleton placeholder={<Skeleton.Avatar/>}
                                                                          loading={loading}>
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
                                                        <Skeleton style={{width: 50}}
                                                                  placeholder={<Paragraph rows={1}/>}
                                                                  loading={loading}>
                                                            <Typography.Text link>
                                                                More
                                                            </Typography.Text>
                                                        </Skeleton>
                                                    }

                                                >
                                                    <div style={{paddingLeft: 15, textIndent: 2}}
                                                         dangerouslySetInnerHTML={{__html: item.content}}/>
                                                </Card>

                                            </>
                                        })
                                    }
                                </div>
                            </div>
                            <Pagination
                                total={total}
                                pageSize={2}
                                currentPage={page}

                                onPageChange={onPageChange}>

                            </Pagination>

                        </div>
                    </div>
                </div>
                <Footer/>
            </Layout>

        </>
    )
}

export async function getStaticProps() {


    return {
        props: {},
    }
}

export default Public


