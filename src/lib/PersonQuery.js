//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

import React from 'react'

class PersonQuery extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name: '',
            dob: '',
            usState: 'TX',
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleUsStateChange = this.handleUsStateChange.bind(this);
        this.handleDobChange = this.handleDobChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event)
    {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false)
        {
            event.stopPropagation();
            return;
        }

        this.props.doSearch(this.state);
    }

    handleNameChange(event)
    {
        this.setState({name: event.target.value});
        this.logState();
    }

    handleDobChange(event)
    {
        this.setState({dob: event.target.value});
        this.logState();
    }

    handleUsStateChange(event)
    {
        this.setState({usState: event.target.value});
        this.logState();
    }

    logState()
    {
        console.log(this.state);
    }

    render()
    {
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="searchName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                required
                                placeholder="john doe"
                                value={this.state.name}
                                onChange={this.handleNameChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="searchDob">
                            <Form.Label>DOB</Form.Label>
                            <Form.Control
                                type="date"
                                name="dob"
                                value={this.state.dob}
                                onChange={this.handleDobChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="searchUsState">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                as="select"
                                name="usState"
                                required
                                value={this.state.usState}
                                onChange={this.handleUsStateChange}>
                                <option>TX</option>
                                <option>ALL</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                <Col>
                    <Button variant="primary" type="submit">Search</Button>
                </Col>
                </Form.Row>
            </Form>
        );
    }
}

export default PersonQuery;