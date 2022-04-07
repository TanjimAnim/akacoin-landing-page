import Stack from "react-bootstrap/Stack";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../images/plant_bitcoin.png";
import "./home.css";
import { AiFillGithub } from "react-icons/ai";

export default function Home() {
  return (
    <div id='home' className='box'>
      <div className='box-left'>
        <h3 className='title'>
          Introducing <span className='blue-text'>AKA</span>
          <span className='yellow-text'>COIN</span>
        </h3>
        <h1 className='heading'>Living Ecosystem</h1>
        <h1 className='heading'>Decentralized token</h1>
        <p className='para'>
          Akacoin is a open source peer-to-peer digital currency,community-run
          technology that supports cryptocurrencies and thousands of
          decentralized applications.
        </p>
        <Stack gap={4} direction='horizontal'>
          <div className='get-started-blue'>Get Started</div>
          <div className='github-button'>
            <AiFillGithub />
            {"      "}
            Source
          </div>
        </Stack>
      </div>

      <div className='box-right'>
        <img src={image1} alt='plant of bitcoin' />
      </div>
    </div>
  );
}
