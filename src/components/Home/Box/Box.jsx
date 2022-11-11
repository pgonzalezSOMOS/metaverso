import React from "react";

function Home(props) {
    const information = props.information
    const hasImage = information.Image

  return ( 
  <>
  { hasImage === undefined ? 
  
        ( <div className="box__short__box animate__animated animate__bounceIn">
            <section className="box__short__box__section">
                <h2 className="box__short__box__section--title">{information.BoxTitle}</h2>
                <p className="box__short__box__section--description">{information.BoxDescription[0]}</p>
                <p className="box__short__box__section--description">{information.BoxDescription[1]}</p>
                <p className="box__short__box__section--description">{information.BoxDescription[2]}</p>
            </section> 
            </div>)
        : 
        ( 
        <div className="box__long__box animate__animated animate__slideInUp">
            <section>
                <img src={hasImage} alt="experiences" className="box__long__box__img"/>
            </section>
            <section className="box__long__box__section">
                <h2 className="box__long__box__section--title">{information.BoxTitle}</h2>
                <p className="box__long__box__section--description">{information.BoxDescription[0]}</p>
                <p className="box__long__box__section--description">{information.BoxDescription[1]}</p>
                <p className="box__long__box__section--description">{information.BoxDescription[2]}</p>
            </section>
     </div>)
    }  

  </>
)}
export default Home;
∫
