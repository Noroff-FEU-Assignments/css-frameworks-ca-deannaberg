import React from "react";
import Footer from "../Footer";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Contact() {
    return <>
        <div className="wrapper">
            <div className="container">
                <div className="float-md-end">
                    <address className="address float-start">
                        <div className="d-flex align-items-baseline">
                            <FontAwesomeIcon className="contact-icon" icon="envelope" />
                            <p>hello@yay.com</p>
                        </div>
                        <div className="d-flex align-items-baseline">
                            <FontAwesomeIcon className="contact-icon" icon="phone" />
                            <p>123 456 7890</p>
                        </div>
                        <div className="d-flex align-items-baseline">
                            <FontAwesomeIcon className="contact-icon" icon="map-marker-alt" />
                            <div>
                                <p>123 Some Street</p>
                                <p>Somewhere</p>
                                <p>Some City</p>
                                <p>10000</p>
                            </div>
                        </div>
                    </address>
                </div>
                <div className="float-md-start">
                    <h1>Submit Your Details</h1>
                    <Form className="form shadow p-4">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                        <Form.Label htmlFor="basic-url">Website</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                                https://
                            </InputGroup.Text>
                            <FormControl id="basic-url" aria-describedby="basic-addon3" />
                        </InputGroup>
                        <Form.Group className="mb-3" controlId="form.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={6} />
                        </Form.Group>
                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check className="d-flex align-items-center" type="checkbox" label="Allow us to sell your personal details to whomever we want!" />
                        </Form.Group>
                        <Button variant="secondary full-width" type="submit">
                            Submit
                        </Button>
                    </Form></div>
            </div>
        </div>
        <Footer />

    </>;
}

export default Contact;
