import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import img1 from "../../images/News images/news-1.jpg";
import img2 from "../../images/News images/news-2.jpg";
import img3 from "../../images/News images/news-3.jpg";
import img4 from "../../images/News images/news-4.jpg";
import img5 from "../../images/News images/news-5.jpg";
import img6 from "../../images/News images/news-6.jpg";
import img7 from "../../images/News images/news-7.jpg";
import img8 from "../../images/News images/news-8.jpg";


function NewsCard() {
    return <>
        <div className=" mt-4 mb-4 p-2 full-width row d-flex justify-content-center flex-direction-md-row justify-content-md-between">
            <Card className="column px-0 shadow">
                <Card.Img className="card-img" variant="top" src={img1} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button className="full-width" variant="primary">More</Button>
                </Card.Body>
            </Card>
            <Card className="column px-0 shadow">
                <Card.Img className="card-img" variant="top" src={img2} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button className="full-width" variant="primary">More</Button>
                </Card.Body>
            </Card>
            <Card className="column px-0 shadow">
                <Card.Img className="card-img" variant="top" src={img3} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button className="full-width" variant="primary">More</Button>
                </Card.Body>
            </Card>
            <Card className="column px-0 shadow">
                <Card.Img className="card-img" variant="top" src={img4} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button className="full-width" variant="primary">More</Button>
                </Card.Body>
            </Card>
        </div>
        <div className="p-2 full-width row d-flex justify-content-center flex-direction-md-row justify-content-md-between">
            <Card className="column px-0 shadow">
                <Card.Img className="card-img" variant="top" src={img5} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button className="full-width" variant="primary">More</Button>
                </Card.Body>
            </Card>
            <Card className="column px-0 shadow">
                <Card.Img className="card-img" variant="top" src={img6} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button className="full-width" variant="primary">More</Button>
                </Card.Body>
            </Card>
            <Card className="column px-0 shadow">
                <Card.Img className="card-img" variant="top" src={img7} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button className="full-width" variant="primary">More</Button>
                </Card.Body>
            </Card>
            <Card className="column px-0 shadow">
                <Card.Img className="card-img" variant="top" src={img8} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button className="full-width" variant="primary">More</Button>
                </Card.Body>
            </Card>
        </div>
    </>
}

export default NewsCard;