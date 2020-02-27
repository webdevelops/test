
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import useStyles from './styles';
import { fetchPhones } from '../../store/actions/phonesActions';
import PhoneCard from '../../components/PhoneCard';

const Phones = ({ fetchPhones, phones }) => {
  const classes = useStyles();
  console.log("TCL: Phones -> classes", classes)

  useEffect(() => {
    fetchPhones();
  }, [fetchPhones]);

  const renderPhone = (phone, index) => {
    return (
      <div className={classes.phoneCard} key={index}>
        <PhoneCard phone={phone} />
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        Sidebar
      </div>
      <div className={classes.content}>
        {phones.map((phone, index) => renderPhone(phone, index))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    phones: state.phones
  }
}

const mapDispatchToProps = {
  fetchPhones
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones)