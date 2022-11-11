//Import React 
import React from "react";

//Import images
import Paths from "../../src/assets/images/Paths.svg"
import background from "../../src/assets/images/Background.png"

//Import components
import Box from "../components/Home/Box/Box"
import Footer from "../components/Home/Footer/Footer"
import Projects from "../components/Home/Projects/Projects";

//Import animations
import 'animate.css';


function Home(props) {

const customData = props.customData
  return (
    <div className="main__container">
        <div className="home__div">
          <section className="home__div__section animate__animated animate__bounceInUp ">    {/* animate__fadeInUp */}
                <div className="home__div__section__div">
                    <h1 className="home__div__section__div--title ">SOMOS METAVERSO</h1>
                    <p className="home__div__section__div--description">Acompañamos a las marcas en su camino al metaverso – desde la estrategia a la implementación, sea un evento, un showroom o un mundo virtual inmersivo – desarrollamos experiencias personalizadas en la web3.</p>
                </div>
                <button className="home__div__section__div__button">CONECTAR</button>
            </section>  
            <section>
                    <img src={Paths} alt="paths" className="home__div__section__img" />
            </section>  
        </div> 
        
        <div className="home__content">
           <section className="home__content--long">
                <Box information={customData.contentInfo[0]}/>
            </section>
             <section className="home__content--shorts">
                <Box information={customData.contentInfo[1]} />
                <Box information={customData.contentInfo[2]} />
                <Box information={customData.contentInfo[3]} />
            </section> 
        </div> 

        <div className="home__bottom">
            <Projects customData={customData} />
                <img src={background} alt="background" className="home__bottom__background" /> 
            <Footer/> 
        </div>
    </div>
)}
export default Home;