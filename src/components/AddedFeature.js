import React from 'react';
import {connect} from 'react-redux';
import {removeFeature} from '../actions'


const AddedFeature = props => {
  
  const removeAFeature = e =>{
    e.preventDefault();
    props.removeFeature(props.feature)
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
      onClick={removeAFeature}
      className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {removeFeature})(AddedFeature);