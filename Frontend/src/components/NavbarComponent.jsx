const Navbar = ({ onToggleSidebar }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 shadow">
      <div className="container-fluid">
        <button className="btn corelementos" onClick={onToggleSidebar}>
          <i className="fas fa-bars"></i>
        </button>

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
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#!">
                <i className="fas fa-user-circle text-gray-200"></i> Usuário
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="login.html">
                <i className="fas fa-sign-out-alt text-gray-200"></i> Sair
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;