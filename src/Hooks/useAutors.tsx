"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const useAutors = () => {

    const [autorsList, setAutorsList] = useState([]);

    useEffect(() => {
        getAutors();
    },[])

  const getAutors = () => {
    GlobalApi.getAutors().then(resp => {
        console.log(resp.data.data)
        setAutorsList(resp.data.data)
    });
  }

  return autorsList;

}

export default useAutors;