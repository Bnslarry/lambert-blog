import React from 'react'

import { Divider, Rate, Icon } from 'antd'
import Href from '@/components/Href'
import SvgIcon from '@/components/SvgIcon'

const skills = [
  {
    label: '具备扎实的 Javascript 基础，熟练使用 ES6+ 语法。',
    rate: 3,
  },
  {
    label: '熟悉 React 并理解其原理',
    rate: 2,
  },
  {
    label: '熟练掌握微信小程序及公众号H5开发',
    rate: 4,
  },
  {
    label: '熟悉 HTTP 协议，缓存、性能优化、安全等，了解浏览器原理。',
    rate: 3,
  },
  {
    label: '熟悉常用的算法与数据结构',
    rate: 2,
  },
]

const MyInfo = () => {
  return (
    <>
      <Divider orientation='left'>博客简述</Divider>
      <p>本博客使用的技术为 react hooks + antd + koa2 + mysql </p>

      <Divider orientation='left'>关于我</Divider>

      <ul className='about-list'>
        <li>
          技能
          <ul>
            {skills.map((item, i) => (
              <li key={i}>
                {item.label}
                <Rate defaultValue={item.rate} disabled />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  )
}

export default MyInfo
