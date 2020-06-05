import React from 'react';
import { Link } from 'react-router-dom';

export function LinksList({ links }) {
  if (!links.length) {
    return (
      <h3 className="center">Here are not links</h3>
    );
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>N%</th>
            <th>Origin link</th>
            <th>Shorten link</th>
            <th>Open</th>
          </tr>
        </thead>

        <tbody>
          {links.map((link, index) => {
            return (
              <tr key={link + index}>
                <td>{index + 1}</td>
                <td>{link.from}</td>
                <td>{link.to}</td>
                <td>
                  <Link to={`/detail/${link._id}`} >Open link</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}