import { Link } from "react-router-dom";
function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/projet">projet</Link>
          </li>
          <li>
            <Link to="/cv">cv</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Nav;
