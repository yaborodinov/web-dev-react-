export const cheskLS = () => {
    if (localStorage.getItem("w")) return true;
    return false;
}

export const showMessage = text => {
    return `${text} Meassage not found`
}