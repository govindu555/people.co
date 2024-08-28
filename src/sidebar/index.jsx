import './index.css'
import { BsGrid } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
const SideBar=()=>{
    return(
        <aside>
        <NavLink to="/" className="firstlink"><BsGrid className='sideicon'/> Overview</NavLink>
        <NavLink to="/second" className="secondlink"><BsGrid className='sideicon'/> People Directory</NavLink>
        </aside>
    )
}
export default SideBar;