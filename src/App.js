import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [darkMode,setDarkMode]=React.useState(false)
    
    function toggle(){
        setDarkMode(prev=>!prev)
    }
    
    return (
        <div className="container">
            <Navbar toggleDarkMode={toggle} darkMode={darkMode}/>
            <Main darkMode={darkMode}/>
        </div>
    )
}