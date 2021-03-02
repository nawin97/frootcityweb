import { Link } from "react-router-dom";
export default function TopBar() {
  return (
    <>
      <div className="container-fluid MPHdr">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-2">
              <div className="LogoHldr">
                <img src="Images/Blank.png" className="LogoImg" />
              </div>
            </div>
            <div className="col-md-10">
              <div className="row SrchLocHldr">
                <div className="col-md-8 MPSrchHldr">
                  <div className="row">
                    <div className="col-11">
                      <input
                        className="form-control HdrSrchBx"
                        type="text"
                        placeholder="Search for products"
                        aria-label="Search for products"
                      />
                    </div>
                    <div className="col-1 MPSrchBtnHldr">
                      <input
                        className="btn btn-primary HdrSrchBtn"
                        type="submit"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="MPLocHldr">
                    <div className="row">
                      <div className="col-2 LocIcHldr"></div>
                      <div className="col-8 LocDts">
                        <span className="AraNm">
                          <strong>Jaybhery Enclave</strong>
                        </span>
                        <span className="AraDtls">
                          Gachibowli, Hyderabad, 50034
                        </span>
                      </div>
                      <div className="col-2">
                        <input
                          className="btn btn-primary LocBtn"
                          type="submit"
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-10 MnMnuHldr">
                  <ul className="WbMnu" id="WbMnHldr">
                    <li>
                      <a href="#" className="WbMnuLNk fs-5 Actv">
                        <strong>Home</strong>
                      </a>
                    </li>
                    <li>
                      <span className="WbMnuLNk fs-5">
                        <strong>Products</strong>
                      </span>
                      <div className="WbSbMnu">
                        <ul className="SbMnu">
                          <li>
                            <span className="SbMnuLNk fs-6">
                              <strong>Apple</strong>
                            </span>
                            <div className="WbSbInnrMnu">
                              <ul className="SbInnrMnu">
                                <li>
                                  <a href="#" className="SbInnrLNk fs-6">
                                    Kashmiri Apple
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="SbInnrLNk fs-6">
                                    Iran Apple
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="SbInnrLNk fs-6">
                                    Green Apple
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <span className="SbMnuLNk fs-6">
                              <strong>Mangoes</strong>
                            </span>
                            <div className="WbSbInnrMnu">
                              <ul className="SbInnrMnu">
                                <li>
                                  <a href="#" className="SbInnrLNk fs-6">
                                    Kashmiri Apple
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="SbInnrLNk fs-6">
                                    Iran Apple
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="SbInnrLNk fs-6">
                                    Green Apple
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <a href="#" className="SbMnuLNk fs-6">
                              <strong>Banana</strong>
                            </a>
                          </li>
                          <li>
                            <span className="SbMnuLNk fs-6">
                              <strong>Grapes</strong>
                            </span>
                            <div className="WbSbInnrMnu">
                              <ul className="SbInnrMnu">
                                <li>
                                  <a href="#" className="SbInnrLNk fs-6">
                                    Kashmiri Apple
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="SbInnrLNk fs-6">
                                    Iran Apple
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="SbInnrLNk fs-6">
                                    Green Apple
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <a href="#" className="SbMnuLNk fs-6">
                              <strong>Kiwi</strong>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="SbMnuLNk fs-6">
                              <strong>Peach</strong>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="#" className="WbMnuLNk fs-5">
                        <strong>Our Offers</strong>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="WbMnuLNk fs-5">
                        <strong>About Us</strong>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="WbMnuLNk fs-5">
                        <strong>Blog</strong>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="WbMnuLNk fs-5">
                        <strong>News</strong>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="WbMnuLNk  fs-5 Cart">
                        <strong>Cart</strong>
                        <span className="fs-6 CrtCount">0</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-2 MnAccHldr">
                  <ul id="WbAccHldr" className="WbAccMnu">
                    <li>
                      <a
                        href="#"
                        className="WbAccMnuLNk fs-5"
                        style={{ display: "none" }}
                      >
                        <strong>Login</strong>
                      </a>
                      <span className="WbAccMnuLNk fs-5">
                        <strong>Welcome</strong>
                      </span>
                      <div className="WbAccMnuDTls">
                        <span className="WlcmTxt fs-6">
                          <strong>Welcome</strong>
                        </span>
                        <span className="AccNm fs-5">
                          <strong>Vamshi Krishna</strong>
                        </span>
                        <ul className="AccSbMnu">
                          <li>
                            <Link to="/account" className="AccSbMnuLNk fs-6">
                              My Account
                            </Link>
                          </li>
                          <li>
                            <a href="#" className="AccSbMnuLNk fs-6">
                              Orders
                            </a>
                          </li>
                          <li>
                            <a href="#" className="AccSbMnuLNk fs-6">
                              Wishlist
                            </a>
                          </li>
                          <li>
                            <a href="#" className="AccSbMnuLNk fs-6">
                              <strong>Logout</strong>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
