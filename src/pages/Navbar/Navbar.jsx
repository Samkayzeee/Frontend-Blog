import "./Navbar.css";
const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						BONA
					</a>
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
						</ul>
						<form className="d-flex w-50" role="search">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Type of search"
								aria-label="Search"
							/>
							{/* <button class="btn btn-outline-success" type="submit">
								Search
							</button> */}
						</form>
					</div>
				</div>
			</nav>
			{/* <nav className="nav d-flex w-100 align-items-center shadow-sm">
            <div className='w-50'>
            <button>Bona</button>
            <button>Home</button>
            <button>Categories</button>
            <button>Features</button>
            </div>
            
            <div className='w-50'>
               <input type="search" placeholder='Type of search' className='form-control w-100 rounded-0'/>
            </div>
        </nav> */}
		</>
	);
};

export default Navbar;
