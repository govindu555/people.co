
import { useParams,useNavigate } from "react-router-dom";
import './index.css'
import { BsArrowLeft } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";

const UserDetails=()=>{
   
    const [data,setData]=useState([])

    const pa=useParams()
    console.log(pa.id)
    const id=pa.id
    const nav=useNavigate()

    useEffect(()=>{
        gets()
    },[])

    async function gets(){
       const d=await axios.get("https://employeebackend-gznk.onrender.com/getdataid/"+id)
       setData(d.data)
    }


    function back(){
       nav('/second')
    }

    return(
        <div className="four">
            <div className="userdetails">
            <div className="arrowback">
            <button className="button4" onClick={back}><BsArrowLeft  className="arrow"/></button>
            <h1 className="userhead">Hi, Welcome...</h1>
            </div>
            <div className="row">
                <div>
                    <h1 className="userinfo">Name</h1>
                    <h1 className="userinfo2">{data.name}</h1>
                </div>
                <div>
                    <h1 className="userinfo">Role</h1>
                    <h1 className="userinfo2">{data.role}</h1>
                </div>
               <div>
                <h1 className="userinfo">Email</h1>
                <h1 className="userinfo2">{data.email}</h1>
               </div>
               <div>
                <h1 className="userinfo">Address</h1>
                <h1 className="userinfo2">{data.address}</h1>
               </div>
               <div>
                <h1 className="userinfo">Phone</h1>
                <h1 className="userinfo2">{data.phone}</h1>
               </div>
            </div>
            </div>
            
        </div>
    )
}
export default UserDetails;