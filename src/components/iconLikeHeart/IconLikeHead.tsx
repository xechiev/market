import React, { useState } from 'react';
import { HeartOutlined } from '@ant-design/icons';
import classes from './IconLikeHead.module.scss';

interface LikeHead {
  likesCount: number
}

function IconLikeHead ({ likesCount }:LikeHead) {
  const [isLiked, setIsLiked] = useState(false);
  const likeView = isLiked
    ? { color: 'red', margin: '5px' }
    : { margin: '5px' };
  const likesCountView = isLiked
    ? likesCount + 1
    : likesCount;

  return (
    <div
      role="button"
      tabIndex={0}
      className={classes.ContainerIconLike}
      onClick={() => setIsLiked(!isLiked)}
      onKeyDown={(event) => event.key === 'Enter' && setIsLiked(!isLiked)}
    >
      <HeartOutlined style={likeView} />
      <div>{likesCountView}</div>
    </div>
  );
}

export default IconLikeHead;
