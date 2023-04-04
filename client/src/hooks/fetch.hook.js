import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(query){
  const [getData, setData] =  useState({ isLoading: false, apiData: undefined, status:null, serverError:null})

  useEffect(()=>{

    if(!query) return;

    const fetchData = async ()=>{
        try {
            setData(prev=>({...prev, isLoading:true}));
            const {data, status} = await axios

        } catch (error) {
            setData(prev=>({...prev, isLoading:false, serverError:error}))
        }
    }
  },[query])
}