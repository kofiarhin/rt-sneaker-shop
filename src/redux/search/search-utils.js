import shop_data from "../../SHOP_DATA"

export const searchItem = search => {

    let flatArray = [];

    shop_data.forEach( data => {

        console.log(data.title)
                
        data.items.forEach( item  => {

            flatArray.push({
                title: data.title,
                ...item

            })
        })
    })


    const result  = flatArray.filter( item => {
        const name = item.name.toLowerCase()

        return name.includes(search)
    })

    return result;



}