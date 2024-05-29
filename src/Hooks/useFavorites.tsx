"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useFavorites = () => {

    const [favoritesList, setFavoritesList] = useState([]);

    useEffect(() => {
        getFavorites();
    },[])

  const getFavorites = () => {
    GlobalApi.getFavorites().then(resp => {
        console.log(resp.data.data)
        setFavoritesList(resp.data.data)
    });
  }

  return favoritesList;

}

export default useFavorites;