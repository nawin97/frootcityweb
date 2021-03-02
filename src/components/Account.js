export default function Account() {
  return (
    <>
      <div className="container-fluid InnrPgHldr">
        <div className="container-xxl">
          <div className="row CrtChkFlw">
            <span className="FlTtl fs-4">
              <strong>My Account</strong>
            </span>
            <div className="col-12">
              <div className="row HdrHldr">
                <div className="col-12">
                  <strong>My Profile</strong>
                </div>
              </div>
              <div className="row DtlsHldr ChkOut">
                <div className="col-md-4 PrfDtls">
                  <span className="PrfTtl">Your Name</span>
                  <span className="PrfTxt">
                    <strong>Vamshi Krishna</strong>
                  </span>
                </div>
                <div className="col-md-4 PrfDtls">
                  <span className="PrfTtl">Your Mobile No.</span>
                  <span className="PrfTxt">
                    <strong>+91 1234567890</strong>
                  </span>
                </div>
                <div className="col-md-4 PrfDtls">
                  <span className="PrfTtl">Your Email ID</span>
                  <span className="TPrfxt">
                    <strong>vamshi.krishna@gmail.com</strong>
                  </span>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-primary EdtInfBtn" type="submit">
                    Edit Personal Info
                  </button>
                </div>
              </div>
              <div className="row HdrHldr">
                <div className="col-12">
                  <strong>My Address</strong>
                </div>
              </div>
              <div className="row DtlsHldr ChkOut">
                <div className="col-12 AddDtls">
                  <div className="row">
                    <div className="col-12">
                      <span className="AddTtl">
                        <strong>Home</strong>
                        <a href="#" className="EdtLnk">
                          <strong>Edit this address</strong>
                        </a>
                      </span>
                      <span className="AddTxt">
                        7-4-674/2, Seacon Prime Ansar Apartment, Lane next to
                        More Super Market, Errum Manzil Colony, Hyderabad -
                        500082
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 AddDtls">
                  <div className="row">
                    <div className="col-12">
                      <span className="AddTtl">
                        <strong>Office</strong>
                        <a href="#" className="EdtLnk">
                          <strong>Edit this address</strong>
                        </a>
                      </span>
                      <span className="AddTxt">
                        9-5/148, Global House, Next to Andhra Bank, Abids,
                        Hyderabad - 500001
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-primary AddAddrss" type="submit">
                    Add Address
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
