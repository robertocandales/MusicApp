function handle_response(response) {
    const OK_STATUS = 200;

    if (response.status != OK_STATUS) {
        // simply return the whole response object
        return Promise.reject(response);
    }

    return response.data;
}

export {handle_response};