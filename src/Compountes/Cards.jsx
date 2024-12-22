import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import img1 from "../Assetes/Images/photofr1.webp";
import img2 from "../Assetes/Images/photofr2.webp";
import img3 from "../Assetes/Images/photofr3.jpg";
import img4 from "../Assetes/Images/photofr4.png";



const Cards = () => {
  const [amount,setamount] = useState("")



  

 const paymentHandler =(e)=>{
  e.preventDefault();

 let option={
  key:"rzp_test_w0QZtWkqdrfq2L",
  key_secret:"OtwvcVs4Dcxd11v1gShtaCZl",
  amount:amount*100,
  currancy:"INR",
  name:"The Grapich Sky",
  description:"For test Case",

  handle: function(response){
    alert(response.razorpay.payment_Id)
  },

  prefill:{
    name:"User Name",
    Mail:"Usermail.com",
    contact:"1234567890",
  },

  notes:{
    address:"Razorpay Website"
  },

  theme:{
    color:"#06eaea"
  }

 }

 let pay =new window.Razorpay(option)

pay.open();


 }
  return (
    <div>
      <center>
        <Row xs={1} md={4} className="g-4">
          <Col>
            <Card style={{ width: "250px" }}>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Frame 1</Card.Title>
                <Card.Text>
                House Room Wall Frames steel, Wood  and PVC
                </Card.Text>
                <div id="cardbutn">
                  <Button variant="outline-primary">like</Button>

                  <Button variant="primary" onClick={paymentHandler} value={900}
                  onChange={(e)=>{
                    setamount(e.target.value)
                  }}
                  
                  >$900 Buy</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "250px" }}>
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title>Frame 2</Card.Title>
                <Card.Text>
                Room Wall Frames steel, Wood  and PVC
                </Card.Text>
                <div id="cardbutn">
                  <Button variant="outline-primary">like</Button>

                  <Button variant="primary" onClick={paymentHandler} value={100}
                  onChange={(e)=>{
                    setamount(e.target.value)
                  }}>$100 Buy</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "250px" }}>
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title>Frame 3</Card.Title>
                <Card.Text>
                Bed Room Wall Frames steel, Wood  and PVC
                </Card.Text>
                <div id="cardbutn">
                  <Button variant="outline-primary">like</Button>

                  <Button variant="primary" onClick={paymentHandler} value={200}
                  onChange={(e)=>{
                    setamount(e.target.value)
                  }}>$200 Buy</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "250px" }}>
              <Card.Img variant="top" src={img4} />
              <Card.Body>
                <Card.Title>Frame 4</Card.Title>
                <Card.Text>
                Bed Room Wall Frames steel, Wood  and PVC
                </Card.Text>
                <div id="cardbutn">
                  <Button variant="outline-primary">like</Button>

                  <Button variant="primary" onClick={paymentHandler} value={300}
                  onChange={(e)=>{
                    setamount(e.target.value)
                  }}>$300 Buy</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </center>
    </div>
  );
};

export default Cards;
