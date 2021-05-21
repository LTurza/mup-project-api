import React from 'react'
import {useSelector} from 'react-redux'
import './organizations.scss'
import Footer from './../Components/MainComponents/Footer'
import OrganizationElment from './../Components/MainComponents/ComponentsElements/OrganizationElement'
import OrganizationToolbar from './../Components/MainComponents/ComponentsElements/OrganizationToolbar'
import AddOrganizationModal from './../Components/MainComponents/ComponentsElements/AddOrganizationModal'

const selectModals = state => state.modals

const Organizations = () => {
  const modals = useSelector(selectModals)
  return (
    <>
      <div className="organizations">
        <AddOrganizationModal />
        <OrganizationToolbar />
        <div className="organizations__content">
          <ul className="organizations__content-list">
            <OrganizationElment />
            <OrganizationElment />
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Organizations