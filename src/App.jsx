import NavbarPage from "./navbar";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import FirstPage from "./firstpage";
import SecondPage from "./secondpage";
import FormPage from "./formpage";
import UserDetails from "./userdetails";
import SideBar from "./sidebar";
import EditPage from "./editpage";


const App=()=>{
  return(
   <BrowserRouter>
   <NavbarPage/>
   <SideBar/>
   <Routes>
    <Route path="/" Component={FirstPage}/>
    <Route path="/second" Component={SecondPage}/>
    <Route path="/form" Component={FormPage}/>
    <Route path="/user/:id?" Component={UserDetails}/>
    <Route path="/edit/:id?" Component={EditPage}/>
   </Routes>
   </BrowserRouter>
  )
}
export default App;