import React, { useEffect } from 'react'
import './organizations.scss'
import axios from 'axios'
import OrganizationsMobileToolbar from './../../Components/V2/OrganizationsMobileToolbar/OrganizationsMobileToolbar'
import OrganizationCounter from './../../Components/V2/OrganizationCounter/OrganizationCounter'
import Pagination from './../../Components/V2/Pagination/Pagination'
import BgImage from './../../assets/logo.png'
import OrganizationElem from './../../Components/V2/OrganizationElem/OrganizationElem'
import NewOrganizationModal from './../../Components/V2/modals/NewOrganization/NewOrganization'
import { useSelector, useDispatch } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import DeleteConfirmation from '../../Components/V2/modals/DeleteConfirmation/DeleteConfirmation'

const userSelector = state => state.user
const organizationsSelector = state => state.organizations
const modalSelector = state => state.modal
const paginationSelector = state => state.pagination

const Organizations = () => {
  const user = useSelector(userSelector)
  const organizations = useSelector(organizationsSelector)
  const modal = useSelector(modalSelector)
  const pagination = useSelector(paginationSelector)
  const dispatch = useDispatch()

  const handleCheckboxChange = (event) => {
    if(!organizations.organizationsToDelete.includes(event.target.value)) {
      dispatch({type: 'organizations/addToDelete', payload: event.target.value})
    } else {
      dispatch({type: 'organizations/removeFromDelete', payload: event.target.value})
    }
  }

  const organizationList = organizations.organizationsArray.map(organization => {
    return  <OrganizationElem 
      orgImage={organization.logo}
      orgName={organization.name}
      orgId={organization._id}
      key={organization._id}
      checkAction={ (event) => handleCheckboxChange(event) }
    />
  })
  
  const fetchOrganizationData = async () => {
    dispatch({type: 'organizations/clearOrganizations'})
    Promise.all([
      axios.get('http://localhost:5000/organization/count', {params: {userId: user.id}}),
      axios.get(`http://localhost:5000/organization/fetch/${user.id}/organizations`, {params: {skip: pagination.activeIndex === 1 ? 0 : (pagination.activeIndex - 1) * 5}})
    ]).then (result => {
      dispatch({type: 'organizations/fetchOrganization', payload: {
        counter: result[0].data * 1,
        organizationsArray: JSON.parse(result[1].data),
      }})
      dispatch({type: 'pagination/setPages', payload: {pages: Math.ceil((result[0].data * 1) / 5)}})
    })
  }
  
  useEffect (() => {
    fetchOrganizationData()
  }, [dispatch, user.id, pagination.activeIndex])
  return (
    <div className="organizations" >
      <CSSTransition
          in={ modal.newOrganization }
          timeout={ 300 }
          classNames="modal"
          unmountOnExit
        >
          <NewOrganizationModal fetchOrganizationData={() => fetchOrganizationData()}/>
        </CSSTransition>
        <CSSTransition
          in={ modal.organizationDeleteConfirmation }
          timeout={ 300 }
          classNames="modal"
          unmountOnExit
        >
          <DeleteConfirmation itemCount={organizations.organizationsToDelete.length} fetchOrganizationData={() => fetchOrganizationData()}/>
        </CSSTransition>
      <OrganizationsMobileToolbar header="Organizations" img={BgImage}/ >
      <div className="organizations__content">
        <OrganizationCounter counter={organizations.counter}/>
        <ul className="organizations__content-list" >
          { organizationList }
        </ul>
      {organizations.counter > 5 ? <Pagination counter={organizations.counter}/> : null}
      </div>
    </div>
  )
}

export default Organizations