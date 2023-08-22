<template>
    <section class="Productsection">
        <div class="btns d-flex ">
            <button class="btn btn-primary" @click="select('AddProduct')">Add Product</button>
            <button class="btn btn-primary" @click="select('DeleteProduct')">Delete Product</button>
            <button class="btn btn-primary">Update Product</button>
        </div>
        <component :is="isSelected"></component>
    </section>
</template>
<script>
import AddProduct from '../../../views/Dashboard/AdminPages/ProductsOperations/AddProduct.vue'
import DeleteProduct from '../../../views/Dashboard/AdminPages/ProductsOperations/DeleteProduct.vue'
export default{
    components:{
        AddProduct,
        DeleteProduct
    },
    data() {
        return {
            isSelected:''
        }
    },
    methods:{
        select(e){
            this.isSelected=e;
        }
    }
}
</script>
<style lang="scss" scoped>
    .Productsection{
        background-color: #ddd;
        height: 100vh;
    }
    button{
        padding: 10px;
        margin: 10px;
    }
</style>

