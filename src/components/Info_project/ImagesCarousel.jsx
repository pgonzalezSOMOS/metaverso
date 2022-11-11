import Carousel from 'react-bootstrap/Carousel';

function ImagesCarousel(props) {
const data = props.customData

  return (
    
    <Carousel slide={false} interval={null} indicators={false} > 

      <Carousel.Item >
        <img
          className="d-block w-100"
          src={data.fullImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="info_projects--details">
                 <p><span className="blue"><b>{data.brand}</b> X</span> <span className="purple"><b>{data.project}</b></span></p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          // src={data.fullImage}
          src={"https://www.iebschool.com/blog/wp-content/uploads/2021/11/metaverso.png"}
          alt="Second slide"
        />
        
        <Carousel.Caption>
          <div className="info_projects--details">
                <p><span className="blue"><b>{data.brand}</b> X</span> <span className="purple"><b>{data.project}</b></span></p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          // src={data.fullImage}
          src={"https://migadvertising.com/wp-content/uploads/2022/07/metaverso_mig_prisma-930x620.jpg"}
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className="info_projects--details">
                <p><span className="blue"><b>{data.brand}</b> X</span> <span className="purple"><b>{data.project}</b></span></p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImagesCarousel;