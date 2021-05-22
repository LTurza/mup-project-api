import React from 'react'
import { useDispatch } from 'react-redux'
import './HomePage.scss'
import kanbanImg from './../../assets/logo.png'

import HomeMobileContent from './../../Components/V2/HomeMobileContent/HomeMobileContent'

const HomePage = () => {
    const dispatch = useDispatch()
    return(
      <main className="home-page">
        <HomeMobileContent 
            header="Join our Community"
            img={ kanbanImg }
            btnTitle="Join Now"
            btnAction={ () => dispatch({ type: 'modal/openUserSignUpModal' }) }
            content= { `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores` }
        />
        <HomeMobileContent 
            header="Join our Community"
            img={ kanbanImg }
            content= { `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores` }
        />
      </main>
    )
}

export default HomePage