import React, { Component } from 'react'
import axios from 'axios';

import './SidebarComponent.css'


class SidebarComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
      }


      handleRegister = () => {
          this.setState({view: 1});
      }

  render() {
    return <div className='sidebar-component'>

    </div>
  }
}

export default SidebarComponent