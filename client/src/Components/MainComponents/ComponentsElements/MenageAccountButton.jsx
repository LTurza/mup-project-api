import React, { Component } from 'react'
import './menageAccountButton.scss'

import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import { ButtonDark } from './Buttons'

class MenageAccountButton extends Component {
  constructor(props){
    super(props)
    this.state = {
      isActive: false
    }
  }

  accountButtonExtendHandler = async (event) => {
    const button = event.target
    let height = 30

    const extendButton = setInterval(() => {
      if (height === 100) {
        clearInterval(extendButton)
        this.setState({isActive: true})
      }else button.style.height = `${height += 5}px`
    }, 10)
  }

  accountButtonShortenHandler =  (event) => {
    const button = event.target
    let height = 100
    const extendButton = setInterval(() => {
      if (height === 30) clearInterval(extendButton)
      else {
        this.setState({isActive: false})
        button.style.height = `${height -= 5}px`
      }
    }, 10)
  }

  render() {
    return (
      <div 
        className="account-section"
        onMouseEnter={event =>this.accountButtonExtendHandler(event)}
        onMouseLeave={event =>this.accountButtonShortenHandler(event)}
      >
        <div className="account-section__header">
          <AccountCircleIcon className="account-section__header-icon"/>
          <span className="account-section__header-text">Manage Account</span>
        </div>
        {this.state.isActive ?
          <ButtonDark btnId="sign-in-button" btnTitle="Sing In" click={() => this.props.userModalHandler('signIn', 'signUp')}/>
        : null}
        {this.state.isActive ?
          <ButtonDark btnid="sign-up-button" btnTitle="Sing Up" click={() => this.props.userModalHandler('signUp', 'signIn')} />
        : null}
      </div>
    )
  }
}

export default MenageAccountButton