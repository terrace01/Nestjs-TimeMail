import type {NextPage} from 'next'
import { Layout, Nav} from '@douyinfe/semi-ui';
import {IconHome, IconHistogram, IconLive, IconSetting, IconBytedanceLogo} from '@douyinfe/semi-icons';


const Home: NextPage = () => {
    const { Header, Footer, Sider, Content } = Layout;
    return (
        <Footer
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px',
                color: 'var(--semi-color-text-2)',
                backgroundColor: 'rgba(var(--semi-grey-0), 1)',
            }}
        >
                    <span
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <IconBytedanceLogo size="large" style={{ marginRight: '8px' }} />
                        <span>Copyright © 2019 ByteDance. All Rights Reserved. </span>
                    </span>
            <span>
                        <span style={{ marginRight: '24px' }}>平台客服</span>
                        <span>反馈建议</span>
                    </span>
        </Footer>
    )
}

export default Home
