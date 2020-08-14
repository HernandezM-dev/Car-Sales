import React from 'react';
import {connect} from 'react-redux';
import {addFeature} from '../actions'

const AdditionalFeature = props => {

    const addAFeature = e =>{
      e.preventDefault();
      props.addFeature(props.feature)
    }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={addAFeature}
        className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {addFeature})(AdditionalFeature);
