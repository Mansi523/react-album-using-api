// imported components from react components.
import Navbar from "./Components/Navbar/Navbar";
import Form from "./Components/AddAlbum/Form";
import AddAlbum from "./Components/AddAlbum/AddAlbum";
import AlbumList from "./Components/Albumlist/AlbumList";
// imported useSatate and useEffect from react
import { useState,useEffect} from "react";

//import toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
// created states with useState
  const[isbtn,setisbtn] = useState(false);
  const[name,setname] = useState("");
  const[album,setalbum] = useState([]);
  const[search,sethandleSearch] = useState([]);
  const[albumname,setalbumname]=useState({});
  const[update,setupdate] =useState(null);
  
  // function for handling clear function
  const handleClear=()=>{
      setname("");
    
  };

  // function for create new album
  const handleCreate = async ()=>{
    if(!name){
      return;
    }
    const album_name = {
      userId:Math.floor(Math.random()*11),
      id: Date.now(),
      title:name,

    }

    try{
      const data = await fetch("https://jsonplaceholder.typicode.com/albums",{
        method: 'POST',
        body: JSON.stringify(album_name),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },

      }); 
        if(data.ok){
          setalbum([album_name,...album]);
          toast("Album Created succesfully!");  
        }
        console.log("add", data.ok);
      }catch(err){
         console.log(err);
      }
      
     setname("");
    setisbtn(false);
  }

  // useEffect for fetching data from the API
useEffect(()=>{

 const album_data = async()=>{
try{
 const data = await fetch("https://jsonplaceholder.typicode.com/albums"); 
   const album = await data.json();
   console.log("album",album);
    setalbum(album);
 }catch(err){
    console.log(err);
 }

}

album_data();
},[])



 //for delete operation
  const handleDelete =async(item)=>{
    try{
      const data = await fetch(`https://jsonplaceholder.typicode.com/albums/${item.id}`,{
        method: 'DELETE',
      
      }); 
        if(data.ok){
          const aldumdata = album.filter((x)=>x.id !== item.id)
          setalbum(aldumdata);
          toast("Album Deleted succesfully!");  
        }
        console.log("delete", data.ok);
      }catch(err){
         console.log(err);
         toast("Something went wrong plz try again later!");  
      }
  }

//for setting item in update and showing the form 
  const handleUpdate =(item)=>{
  setisbtn(true);
  setupdate(item);

  }
//for update operation
 const updateAlbum = async ()=>{
  console.log("update");
  if(!name){
    return;
  }
  try{
    const data = await fetch(`https://jsonplaceholder.typicode.com/albums/${update.id}`,{
      method: 'PATCH',
      body: JSON.stringify({title:name}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },

    }); 
      if(data.ok){
        const albumdata = album.map((item)=>{
          if(item.id == update.id){
            return {...item,title:name};
          }else{
             return item;
          }
        })
        console.log("albumdata",albumdata);
        setalbum(albumdata);
        toast("Album Updated succesfully!");  
      }
      console.log("update", data.ok);
    }catch(err){
       console.log(err);
       toast("Something went wrong plz try again!");
    }

setname("");

setisbtn(false);
setupdate(null);
 }
  
//  search bar logic
const handleSearch=(e)=>{
const searchalbum = e.target.value.toLowerCase();
console.log(searchalbum);


const fliterasearch = album.filter((item,index)=>{
 return item.title.toLowerCase().includes(searchalbum)
})
console.log(fliterasearch)
sethandleSearch(fliterasearch);
}  



  return (
    <div>
    
   <Navbar
    length={album.length}
    handleSearch = {handleSearch}
    search={search}
    album={album}
    albumname={albumname}
   />
    <section style ={{width:"70%",margin:"auto"}}>
    {isbtn && <Form
               name = {name}
               setname = {setname}
               handleClear={handleClear}
               handleCreate={handleCreate}
               update ={update}
              updateAlbum = {updateAlbum}
              />} 

   <AddAlbum 
   setisbtn ={setisbtn} 
             isbtn = {isbtn} 

   />

<AlbumList
    album={album}
    handleDelete={ handleDelete}
    handleUpdate={ handleUpdate}
    search={search}
 />
 
 
 
    <ToastContainer />
    </section>
  
    </div>
  );
}

export default App;
