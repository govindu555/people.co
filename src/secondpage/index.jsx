import SideBar from "../sidebar";
import { BsSearchHeart } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useNavigate ,NavLink} from "react-router-dom";
import { useContext } from "react";
import { contextdata } from "../context";
import './index.css'


const SecondPage=()=>{
     const nav=useNavigate()
     const [userdata,setUserdata]=useContext(contextdata)

     function addmember(){
              nav('/form')
     }
     
     function remove(item){
            setUserdata(userdata.filter(i=>i.name!=item.name))
     }
    
    return(
        <div className="two">
        <SideBar/>
        <div>
            <div className="secondbar">
                <h1 className="secondhead">Team members <span>{userdata.length}</span></h1>
                <div className="search2"><input className="search" type="search" placeholder="Search"/><BsSearchHeart className="searchicon"/></div>
                <div className="add"><button className="addbutton" onClick={addmember}>+ ADD MEMBER</button></div>
            </div>
            <div>
                <div className="tablehead">
                    <h1 className="head">Name</h1>
                    <h1 className="head">Role</h1>
                    <h1 className="head">Email address</h1>
                </div>
                <hr/>
                <div>{ userdata.map(item=>(
                    <><div className="tablecol">
                       <NavLink to={`/user/${item.name}`}><h1>{item.name}</h1></NavLink>
                        <h1>{item.role}</h1>
                        <h1>{item.email}</h1>
                        <button type="button" className="delect" onClick={()=>remove(item)}><BsFillTrash3Fill className="delecticon"/></button>
                    </div><hr/></>))}
                </div>
            </div>
        </div>
        </div>
    )
}
export default SecondPage;