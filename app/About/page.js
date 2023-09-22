import React from 'react'
import Image from 'next/image'
const about = () => {
    return (
        <>

            <section id="particles-js">
                <div className="container">
                    {/* Intro section starts here  */}
                    <div className="full-container ">
                        <div className="about-sec">
                            <div className="about-left">
                                <h2>Web Developer </h2>
                            </div>
                            {/* <img className="img-fluid" src="./assets/images/bishal.png" alt="" /> */}
                            <Image className='img-fluid' src="/images/bishal.png" height={900} width={900} alt=''>
                            </Image>
                            <div className="about-right">
                                <h2>Content Creator</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container py-5">
                    <h2>Firstly !</h2>
                    <div className="table-content">
                        <div className="elem">
                            <h2>I can Design UI-UX for your Web and Mobile App</h2>
                            {/* <img
                                className="img-fluid"
                                src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                                alt=""
                            /> */}
                        </div>
                        <div className="elem">
                            <h2>I can Develop the Frontend design </h2>
                            {/* <img
                                className="img-fluid"
                                src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                                alt=""
                            /> */}
                        </div>
                        <div className="elem">
                            <h2>I can build WordPress Custom Theme</h2>
                            {/* <img
                                className="img-fluid"
                                src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                                alt=""
                            /> */}
                        </div>
                        <div className="elem">
                            <h2>I can create simple Backend</h2>
                            {/* <img
                                className="img-fluid"
                                src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                                alt=""
                            /> */}
                        </div>
                        <div className="elem">
                            <h2>I can maintaine the Version control</h2>
                            {/* <img
                                className="img-fluid"
                                src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                                alt=""
                            /> */}
                        </div>
                        <div className="elem">
                            <h2>I can maintaine the Server also</h2>
                            {/* <img
                                className="img-fluid"
                                src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                                alt=""
                            /> */}
                        </div>
                    </div>
                    <h2>Secondly !</h2>
                    <div className="text-center">
                        <h4>
                            I also tech my students, how how Design and developed any kind of
                            Websites using custom code or without code{" "}
                        </h4>
                        {/* <img
                            className="img-fluid"
                            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2132&q=80"
                            alt=""
                        /> */}
                        <a className="btn btn-secondary mt-5" href="#">
                            Watch Our Courses
                        </a>
                    </div>
                    <h2>Thirdly !</h2>
                    <div className="text-center">
                        <h4>
                            I also be a Content creator , Videography and Video editing is my
                            passion{" "}
                        </h4>
                        {/* <img
                            className="img-fluid"
                            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2132&q=80"
                            alt=""
                        /> */}
                        <a className="btn btn-secondary mt-5" href="#">
                            Watch My Contents
                        </a>
                    </div>
                </div>
            </section>
        </>

    )
}

export default about