import axios from 'axios';


export default axios.create({
    baseurl: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID A4mhB4TP0YABHK-L2QzD8-If7Kq6lCYv7pynfRxCqho'
    }
    
});