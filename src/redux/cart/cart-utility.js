const addItem  = (cartData, item) => {


    if(!cartData) {
        return   cartData = [{...item, quantity: 1}]
    }
    
    //check if ittem already exist
    const existing = cartData.find( cartItem => cartItem.id === parseInt(item.id ))

        if(existing) {
            existing.quantity +=1;

            return cartData;
        }

        return [...cartData, {...item, quantity: 1}]
}


export {
    addItem
}