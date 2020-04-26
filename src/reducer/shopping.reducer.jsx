import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART,
} from "../actions/shopping.actions";

export const cartState = {
  cart: [],
};

const addItem = (item) => {
  let newCart = cartState.cart;
  if (newCart.includes(item)) {
    const index = newCart.indexOf(item);
    newCart[index].count = newCart[index].count++;
  } else {
    item.count = 1;
    newCart.push(item);
  }
  return newCart;
};

const removeItem = (item) => {
  let newCart = cartState.cart;
  if (newCart.includes(item) && newCart.indexOf(item).count > 1) {
    const index = newCart.indexOf(item);
    newCart[index].count = newCart[index].count--;
  } else {
    newCart.splice(0, newCart.indexOf(item));
  }
  return newCart;
};

export default (state = cartState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: addItem(action.item),
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cart: removeItem(action.item),
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
