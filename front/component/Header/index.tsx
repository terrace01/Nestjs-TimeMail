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
import { useRouter } from 'next/router'
const Home: NextPage = () => {
    const router = useRouter()
    const items =
        [{itemKey: 'Home', text: '主页', icon: <IconHome/>, link: "/"},
            {itemKey: 'Write', text: '写一封信', icon: <IconEdit/>, link: "/write"},
            {itemKey: 'Public', text: '公开信', icon: <IconEyeOpened/>, link: "/public"},
            {itemKey: 'MailMessage', text: '信件列表', icon: <IconList/>, link: "/mail"},
            {itemKey: 'About', text: '关于', icon: <IconAt/>, link: "/about"},
        ]
    return (
            <div className="nav">

                <ul>
                    {
                        items.map((item: any, index: any) => {
                            return <li key={index}>
                               <Link href={item.link}><a   className={`cursor-pointer ${
                                   router.pathname === item.link
                                       ? 'active'
                                       : ''
                               }`}>{item.text}</a></Link></li>
                        })
                    }


                </ul>
        </div>
    )
}

export default Home
