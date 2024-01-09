import { Dropdown } from "react-bootstrap"
import DropdownC from "./DropdownC"

export default function NavbarC(props){
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  {/* <!-- Brand --> */}
  <a className="navbar-brand" href="#">Logo</a>

  {/* <!-- Links --> */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link link-items" href="#">{props.home}</a>
    </li>
    <li className="nav-item">
      <a className="nav-link link-items" href="#">{props.profile}</a>
    </li>
    <li className="nav-item">
      <a className="nav-link link-items" href="#">{props.contact}</a>
    </li>
    <li className="nav-item">
      <a className="nav-link link-items" href="#">{props.offers}</a>
    </li>
    <li className="nav-item">
      <a className="nav-link link-items" href="#">{props.about}</a>
    </li>
    {/* react Dropdown */}
    <li className="nav-item services">
        <Dropdown>            
            <a className="nav-link">
                <Dropdown.Toggle variant="" id="dropdown">
                    {props.services}
                </Dropdown.Toggle>
            </a>

                <Dropdown.Menu>
                    <Dropdown.Item href={props.account}>Item 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Item 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Item 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
    </li>

    {/* <!-- Bootstrap Dropdown --> */}

    {/* <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        {props.services}
      </a>
      <div className="dropdown-menu">
        <a className="dropdown-item link-items" href="#">Link 1</a>
        <a className="dropdown-item link-items" href="#">Link 2</a>
        <a className="dropdown-item link-items" href="#">Link 3</a>
      </div>
    </li> */}

    {/* end dropdown */}
  </ul>
</nav>
        </div>
    )
}