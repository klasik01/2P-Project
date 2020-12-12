import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Col, FormGroup, Input, Label, Row} from 'reactstrap';
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

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: encode({'form-name': 'contact', email, message})
        })
            .then(() => alert('Success!'))
            .catch(error => alert(error));

    };

    return (
        <div className="border border-light p-3 mb-4">
            <form
                onSubmit={handleSubmit}
                name="contact"
                netlify
                data-netlify="true"
                data-netlify-honeypot="bot-field"
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
                        name="text"
                        id="inputText"
                        placeholder="Zpráva..."
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <div data-netlify-recaptcha="true"></div>
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
            </form>
        </div>
    );
};

EmailComponent.propTypes = {
    text: PropTypes.object.isRequired,
};
