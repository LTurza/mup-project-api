import React, { Component } from 'react'


import UserAccountModal from './MainComponents/UserAccountModal'
import AlertModal from "./MainComponents/Alert";


class HomePage extends Component {
  mobileNaviHandler = () => {
      const mobileNavi = document.querySelector('.nav-top-mobile')
      mobileNavi.classList.toggle('nav-top-mobile--hide')
  }
  alertHandler () {
    this.setState({...this.state, activeAlert: !this.state.activeAlert})
  }

  render() {
    return (
      <>
        <main className="home-page">

        </main>
      </>
    )
  }
}

export default HomePage