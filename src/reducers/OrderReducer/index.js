const initialState = [];

const type = {
    ADD_ORDER_ITEM: "ADD_ORDER_ITEM",
    DELETE_ALL_ORDER_ITEMS: "DELETE_ALL_ORDER_ITEMS"
};

export function addOrderItem(item) {
    return { type: type.ADD_ORDER_ITEM, item };
}

export function deleteAllOrderItems() {
    return { type: type.DELETE_ALL_ORDER_ITEMS }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case type.ADD_ORDER_ITEM:
            return [...state, action.item];
        case type.DELETE_ALL_ORDER_ITEMS:
            return initialState;
        default:
            return state;
    }
}