import { useEffect, useState } from "react";
export default function Slider() {
  //Slider Images Hook
  const [Images, setImages] = useState([]);
  useEffect(() => {
    fetch("http://reachveltest.com/fruitcity_admin/api/Home/get_sliders", {
      headers: {
        "x-api-key": 12345,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setImages(data.data.sliderImages);
      });
  }, []);
  return (
    <>
      <div className="CrslHldr">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            {Images.map((img, index) => {
              var add = "";
              if (index === 1) {
                add = "active";
              }
              return (
                <div className={`carousel-item ${add}`}>
                  <img
                    src={img.slider_image}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              );
            })}
            {/* <div className="carousel-item active">
              <img
                src="Images/MP-Banner-01.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div> */}
            {/* <div className="carousel-item">
              <img
                src="Images/MP-Banner-01.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="Images/MP-Banner-01.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div> */}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
