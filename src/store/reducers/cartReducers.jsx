export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART_SUCCESS":
      const newProduct = action.payload;
      console.log(state);
      const isExist = state.cartItems.find(
        (productFromCart) =>
          productFromCart.productId.toString() ===
          newProduct.productId.toString()
      );
      console.log(isExist);
      if (isExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((productFromCart) => {
            if (productFromCart.productId === isExist.productId) {
              productFromCart.qty = productFromCart.qty + newProduct.qty;
              return productFromCart;
            } else {
              return newProduct;
            }
          }),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, newProduct],
        };
      }
    case "ADD_TO_CART_FAIL":
      return { error: action.payload };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (productFromCart) =>
            productFromCart.productId !== newProduct.productId
        ),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};
