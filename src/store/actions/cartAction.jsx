import axiosInstance from "../../network/axiosInstance";
export const addToCart = (id, qty) => async (dispatch, getState) => {
  console.log(id);
  try {
    const { data } = await axiosInstance.get(`/product/${id}`);
    console.log(data);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        productId: data._id,
        productName: data.name,
        productImage: data.image,
        productPrice: data.price,
        productStock: data.quantity,
        qty,
      },
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    console.log(error);
    dispatch();
  }
};
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: "CART_REMOVE_ITEM",
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
