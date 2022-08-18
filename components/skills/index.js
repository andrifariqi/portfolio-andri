import Image from "next/image";
import FrontEndImageReact from "../../assets/images/skills/frontend/reactjs.svg";
import FrontEndImageNext from "../../assets/images/skills/frontend/nextjs.svg";
import FrontEndImageRedux from "../../assets/images/skills/frontend/redux.svg";
import FrontEndImageBootstrap from "../../assets/images/skills/frontend/bootstrap5.svg";
import FrontEndImageTailwind from "../../assets/images/skills/frontend/tailwindcss.svg";

import BackEndImageNode from "../../assets/images/skills/backend/nodejs.svg";
import BackEndImageRedis from "../../assets/images/skills/backend/redis.svg";
import BackEndImageJwt from "../../assets/images/skills/backend/jwt.svg";
import BackEndImageExpress from "../../assets/images/skills/backend/express.svg";

import DatabaseImagePostgreSql from "../../assets/images/skills/database/postgresql.svg";

import ManagementImageGitlab from "../../assets/images/skills/management/gitlab.svg";
import ManagementImageGithub from "../../assets/images/skills/management/github.svg";
import ManagementImageEslint from "../../assets/images/skills/management/eslint.svg";
import ManagementImageJest from "../../assets/images/skills/management/jest.svg";
import ManagementImageTrello from "../../assets/images/skills/management/trello.svg";

import DeploymentImageFirebase from "../../assets/images/skills/deployment/firebase.svg";
import DeploymentImageHeroku from "../../assets/images/skills/deployment/heroku.svg";
import DeploymentImageVercel from "../../assets/images/skills/deployment/vercel.svg";

import SkillsImage from "../../assets/images/skills/SkillsBg.jpg";

export default function Skills() {
  return (
    <div>
      <div id="Skills" className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url(${SkillsImage.src})` }}>
        <div className="xl:grid -mt-64 text-neutral-content hidden">
          <h1 className="mb-5 text-5xl font-bold">Skills</h1>
        </div>
        <div className="hero-content text-center text-neutral-content flex-col xl:flex-row">
          <h1 className="mb-5 text-5xl font-bold xl:hidden">Skills</h1>
          <div className="card w-80 bg-base-300 bg-opacity-90 shadow-xl" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <figure className="px-10 pt-10">
              <div className="ml-1 mr-1">
                <Image src={FrontEndImageReact} height={45} width={45} alt="FrontEndImageReact" />
              </div>
              <div className="ml-1 mr-1">
                <Image src={FrontEndImageNext} height={45} width={45} alt="FrontEndImageNext" />
              </div>
              <div className="ml-1 mr-1">
                <Image src={FrontEndImageRedux} height={45} width={45} alt="FrontEndImageRedux" />
              </div>
              <div className="ml-1 mr-1">
                <Image src={FrontEndImageBootstrap} height={45} width={45} alt="FrontEndImageBootstrap" />
              </div>
              <div className="ml-1 mr-1">
                <Image src={FrontEndImageTailwind} height={45} width={45} alt="FrontEndImageTailwind" />
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Front End</h2>
            </div>
          </div>
          <div className="card w-80 bg-base-100 bg-opacity-90 shadow-xl" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-delay="1000" data-aos-duration="1000">
            <figure className="px-10 pt-10">
              <div className="ml-1 mr-1">
                <Image src={BackEndImageNode} height={45} width={65} alt="BackEndImageNode" />
              </div>
              <div className="ml-1 mr-1">
                <Image src={BackEndImageRedis} height={45} width={45} alt="BackEndImageRedis" />
              </div>
              <div className="ml-1 mr-1">
                <Image src={BackEndImageJwt} height={45} width={65} alt="BackEndImageJwt" />
              </div>
              <div className="ml-1 mr-1 bg-slate-300">
                <Image src={BackEndImageExpress} height={45} width={65} alt="BackEndImageExpress" />
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Back End</h2>
            </div>
          </div>
          <div className="card w-80 bg-base-300 bg-opacity-90 shadow-xl" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <figure className="px-10 pt-10">
              <div className="ml-1 mr-1">
                <Image src={DatabaseImagePostgreSql} height={30} width={30} alt="DatabaseImagePostgreSql" />
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Database</h2>
            </div>
          </div>
          <div className="card w-80 bg-base-100 bg-opacity-90 shadow-xl" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-delay="1000" data-aos-duration="1000">
            <figure className="px-3 pt-10">
              <div className="ml-1 mr-1">
                <Image src={ManagementImageGitlab} height={45} width={65} alt="ManagementImageGitlab" />
              </div>
              <div className="ml-1 mr-1 bg-slate-300">
                <Image src={ManagementImageGithub} height={45} width={45} alt="ManagementImageGithub" />
              </div>
              <div className="ml-1 mr-1">
                <Image src={ManagementImageEslint} height={45} width={45} alt="ManagementImageEslint" />
              </div>
              <div className="ml-1 mr-1">
                <Image src={ManagementImageJest} height={45} width={45} alt="ManagementImageJest" />
              </div>
              <div className="ml-1 mr-1">
                <Image src={ManagementImageTrello} height={45} width={65} alt="ManagementImageTrello" />
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Management</h2>
            </div>
          </div>
          <div className="card w-80 bg-base-300 bg-opacity-90 shadow-xl" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <figure className="px-10 pt-10">
              <div className="ml-1 mr-1">
                <Image src={DeploymentImageFirebase} height={35} width={45} alt="DeploymentImageFirebase" />
              </div>
              <div className="ml-1 mr-1">
                <Image src={DeploymentImageHeroku} height={45} width={85} alt="DeploymentImageHeroku" />
              </div>
              <div className="ml-1 mr-1">
                <Image src={DeploymentImageVercel} height={45} width={85} alt="DeploymentImageVercel" />
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Deployment</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
