import React from 'react'
import { Icon } from 'antd'
import SvgIcon from '@/components/SvgIcon'

import Href from '@/components/Href'
import MyInfo from '@/views/web/about/MyInfo'

// project config
export const HEADER_BLOG_NAME = 'Lambert的博客' // header title 显示的名字

// API_BASE_URL
export const API_BASE_URL = 'http://localhost:6060'

// === sidebar
export const SIDEBAR = {
  avatar: require('@/assets/images/avatar.jpeg'), // 侧边栏头像
  title: 'Lambert', // 标题
  subTitle: 'Keep Balance!', // 子标题
  // 个人主页
  homepages: {
    github: {
      link: 'https://github.com',
      icon: <Icon type='github' theme='filled' className='homepage-icon' />,
    },
    juejin: {
      link: 'https://juejin.im',
      icon: <SvgIcon type='iconjuejin' className='homepage-icon' />,
    },
  },
}

// === discuss avatar
export const DISCUSS_AVATAR = SIDEBAR.avatar // 评论框博主头像

// 公告 announcement
export const ANNOUNCEMENT = {
  enable: false, // 是否开启
  content: (
    <>
      个人笔记网站，请访问
      <Href href=''> </Href>
    </>
  ),
}

export const ABOUT = {
  avatar: SIDEBAR.avatar,
  describe: SIDEBAR.subTitle,
  discuss: true,
  renderMyInfo: <MyInfo />,
}

/**
 * github config
 */
export const GITHUB = {
  enable: true, // github 第三方授权开关
  client_id: '9294e1411d2e59f3567a', // Setting > Developer setting > OAuth applications => client_id
  url: 'https://github.com/login/oauth/authorize', // 跳转的登录的地址
}
