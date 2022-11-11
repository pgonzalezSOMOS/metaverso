//import React
import { useState } from "react"
import { useNavigate } from "react-router-dom"

//Import components

//Import images
import normalMenu from "../../../assets/images/menu.png"
import longMenu from "../../../assets/images/menuhover.png"
import cancelMenu from "../../../assets/images/menuclick.png"
import arrow from  "../../../assets/images/arrow.png"
function NavBar(){

  let [active, setActive] = useState(false)
  const navigate = useNavigate()

    //change the state 
    function changeActive(){
      setActive(!active)
    }

    //Show or not, the div with the menu
    function showMenu() {
 
      if (active == true) {
        
        document.getElementById("normalMenu").style.visibility = "visible"
        const el = document.querySelector('.navbar__container__div2');
        el.classList.remove('opacity')

       
      } else {
        document.getElementById("normalMenu").style.visibility = "hidden"
        const el = document.querySelector('.navbar__container__div2');
        el.classList.add('opacity')
      }
    }
   



    return (  <div className="navbar__container" onClick={showMenu} >

        <div className="navbar__container__div" >
          <img src={normalMenu} id="normalMenu" />
        </div>
        {/* <div className="imagen_cambiante" id="normalMenu"></div> */}

         <div className="navbar__container__div2" id="nav2" onClick={changeActive} >
          <img src={ active === true ? cancelMenu : longMenu} id="mainmenu"  className={active ? "cancelmenu" : null }/>
          <div className="navbar__container__div2__row" >
            <p className="NavBar--menu--blue navBar--purple" onClick={()=> navigate("/metaverso")}>HOME</p>
            <p className="NavBar--menu--blue navBar--purple">SERVICIOS</p>
            <p className="NavBar--menu--blue navBar--purple">PROYECTOS</p>
            <p className="NavBar--menu--blue navBar--purple">CONTACTO</p>
          </div>
        </div>     
          
  </div>

  )}
  export default NavBar;