import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

import {
  details,
  clearDetails,
  addToCart,
  clearCartStatus
} from '../../../../socketIO/client/src/action/store/productAction';

const productItems = ({
  product,
  details,
  clearDetails,
  authState,
  addToCart,
  clearCartStatus
}) => {
  const { title, image, price, _id } = product;
  const { isAuthenticated } = authState;

  const getDetails = () => {
    details(_id);
    clearDetails();
  };

  const addCart = () => {
    if (!isAuthenticated)
      M.toast({
        html: 'Please login or register to continue',
        classes: 'orange lime lighten-3 '
      });
    addToCart(_id);
    clearDetails();
  };

  return (
    <div className="card bg-light">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={`../..${image}`} alt="product item" />
      </div>
      <div className="card-content text-center ">
        <pre className="card-title  white-text text-darken-4">
          {title}
          <pre className="text-danger">${price}</pre>
        </pre>
        <div>
          <a
            onClick={getDetails}
            className="waves-effect  wave-green btn modal-trigger btn-sm"
            href="#productDetails"
            style={style}
          >
            Details
          </a>

          <a
            href="#!"
            className="btn wave-effect wave-green  white-text btn-sm "
            style={style}
            onClick={addCart}
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

const style = {
  backgroundColor: '#004c00',
  color: 'white'
};

productItems.propTypes = {
  product: PropTypes.object.isRequired,
  details: PropTypes.func.isRequired,
  clearDetails: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  authState: state.auth
});

export default connect(mapStateToProps, {
  details,
  clearDetails,
  addToCart,
  clearCartStatus
})(productItems);
