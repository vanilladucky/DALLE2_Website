import axios from 'axios';

const apiKey = 'insert_api_key_here'

export default axios.create({
    baseURL: "https://api.openai.com/v1/images/generations",
    headers: {
        //Authorization: "Bearer " + apiKey,
    }
})