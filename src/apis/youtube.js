import axios from 'axios';

const KEY = 'AIzaSyAmqKE6dxqy1cG0Vpjv1EQXWsEu2AFuiTw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});