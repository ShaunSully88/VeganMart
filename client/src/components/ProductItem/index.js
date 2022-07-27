import * as React from 'react';
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { createTheme, ThemeProvider } from '@mui/material/styles';

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  const theme = createTheme({
    spacing: 5,
    palette: {
      primary: {
        main: '#44AF69',
        contrastText: '#fff',
      },
      secondary: {
        main: '#7D451B',
        contrastText: '#fff',
      },
    }
  });

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
          className="product-list-image"
        />
      </Link>
      <div className='pCard-info'>
        <Link to={`/products/${_id}`}>
          <h4>{name}</h4>
        </Link>
        <div className='pCard-info-add'>
          <ThemeProvider theme={theme}>
          <IconButton style={{border: "3px solid"}} sx={{ mr: 2 }} variant="outlined" color="primary" onClick={addToCart} aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
          </ThemeProvider>
          <div>
            <div>{quantity} {pluralize("item", quantity)} in stock</div>
            <span>${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
