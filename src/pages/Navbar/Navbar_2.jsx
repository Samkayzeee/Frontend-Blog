import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar_2 = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light p-2 me-2">
                <div className="container-fluid">
                    <Link to={"/dashboard"} className="navbar-brand" href="#">
                        CRITIQUE
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
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-4 me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link" href="#">
                                    Categories
                                </a>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link" href="#">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item ms-4">
								<a className="nav-link" href="#">
									Account
								</a>
							</li>
                            <li className="nav-item ms-4">
                                 <Link to='/Profile' className='nav-link'>Profile</Link>
							</li>
                        </ul>
                        <form className="d-flex me-3" role="search">
                            <input
                                className="form-control me-2 input"
                                type="search"
                                placeholder="Type of search"
                                aria-label="Search"
                            />
                        </form>
                       
                        <Link>
                            <button className='btn btn-danger ms-3'>Log Out</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar_2;
