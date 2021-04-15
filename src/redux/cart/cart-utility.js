import { isElementOfType } from "react-dom/test-utils"

const addItem  = (cartData, item) => {

    if(!cartData) {
            return cartData = [{...item}]
    }

    // check if item already exist
    const existing = cartData.find( cartItem => cartItem.id === item.id)

    if(existing) {

            if(existing.size === item.size) {
                        existing.quantity +=item.quantity
            return cartData;

            } 

            return [...cartData, item]

    }

    return [...cartData, item]

    // if(!cartData) {
    //     return   cartData = [{...item, quantity: 1}]
    // }
    
    // //check if ittem already exist
    // const existing = cartData.find( cartItem => cartItem.id === parseInt(item.id ))

    //     if(existing) {
    //         existing.quantity +=1;

    //         return cartData;
    //     }

    //     return [...cartData, {...item, quantity: 1}]
}

const removeItem = (cartData, item) => {
       
    const { index } = item;

    const filtered = cartData.filter( (cartItem, index) => index !== item.index );


    return filtered
}
export {
    addItem,
    removeItem
}