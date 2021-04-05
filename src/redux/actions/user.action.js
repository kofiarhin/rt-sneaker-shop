export const getUsers = () => {

    return {
        type: "GET_USERS",
        payload: [
            {
                name: "lebron james",
                email: "lebron@gmail.com"
            },
            {
                name: "kofi arhin",
                email: "kofiarhin@gmail.com"
            }
        ]
    }
}

