const getJwt = () =>{
    return sessionStorage.getItem('secretkey')
}

export default getJwt;