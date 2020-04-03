import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';


import './style.css';

const useStyles = makeStyles({
  list: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    width: 200,
    background: '#16792D',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textTransform: 'uppercase',
    '& li': {
      textAlign: 'center',
      cursor: "pointer",
    },
    '& a': {
      opacity: .5,
      transition: '.3s',
    },
    '& a.active': {
      opacity: 1,
      // color: 'red',
    },
    activeLink: {
      color: 'red',
    },
  },
});

export const Sidebar = () => {
  const classes = useStyles();
  const links = ['about', 'experience', 'interests', 'work'];

  return (
    <div className={classes.list}>
      <List>
        {links.map((link, index) => {
          return (
            <ListItem key={index + 1}>
              <Link
                activeClass="active"
                to={`section${index + 1}`}
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
              >
                <ListItemText primary={link} />
              </Link>
            </ListItem>
          );
        })}
      </List>

      {/* <TabPanel> */}
        {/* <MainContent /> */}
      {/* </TabPanel> */}
    </div>
  );
};

// import React from 'react';
// import { List, ListItem, ListItemText } from '@material-ui/core';
// import { Link } from 'react-scroll';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   list: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     width: 250,
//     background: '#16792D',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     color: 'white',
//     textTransform: 'uppercase',
//     '& li': {
//       justifyContent: 'center',
//       cursor: "pointer",
//       padding: '5px 16px'
//     },
//     '& a': {
//       display: 'block',
//       opacity: .5,
//       transition: '.3s',
//       '&:hover:not(.active)': {
//         opacity: .7,
//       },
//     },
//     '& a.active': {
//       opacity: 1,
//     },
//   },
// });

// export const Sidebar = () => {
//   const classes = useStyles();
//   const links = ['about', 'experience', 'interests', 'work'];

//   return (
//     <div className={classes.list}>
//       <List>
//         {links.map((link, index) => (
//           <ListItem key={link}>
//             <Link
//               activeClass="active"
//               to={`section${index + 1}`}
//               spy={true}
//               smooth={true}
//               offset={-20}
//               duration={500}
//             >
//               <ListItemText primary={link} />
//             </Link>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// };