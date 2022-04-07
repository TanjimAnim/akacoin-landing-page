import image1 from "../images/image.png";
import image2 from "../images/website.png";
import "./about.css";
import arrowImage from "../images/arrow(1).png";
import Stack from "react-bootstrap/esm/Stack";

export default function About() {
  return (
    <div id='about'>
      <h1 className='about-title'>What is AKAcoin?</h1>
      <div className='about-box'>
        <div className='about-box-left'>
          <h4 className='about-subtitle'>
            The fastest growing and community friendly
          </h4>
        </div>
        <div className='about-box-right'>
          <p>
            Akacoin is the fastest blockchain in the world and the fastest
            growing ecosystem in crypto, with thousands of projects spanning
            DeFi, NFTs, Web3 and more.
          </p>
          <Stack gap={4} direction='horizontal'>
            <p className='about-link'>Explore Ecosystem </p>
            <img
              src={arrowImage}
              alt='arrow'
              style={{ paddingBottom: "14px" }}
            />
          </Stack>
        </div>
      </div>
      <div className='about-parent'>
        <img src={image1} alt='yellow background' className='about-image1' />
        <img src={image2} alt='bitcoin graph' className='about-image2' />
      </div>
    </div>
  );
}
