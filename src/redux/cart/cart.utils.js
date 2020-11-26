

/* eslint-disable no-unused-expressions */
const addItemToCart = (cartItems , cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ?  
            // eslint-disable-next-line no-undef
            {...cartItem , quantity: cartItem.quantity+1}
            :
            cartItem
        );
    }
    return [...cartItems , {...cartItemToAdd, quantity:1}]
};

export default addItemToCart;