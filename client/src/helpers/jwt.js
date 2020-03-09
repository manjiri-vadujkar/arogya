const ssKey = 'secretkey';

export const getJwt = () =>{
    return sessionStorage.getItem(ssKey)
}

export const setJwt = (token) => {
    sessionStorage.setItem(ssKey, token);
};

export const deleteJwt = () => {
    sessionStorage.removeItem(ssKey);
};
