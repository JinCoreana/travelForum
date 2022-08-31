import { Button } from "antd";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from "../reducers/user";

const FollowButton = ({ post }) => {
  const dispatch = useDispatch();
  const { me, followLoading, unfollowLoading } = useSelector(
    (state) => state.user
  );
  const isFollwing = me?.Followings?.find((v) => v.id === post.User.id);

  const onFollow = useCallback(() => {
    dispatch({
      type: FOLLOW_REQUEST,
      data: post.User.id,
    });
  }, []);
  const onUnfollow = useCallback(() => {
    dispatch({
      type: UNFOLLOW_REQUEST,
      data: post.User.id,
    });
  }, []);
  return isFollwing ? (
    <Button onClick={onUnfollow} loading={unfollowLoading}>
      Unfollow
    </Button>
  ) : (
    <Button onClick={onFollow} loading={followLoading}>
      Follow
    </Button>
  );
};
FollowButton.propTypes = {
  post: PropTypes.object.isRequired,
};

export default FollowButton;
