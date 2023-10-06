<template>
    <div class="container">
        <nav aria-label="breadcrumb" v-if="selectedItem">
            <ol class="breadcrumb">
                <router-link to="/products" class="breadcrumb-item">Back</router-link>
                <li class="breadcrumb-item active" aria-current="page">{{ selectedItem.prodName }}</li>
            </ol>
        </nav>
        <p class="display-6 text-uppercase">Clothing</p>
        <!-- Button trigger modal -->
        <button type="button" class="btn rounded-0 mb-4 custom-btn" style="" data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            <i class="bi bi-zoom-in pe-2"></i>Enlarge image
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header" v-if="selectedItem">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">{{ selectedItem.prodName }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" v-if="selectedItem">
                        <img :src="selectedItem.prodImg" class="w-100" alt="">
                        <template v-if="selectedItem.img1">
                            <img :src="selectedItem.img1" class="w-100 my-3 small-img" alt="">
                        </template>
                        <template v-if="selectedItem.img2">
                            <img :src="selectedItem.img2" class="w-100 small-img" alt="">
                        </template>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="selectedItem">
            <div class="row">
                <div class="col-sm-12 col-lg-6 d-flex flex-column">
                    <img :src="selectedItem.prodImg" class="custom-img" alt="">
                    <div class="mt-2">
                        <template v-if="selectedItem.img1">
                            <img :src="selectedItem.img1" class="w-25 pe-2 small-img" alt="">
                        </template>
                        <template v-if="selectedItem.img2">
                            <img :src="selectedItem.img2" class="w-25 pe-2 small-img" alt="">
                        </template>
                    </div>
                </div>
                <div class="col">
                    <p class="text-center mt-4 display-6">R{{ selectedItem.amount }}</p>
                    <div class="d-flex flex-column align-items-center justify-content-center">
                        <h1 class="display-6">{{ selectedItem.prodName }}</h1>
                        <p class="mt-3">Size - {{ selectedItem.size }}</p>
                    </div>
                    <div class="d-flex flex-column align-items-center">
                        <h4 class="display-6 my-2">How to</h4>
                        <p class="text-center">Add us on Whatsapp and send us a message along with the product you'd like to purchase and we will get back to you as soon as possible, thank you.</p>
                        <p class="p-2" style="outline: 1px solid black">082 927 0584</p>
                        <img src="https://i.postimg.cc/YCnVtcb1/584E5FFC-7BD7-4DF4-A586-FAC34AE19D67.jpg" class="w-75" style="outline: 1px solid black" loading="lazy" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    computed: {
        ...mapState('products', ['selectedItem'])
    },
    async created() {
        const prodID = this.$route.params.prodID
        await this.fetchProduct(prodID)
    },
    methods: {
        ...mapActions('products', ['fetchProduct'])
    }
}
</script>

<style scoped>
.custom-img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    background-position: 50%;
}

.custom-btn:hover {
    background-color: #000;
    color: #fff;
}

.custom-btn{
    outline: 1px solid black;
}

.small-img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
}
</style>