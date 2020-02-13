import React from 'react'

import Sidebar from 'components/Sidebar'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <div className="layout__sidebar">
        <Sidebar />
      </div>
      <div className="layout__content">
        {children}
      </div>
    </div>
  )
}

export default Layout


// ----------- With hooks & bootstrap 4 -----------

// import React from 'react'

// import Sidebar from 'components/Sidebar'

// const Layout = ({ children }) => {
//   return (
//     <div className='container mt-5' style={{ minWidth: 320 }}>
//       <div className="row">
//         <div className="col-lg-3 mb-4">
//           <Sidebar />
//         </div>
//         <div className="col-lg-9">
//           {children}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Layout