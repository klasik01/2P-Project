import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Col, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import {PrimaryButton} from './Button';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
};

export const EmailComponent = (props) => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const {text: {condition, buttonTitle}} = props;

    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if ( window.location.search.includes('success=true') ) {
            setSuccess(true);
        }
    }, []);

    const handleSubmit = (e) => {
        fetch('/', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: encode({'form-name': 'contact', email, message})
        })
            .then(() => alert('Success!'))
            .catch(error => alert(error));
        e.preventDefault();
    };

    return (
        <div className="border border-light p-3 mb-4">
            {success && (
                <p style={{ color: 'green' }}>Thanks for your message! </p>
            )}
            <Form
                onSubmit={handleSubmit}
                data-netlify="true"
            >
                <input type="hidden" name="form-name" value="contact"/>
                <FormGroup>
                    <Input
                        type="email"
                        name="email"
                        id="inputEmail"
                        placeholder="Email..."
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        type="textarea"
                        name="message"
                        id="inputText"
                        placeholder="Zpráva..."
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                        required
                    />
                </FormGroup>
                <Row form>
                    <Col md={6}>
                        <FormGroup check>
                            <Input type="checkbox" name="check" id="exampleCheck" required/>
                            <Label for="exampleCheck" check>{condition}</Label>
                        </FormGroup>
                    </Col>
                    <Col md={6} className="float-right right text-right">
                        <FormGroup check row>
                            <PrimaryButton>{buttonTitle}</PrimaryButton>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

EmailComponent.propTypes = {
    text: PropTypes.object.isRequired,
};
