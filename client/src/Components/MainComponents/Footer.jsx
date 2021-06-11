import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__authors">
          <h1 className="footer__authors-header">Authors:</h1>
          <ul className="authors__list">
            <li>Łukasz Turza - dev</li>
            <li>Kamil Imiołek - ???</li>
            <li>Benjamin Sułkowski - ??????</li>
          </ul>
        </div>
      <div className="footer-about">
        <h1 className="footer__authors-header">About Project</h1>
        <p>O projekcie O projekcie O projekcie O projekcie O projekcie O projekcie O projekcie O projekcie O projekcie O projekcie O projekcie O projekcie</p>
      </div>
    </footer>
  )
}

export default Footer