import Slider from "./Slider";
import Recommend from "./Recommend";
export default function Home() {
  return (
    <>
      <Slider />
      <div className="container-fluid MP-WbFtrs">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-4 FtrsHldr">
              <div className="row">
                <div className="col-5">
                  <img src="Images/Blank.png" className="WbFtrImg ImgOn" />
                </div>
                <div className="col-7">
                  <span className="Ttl fs-5">
                    <strong>Always Fresh</strong>
                  </span>
                  <span className="Txt">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4 FtrsHldr">
              <div className="row">
                <div className="col-5">
                  <img
                    src="Images/Blank.png"
                    className="WbFtrImg Imgtitle and makeTw"
                  />
                </div>
                <div className="col-7">
                  <span className="Ttl fs-5">
                    <strong>Secure Payment</strong>
                  </span>
                  <span className="Txt">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4 FtrsHldr">
              <div className="row">
                <div className="col-5">
                  <img src="Images/Blank.png" className="WbFtrImg ImgTh" />
                </div>
                <div className="col-7">
                  <span className="Ttl fs-5">
                    <strong>Support 24x7</strong>
                  </span>
                  <span className="Txt">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Recommend />
    </>
  );
}
