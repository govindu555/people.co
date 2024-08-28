import './index.css'

const NavbarPage=()=>{
    return(
        <div>
        <nav className="mainbar">
            <h1 className='mainname'>PEOPLE.CO</h1>
            <div className='mainbar2'>
            <img className='mainlogo' width={50} height={50} src="https://static.vecteezy.com/system/resources/previews/014/108/416/non_2x/los-angeles-feb-6-john-doe-at-the-musicares-2015-person-of-the-year-gala-at-a-los-angeles-convention-center-on-february-6-2015-in-los-angeles-ca-free-photo.jpg"/>
             <p className='logoname'>Jane Doe</p>
            </div>
            </nav>
        </div>
    )
}

export default NavbarPage;