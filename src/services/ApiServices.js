import axios from 'axios';

const URL = 'https://dummyjson.com/products';

const ApiService = {
    ApiProductFlashSale: async () => {
        return await axios(URL);
    },
    ApiDetailProduct: async (id) => {
        const response = await axios(`${URL}/${id}`);
        return response.data;
    },
};

export default ApiService;
