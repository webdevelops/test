import React from 'react'
import Sidebar from 'components/sidebar'

const Layout = ({ children }) => (
  <div className='layout'>
    <div className="layout__sidebar">
      <Sidebar />
      </div>
    <div className="layout__content">
      {children}
    </div>
  </div>
)

export default Layout

// import React from 'react'
// import { Switch, Route } from 'react-router'

// import Phones from 'containers/phones'

// const routes = (
//   <Switch>
//     <Route exact path='/' component={Phones} />
//   </Switch>
// )

// const Layout = () => {
//   return (
//     <div className='container mt-5'>
//       <div className="row">
//         <div className="col-lg-3 mb-5">
//           Sidebar
//         </div>
//         <div className="col-lg-9">
//           {routes}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Layout