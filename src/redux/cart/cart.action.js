import CartActionsType from './cart.types';

export const toggleCardHidden = () => ({
    type: CartActionsType.TOGGLE_CART_HIDDEN
});
export const addItem = item => ({
    type: CartActionsType.ADD_ITEM,
    payload: item
});
export const removeItem = item => ({
    type: CartActionsType.REMOVE_ITEMS,
    payload: item
})
export const cleanItemFromCart = item => ({
    type: CartActionsType.CLEAN_ITEM_FROM_CART,
    payload: item
})