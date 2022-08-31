import React from 'react'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List } from 'antd';



const MyPost = ({data}) => {
  return (
     <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={data}
    
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <StarOutlined text="156" key="list-vertical-star-o" />,
          <LikeOutlined text="156" key="list-vertical-like-o" />,
          <MessageOutlined text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )} />
  )
}

export default MyPost