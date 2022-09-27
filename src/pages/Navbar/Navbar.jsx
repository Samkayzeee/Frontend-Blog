import "./Navbar.css";
const Navbar = () => {
	return (
		<>
			<nav class="navbar navbar-expand-lg bg-light">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">
						BONA
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ms-4 me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#">
									Home
								</a>
							</li>
							<li class="nav-item ms-4">
								<a class="nav-link" href="#">
									Categories
								</a>
							</li>
							<li class="nav-item ms-4">
								<a class="nav-link" href="#">
									Features
								</a>
							</li>
						</ul>
						<form class="d-flex w-50" role="search">
							<input
								class="form-control me-2"
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
