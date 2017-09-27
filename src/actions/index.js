import axios from 'axios';

const API_URL = 'https://api.github.com/repos/';

export const FETCH_REPO = 'FETCH_REPO';

export function fetchRepo(urlBit) {
    const url = `${API_URL}${urlBit}`;
    const request = axios.get(url);

    return {
        type: FETCH_REPO,
        payload: request
    };
}