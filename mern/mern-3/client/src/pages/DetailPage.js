// import React from 'react';

// export function DetailPage() {
//   return (
//     <div>
//       <h1>Detail Page</h1>
//     </div>
//   );
// }

import React from 'react';

export const DetailPage = () => {
  return (
    <div>
      <h1>Detail Page</h1>
    </div>
  );
}

// import React, { useState, useCallback, useContext, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// import { AuthContext } from '../context/AuthContext';
// import { Loader } from '../components/Loader';
// import { useHttp } from '../hooks/http.hook';
// import { LinkCard } from '../components/LinkCard';

// export const DetailPage = () => {
//   const { token } = useContext(AuthContext)
//   const { request, loading } = useHttp();
//   const [link, setLink] = useState(null);
//   const linkId = useParams().id;

//   const fetchLink = useCallback(async () => {
//     try {
//       const fetched = await request(`/api/link/${linkId}`, 'GET', null, {
//         Authorization: `Bearer ${token}`
//       });

//       setLink(fetched);

//     } catch (err) { }
//   }, [token, linkId, request]);

//   useEffect(() => {
//     fetchLink();
//   }, [fetchLink]);

//   if (loading) {
//     return <Loader />;
//   }

//   return (
//     <>
//       {!loading && link && <LinkCard link={link} />}
//     </>
//   );
// };