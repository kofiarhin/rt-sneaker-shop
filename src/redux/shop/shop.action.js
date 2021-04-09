
const getShopData = () => {

    return {
        type: "GET_SHOP_DATA"
    }
}

const setSearch = search => {

    return {
        type: "SET_SEARCH",
        payload: search
    }
}

const getSearch = () => {

    return {
        type: "GET_SEARCH"
    }
}

export {
    getShopData,
    setSearch,
    getSearch
}