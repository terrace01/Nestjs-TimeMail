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
import React, {FC, Fragment, useState} from "react";
import {timetrans} from "../utils/time"
import * as dayjs from 'dayjs'
import {InputGroup, Input, InputNumber, AutoComplete, DatePicker, Select, Checkbox} from '@douyinfe/semi-ui';
import {Editor} from '@tinymce/tinymce-react';

const Write: NextPage = () => {


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
        images_upload_handler: () => {

        },
    }
    return (

        <Layout>

            <Header/>
            <Content
                style={{
                    padding: '24px',
                    backgroundColor: 'var(--semi-color-bg-0)',
                }}
            >

                <div
                    style={{
                        borderRadius: '10px',
                        border: '1px solid var(--semi-color-border)',
                        padding: '32px',
                    }}
                >


                    <InputGroup>

                        <Input prefix="你的姓名" showClear></Input>
                    </InputGroup>
                    <br/><br/>
                    <InputGroup>
                        <Input prefix="发件邮箱" showClear></Input>
                    </InputGroup>
                    <br/><br/>


                    {/*https://github.com/yjose/reactjs-popup/issues/215*/}
                    <div suppressHydrationWarning={true}>
                        {process.browser &&
                        <Fragment>

                            {/*<DatePicker type="dateTime" density="compact" insetLabel="结束日期" style={{width: 240}}/>*/}
                            {/*<DatePicker insetLabel="结束日期" style={{ width: 240 }} />*/}
                            <InputGroup>
                                <DatePicker insetLabel="结束日期" type="dateRange" density="compact"/>
                            </InputGroup>
                            <br/><br/>
                            <InputGroup>
                                <Checkbox aria-label="Checkbox 示例"
                                          extra='选中后, 信的内容将在 公开信 中展示, 所有人都可以浏览和评论'>是否公开</Checkbox>
                            </InputGroup>
                        </Fragment>}
                    </div>
                    <br/><br/>
                    <Editor
                        id="tiny"
                        inline={false}  // false：经典编辑模式；true:行内编辑模式
                        apiKey='vnpn1q20ecyjyluk0ffkf2cprue1doeigvxnjhb9xkznwflx'
                        init={{
                            ...editorObj
                        }}
                    />


                </div>
            </Content>
            <Footer/>
        </Layout>

    )
}


export default Write
