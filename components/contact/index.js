import Image from "next/image";
import ContactImage from "../../assets/images/contact/ContactBg.svg";
import EmailImage from "../../assets/images/socialmedia/gmail.svg";
import GitlabImage from "../../assets/images/socialmedia/gitlab.svg";
import GithubImage from "../../assets/images/socialmedia/github.svg";
import LinkedinImage from "../../assets/images/socialmedia/linkedin.svg";
import WhatsappImage from "../../assets/images/socialmedia/whatsapp.svg";

export default function Contact() {
  return (
    <div>
      <div id="Contact" className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url(${ContactImage.src})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">Contact</h1>
            <a href="mailto:andrialfariqiid@gmail.com">
              <div className="radial-progress bg-primary text-primary-content border-4 border-primary mx-3 my-3 hover:bg-orange-300 hover:animate-ping" style={{ "--value": 100 }} data-aos="flip-left" data-aos-duration="1000">
                <Image src={EmailImage} height={40} width={40} alt="EmailImage" />
              </div>
            </a>

            <a href="https://gitlab.com/andrialfariqiid">
              <div className="radial-progress bg-primary text-primary-content border-4 border-primary mx-3 my-3 hover:bg-orange-300 hover:animate-ping" style={{ "--value": 100 }} data-aos="flip-left" data-aos-duration="1000">
                <Image src={GitlabImage} height={40} width={40} alt="GitlabImage" />
              </div>
            </a>

            <a href="https://github.com/andrifariqi">
              <div className="radial-progress bg-primary text-primary-content border-4 border-primary mx-3 my-3 hover:bg-orange-300 hover:animate-ping" style={{ "--value": 100 }} data-aos="flip-down" data-aos-duration="1000">
                <Image src={GithubImage} height={40} width={40} alt="GithubImage" />
              </div>
            </a>

            <a href="https://www.linkedin.com/in/andri-a-261085217/">
              <div className="radial-progress bg-primary text-primary-content border-4 border-primary mx-3 my-3 hover:bg-orange-300 hover:animate-ping" style={{ "--value": 100 }} data-aos="flip-right" data-aos-duration="1000">
                <Image src={LinkedinImage} height={40} width={40} alt="LinkedinImage" />
              </div>
            </a>

            <a href="https://api.whatsapp.com/send?phone=6281287440836">
              <div className="radial-progress bg-primary text-primary-content border-4 border-primary mx-3 my-3 hover:bg-orange-300 hover:animate-ping" style={{ "--value": 100 }} data-aos="flip-right" data-aos-duration="1000">
                <Image src={WhatsappImage} height={50} width={50} alt="WhatsappImage" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
