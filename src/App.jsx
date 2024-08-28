import NavbarPage from "./navbar";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import FirstPage from "./firstpage";
import SecondPage from "./secondpage";
import FormPage from "./formpage";
import UserDetails from "./userdetails";


const App=()=>{
  return(
   <BrowserRouter>
   <NavbarPage/>
   <Routes>
    <Route path="/" Component={FirstPage}/>
    <Route path="/second" Component={SecondPage}/>
    <Route path="/form" Component={FormPage}/>
    <Route path="/user/:name?" Component={UserDetails}/>
   </Routes>
   </BrowserRouter>
  )
}
export default App;