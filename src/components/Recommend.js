export default function Recommend() {
  return (
    <>
      {/* MP Products */}
      <div className="container-fluid MP-Prdcts">
        <div className="container-xxl">
          <div className="row">
            <div className="col TtlHldr">
              <span className="Ttl fs-3">
                <strong>Recommended for you</strong>
              </span>
              <span className="Txt">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </span>
            </div>
          </div>
          <div className="row PrdctRw">
            <div className="col-md-3">
              <div className="PrdctHldr">
                <span className="OffrPrct">
                  <strong>25% Off</strong>
                </span>
                <img src="Images/Product.png" className="PrdctImg" />
                <span className="PrdctNme">
                  <strong>Kiwi</strong>
                </span>
                <div className="row">
                  <div className="col-6">
                    <span className="OffrAmnt text-decoration-line-through">
                      <strong>INR 134</strong>
                    </span>
                    <span className="PrdctAmnt fs-5">
                      <strong>INR 100</strong>
                    </span>
                  </div>
                  <div className="col-6">
                    <span className="PrdcWgTtl">Price per</span>
                    <span className="PrdcWgDtls fs-5">
                      <strong>1 KG</strong>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <button
                      className="btn btn-primary WshLst"
                      type="submit"
                    ></button>
                  </div>
                  <div className="col-9">
                    <button className="btn btn-primary AddtoCart" type="submit">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="PrdctHldr">
                <img src="Images/Product.png" className="PrdctImg" />
                <span className="PrdctNme">
                  <strong>Kiwi</strong>
                </span>
                <div className="row">
                  <div className="col-6">
                    <span className="OffrAmnt text-decoration-line-through">
                      <strong>INR 134</strong>
                    </span>
                    <span className="PrdctAmnt fs-5">
                      <strong>INR 100</strong>
                    </span>
                  </div>
                  <div className="col-6">
                    <span className="PrdcWgTtl">Price per</span>
                    <span className="PrdcWgDtls fs-5">
                      <strong>1 KG</strong>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <button
                      className="btn btn-primary WshLst"
                      type="submit"
                    ></button>
                  </div>
                  <div className="col-9">
                    <button className="btn btn-primary AddtoCart" type="submit">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="PrdctHldr">
                <span className="OffrPrct">
                  <strong>25% Off</strong>
                </span>
                <img src="Images/Product.png" className="PrdctImg" />
                <span className="PrdctNme">
                  <strong>Kiwi</strong>
                </span>
                <div className="row">
                  <div className="col-6">
                    <span className="OffrAmnt text-decoration-line-through">
                      <strong>INR 134</strong>
                    </span>
                    <span className="PrdctAmnt fs-5">
                      <strong>INR 100</strong>
                    </span>
                  </div>
                  <div className="col-6">
                    <span className="PrdcWgTtl">Price per</span>
                    <span className="PrdcWgDtls fs-5">
                      <strong>1 KG</strong>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <button
                      className="btn btn-primary WshLst"
                      type="submit"
                    ></button>
                  </div>
                  <div className="col-9">
                    <button className="btn btn-primary AddtoCart" type="submit">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="PrdctHldr">
                <img src="Images/Product.png" className="PrdctImg" />
                <span className="PrdctNme">
                  <strong>Kiwi</strong>
                </span>
                <div className="row">
                  <div className="col-6">
                    <span className="OffrAmnt text-decoration-line-through">
                      <strong>INR 134</strong>
                    </span>
                    <span className="PrdctAmnt fs-5">
                      <strong>INR 100</strong>
                    </span>
                  </div>
                  <div className="col-6">
                    <span className="PrdcWgTtl">Price per</span>
                    <span className="PrdcWgDtls fs-5">
                      <strong>1 KG</strong>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <button
                      className="btn btn-primary WshLst Actv"
                      type="submit"
                    ></button>
                  </div>
                  <div className="col-9">
                    <button className="btn btn-primary AddtoCart" type="submit">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col PrdctBtnHldr">
              <button className="btn btn-primary AddMre" type="submit">
                Load more...
              </button>
              <button className="btn btn-primary VwAll" type="submit">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
