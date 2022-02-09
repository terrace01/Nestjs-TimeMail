import type {NextPage} from 'next'

import {Layout, Nav, Button, Breadcrumb, Skeleton, Avatar, Table, Card, Toast} from '@douyinfe/semi-ui';
import {
    IconBell,
    IconHelpCircle,
    IconBytedanceLogo,
    IconHome,
    IconHistogram,
    IconLive,
    IconSetting
} from '@douyinfe/semi-icons';
import Header from '../component/Header'
import Footer from '../component/Footer'
import React, {Fragment, useState} from "react";
import {timetrans} from "../utils/time"
import {
    InputGroup,
    Input,
    InputNumber,
    AutoComplete,
    DatePicker,
    Select,
    Checkbox,
    Row,
    Col,
    Form,
    TextArea,
    TagInput,
    Banner
} from '@douyinfe/semi-ui';
import Router from 'next/router' // 导入引入进来的
import {Editor} from '@tinymce/tinymce-react';
import {sendMail} from '../utils/mail'
import {PageSEO} from '../component/PageSeo'

const Write: NextPage = () => {

    const {
        Section,
        Input,
        InputNumber,
        AutoComplete,
        Select,
        TreeSelect,
        Cascader,
        DatePicker,
        TimePicker,
        TextArea,
        CheckboxGroup,
        Checkbox,
        RadioGroup,
        Radio,
        Slider,
        Rating,
        Switch,
        TagInput,
    } = Form;
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
    const editorObj = {
        height: '300px',
        language_url : '/tinymce/js/tinymce/langs/zh_CN.js',
        language: 'zh_CN',
        // skin_url: 'tinymce/skins/ui/oxide',
        content_style: '* { padding:0; margin:0; } img {max-width:100% !important }',
        lineheight_val:
            '1 1.1 1.2 1.3 1.35 1.4 1.5 1.55 1.6 1.75 1.8 1.9 1.95 2 2.1 2.2 2.3 2.4 2.5 2.6 2.7 2.8 3 3.1 3.2 3.3 3.4 4 5',
        fontsize_formats: '8pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 17pt 18pt 24pt 36pt',
        font_formats:
            "微软雅黑='微软雅黑';宋体='宋体';黑体='黑体';仿宋='仿宋';楷体='楷体';隶书='隶书';幼圆='幼圆';Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings",
        plugin_preview_width: 375, // 预览宽度
        plugin_preview_height: 668,
        plugins: 'link lists image code table wordcount media fullscreen preview paste',
        powerpaste_word_import: 'merge',
        toolbar:
            'fontselect | bold italic underline strikethrough | link unlink image | undo redo | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | code | removeformat',
        paste_data_images: true,
        statusbar: true, // 底部的状态栏
        menubar: false, // 最上方的菜单
        branding: false, // 水印“Powered by TinyMCE”
        convert_urls: false,//去除URL转换
        resize: false,
        images_upload_handler: () => {

        },
    }


    const [mail, setMail] = useState({
        name: '',
        email: '',
        time_end: '',
        type: 0,
        is_public: false
    })

    const [tinymce, setTinymce] = useState('')


    const isEmail = (str: any) => {
        var re = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if (re.test(str) != true) {
            return false;
        } else {
            return true;
        }
    }
    const submit = async () => {


        var a = (new Date()).toLocaleDateString()//获取当前日期
        a = a.replace(/\//g, '-');//替换2017/05/03 为    2017-05-03


        const d = new Date();
        const datetime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();


        // @ts-ignore
        const nowdate = new Date(datetime) / 1000; //把当前日期变成时间戳

        // @ts-ignore
        const senddate = (new Date(mail.time_end)) / 1000;//把当前日期变成时间戳

        const res: any = {
            ...mail,
            content: tinymce,
            time_start: nowdate,
            time_end: senddate,
            is_public: mail.is_public ? 1 : 0
        }


        if (res.name == '' || res.time_end == '' || res.content == '' || res.email == '') {
            Toast.error("信息未填写完整，请检查")
        } else if (isEmail(res.email) == false) {
            Toast.error("wdnmd 邮箱格式不对")
        } else if (nowdate >= senddate) {
            Toast.error("禁止选择之前的时间")
        } else {

            const {data} = await sendMail(res)
            Toast.success("发送成功")
            Router.push({
                pathname: '/mail',

            })
            // if (data.code !== '200') return Toast.error("发送失败")
            // if (data.code !== '200') return Toast.error("发送失败")
        }

    }

    return (
        <>
            <PageSEO title={"写一封信 - 时光邮局"} description={"写一封信 - 时光邮局"}/>
            <Layout>

                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <Form
                                style={{padding: 10, width: '100%'}}
                                onValueChange={(v: any) =>
                                    setMail({
                                        ...v,
                                    })
                                }
                            >
                                <br/>
                                <Banner
                                    type="success"
                                    description="如果不想让自己的信被别人看到，可以勾选 “是否公开” 选项"
                                />
                                <br/>
                                <Card>

                                    <Section text={'写一封信'}>
                                        <Row>

                                            <Input
                                                field="name"
                                                label="名称（Name）"
                                                trigger='blur'
                                            >
                                            </Input>

                                        </Row>
                                        <Row>

                                            <Input
                                                field="email"
                                                label="邮箱（Email）"
                                                trigger='blur'

                                            >
                                            </Input>

                                        </Row>

                                        <Row>
                                            <Col span={12}>



                                                <DatePicker type="dateTime" label='日期（SendTime)'
                                                            field="time_end"/>


                                            </Col>

                                        </Row>

                                        <Row>

                                            <Col span={12}>

                                                {/*https://github.com/yjose/reactjs-popup/issues/215*/}
                                                <Checkbox field="is_public" noLabel={true}
                                                          extra='选中后, 信的内容将在 公开信 中展示, 所有人都可以浏览和评论'
                                                >是否公开</Checkbox>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col span={24}>

                                                <Editor
                                                    onEditorChange={(v: any) => {
                                                        setTinymce(v)
                                                    }}
                                                    id="tiny"
                                                    inline={false}  // false：经典编辑模式；true:行内编辑模式
                                                    tinymceScriptSrc={'/tinymce/js/tinymce/tinymce.min.js'}

                                                    apiKey='vnpn1q20ecyjyluk0ffkf2cprue1doeigvxnjhb9xkznwflx'
                                                    init={{
                                                        ...editorObj
                                                    }}
                                                />

                                            </Col>
                                        </Row>

                                    </Section>


                                    <Row type="flex" justify="end">


                                        <div style={{marginTop: '20px'}}>
                                            <Col span={24}>


                                                <Button onClick={submit} type="primary"
                                                        htmlType="submit"
                                                        className="btn-margin-right">提交(Apply)</Button>

                                            </Col>

                                        </div>

                                    </Row>
                                </Card>

                            </Form>

                        </div>
                    </div>
                </div>
                <Footer/>
            </Layout>
        </>
    )
}


export default Write
