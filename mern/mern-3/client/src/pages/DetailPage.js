import React, { useState, useCallback, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import { Loader } from '../components/Loader';
import { LinkCard } from '../components/LinkCard';

export function DetailPage() {
  const { token } = useContext(AuthContext);
  const { request, loading } = useHttp();
  const [link, setLink] = useState(null);
  const linkId = useParams().id;
  console.log("DetailPage -> link", link)
  console.log("DetailPage -> linkId", linkId)

  const getLink = useCallback(async () => {
    try {
      console.log("getLink -> fetched 0")
      const fetched = await request(`/api/link/${linkId}`, 'GET', null, {
        Authorization: `Bearer ${token}`
      });
      console.log("getLink -> fetched", fetched)

      setLink(fetched);

    } catch (e) { }
  }, [request, linkId, token]);

  useEffect(() => {
    getLink();
  }, [getLink]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {!loading && link && <LinkCard link={link} />}
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