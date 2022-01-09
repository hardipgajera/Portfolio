import React, { Component } from "react";
// import { Icon } from "@iconify/react";
// import Swift from "@iconify/icons-logos/swift";
// import IOS from "@iconify/icons-logos/ios";
// import vsCodeIcon from "@iconify/icons-logos/visual-studio-code";
import PortFolio from "../images/Hardip.jpeg";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      // var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={PortFolio}
                    alt="Avatar placeholder"
                  />
                  <div style={{display : 'flex' , justifyContent : 'space-between'}}>
                    <img
                      src="https://img.icons8.com/color/50/000000/swift.png"
                      alt="img1"
                    />
                    <img
                      src="https://img.icons8.com/fluency/50/000000/swiftui.png"
                      alt="img1"
                    />
                    <img
                      src="https://img.icons8.com/color/50/000000/xcode.png"
                      alt="img1"
                    />
                  </div>
                  {/* <Icon
                    icon={Swift}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  /> */}
                  {/* <Icon
                    icon={IOS}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={vsCodeIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  /> */}
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
