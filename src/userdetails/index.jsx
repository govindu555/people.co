import SideBar from "../sidebar";
import { useParams,useNavigate } from "react-router-dom";
import { contextdata } from "../context";
import { useContext } from "react";
import './index.css'

const UserDetails=()=>{
    const pa=useParams()
    const user=pa.name
    const nav=useNavigate()
    const [userdata]=useContext(contextdata)
    const result=userdata.find(i=>i.name==user)

    function back(){
       nav('/second')
    }

    return(
        <div className="four">
            <SideBar/>
            <div className="userdetails">
            <h1 className="userhead">Employee Details</h1>
            <h1>Name : {result.name}</h1>
            <h1>Role : {result.role}</h1>
            <h1>Email : {result.email}</h1>
            <h1>Address : Hyderabad</h1>
            <button className="button4" onClick={back}>Back</button>
            </div>
            
        </div>
    )
}
export default UserDetails;