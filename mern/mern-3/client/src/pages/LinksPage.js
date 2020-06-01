// import React from 'react';

// export function LinksPage() {
//   return (
//     <div>
//       <h1>Links Page</h1>
//     </div>
//   );
// }

import React from 'react';

export const LinksPage = () => {
  return (
    <div>
      <h1>Links Page</h1>
    </div>
  );
}

// import React, { useState, useContext, useEffect, useCallback } from 'react';

// import { useHttp } from '../hooks/http.hook';
// import { AuthContext } from '../context/AuthContext';
// import { Loader } from '../components/Loader';
// import { LinksList } from '../components/LinksList';

// export const LinksPage = () => {
//   const [links, setLinks] = useState([]);
//   const { loading, request } = useHttp();
//   const { token } = useContext(AuthContext);

//   const fetchLinks = useCallback(async () => {
//     try {
//       const fetched = await request('/api/link', 'GET', null, {
//         Authorization: `Bearer ${token}`
//       });
//       setLinks(fetched);

//     } catch (err) { }
//   }, [token, request]);

//   useEffect(() => {
//     fetchLinks();
//   }, [fetchLinks]);

//   if (loading) {
//     return <Loader />
//   }

//   return (
//     <>
//       {!loading && links && <LinksList links={links} />}
//     </>
//   );
// };