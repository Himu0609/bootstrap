import "./App.css";

function App() {
  return (
    <div className="container-fluid  ">
      <div className="row justify-content-evenly  ">
        <div className="col-lg-4 col-md-6 col-sm-6 p-0">
          <img
            className="img-fluid  no-padding rounded float-start h-100  "
            src="./images/onenat.PNG"
            alt=""
          />
        </div>
        <div className="col-lg-8 col-md-6 col-sm-6">
          <div className="row justify-content-evenly top ">
            <div className="col">
              <h1 className="text-white p-2">SINGLE EGG</h1>
              <h6 className="text-muted">
                buy bundles to get easily started in the games
              </h6>
              <hr />
            </div>
          </div>
          <div className="row justify-content-evenly middle">
            <div className="col-lg-7 col-sm-12 ">
              <p className="text-muted p-2">Minted Assets</p>
              <p className="text-white p-2 h1">
                110 <span className="h6">/25000</span>
              </p>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p className="text-danger p-2 ">
                <small>division 1 is almost over</small>
              </p>
            </div>
            <div className="col-lg-5 col-sm-12">
              <p className="text-white h1 mb-0">$282.81</p>
              <p className="text-white "><small>pay using USDT/LVDA/LSAN</small></p>
              <button type="button" class="btn btn-light   text-danger py-2 px-5 ">  MINT NOW  </button>
            </div>
          </div>
          <div className="row justify-content-evenly bg-secondary bottom p-4 text-start rounded">
            <div className="col-7 text-white rounded bg-transparent justify-content-left">
          <p className="bg-transparent p-2 h6"> Buy early, get crates of higher rarity!</p> 
          <p className="bg-transparent p-3 h6 text-start">As more and more eggs get sold, chances of receiving Divison 1 eggs go down</p> 
            </div>
            <div className="col-5 bg-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
