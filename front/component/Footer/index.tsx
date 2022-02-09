import type {NextPage} from 'next'
import {Layout, Nav,Typography} from '@douyinfe/semi-ui';
import {IconLink} from '@douyinfe/semi-icons';


const Home: NextPage = () => {
    const {Footer} = Layout;
    const { Text } = Typography;
    return (
        <Footer
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px',
                color: '#fff',
                backgroundColor: '#1c1f23;',
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="foot col-md-12">
                    <div style={{padding:'10px',display:'flex'}}>


                                <span style={{flex:1}}>© 2022 时光邮局. All rights reserved.</span>
                                <span >Designed & Developed by  <Text link icon={<IconLink />} underline>Next.js</Text> + <Text link icon={<IconLink />} underline>Semi.design</Text></span>

                         </div>

                    </div>
                </div>
            </div>
        </Footer>

    )
}

export default Home
