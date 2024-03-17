import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: null, 
    userId: null,
    tenantId: null
  },
  mutations: {
    setAccessToken(state, token) {
      state.accessToken = token;
    },
    clearAccessToken(state) {
      state.accessToken = null; 
    },
    setUserId(state, token){
        state.userId = token
    },
    setTenantId(state, token){
        state.tenantId = token
    },
    setAuthToken(state, token){
        state.authToken = token
    }
    
  },
  getters: {
    getTenantId(state){
        state.tenantId = token
    },
    getUserId(state){
        state.userId = token
    },
  }
});
