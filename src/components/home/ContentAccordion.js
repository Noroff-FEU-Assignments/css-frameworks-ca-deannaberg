import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Share from "./Share";
import ImgOne from "../../images/tab-images/tab-1.jpg";
import ImgTwo from "../../images/tab-images/tab-2.jpg";
import ImgThree from "../../images/tab-images/tab-3.jpg";

function ContentAccordion() {
    return <div className="d-md-none">
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>First</Accordion.Header>
                <Accordion.Body>
                    <div className="">

                        <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo
                            laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra
                            lectus non maximus. Sed condimentum mattis rhoncus. </p>
                        <img className="full-width" src={ImgOne} alt="Vintage TV"></img>
                        <Share className="full-width d-flex justify-content-center" />

                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Second</Accordion.Header>
                <Accordion.Body>
                    <div>

                        <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo
                            laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra
                            lectus non maximus. Sed condimentum mattis rhoncus. </p>
                        <img className="full-width mb-4" src={ImgTwo} alt="Wall of vintage images"></img>
                        <Share className="full-width d-flex justify-content-center" />
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Third</Accordion.Header>
                <Accordion.Body>
                    <div>

                        <p>Morbi eget efficitur turpis.Vivamus pellentesque tortor massa, venenatis pharetra leo
                            laoreet a.Nullam non eleifend justo, a ullamcorper turpis.Cras vehicula pharetra
                            lectus non maximus.Sed condimentum mattis rhoncus.</p>
                        <img className="full-width" src={ImgThree} alt="Old Window"></img>
                        <Share className="full-width d-flex justify-content-center" />
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>


    </div>
}

export default ContentAccordion;