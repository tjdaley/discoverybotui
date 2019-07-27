import Nav from 'react-bootstrap/Nav';
import SafeAnchor from 'react-bootstrap/SafeAnchor';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React from 'react';

class NavigationBar extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    handleSelect(eventKey)
    {
        console.log("Navigate to "+eventKey);
    }

    render()
    {
        return(
            <Nav onSelect={this.handleSelect}>
                <SafeAnchor className="navbar-brand" href="/">DISCOVERYBOT</SafeAnchor>
                <Nav.Item>
                    <Nav.Link eventKey="/people">People</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/assets">Assets</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/valuations">Values</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/I&amp;A">I&amp;A</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/excel">Spreadsheet</Nav.Link>
                </Nav.Item>
                <NavDropdown title="About" id="nav-about">
                    <NavDropdown.Item eventKey="about.Us">Us</NavDropdown.Item>
                    <NavDropdown.Item eventKey="about.Privacy">Privacy</NavDropdown.Item>
                    <NavDropdown.Item eventKey="about.Terms">Terms of Use</NavDropdown.Item>
                    <NavDropdown.Item eventKey="about.Accuracy">Data Accuracy</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="about.Version">Version</NavDropdown.Item>
                </NavDropdown>

            </Nav>
        )
    }
}

export default NavigationBar;