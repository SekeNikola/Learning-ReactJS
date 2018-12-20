import axios from 'axios'

const KEY = 'AIzaSyANl6Q59lgTJ9GI1w_sj6elVALyRr2fQsk'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})