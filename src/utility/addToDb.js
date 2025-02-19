import { toast } from "react-toastify";

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
        toast.error("Already in the Read List!", {
            position: "top-right"
          });
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        toast.success("Added to Read List!", {
            position: "top-right"
          });
    }
}
const addToStoredWishList = id => {
    const storedList = getStoredWishList();
    if(storedList.includes(id)){
        toast.error("Already in the WishList!", {
            position: "top-right"
          });
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
        toast.success("Added to WishList!", {
            position: "top-right"
          });
    }
}

export {addToStoredReadList,addToStoredWishList, getStoredReadList, getStoredWishList};