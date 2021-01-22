import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Form,
  FormControl,
  Button
} from 'reactstrap';


const MyNavBar = () => {
return (
  <div>
 <Nav>
        <NavItem>
          <button>
          <NavLink tag={RRNavLink} to="/">Home</NavLink>
         </button>
        </NavItem>
          <NavItem>
          <button>
          <NavLink tag={RRNavLink} to="/songs">Songs</NavLink>
          </button>
        </NavItem>
        <NavItem>
          <button>
          <NavLink tag={RRNavLink} to="/playlists">Playlists</NavLink>
          </button>
          </NavItem>
          <NavItem>
          <button>
          <NavLink  tag={RRNavLink} to="/mixes">Mixes</NavLink>
          </button>
        </NavItem>
      </Nav>
    </div>
);
};

export default MyNavBar;