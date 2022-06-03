import React, { Component } from 'react'
import RegisterPage from '../../Register/RegisterPage/RegisterPage';
import axios from 'axios';

import './LoginPage.css'
import BookingPage from '../../Booking/BookingPage/BookingPage';

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            view: Number,
            token: '',
            status: '',
        };
      }


      onSubmit = (event) => {
        let config = {
            headers: {
                'Authorization': 'Bearer ' +  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJqdGkiOiJiMGMxYzIxYy05YTBmLTRhZjMtODg2Ni03ZDBhZjk3MTE5MzUiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiQWRtaW4iLCJFbXBsb3llZSIsIlVzZXIiXSwiZXhwIjoxNjU0NDQ0MDYwLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAifQ.rZod4ND7yNw-H9puBbRvSeHf4wyGzjDzzxYYn3176KM',
            }
          }
        event.preventDefault();
        const article = {                
            username: event.target[0].value,
            password: event.target[1].value,
     };
        axios.post('https://localhost:7120/security/authenticate', article)
            .then(response => this.setState({token: response.data.token, status: response.status}))
      };

      handleRegister = () => {
          this.setState({view: 1});
      }

  render() {
    return <div>
        {this.state.view === 1 ? <RegisterPage></RegisterPage> : 
            this.state.status === 200 ? <BookingPage token={this.state.token}></BookingPage> :
                <div className='login-container'>
                <h1>
                    OCEANIC AIRLINES
                </h1>
                <div className='login-form-container'>
                <div className='login-input-container'>
                <form onSubmit={this.onSubmit}>
                <div>
                    <input type="text" id="uname" name="uname" placeholder='USER NAME'/>
                </div>
                <div>
                    <input type="password" id="password" placeholder='PASSWORD'/>
                </div>
                <div className='login-button-container'>
                    <div className='login-text' onClick={() => this.handleRegister()}>
                        Register new user
                    </div>
                    <div>
                        <button type="submit">
                            LOGIN
                        </button>
                    </div>
                </div>
                </form>
                </div>
                </div>
                </div>
        }
    </div>
  }
}

export default LoginPage