export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

export const add_item = (item) => {
  return {
    type: ADD_ITEM_TO_CART,
    item,
  };
};

export const remove_item = (item) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    item,
  };
};

export const clear_cart = () => {
  return {
    type: CLEAR_CART,
  };
};
