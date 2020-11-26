import CartActionsType from './cart.types';

export const toggleCardHidden = () => ({
    type: CartActionsType.TOGGLE_CART_HIDDEN
});
export const addItem = item => ({
    type: CartActionsType.ADD_ITEM,
    payload: item
});