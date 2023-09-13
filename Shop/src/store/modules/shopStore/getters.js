export default {
    getProducts(state) {
        return state.products; 
    },
    getSize(state){
        return state.products.length;
    }
};