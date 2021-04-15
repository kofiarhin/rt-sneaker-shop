const addItem = item  => {

    return {

        type: "ADD_ITEM",
        payload: item
    }
}


const clearCart = () => {

    return {
        type: "CLEAR_CART",
        payload: []
    }
}

const removeItem = item => {

    return {
        type: "REMOVE_ITEM_FROM_CART",
        payload: item
    }
}

export {
    addItem,
    clearCart,
    removeItem 
}