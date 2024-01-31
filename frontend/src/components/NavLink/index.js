import "./index.css";
import DarkModeToggle from "../DarkModeToggle";
const NavLink = () => {
  return (
    <>
      <nav>
        <ul class="nav-links">
          <li class="link">
            <a href="#">Link 1</a>
          </li>
          <li class="link">
            <a href="#">Link 2</a>
          </li>
          <li class="link">
            <a href="#">Link 3</a>
          </li>
          <DarkModeToggle></DarkModeToggle>
        </ul>

        <button class="button">DONATE</button>
      </nav>
    </>
  );
};

export default NavLink;
