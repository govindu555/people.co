
import { BsSearchHeart } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useNavigate ,NavLink} from "react-router-dom";
import './index.css'
import { useEffect, useState } from "react";
import axios from "axios";
import {RingLoader} from "react-spinners"
import { BsPencilSquare } from "react-icons/bs";


const SecondPage=()=>{
     const nav=useNavigate()
     const [count,setCount]=useState(1)
     const [data,setData]=useState([])
     const [search,setSearch]=useState("")

      useEffect(()=>{
        gets()
     },[])

     async function gets(){
        const d= await axios.get("https://employeebackend-gznk.onrender.com/getdata")
        setData(d.data)
        setSearch(d.data)
     }

     function addmember(){
              nav('/form')
     }
     
     async function remove(id){
        let conform=window.confirm("Do You Want to delete...")
         if(conform==true){
          const data= await axios.delete("https://employeebackend-gznk.onrender.com/delete/"+id)
          setData(data.data)
          setSearch(data.data)
         }
     }

     function edit(id){
        nav(`/edit/${id}`)
     }

     function sortfun(){
        let d=[...data]
        if(d.length>0){
            let result=d.sort((a,b)=>a.name.localeCompare(b.name))
            setData(result)
        }
     }


     function searchfun(e){
        if(e.target.value!=""){
             const d=search.filter(i=>i.name.includes(e.target.value) || i.role.includes(e.target.value) || i.email.includes(e.target.value))
            if(d.length>0){
                setData(d)
            } 
        }
        else{
          setData(search)
        }
     }
    
    return(
        <div className="two">
        <div>
            <div className="secondbar">
                <h1 className="secondhead">Team members <span>{data.length}</span></h1>
                <div className="search2"><input className="search" type="search" placeholder="Search, name,role,email" onChange={searchfun}/><BsSearchHeart className="searchicon"/></div>
                <div className="add"><button className="addbutton" onClick={sortfun}>Sort name</button><button className="addbutton" onClick={addmember}>+ ADD MEMBER</button></div>
            </div>
            <div className="table">
                <div className="tablehead">
                    <h1 className="head">S.no</h1>
                    <h1 className="head">Name</h1>
                    <h1 className="head">Role</h1>
                    <h1 className="head">Email</h1>
                </div>{data.length?
                <div className="table2">{ data.map((item,index)=>(
                    <><div key={index} className="tablecol">
                       <NavLink className="link" to={`/user/${item._id}`}>
                       <h1 className="item">{index+count}</h1>
                        <h1 className="item">{item.name}</h1>
                        <h1 className="item">{item.role}</h1>
                        <h1 className="item">{item.email}</h1>
                        </NavLink>
                        <BsPencilSquare className="edit" onClick={()=>edit(item._id)}/>
                        <button type="button" className="delect" onClick={()=>remove(item._id)}><BsFillTrash3Fill className="delecticon"/></button>
                    </div><hr/></>))}
                </div>:<div className="load"><RingLoader
                          color="#ab20cf"
                          size={60}
                          speedMultiplier={1}
                          /></div>}
            </div>
        </div>
        </div>
    )
}
export default SecondPage;