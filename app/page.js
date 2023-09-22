import Image from "next/image"
const page = () => {
  return (

    <>

      {/* Intro section start here  */}
      <section id="particles-js">
        <div className="container">
          {/* Intro section starts here  */}
          <div className="full-container ">
            <div className="intro-sec">
              <h1>Bishal Debsharma </h1>
              <div className="designation-box">
                <h2 id="profile" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects section start here  */}
      <section>
        <div className="container ">
          <h2>My Projects</h2>
          <p>
            Here some projects which i do, i worked on Design and Front-End Part
          </p>
          <div className="full-container ">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="project-content">
                  <h2>BLOB | Kolkatas first Coworking Space</h2>
                  <h3>About projects</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                    possimus eos atque iste. Dignissimos atque ut minus quae,
                    consequuntur eveniet. Voluptates, nostrum incidunt!
                  </p>
                  <h3>Technologies</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                    possimus eos atque iste. Dignissimos atque ut minus quae,
                    consequuntur eveniet. Voluptates, nostrum incidunt!
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="project-img">
                  {/* <img
                    className="img-fluid"
                    src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  /> */}
                  {/* if you use link for image u need to chage nect config file  */}
                  <Image className='img-fluid' src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" height={900} width={900} alt=''>
                  </Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work experience section start here  */}
      <section>
        <div className="container ">
          <div className="full-container ">
            <div className="row">
              <div className="col-md-7 col-sm-12">
                <div className="d-flex justify-content-center flex-column h-100">
                  <h2>Work Experience</h2>
                  <p>
                    I worked in this industry for last 2 year as a Web developer and
                    desiner, wit many more companies, clients and freelancers{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                    quidem libero eum in assumenda culpa adipisci ab neque pariatur
                    voluptates ducimus aut, saepe autem eos. Cum quam odio, sed
                    magnam minus corrupti aspernatur animi.
                  </p>
                  <div className="exp-div">
                    <h2>2</h2>
                    <h3>Years</h3>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-12">
                <div className="clients-sec">
                  <div className="clients">
                    <img
                      className="img-fluid"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <div className="c-name">
                      <h3>Arun Roy</h3>
                      <small>Digital Marketer</small>
                    </div>
                  </div>
                  <div className="clients">
                    <img
                      className="img-fluid"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <div className="c-name">
                      <h3>Arun Roy</h3>
                      <small>Digital Marketer</small>
                    </div>
                  </div>
                  <div className="clients">
                    <img
                      className="img-fluid"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <div className="c-name">
                      <h3>Arun Roy</h3>
                      <small>Digital Marketer</small>
                    </div>
                  </div>
                  <div className="clients">
                    <img
                      className="img-fluid"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <div className="c-name">
                      <h3>Arun Roy</h3>
                      <small>Digital Marketer</small>
                    </div>
                  </div>
                </div>
                <div className="text-center">icons</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Technology section start here  */}
      <section>
        <div className="container ">
          <div className="full-container">
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div className="d-flex justify-content-center flex-column h-100">
                  <h2>Technologies</h2>
                </div>
              </div>
              <div className="col-md-7 col-sm-12">
                <div className="backend cust-border m-auto">
                  <div className="frontend cust-border">
                    <div className="designing cust-border" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact section start here  */}
      <section>
        <div className="container ">
          <div className="full-container ">
            <div className="text-center">
              <h2>Connet With Me </h2>
              <div className="d-flex gap-5 justify-content-center">
                <a href="#" target="_blank">
                  <h3>Linkdine</h3>
                </a>
                <a href="#" target="_blank">
                  <h3>Github</h3>
                </a>
                <a href="#" target="_blank">
                  <h3>UpWork</h3>
                </a>
              </div>
            </div>
            <div className="row py-5">
              <div className="col-md-6 col-sm-12">
                <h2>Send your messge</h2>
                <div className="contact-form" style={{ maxWidth: 400 }}>
                  <form action="" method="post">
                    <div className="from-group mb-4">
                      <label htmlFor="">Name</label>
                      <input className="form-control" type="text" name="" id="" />
                    </div>
                    <div className="from-group mb-4">
                      <label htmlFor="">Subject</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected="" disabled="">
                          Choose One
                        </option>
                        <option value={1}>For Remote Job Operturenity </option>
                        <option value={2}>For Freelance Work</option>
                        <option value={3}>Other</option>
                      </select>
                    </div>
                    <div className="from-group mb-4">
                      <label htmlFor="">Message</label>
                      <textarea
                        className="form-control"
                        name=""
                        id=""
                        cols=""
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                    <button className="btn btn-secondary" type="submit">
                      Send Now
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="d-flex justify-content-center flex-column h-100">
                  <h2 className="text-center">My social Handels</h2>
                  <div className="d-flex gap-5 justify-content-center">
                    <a href="#" target="_blank">
                      <h4>Facebook</h4>
                    </a>
                    <a href="#" target="_blank">
                      <h4>Instagram</h4>
                    </a>
                    <a href="#" target="_blank">
                      <h4>Youtube</h4>
                    </a>
                  </div>
                  <h2 className="text-center mt-5">Extra Activity</h2>
                  <div className="d-flex gap-5 justify-content-center">
                    <a href="#" target="_blank">
                      <h4>Video Production</h4>
                    </a>
                    <a href="#" target="_blank">
                      <h4>Bike Riding </h4>
                    </a>
                  </div>
                  <h2 className="text-center mt-5">Call Me At</h2>
                  <div className="text-center">
                    <a href="#" target="_blank">
                      <h4>82-50-96-81-95</h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>


  )
}

export default page