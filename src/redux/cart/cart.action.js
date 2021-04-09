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

export {
    addItem,
    clearCart 
}