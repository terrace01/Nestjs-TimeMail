import type {NextPage} from 'next'
import { Nav, Avatar, Dropdown } from '@douyinfe/semi-ui';
import { IconStar, IconUser, IconUserGroup, IconSetting, IconEdit,IconList,IconHome,IconEyeOpened,IconAt} from '@douyinfe/semi-icons';

const Home: NextPage = () => {



    return (
        <div style={{ width: '100%' }}>
            <Nav
                mode={'horizontal'}
                items={[
                    { itemKey: 'Home', text: '首页',link:"/", icon: <IconHome size="large" /> },
                    { itemKey: 'Write', text: '写一封信',link:"write", icon: <IconEdit size="large" /> },
                    { itemKey: 'Public', text: '公开信',link:"public", icon: <IconEyeOpened size="large" /> },
                    { itemKey: 'MailMessageStatus', text: '信件列表',link:"/mail", icon: <IconList size="large" /> },
                    { itemKey: 'About', text: '关于',link:"/about", icon: <IconAt size="large" /> },
                ]}
                onSelect={key => console.log(key)}
                header={{
                    // logo: <img src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/webcast_logo.svg" />,
                    text: 'TimePost 时光邮局'
                }}
                footer={
                    <Dropdown
                        position="bottomRight"
                        render={
                            <Dropdown.Menu>
                                <Dropdown.Item>详情</Dropdown.Item>
                                <Dropdown.Item>退出</Dropdown.Item>
                            </Dropdown.Menu>
                        }
                    >
                        <Avatar size="small" color='light-blue' style={{margin: 4}}>BD</Avatar>
                        <span>Bytedancer</span>
                    </Dropdown>
                }
            />
        </div>
    )
}

export default Home
