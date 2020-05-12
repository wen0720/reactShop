import React, { useState, useEffect } from 'react'
import {
  Redirect,
  Route
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import jsCookie from 'js-cookie'

function PrivateRoute({ children, ...rest }) {
  let [ cookieId, setCookieId ] = useState(jsCookie.get('loginUId'))
  const isLogged = useSelector(state => state.userReducer.uid !== '')
  useEffect(() => {
    setCookieId(jsCookie.get('loginUId'))
  })

  return (
    <Route {...rest}
      render={(props) => {
        return  (
          ( isLogged || cookieId )
            ? children
            : <Redirect to="/login"></Redirect>
        )
      }}>
    </Route>
  )
}

export default PrivateRoute
