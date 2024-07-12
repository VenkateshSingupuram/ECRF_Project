import { useState } from "react";

import { Fade } from "react-awesome-reveal";

import Navbar from "../Navbar";

const Site = () => {
  const [croButton, setCroButton] = useState(false);

  const croButtonHandle = () => {
    setCroButton(!croButton);
  };
  return (
    <div className="bg">
      <form>
        <div className="study-container">
          <Navbar />
          <div className="studyData-container">
            <h1 className="study-txt">Site Details</h1>
          </div>
          <div className={croButton ? "study-data" : ""}>
            <Fade>
              <div className="">
                <div className="container-width">
                  <label className="label-txt">Site ID</label>
                  <input type="number" className="input-width" />
                </div>
                <div className="container-width">
                  <label className="label-txt">Site Name</label>
                  <textarea type="text" className="input-width"></textarea>
                </div>
                <div className="container-width">
                  <label className="label-txt">
                    Legal Name (as per <br /> license)
                  </label>
                  <textarea type="text" className="input-width"></textarea>
                </div>
                <div className="container-width">
                  <label className="label-txt">Institue Name</label>
                  <textarea className="input-width" maxLength={100}></textarea>
                </div>
                <div>
                  <h1 className="sub-section-txt">Address</h1>
                  <div className="container-width">
                    <label className="label-txt">Address 1</label>
                    <textarea type="text" className="input-width"></textarea>
                  </div>
                  <div className="container-width">
                    <label className="label-txt">Address 2</label>
                    <textarea type="text" className="input-width"></textarea>
                  </div>
                  <div className="container-width">
                    <label className="label-txt">Address 3</label>
                    <textarea type="text" className="input-width"></textarea>
                  </div>
                  <div className="container-width">
                    <label className="label-txt">Address 4</label>
                    <textarea type="text" className="input-width"></textarea>
                  </div>
                  <div className="container-width">
                    <label className="label-txt">City</label>
                    <textarea type="text" className="input-width"></textarea>
                  </div>
                  <div className="container-width">
                    <label className="label-txt">District</label>
                    <textarea type="text" className="input-width"></textarea>
                  </div>
                  <div className="container-width">
                    <label className="label-txt">Region</label>
                    <textarea type="text" className="input-width"></textarea>
                  </div>
                  <div className="container-width">
                    <label className="label-txt">Zip Code</label>
                    <textarea type="text" className="input-width"></textarea>
                  </div>
                  <div className="container-width">
                    <label className="label-txt">Country</label>
                    <textarea type="text" className="input-width"></textarea>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="sub-section-txt">Communication</h1>
                <div className="container-width">
                  <label className="label-txt">Office Telophone</label>
                  <input type="text" className="input-width" />
                </div>
                <div className="container-width">
                  <label className="label-txt">Extension</label>
                  <input type="text" className="input-width" />
                </div>
                <div className="container-width">
                  <label className="label-txt">Mobile Telophone</label>
                  <input type="text" className="input-width" />
                </div>
                <div className="container-width">
                  <label className="label-txt">Email</label>
                  <textarea type="text" className="input-width"></textarea>
                </div>
                <div className="container-width">
                  <label className="label-txt">Website</label>
                  <textarea type="text" className="input-width"></textarea>
                </div>
              </div>
              <div className="">
                <h1 className="sub-section-txt">Notes</h1>
                <div className="container-width">
                  <label className="label-txt">Notes</label>
                  <textarea
                    className="container-width"
                    rows={5}
                    cols={100}
                  ></textarea>
                </div>
              </div>

              <div className="container-width">
                <label className="label-txt">Created By</label>
                <input type="text" className="input-width" />
              </div>
              <div className="container-width">
                <label className="label-txt">Created On</label>
                <input type="text" className="input-width" />
              </div>
              <div className="container-width">
                <label className="label-txt">Changed By</label>
                <input type="text" className="input-width" />
              </div>
              <div className="container-width">
                <label className="label-txt">Changed On</label>
                <input type="text" className="input-width" />
              </div>

              <button>Save</button>
            </Fade>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Site;
