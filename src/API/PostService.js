import axios from 'axios';
export default class PostService {
    static async getAll() {
        try {
            const responce = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return responce.data;

        } catch (event) {
            console.log(event);

        }
        
    }
}