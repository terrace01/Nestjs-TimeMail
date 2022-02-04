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
import Siderr from '../component/Sider'
import Header from '../component/Header'
import Footer from '../component/Footer'
import {Head} from "next/document";
import {getMailsList} from "../utils/mail"
import {useEffect, useMemo, useState} from "react";
import {timetrans} from "../utils/time"
import questionData from '../utils/question'
import axios from '../utils/axios';

const Public: NextPage = (props: any) => {
    const [loading, setLoading] = useState(true);
    let [dataSource, setData]: any = useState([]);
    const {Content} = Layout
    const {Meta} = Card;
    const {Title, Paragraph, Image} = Skeleton;


    return (

        <Layout>
            <Header/>
<div className="container">
    <div className="row">
        <div className="col-12">
            <Collapse accordion>
                {
                    questionData.map((item: any, index: any) => {
                        return <>


                            <Collapse.Panel header={item.title} itemKey={index}>
                                <p>{item.content}</p>
                            </Collapse.Panel>


                        </>
                    })
                }
            </Collapse>

        </div>
    </div>
</div>
            <Footer/>
        </Layout>

    )
}


export default Public


