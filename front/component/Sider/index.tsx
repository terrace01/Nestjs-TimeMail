import type {NextPage} from 'next'
import { Layout, Nav} from '@douyinfe/semi-ui';
import {IconHome, IconHistogram, IconLive, IconSetting,IconList,IconAt,IconEdit,IconEyeOpened} from '@douyinfe/semi-icons';


const Home: NextPage = () => {
    const { Header, Footer, Sider, Content } = Layout;
    return (
            <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
                <Nav
                    defaultSelectedKeys={['Home']}
                    style={{height: '100%' }}
                    items={[
                        { itemKey: 'Home', text: '首页',link:"/", icon: <IconHome size="large" /> },
                        { itemKey: 'Write', text: '写一封信',link:"write", icon: <IconEdit size="large" /> },
                        { itemKey: 'Public', text: '公开信',link:"public", icon: <IconEyeOpened size="large" /> },
                        { itemKey: 'MailMessageStatus', text: '信件列表',link:"/mail", icon: <IconList size="large" /> },
                        { itemKey: 'About', text: '关于',link:"about", icon: <IconAt size="large" /> },
                    ]}
                    header={{
                        // logo: <img src="//lf1-cdn-tos.bytescm.com/obj/ttfe/ies/semi/webcast_logo.svg" />,
                        text: '时光邮局',
                    }}
                    footer={{
                        collapseButton: true,
                    }}
                />
            </Sider>
    )
}

export default Home
