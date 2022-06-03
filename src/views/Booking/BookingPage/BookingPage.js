import React, { Component } from 'react'
import axios from 'axios';

import './BookingPage.css'
import SidebarComponent from '../../../components/Sidebar/SidebarComponent';
import { slide as Menu } from 'react-burger-menu'

class BookingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            token: props,
            price1: 0,
            time1: '',
            price2: 0,
            time2: '',
            price3: 0,
            time3: '',
            weight: 0,
            height: 0,
            numberOfPackages: 0,
            showMenu: 0,
            packageInfo: ['test', 'test'],
        };
        
      }

      componentDidMount() {
          //console.log(this.state.token)
      }

      addPackage() {
        console.log("first")
          const info = {
            weight: 10,
            height: 10,
            width: 10,
            depth: 10,
            type: "string"
          }
        console.log(info)
        var joined = this.state.packageInfo.concat('new value');
        this.setState({ packageInfo: joined })
      }

      onSubmit = (event) => {
        let config = {
            headers: {
                'Authorization': 'Bearer ' +  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJqdGkiOiJiMGMxYzIxYy05YTBmLTRhZjMtODg2Ni03ZDBhZjk3MTE5MzUiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiQWRtaW4iLCJFbXBsb3llZSIsIlVzZXIiXSwiZXhwIjoxNjU0NDQ0MDYwLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAifQ.rZod4ND7yNw-H9puBbRvSeHf4wyGzjDzzxYYn3176KM',
            }
          }

          let config1 = {
            headers: {
                'Authorization': 'Basic ' +  'f4855ef7-99c5-41c5-8714-fe55987b1266',
            }
          }

          let config3 = {
            headers: {
                'Authorization': 'Basic ' +  'dummy_oceanic_key',
            }
          }

        event.preventDefault();
        const packageInfo = {                
                customer: {
                  firstname: "string",
                  lastname: "string",
                  address: "string",
                  email: "string",
                  phonenumber: "string"
                },
                destination: {
                  from: event.target[0].value,
                  to: event.target[1].value
                },
                package: {
                  weight: 10,
                  height: 0,
                  width: 0,
                  depth: 0,
                  type: "string"
                }
            };

            const packageInfo2 = {
                from: event.target[0].value,
                to: event.target[1].value,
                weight: 10,
                height: 10,
                width: 10,
                depth: 10
              };

              const packageInfo3 = {
                customer: {
                  firstname: "string",
                  lastname: "string",
                  address: "string",
                  phoneNumber: "string",
                  email: "string"
                },
                destination: {
                  from: event.target[0].value,
                  to: event.target[1].value
                },
                package: {
                  weight: 10,
                  height: 10,
                  width: 10,
                  depth: 10,
                  types: [
                    "string"
                  ]
                }
              };


        axios.post('https://wa-oa-dk6.azurewebsites.net/deliveries/info', packageInfo, config)
            .then(response => this.setState({
                price1: response.data.price,
                time1: response.data.time
            }));
            axios.post('https://wa-tl-dk6.azurewebsites.net/Deliveries/Info', packageInfo2, config1)
            .then(response => this.setState({
                price2: response.data.price,
                time2: response.data.time
            }))
            axios.post('https://wa-eit-dk6.azurewebsites.net/deliveries/info', packageInfo3, config3)
            .then(response => this.setState({
                price3: response.data.price,
                time3: response.data.time
            }))
      };



  render() {
    return <div className='container-overall'>
              <Menu>
        <a id="home" className="menu-item" href="/">Users</a>
        <a id="about" className="menu-item" href="/about">Invoices</a>
        <a id="contact" className="menu-item" href="/contact">Setting up cities</a>
        <a id="contact" className="menu-item" href="/contact">Setting up shipment costs</a>
        <a id="contact" className="menu-item" href="/contact">Setting up package types</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
{this.state.showMenu === 1 ? <SidebarComponent></SidebarComponent> : ''}
                <div className='booking-container'>
                <h1>
                    BOOK NEW SHIPMENT
                </h1>
                <div className='booking-form-container'>
                    <div className='booking-input-container'>
                    <form onSubmit={this.onSubmit}>
                        <div className='booking-fields'>
                    <div>
                        <input type="text" id="uname" name="uname" placeholder='FROM'/>
                    </div>
                    <div>
                        <input type="text" id="password" placeholder='TO'/>
                    </div>
                    </div>
                    <div className='booking-button-container'>
                        <div>
                            <button type="submit" className='search-button'>
                                SEARCH
                            </button>
                        </div>
                    </div>
                    </form>
                    </div>
                </div>
                <div className='form-bar'>
                <div><input placeholder='Package ID'></input></div>
                        <div><input placeholder='Weight'></input></div>
                        <div><input placeholder='Width'></input></div>
                        <div><input placeholder='Height'></input></div>
                        <div><input placeholder='Depth'></input></div>
                        <select name="cars" id="cars">
                            <option value="volvo">Rigid</option>
                            <option value="saab">Fragile</option>
                        </select>
                        <div>Signature?<input type="checkbox"></input></div>
                </div>
                <button type="add-package" className='add-package' onClick={this.addPackage}>
                        ADD PACKAGE
                </button>
                <h1>Price: {this.state.price1}</h1>
                <h1>Time: {this.state.time1}</h1>
                </div>
                <div>
                </div>
    </div>
  }
}

export default BookingPage