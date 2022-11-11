//Import React 
import { useLocation } from "react-router-dom"

//Import images
import gallery from "../../src/assets/images/gallery.png"

//Import components
import Footer from "../../src/components/Home/Footer/Footer"
import ImagesCarousel from "../components/Info_project/ImagesCarousel"

function InfoProjects(props) {
  // const customData = props.customData.projects
  const location = useLocation().state;

  return (
      <div className="infoProjects__container">
        <div className="infoProjects__container__div">
          <ImagesCarousel customData={location} id="mainImg" />
          <hr className='infoProjects__container__hr' />
        </div>
        

        <div className="infoProjects__container__gallery">
          {/* To create different paragraphs because it is a text test and I don't know how each one is going to be organized.   */}
          <section >
            <p className="infoProjects__container__gallery--description">{location.description[0]}</p>
            <p className="infoProjects__container__gallery--description">{location.description[1]}</p>
            <p className="infoProjects__container__gallery--description">{location.description[2]}</p>
         
          </section>
        
          <section className="infoProjects__container__gallery--images" > 
              <div>
                <img src={gallery} alt="gallery" />
              </div>
              <div className="infoProjects__container__gallery__div__buttons">
                <button className="infoProjects__container__gallery__div__buttons--ind">PROYECTO ANTERIOR</button>
                <button className="infoProjects__container__gallery__div__buttons--ind">SIGUIENTE PROYECTO</button>
              </div>
          </section> 
        </div> 
      
      <div>
        <Footer/> 
      </div>

      </div>
  )}
  export default InfoProjects;