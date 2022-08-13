export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART_SUCCESS":
      // product data from action
      const newProduct = action.payload;
      //check if product is in the cart or not
      const inCart = state.cartItems.find((item) =>
        item.productId === newProduct.productId ? true : false
      );
      return {
        ...state,
        cartItems: inCart
          ? state.cartItems.map((productFromCart) =>
              productFromCart.productId === newProduct.productId
                ? // if the product in the cart is that from action then spread it and modify the quantity for it
                  {
                    ...productFromCart,
                    qty: productFromCart.qty + action.payload.qty,
                  }
                : // if not then return the products in the action as they were in the cart
                  productFromCart
            )
          : // if the inCart is false then return the old cart and add the new product to it
            [...state.cartItems, newProduct],
      };
    case "ADD_TO_CART_FAIL":
      return { error: action.payload };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (productFromCart) => productFromCart.productId !== action.payload
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
