import client from "./client";

export const getListings = () => {
    return client.get('/listings')
}