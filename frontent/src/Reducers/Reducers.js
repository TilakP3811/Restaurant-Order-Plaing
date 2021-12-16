import { ADD_TO_CART, DECREMENT, INCREMENT, REMOVE_TO_CART, CANCEL, TABLE } from "../Actions/Actions";

export const cartReducer = (state, action) => {
    if (action.type === ADD_TO_CART) {
        return [...state, { id: action.payload.id, name: action.payload.name, prize: action.payload.prize, quantity: action.payload.quantity }];
    }
    else if (action.type === REMOVE_TO_CART) {
        return state.filter(item => item.id !== action.payload.id);
    }
    else if (action.type === CANCEL) {
        return [];
    }
    else if (action.type === INCREMENT) {
        return state.map(item => {
            if (item.id === action.payload.id) {
                return { ...item, quantity: item.quantity + 1 }
            }
            return item;
        });
    }
    else if (action.type === DECREMENT) {
        return state.map(item => {
            if (item.id === action.payload.id) {
                return { ...item, quantity: item.quantity - 1 }
            }
            return item;
        });
    }
    return state;
}

export const cartToggle = (state, action) => {
    if (action.type === ADD_TO_CART) {
        return [...state, action.payload.id];
    }
    else if (action.type === REMOVE_TO_CART) {
        return state.filter(item => item !== action.payload.id);
    }
    return state;
}

export const tableNumber = (state, action) => {
    if  (action.type === TABLE){
        return {table:action.payload.table};
    }
    else return state;
}