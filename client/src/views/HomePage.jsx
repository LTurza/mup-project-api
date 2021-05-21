import React from 'react'
import './HomePage.scss'
import kanbanImg from './../assets/logo.png'
import Footer from './../Components/MainComponents/Footer'

const HomePage = () => {
    return(
      <main className="home-page">
          <div className="home-page__container">
              <div className="home-page__container-column">
                  <h1 className="home-page__container-header">HomePage Container One</h1>
                  <br/>
                  <p className="home-page__container-text">
                      HomePage Container OneHomePage Container OneHomePage Container One HomePage Container OneHomePage Container OneHomePage Container OneHomePage Container One HomePage Container OneHomePage Container OneHomePage Container OneHomePage Container One HomePage Container OneHomePage Container OneHomePage Container One
                  </p>
              </div>
              <div className="home-page__container-column">
                  <img className="home-page__container-column-img" src={kanbanImg} alt="img"/>
              </div>
          </div>
          <div className="home-page__container alt">
              <h1 className="home-page__container-header">HomePage Container Two</h1>
              <img className="home-page__container-column-img alt" src={kanbanImg} alt="img"/>
              <p className="home-page__container-text">
                  HomePage Container OneHomePage Container OneHomePage Container One HomePage Container OneHomePage Container OneHomePage Container OneHomePage Container One HomePage Container OneHomePage Container OneHomePage Container OneHomePage Container One HomePage Container OneHomePage Container OneHomePage Container One
              </p>
          </div>

          <Footer/>
      </main>
    )
}

export default HomePage