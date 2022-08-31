import React from "react";
import { Avatar, Button, List, Skeleton } from "antd";
import PropTypes from "prop-types";

const FollowList = ({ header, data }) => {
  return (
    <>
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        header={<div>{header}</div>}
        loadMore={
          <div>
            <Button>...More</Button>
          </div>
        }
        dataSource={data}
        renderItem={(item) => (
          <List.Item actions={[<a key="list-loadmore-edit">Unfollow</a>]}>
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href="https://ant.design">{item.nickname}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  );
};
// FollowList.propTypes = {
//   header: PropTypes.string.isRequired,
//   data: PropTypes.array.isRequired,
// };

export default FollowList;
