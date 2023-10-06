import { createStore } from 'vuex'
import productsModule from './Modules/products'

export default createStore({
  modules: {
    products: productsModule
  }
})
