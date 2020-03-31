const dsKey = 'doctor';

export const getDoctorState = () =>{
    return sessionStorage.getItem(dsKey)
}

export const setDoctorState = (flag) => {
    sessionStorage.setItem(dsKey, flag);
};

export const deleteDoctorState = () => {
    sessionStorage.removeItem(dsKey);
};
