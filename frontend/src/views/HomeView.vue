<template>
  <div>


    <!-- Products Section -->

    
    <section>
      <div class="container" v-if="featuredProducts.length > 0">
        <h1 class="display-6 mb-4">Clothing</h1>
        <div class="row gap-3">
          <div class="col d-flex justify-content-center" v-for="item in featuredProducts" :key="item.prodID">
            <div class="card h-100 rounded-0" style="width: 18rem">
            <img :src="item.prodImg" class="card-img rounded-0" alt="">
            <div class="card-body d-flex flex-column justify-content-between">
              <h4>{{ item.prodName }}</h4>
              <p>R{{ item.amount }}</p>
              <router-link :to="'/product/' + item.prodID" class="btn rounded-0 custom-btn" style="outline: 1px solid black"><i class="bi bi-bag-heart pe-2"></i>View More</router-link>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <router-link to="/products" class="btn rounded-0 mt-5 custom-btn" style="outline: 1px solid black">View Products</router-link>
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
  data(){
    return{
      selectedCategory: null
    }
  },
  computed: {
    ...mapState('products', ['selectedItem', 'featuredProducts']),
  },
  methods: {
    ...mapActions('products', ['featProducts', 'fetchProduct']),

    selectCategory(category){
      this.selectedCategory = category
    },

    resetCategory(){
      this.selectedCategory = null
    }
  },
  mounted() {
    this.featProducts()
  }
}
</script>

<style scoped>
.custom-btn:hover{
    background-color: #000;
    color: #fff;
}
</style>