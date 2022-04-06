import circle from "../images/circle.png";
import { quickStartItems } from "./quickStartItems";
import "./quick-start.css";
import image1 from "../images/replace-image.png";
import Card from "react-bootstrap/Card";

const Cards = () => {
  return (
    <div className='cards'>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Akacoin Community</Card.Title>

            <Card.Text>
              There's something for everybody. Follow along, chat on Discord, or
              read up on what we are doing.
            </Card.Text>
            <Card.Link href='#'>Learn More</Card.Link>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Become a Validator</Card.Title>

            <Card.Text>
              Help secure the network by running decentralized infrastructure.
              Learn about operating a validator node.
            </Card.Text>
            <Card.Link href='#'>Learn More</Card.Link>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Dev. Resource</Card.Title>

            <Card.Text>
              See the get started guide, videos, tutorials, SDKs, reference
              implementations, and more.
            </Card.Text>
            <img src={image1} alt='an empty image' />
            <Card.Link href='#'>Start Building</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default function QuickStart() {
  return (
    <div id='quick-start' className='quick-start-box'>
      <h3>Quick Start Guide</h3>
      {quickStartItems.map((item) => {
        return (
          <div className='quick-start-box-center'>
            <div className='quick-start-box-left'>
              <div className='parent'>
                <img
                  src={circle}
                  alt='an yellow circle image'
                  className='image1'
                />
                <img
                  src={item.image}
                  alt='bitcoin related image'
                  className='image2'
                />
              </div>
              <div className='quick-start-box-right'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
      <Cards />
    </div>
  );
}
