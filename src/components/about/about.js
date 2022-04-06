import image1 from "../images/image.png";
import image2 from "../images/website.png";
import "./about.css";

export default function About() {
  return (
    <div id='about'>
      <h1>What is AKAcoin</h1>
      <div className='about-box'>
        <div className='about-box-left'>
          <h3>The fastest growing and community friendly</h3>
        </div>
        <div className='about-box-right'>
          <p>
            Akacoin is the fastest blockchain in the world and the fastest
            growing ecosystem in crypto, with thousands of projects spanning
            DeFi, NFTs, Web3 and more.
          </p>
          <p>Explore Ecosystem </p>
        </div>
      </div>
      <div className='parent'>
        <img src={image1} alt='yellow background' className='image1' />
        <img src={image2} alt='bitcoin graph' className='image2' />
      </div>
    </div>
  );
}
