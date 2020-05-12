import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

// css
import './custom.scss'
import '@assets/sass/default.scss'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

// component
import Home from '@component/home'
import Footer from '@component/footer'
import NavBar from '@component/navbar'
import LessonDetail from '@component/lessonDetail'
import Admin from '@component/admin'
import Login from '@component/login'

// route
import ProtectRoute from '@component/common/protectRoute'

// container
import LessonContainer from '@containers/lesson'

library.add(faCartPlus, faTrashAlt)

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App highlight">
          <NavBar></NavBar>
          <Route path="/" exact component={Home}/>
          <Route path="/lesson" component={LessonContainer} />
          <Route path="/detail/:id" exact component={LessonDetail} />
          <Route path="/login" component={Login}/>
          <ProtectRoute path="/admin">
            <Route component={Admin}/>
          </ProtectRoute>
          <Footer></Footer>
        </div>
      </Router>
    )
  }
}

export default App
