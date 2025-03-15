import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);     // it triggers axios that get URL  and on success it gets the response and just return response to data

export default fetcher;