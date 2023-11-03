import "./NavBar.css";
import Card from "./Card";

export default function NavBar() {
  return ( 
    <div>
      <nav className="navbar">
        <ul className="nav-ul">
          <li className="nav-list-item tamImg">
            <img className="imgTam" src="src/assets/img/Logo.png" alt="" />
          </li>
          <li className="nav-list-item">
            <a href="#" className="nav-href">Inicio</a>
          </li>
          <li className="nav-list-item">
            <a href="#" className="nav-href">Acerca de</a>
          </li>
          <li className="nav-list-item">
            <a href="#" className="nav-href">Contacto</a>
          </li>
          <Card />
        </ul>
      </nav>
    </div>
  );
}