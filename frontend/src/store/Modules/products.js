import axios from 'axios'
import router from '@/router'
import sweet from 'sweetalert2'

const url = "https://ecom-vrvm.onrender.com/";

const state = {
    items: [],
    selectedItem: null,
    featuredProducts: []
}

const mutations = {
  setItems(state, items) {
    state.items = items;
  },
  setSelectedItem(state, item){
    state.selectedItem = item
  },
  setFeaturedProducts(state, feat){
    state.featuredProducts = feat
  }
};

const actions = {
  async fetchProducts({ commit }) {
    try {
      const { results } = (await axios.get(`${url}products`)).data;
      commit("setItems", results);
    } catch (error) {
      console.log(error);
    }
  },

  async fetchProduct({ commit }, prodID) {
    try {
      const { result } = (await axios.get(`${url}product/${prodID}`)).data;
      commit("setSelectedItem", result[0]);
    } catch (error) {
      console.log(error);
    }
  },

  async featProducts({ commit }) {
    try {
      const { results } = (await axios.get(`${url}products/featured`)).data;
      commit("setFeaturedProducts", results);
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}