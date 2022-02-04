import type {NextPage} from 'next'
import {Nav, Avatar, Dropdown} from '@douyinfe/semi-ui';
import {
    IconStar,
    IconUser,
    IconUserGroup,
    IconSetting,
    IconEdit,
    IconList,
    IconHome,
    IconEyeOpened,
    IconAt
} from '@douyinfe/semi-icons';
import Link from 'next/link'

const Home: NextPage = () => {

    return (
        <div style={{width: '100%'}}>
            <Nav
                mode={'horizontal'}
                items={[
                    {itemKey: 'Home', text: '主页', icon: <IconHome/>, link: "/"},
                    {itemKey: 'Write', text: '写一封信', icon: <IconEdit/>, link: "/write"},
                    {itemKey: 'Public', text: '公开信', icon: <IconEyeOpened/>, link: "/public"},
                    {itemKey: 'MailMessage', text: '信件列表', icon: <IconList/>, link: "/mail"},
                    {itemKey: 'About', text: '关于', icon: <IconAt/>, link: "/about"},

                ]}
                onSelect={key => console.log(key)}
                header={{
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
                        <Avatar
                            alt="时光邮局"
                            size="small"
                            src="/author.jpg"
                            style={{margin: 4}}
                        />
                        <span>周树人</span>
                    </Dropdown>
                }
            />
        </div>
    )
}

export default Home
