
import { useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import './index.css'
import axios from "axios"

const EditPage=()=>{
    const pa=useParams()
    const id=pa.id

   const nav=useNavigate()

   const [data,setData]=useState({
    name:"",
    role:"",
    email:"",
    address:"",
    phone:""
   })

    function filedata(e){
        const {name,value}=e.target
        setData({...data,[name]:value})
   }

      function first(e){
         e.preventDefault();
         back()
   }

     async function back(){
         await axios.put("https://employeebackend-gznk.onrender.com/edit/"+id,data)
         nav('/second')
     }

    return(
        <div className="form">
            <form className="form2" onSubmit={first}>
                <h1 className="formhead">Edit Employee Details</h1>
                <div className="col">
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
                <h1 className="user">Address : </h1>
                <input className="userinput" type="text" placeholder="Address" name="address" onChange={filedata} required/>
            </div>
            <div>
                <h1 className="user">Phone : </h1>
                <input className="userinput" type="text" placeholder="Phone" name="phone" onChange={filedata} required/>
            </div>
            </div>
            <div className="formbutton">
                <input className="button2" type="Submit"/>
            </div>
        </form>
        </div>
    )
}
export default EditPage;