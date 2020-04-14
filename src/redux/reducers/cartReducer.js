import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions"

const initialState = {
    cart: [],
    products: [{name: 'HP Leptop', id: 1},{name: 'Mac Leptop', id: 2},{name: 'ASUS Leptop', id: 3},{name: 'LENOVO Leptop', id: 4},{name: 'Dell Leptop', id: 11},{name: 'Toshiba Leptop', id: 12},{name: 'LightWeight Leptop', id: 13}]
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const newItem = {id: action.id, name: action.name, cartId: state.cart.length + 1}
            const newCart = [...state.cart, newItem]
            return {...state, cart: newCart}
        case REMOVE_FROM_CART:
            const cartId = action.id;
            const remainingCart = state.cart.filter(cart => cart.cartId !== cartId)
            return {...state, cart : remainingCart}
        default:
            return state;
    }
}

export default cartReducer;