const regex: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const validateEmailReg = (email: string): boolean => {
    if(regex.test(email)) {
        return true;
    }
    return false
}