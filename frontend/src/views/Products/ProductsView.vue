<template>
    <div>

        <!-- Products Section -->

        <section class="container">
            <h1 class="display-6 my-3">Clothing</h1>
            <div v-if="filterdItems.length > 0">
                <button class="btn rounded-0 mx-1 custom-btn" style="outline: 1px solid black" @click="resetCategory">
                    All
                </button>
                <button class="btn rounded-0 mx-1 my-2 custom-btn" style="outline: 1px solid black"
                    v-for="category in categories" :key="category" @click="selectCategory(category)">
                    {{ category }}
                </button>
                <div class="row gap-3 mt-4">
                    <div class="col d-flex justify-content-center" v-for="item in filterdItems" :key="item.prodID">
                        <div class="card h-100 rounded-0" style="width: 18rem">
                            <img :src="item.prodImg" class="card-img rounded-0" alt="">
                            <div class="card-body d-flex flex-column justify-content-between">
                                <h4>{{ item.prodName }}</h4>
                                <p>R{{ item.amount }}</p>
                                <router-link :to="'/product/' + item.prodID" class="btn rounded-0 custom-btn"
                                    style="outline: 1px solid black"><i class="bi bi-bag-heart pe-2"></i>View
                                    More</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="d-flex flex-column align-items-center my-5">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <p class="mt-3">Loading</p>
            </div>

        </section>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            selectedCategory: null
        }
    },
    computed: {
        ...mapState('products', ['items', 'selectedItem']),

        filterdItems() {
            if (!this.selectedCategory) {
                return this.items
            }
            return this.items.filter(item => item.category === this.selectedCategory)
        },

        categories() {
            return [...new Set(this.items.map(item => item.category))]
        }
    },
    methods: {
        ...mapActions('products', ['fetchProducts', 'fetchProduct']),

        selectCategory(category) {
            this.selectedCategory = category
        },

        resetCategory() {
            this.selectedCategory = null
        }
    },
    mounted() {
        this.fetchProducts()
    }
}
</script>

<style scoped>
.custom-btn:hover {
    background-color: #000;
    color: #fff;
}
</style>