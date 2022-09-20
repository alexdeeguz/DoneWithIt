import client from "./client";

const getListings = () => {
    return client.get('/listings')
}

export default {
    getListings
}
