const Navbar = () => {
    return (<>
        <nav className="nav">
            <h2 className="text-4xl text-white select-none">Elian</h2>
            <ul className="links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </ul>
            <button className="btn">Login</button>
        </nav>
    </>);
};

export default Navbar;