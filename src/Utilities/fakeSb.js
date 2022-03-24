const addLocalStore = id => {

    let addLocalStore = getLocalStore();

    const quantity = addLocalStore[id];
    if (quantity) {
        const newQuntity = quantity + 1;
        addLocalStore[id] = newQuntity;
    }
    else {
        addLocalStore[id] = 1;
    }


    localStorage.setItem('simple-store', JSON.stringify(addLocalStore));
}



const getLocalStore = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('simple-store');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);

    }
    return shoppingCart;
};

const removeFromDb = id => {
    const storedCart = localStorage.getItem('simple-store');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('simple-store', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('simple-store');
}
export { addLocalStore, getLocalStore, removeFromDb, deleteShoppingCart };


