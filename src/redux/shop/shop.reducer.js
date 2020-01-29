import SHOP_DATA from './shop.data';

const INITITAL_STATE = {
    collections: SHOP_DATA
};

const shopReducer = (state = INITITAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopReducer;