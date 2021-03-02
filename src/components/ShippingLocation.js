export default function ShippingLocation() {
  return (
    <>
      <div
        className="modal fade show"
        id="staticBackdropLive"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLiveLabel"
        style={{ display: "block", paddingRight: "17px" }}
        // style="display: block; padding-right: 17px;"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content PuPHldr">
            <div className="modal-header">
              <div className="PupHdr">
                <span className="MDl-Icn Shppng"></span>
                <span className="MDl-Ttl fs-5">
                  <strong>Select your shipping location</strong>
                </span>
              </div>
            </div>
            <div className="modal-body">
              <div className="LctnSrchBx">
                <div className="row">
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-11">
                        <input
                          className="form-control LocSrchBx"
                          type="text"
                          placeholder="Enter your location/ pincode"
                          aria-label="Enter your location/ pincode"
                        />
                      </div>
                      <div className="col-1 MPSrchBtnHldr">
                        <input
                          className="btn btn-primary LocSrchBxBtn"
                          type="submit"
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <input
                      className="btn btn-primary LocateBxBtn"
                      type="submit"
                      value="Locate me"
                    />
                  </div>
                </div>
              </div>
              <div className="LctnPplrLctsHldr">
                <span className="fs-6 Ttl">Popular locations</span>
                <ul className="LocLst">
                  <li>
                    <a href="#" className="LctnLnk">
                      Loction
                    </a>
                  </li>
                  <li>
                    <a href="#" className="LctnLnk">
                      Loction
                    </a>
                  </li>
                  <li>
                    <a href="#" className="LctnLnk">
                      Loction
                    </a>
                  </li>
                  <li>
                    <a href="#" className="LctnLnk">
                      Loction
                    </a>
                  </li>
                  <li>
                    <a href="#" className="LctnLnk">
                      Loction
                    </a>
                  </li>
                  <li>
                    <a href="#" className="LctnLnk">
                      Loction
                    </a>
                  </li>
                  <li>
                    <a href="#" className="LctnLnk">
                      Loction
                    </a>
                  </li>
                  <li>
                    <a href="#" className="LctnLnk">
                      Loction
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <a href="#" className="link-primary PuPCnclBtn">
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
}
