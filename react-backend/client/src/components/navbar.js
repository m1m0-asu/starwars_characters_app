import '../css/navbar.css'

function Navbar() {
    return (
        <div className='navbar p-sm-0'>
            <img className='navbar-brand p-sm-0' style={{ height: "100px", width: "auto"}} src={require('../images/starwars_logo.png')} alt="Star Wars Logo"></img>
        </div>
    );
}

export default Navbar;