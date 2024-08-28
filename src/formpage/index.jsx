import SideBar from "../sidebar";
import { useNavigate } from "react-router-dom";
import { useState,useContext } from "react";
import { contextdata } from "../context";
import './index.css'

const FormPage=()=>{
   const nav=useNavigate()
   const [userdata,setUserdata]=useContext(contextdata)

   const [data,setData]=useState({
    name:"",
    role:"",
    email:""
   })

   function filedata(e){
        const {name,value}=e.target
        setData((prev)=>{
            return {...prev,[name]:value}
         })
   }

     function back(){
         setUserdata([...userdata,data])
         nav('/second')
     }

    return(
        <div className="form">
            <SideBar/>
            <div className="form2">
                <h1 className="formhead">Enter Employee Details</h1>
                    <img className="pic" width={100} height={100} src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="/>
                     <input type="file" name="photo"/>
                <div className="formname">
                <h1 className="user">Name : </h1>
                <input className="userinput" type="text" placeholder="Name" name="name" onChange={filedata}/>
            </div>
            <div className="formname">
                <h1 className="user">Role : </h1>
                <input className="userinput" type="text" placeholder="Role" name="role" onChange={filedata}/>
            </div>
            <div className="formname">
                <h1 className="user">Email : </h1>
                <input className="userinput" type="email" placeholder="Email" name="email" onChange={filedata}/>
            </div>
            <div className="formbutton">
                <button className="button2" type="button"onClick={back}>Save</button>
            </div>
        </div>
        </div>
    )
}
export default FormPage;