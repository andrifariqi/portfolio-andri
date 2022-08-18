import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/favicon.ico";
import UpArrowImage from "../../assets/images/footer/up-arrow.svg";
import { ShareUrl } from "../../static";
import { LinkedinShareButton, LinkedinIcon, WhatsappShareButton, WhatsappIcon, TelegramShareButton, TelegramIcon, LineShareButton, LineIcon, TwitterShareButton, TwitterIcon } from "next-share";

export default function Footer() {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-primary text-primary-content">
        <div>
          <Image src={Logo} width={50} height={50} alt="" />
          <p className="font-bold">Portfolio Andri</p>
          <p>Copyright © 2022 - All right reserved</p>
        </div>
        <div>
          <p>Share with : </p>
          <div className="grid grid-flow-col gap-4">
            <div>
              <LinkedinShareButton url={ShareUrl}>
                <LinkedinIcon size={40} round />
              </LinkedinShareButton>
            </div>

            <div>
              <WhatsappShareButton url={ShareUrl}>
                <WhatsappIcon size={40} round />
              </WhatsappShareButton>
            </div>

            <div>
              <TelegramShareButton url={ShareUrl}>
                <TelegramIcon size={40} round />
              </TelegramShareButton>
            </div>

            <div>
              <LineShareButton url={ShareUrl}>
                <LineIcon size={40} round />
              </LineShareButton>
            </div>

            <div>
              <TwitterShareButton url={ShareUrl}>
                <TwitterIcon size={40} round />
              </TwitterShareButton>
            </div>
          </div>
        </div>
      </footer>
      <div className="toast toast-end">
        <Link href="/" replace={true}>
          <div className="radial-progress w-10 h-10 hover:bg-orange-300 hover:animate-ping cursor-pointer" style={{ "--value": 100, "--thickness": "1px" }}>
            <Image src={UpArrowImage} width={20} height={20} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
}
