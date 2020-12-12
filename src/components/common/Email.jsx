import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Col, FormGroup, Input, Label, Row} from 'reactstrap';
import {PrimaryButton} from './Button';

export const EmailComponent = (props) => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const {text: {condition, buttonTitle}} = props;

    return (
        <div className="border border-light p-3 mb-4">
            <form action="POST" data-netlify="true">
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
