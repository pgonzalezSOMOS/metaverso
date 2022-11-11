//Import react
import React from 'react';
import { useNavigate } from "react-router-dom";

//Import Images
import arrow from "../../../assets/images/arrow.png"

//Import Components
import ProjectCard from './ProjectCard';

//Import all the necesity of the swiperJS
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode"
import "bootstrap/dist/css/bootstrap.min.css"
import "swiper/css/navigation";
//


function Projects (props){
  const [swiper, setSwiper] = React.useState(null);
  
  //useNavigate ON
  const navigate = useNavigate()

  // next image slide
  const nexto = () => {
    swiper.slideNext();
  };

  return(
    <>
    <div className="projects__container">
      <h2 className="projects__container-title">PROYECTOS</h2>
        <div>
            <img src={arrow} alt="next" onClick={nexto} />
        </div>
     </div>

    <div className="container">
        <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"        
        breakpoints={{
          0:{
            slidesPerView: 1, 
            spaceBetween: 10,
          }, 
          500:{
            slidesPerView: 2, 
            spaceBetween: 10,
          }, 
          768:{
            slidesPerView: 3, 
            spaceBetween: 0,
          },
          1024:{
            slidesPerView: 4, 
            spaceBetween: 15,
          }, 
          // 1380:{
          //   slidesPerView: 5, 
          //   spaceBetween: 30,
          // }
        }}
        onSwiper={(s) => {
          setSwiper(s);
        }}
        >
        {props.customData.projects.map(project => 
          <SwiperSlide
          onClick={() => navigate("/metaverso/proyecto", {state: project})}
          key={project.id}
          // className="animate__animated animate__fadeInRight"
          >
              <ProjectCard data={project} />
          </SwiperSlide>
        )}
        </Swiper>
      </div>
    </>
    )
  }
  export default Projects;

 