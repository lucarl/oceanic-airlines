import React, { Component } from 'react'

import './RegisterPage.css'

import axios from 'axios';


class RegisterPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postId: '',
            username: '',
            email: '',
            password: '',
            address: '',
            apiUrl: 'https://localhost:7120/Security/register-admin',
        };
 
      }

      onSubmit = (event) => {
        const article = {                
            username: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
            address: event.target[3].value,
     };
        axios.post('https://localhost:7120/security/register-admin', article)
            .then(response => console.log(response
                ));
      };
    

    /*handleSubmit = async (e) => {
        console.log(e);
        console.log("here is" + this.state.username)
        e.preventDefault();
        try {
          let res = await fetch(this.state.apiUrl, {
            method: "POST",
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                address: this.state.address,
            }),
          });
          let resJson = await res.json();

        } catch (err) {
          console.log(err);
        }
      }*/

      

  render() {
    return <div className='register-container'>
                <h1>
                    REGISTER NEW USER
                </h1>
        <div className='register-form-container'>
            <div className='register-input-container'>
                <form onSubmit={this.onSubmit}>
                <div>
                    <input type="text" id="uname" name="uname" placeholder='USER NAME' value={this.setState.username} onChange={(e) => this.setState({ username: e.target.value })}/>
                </div>
                <div>
                    <input type="password" id="password" name="password" placeholder='PASSWORD' value={this.setState.password} onChange={(e) => this.setState({ password: e.target.value })}/>
                </div>
                <div>
                    <input type="text" id="password" name="password" placeholder='EMAIL' value={this.setState.email} onChange={(e) => this.setState({ email: e.target.value })}/>
                </div>
                <div>
                    <input type="text" id="password" name="password" placeholder='PHONE NUMBER' value={this.setState.address} onChange={(e) => this.setState({ address: e.target.value })}/>
                </div>
                <div className='register-button-container'>
                    <div>
                        <button type="submit">
                            REGISTER
                        </button>
                    </div>
                </div>
                </form>
                </div>
        </div>
    </div>
  }
}

export default RegisterPage