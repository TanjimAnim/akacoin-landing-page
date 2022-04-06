import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../images/plant_bitcoin.png";
import "./home.css";

export default function Home() {
  return (
    <div id='home' className='box'>
      <div className='box-left'>
        <h3>Introducing AKACOIN</h3>
        <h1>Living Ecosystem</h1>
        <h1>Decentralized token</h1>
        <p>
          Akacoin is a open source peer-to-peer digital currency,community-run
          technology that supports cryptocurrencies and thousands of
          decentralized applications.
        </p>
        <Stack gap={1} className='col-md-6 mx-auto' direction='horizontal'>
          <Button variant='secondary'>get started</Button>
          <Button variant='outline-secondary'>Cancel</Button>
        </Stack>
      </div>

      <div className='box-right'>
        <img src={image1} alt='a picture of a plant of bitcoin' />
      </div>
    </div>
  );
}
