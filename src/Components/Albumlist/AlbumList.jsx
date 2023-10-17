import React from "react";
import style from "./AlbumList.module.css";
import { MdOutlineModeEditOutline} from 'react-icons/md';
import {RiDeleteBin6Line} from 'react-icons/ri';
const AlbumList = (
    {album,handleDelete,handleUpdate,search}
    
    ) => {
// for the search bar feature
  let data = [];
   if(search.length>0){
       data = search || album;
   }else{
      data =album;
   }



  return (
    <section className={style.AlbumList}>
       {
       data?.map((item,i)=>(
        <div className={style.container} key={item.id} >
        <div className={style.edit} onClick={()=>handleUpdate(item)}><MdOutlineModeEditOutline color="white" fontSize={20}/></div>
        <div className={style.delete} onClick={()=>handleDelete(item)}><RiDeleteBin6Line color="white" fontSize={20}/></div>
        <div className={style.card}>
          <div className={style.image}>
          <div>{item.title}</div>
          </div>
    
        </div>
      </div>
       ))

       } 
  
    </section>
  );
};

export default AlbumList;
