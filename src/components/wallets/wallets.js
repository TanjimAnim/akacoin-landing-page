import Card from "react-bootstrap/Card";
import { walletItems } from "./walletItems";
import icon1 from "../images/vector.png";
import icon2 from "../images/vector (1).png";
import icon3 from "../images/vector (2).png";
import icon4 from "../images/arrow.png";
import "./wallets.css";
export default function Wallet() {
  return (
    <div id='wallets' className='wallets'>
      {walletItems.map((item) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              {/* <img src={item.icon} alt={item.icon}/>  */}
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <img src={icon1} alt='vector file of a mobile sign' />
              <img src={icon2} alt='vector file of a computer sign' />
              <img src={icon3} alt='vector file of a web sign' />
              <Card.Link href='#'>Choose wallet</Card.Link>
              <img src={icon4} alt='vector file of a arrow sign' />
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
