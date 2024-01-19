import React, { useEffect } from 'react'
import { getPosts } from './postsSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Post() {

    const { list, status } = useSelector((state) => state.posts);
  
    const dispatch= useDispatch();
    useEffect(() => {
        dispatch(getPosts({ userId: 1 }));
      }, [dispatch]);


      console.log(list);
  
    return (
    <div>Post</div>
  )
}