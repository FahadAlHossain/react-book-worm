const getStoredReadList = () => {
    const storedList = localStorage.getItem('read-list');
    if(storedList){
        const storedListStr = JSON.parse(storedList);
        return storedListStr;
    }else{
        return [];
    }

}

const getStoredWishList = () => {
    const storedList = localStorage.getItem('wish-list');
    if(storedList){
        const storedListStr = JSON.parse(storedList);
        return storedListStr;
    }else{
        return [];
    }

}

const addToStoredReadList = id => {
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        alert("Already exist in the read list!")
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
    }
}
const addToStoredWishList = id => {
    const storedList = getStoredWishList();
    if(storedList.includes(id)){
        alert("Already exist in the wish list!")
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
    }
}

export {addToStoredReadList,addToStoredWishList, getStoredReadList, getStoredWishList};