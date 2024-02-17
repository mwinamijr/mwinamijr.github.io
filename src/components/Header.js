import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="container">
      <header id="header" className="">
        <div className="container d-flex align-items-center">

          <h1 className="logo me-auto"><Link to="/">Athumani Mwinami</Link></h1>
        
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><Link className="active" to="/">Home</Link></li>
              <li><Link to="/about">Kuhusu</Link></li>
              <li><Link to="/services">Huduma</Link></li>
              <li><Link to="/contact-us">Wasiliana nasi</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header>
    </div>
  )
}

export default Header