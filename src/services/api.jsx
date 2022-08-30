import axios from "axios";
import { toast } from "react-toastify";

const API_KEY = '28330557-4596cce085de9890ceef06ea6';
axios.defaults.baseURL = "https://pixabay.com/api";

export const fetchImages = async (query, page) => {
    try {
        const searchParams = new URLSearchParams({
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: page,
            per_page: 12,
        });

        const response = await axios.get(`?${searchParams}`);

        if (response.data.totalHits === 0 || query === '') {
            toast.error('По вашему запросу ничего не найдено!');
        } else {
            return response.data;
        }
        
    } catch (error) {
        console.log(error);
    }
};