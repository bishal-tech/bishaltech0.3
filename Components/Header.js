import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <>
            {/* Header section starts here  */}
            <header className="" style={{ zIndex: 99 }}>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container">
                        <Link className="navbar-brand" href="/">
                            WEB APP DEVELOPER
                        </Link>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            {/* <img
                                className="img-fluid"
                                src="./assets/img/toggle-icon.png"
                                alt=""
                            /> */}
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-end  "
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav gap-3">
                                <li className="nav-item">
                                    <Link className='nav-link' href="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' href="/About">About</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">
                                        {" "}
                                        icons <ion-icon name="arrow-up-circle-outline" />
                                    </a>
                                </li>
                            </ul>
                            {/* <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
              </form> */}
                        </div>
                    </div>
                </nav>
            </header>

        </>


    )
}

export default Header