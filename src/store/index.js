import Vue from 'vue'
import Vuex from 'vuex'
import { MakeLocalStore } from '@agri-apps-us/app-core';
import calculate from './calculate';

import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex)

let data = {
  daily: 'Be yourself; everyone else is already taken.',
  author: 'Oscar Wilde'
}

const store = MakeLocalStore("app-starter", {data, getField, updateField, calculate});

store.subscribe((mutation, payload) => {
  console.log('mutation', mutation, payload);
})

export default store;