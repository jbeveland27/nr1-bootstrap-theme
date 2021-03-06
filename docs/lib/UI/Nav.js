import React from 'react';
import { Link } from 'react-router';
import { Collapse, Container, Nav, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';

export default class UINav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      showNavbar: false
    };
  }

  toggleNavbar(e) {
    e.preventDefault();
    this.setState({
      showNavbar: !this.state.showNavbar
    });
  }

  render() {
    return (
      <Navbar className="header" color="faded" light expand="md">
        <Container>
          <NavbarToggler onClick={this.toggleNavbar}/>
          <Collapse navbar isOpen={this.state.showNavbar}>
            <Nav navbar className="ml-sm-auto">
              <NavItem>
                <NavLink tag={Link} to="/" activeClassName="active">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/components/" activeClassName="active">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/utilities/" activeClassName="active">Utilities</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
