import React, { useEffect } from 'react'
import { getUserAction } from './user/userslice';
import { useDispatch, useSelector } from 'react-redux';

export default function UserInfo() {

    const data = useSelector((state) => state.user);


    console.log(data);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getUserAction(1));
      });


  return (
    <div>UserInfo</div>
  )
}