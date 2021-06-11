import React from 'react'
import './organizationCounter.scss'

const OrganizationCounter = (props) => {
  return (
    <div className="organization-counter">{props.counter}</div>
  )
}

export default OrganizationCounter