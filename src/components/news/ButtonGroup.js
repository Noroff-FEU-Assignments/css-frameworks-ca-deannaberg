import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
function Buttons() {
    return <ButtonGroup size="lg" >
        <Button variant="light" className="active">1</Button>
        <Button variant="light">2</Button>
        <Button variant="light">3</Button>
        <Button variant="light">4</Button>
    </ButtonGroup >

}
export default Buttons;