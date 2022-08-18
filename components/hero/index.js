import Image from "next/image";
import HeroImage from "../../assets/images/hero/HeroBg.jpg";
import AndriImage from "../../assets/images/hero/PhotoAndri.jpg";

export default function Hero() {
  return (
    <div>
      <div id="Home" className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url(${HeroImage.src})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there . . .</h1>
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="linear">
                <Image src={AndriImage} alt="AndriImage" />
              </div>
            </div>
            <p className="mb-5 -mt-8">
              My name is Andri Al Fariqi <br />
              Im a Fullstack Web Developer | Javascript
            </p>
            <a href="#About">
              <button className="btn btn-primary">Get Started</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
