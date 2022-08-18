export default function Projects() {
  return (
    <div>
      <div id="Projects" className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="xl:grid text-neutral-content hidden" style={{ marginTop: "-550px" }}>
          <h1 className="mb-5 text-5xl font-bold">Projects</h1>
        </div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-full xl:flex xl:flex-row mt-20">
            <h1 className="mb-5 text-5xl font-bold xl:hidden">Projects</h1>
            <div className="card w-80 glass mx-3 my-3" data-aos="flip-up" data-aos-duration="1500">
              <figure>
                <video className="h-60" controls>
                  <source src="https://firebasestorage.googleapis.com/v0/b/binar-andri.appspot.com/o/CV_Uza_Service.mp4?alt=media&token=7d788604-adde-4380-a948-00aed0d5145a"></source>
                </video>
              </figure>
              <div className="card-body">
                <h2 className="font-bold uppercase text-xl">CV. Uza Service</h2>
                <p className="text-xs">-</p>
                <p className="font-bold">
                  Project Specification : <br />
                  <span className="font-normal">ReactJS, Redux, Axios, AntDesign, NodeJS, JWT, PostgreSQL, EsLint, Heroku, Firebase</span>
                </p>
                <p className="font-bold">
                  Project Url : <br />
                  <span className="font-normal hover:text-blue-600 ml-1">
                    <a href="https://frontend-cvuzaservice.web.app/">Click here . . .</a>
                  </span>
                </p>
              </div>
            </div>

            <div className="card w-80 glass mx-3 my-3" data-aos="flip-up" data-aos-duration="1000">
              <figure>
                <video className="h-60" controls>
                  <source src="https://firebasestorage.googleapis.com/v0/b/binar-andri.appspot.com/o/Manassa.mp4?alt=media&token=fc18f07d-35eb-492d-8bef-4b6f9c786cf3"></source>
                </video>
              </figure>
              <div className="card-body">
                <h2 className="font-bold uppercase text-xl">Manassa</h2>
                <p className="text-xs">[Masyarakat Pernaskahan Nusantara]</p>
                <p className="font-bold">
                  Project Specification : <br />
                  <span className="font-normal">ReactJS, Redux, Axios, AntDesign, NodeJS, JWT, PostgreSQL, EsLint, Heroku, Firebase</span>
                </p>
                <p className="font-bold">
                  Project Url : <br />
                  <span className="font-normal hover:text-blue-600 ml-1">
                    <a href="https://frontend-manassa.web.app/">Click here . . .</a>
                  </span>
                </p>
              </div>
            </div>

            <div className="card w-80 glass mx-3 my-3" data-aos="flip-down" data-aos-duration="1000">
              <figure>
                <video className="h-60" controls>
                  <source src="https://firebasestorage.googleapis.com/v0/b/ecommerce-mystore-weblanding2.appspot.com/o/MyStore.mp4?alt=media&token=497de692-009d-4a49-8c0a-bd6ea5d30dc3"></source>
                </video>
              </figure>
              <div className="card-body">
                <h2 className="font-bold uppercase text-xl">MyStore</h2>
                <p className="text-xs">[Binar Academy Final Project]</p>
                <p className="font-bold">
                  Project Specification : <br />
                  <span className="font-normal">ReactJS, Redux, Axios, Bootstrap5, NodeJS, JWT, PostgreSQL, EsLint, Jest, Heroku, Firebase</span>
                </p>
                <p className="font-bold">
                  Project Url : <br />
                  <span className="font-normal hover:text-blue-600 ml-1">
                    <a href="https://weblanding-mystore.web.app/">Click here . . .</a>
                  </span>
                </p>
              </div>
            </div>

            <div className="card w-80 glass mx-3 my-3" data-aos="flip-down" data-aos-duration="1500">
              <figure>
                <video className="h-60" controls>
                  <source src="https://firebasestorage.googleapis.com/v0/b/ecommerce-mystore-weblanding2.appspot.com/o/MyStoreCMS.mp4?alt=media&token=f4c68bf0-8e2b-48e3-b9de-9ee208471574"></source>
                </video>
              </figure>
              <div className="card-body">
                <h2 className="font-bold uppercase text-xl">MyStore (CMS)</h2>
                <p className="text-xs">[Binar Academy Final Project]</p>
                <p className="font-bold">
                  Project Specification : <br />
                  <span className="font-normal">NextJS, Redux, Axios, TailwindCSS, NodeJS, JWT, PostgreSQL, EsLint, Jest, Heroku, Firebase, Vercel</span>
                </p>
                <p className="font-bold">
                  Project Url : <br />
                  <span className="font-normal hover:text-blue-600 ml-1">
                    <a href="https://mystore-adminpanel-nextjs.vercel.app/">Click here . . .</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
