import axios from 'axios';
import { handle_response } from './utils'


const URL = 'http://ec2-52-55-160-105.compute-1.amazonaws.com:3300/api/'; // todo: replace for an environment variable

/**
 *
 * @param options
 * @returns {Promise<AxiosResponse<any>>}
 */
function get_songs(options) {

    const request_options = {
        method: 'get',
        url: (URL + 'songs'),
        params: options
    };

    return axios(request_options)
        .then(value => {
            return handle_response(value)
        })
}

export const songs_service = {
    get_songs,
};