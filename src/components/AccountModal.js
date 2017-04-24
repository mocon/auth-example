import React, { Component } from 'react';
import xhr from '../helpers/xhr';

class AccountModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            userPassword: '',
            staySignedIn: false
        };
    }

    onFormChange = () => {
        this.setState({
            userEmail: this.refs.userEmail.value,
            userPassword: this.refs.userPassword.value
        });
    }

    toggleStaySignedIn = () => {
        this.setState({ staySignedIn: !this.state.staySignedIn });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        xhr.post('/endpoint', {
            email: this.state.userEmail,
            password: this.state.userPassword,
            rememberMe: this.state.staySignedIn
        }); // Not tested yet
    }

    render() {
        return (
            <div className="gds-account-modal gds-account-modal--logo">
                <form onSubmit={ this.onFormSubmit } className="gds-form gds-account-modal__form gds-card -p-a-3">
                    <div className="gds-form-group -m-b-1">
                        <label className="gds-form-group__label">Email</label>
                        <input
                            ref="userEmail"
                            onChange={ this.onFormChange }
                            className="gds-form-group__text-input"
                            type="text"
                            placeholder="user@gumgum.com"
                        />
                    </div>
                    <div className="gds-form-group -m-b-2">
                        <label className="gds-form-group__label">Password</label>
                        <input
                            ref="userPassword"
                            onChange={ this.onFormChange }
                            className="gds-form-group__text-input"
                            type="password"
                            placeholder="password123"
                        />
                    </div>
                    <div className="gds-form-group -m-b-2">
                        <div className="gds-form-group__checkbox">
                            <label className="gds-form-group__checkbox-label">
                                <input
                                    onChange={ this.toggleStaySignedIn }
                                    checked={ this.state.staySignedIn }
                                    className="gds-form-group__checkbox-input"
                                    type="checkbox"
                                />
                                <span className="gds-form-group__checkbox-indicator -m-r-2" />Stay signed in
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="gds-button gds-button--block gds-button--primary">Login</button>
                </form>
                <p className="gds-account-modal__extra-links"><a href="#" className="gds-text--link">Forgot your password?</a></p>
            </div>
        );
    }
}

export default AccountModal;
