import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="nav d-flex w-100 align-items-center shadow-sm">
            <div className='w-50'>
            <button>Bona</button>
            <button>Home</button>
            <button>Categories</button>
            <button>Features</button>
            </div>
            
            <div className='w-50'>
               <input type="search" placeholder='Type of search' className='form-control w-100 rounded-0'/>
            </div>
        </nav>

    );
}
 
export default Navbar;