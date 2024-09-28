import { useState,useEffect } from "react";

export const  useRender =(url)=>{
  const [data,setData]= useState(null)
  const [loading,setLoading]=useState()

 useEffect(()=>{
    const fetchData = async ()=>{
       try {
         setLoading(true)
         setLoading('carregando dados')
         const res = await fetch(url);
         const json= await res.json()
         setData(json)
         setLoading(false)
       } catch (error) {
        
       }
       
    }
    fetchData()

 },[url])


   return{data,loading}
};