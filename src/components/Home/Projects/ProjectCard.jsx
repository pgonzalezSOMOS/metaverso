import vector from "../../../assets/images/Vector.svg"

function ProjectCard(props){

    return(
        <div className="projectCard__card">
          <div className="projectCard__card__info">
            <p >{props.data.brand}</p>
            <p>X</p>
            <p className="projectCard__card__info--blue">{props.data.project}</p>
          </div>
          <div className="projectCard__card__vector">
              <img src={props.data.img} alt="" className="projectCard__card__image"/> 
          </div>
            {/* <img src={vector} alt="vector" className="projectCard__card__vector" />
            <img src={props.data.img} alt="" className="projectCard__card__image"/>  */}
        </div>
      )
    }
    export default ProjectCard;
  