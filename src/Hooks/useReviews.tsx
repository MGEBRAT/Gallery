"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const usePicture = () => {

    const [reviewsList, setReviewsList] = useState([]);

    useEffect(() => {
        getReviews();
    },[])

  const getReviews = () => {
    GlobalApi.getReviews().then(resp => {
        console.log(resp.data.data)
        setReviewsList(resp.data.data)
    });
  }

  return reviewsList;

}

export default usePicture;