import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Share from "./Share";
import ImgOne from "../../images/tab-images/tab-1.jpg";
import ImgTwo from "../../images/tab-images/tab-2.jpg";
import ImgThree from "../../images/tab-images/tab-3.jpg";

function ContentTabs() {
    return <div className="d-none d-md-block">
        <Tabs defaultActiveKey="0" id="uncontrolled-tab-example" className="mb-0">
            <Tab eventKey="0" title="First">
                <div className="row p-4">
                    <img className="col-4" src={ImgOne} alt="Vintage TV"></img>
                    <div className="col-8">
                        <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo
                            laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra
                            lectus non maximus. Sed condimentum mattis rhoncus. </p>
                        <Share />
                    </div>
                </div>
            </Tab>
            <Tab eventKey="1" title="Second">
                <div className="row p-4">
                    <img className="col-4" src={ImgTwo} alt="Wall of vintage images"></img>
                    <div className="col-8">
                        <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo
                            laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra
                            lectus non maximus. Sed condimentum mattis rhoncus. </p>
                        <Share />
                    </div>
                </div>
            </Tab>
            <Tab eventKey="2" title="Third">
                <div className="row p-4">
                    <img className="col-4" src={ImgThree} alt="Old Window"></img>
                    <div className="col-8">
                        <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo
                            laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra
                            lectus non maximus. Sed condimentum mattis rhoncus. </p>
                        <Share />
                    </div>
                </div>
            </Tab>
        </Tabs>
    </div>
}
export default ContentTabs;