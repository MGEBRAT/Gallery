"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const usePicture = () => {

    const [pictureList, setPictureList] = useState([]);

    useEffect(() => {
        getPicture();
    },[])

  const getPicture = () => {
    GlobalApi.getPicture().then(resp => {
        console.log(resp.data.data)
        setPictureList(resp.data.data)
    });
  }

  return pictureList;

}

export default usePicture;