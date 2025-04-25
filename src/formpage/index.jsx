import SideBar from "../sidebar";
import { useNavigate } from "react-router-dom";
import { useState} from "react";
import './index.css'
import { addpeople} from "../redux";
import { useDispatch} from "react-redux";

const FormPage=()=>{
   const nav=useNavigate()

   const dispath=useDispatch()

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

   function first(e){
    e.preventDefault();
    back()
   }

     function back(){
       dispath(addpeople(data))
         nav('/second')
     }

    return(
        <div className="form">
            <SideBar/>
            <form className="form2" onSubmit={first}>
                <h1 className="formhead">Enter Employee Details</h1>
                    <img className="pic" width={100} height={100} src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="/>
                     <input type="file" name="photo"/>
                <div className="formname">
                <h1 className="user">Name : </h1>
                <input className="userinput" type="text" placeholder="Name" name="name" onChange={filedata} required/>
            </div>
            <div className="formname">
                <h1 className="user">Role : </h1>
                <input className="userinput" type="text" placeholder="Role" name="role" onChange={filedata} required/>
            </div>
            <div className="formname">
                <h1 className="user">Email : </h1>
                <input className="userinput" type="email" placeholder="Email" name="email" onChange={filedata} required/>
            </div>
            <div>
                <input id="id" type="checkbox" required/>
                <label htmlFor="id"> Are you Agree</label>
            </div>
            <div className="formbutton">
                <input className="button2" type="Submit"/>
            </div>
        </form>
        </div>
    )
}
export default FormPage;