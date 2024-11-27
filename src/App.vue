<template>
  <Modal :title="title" :modalText="modalText" :showModal="showModal" @close-modal="ToggleModal" />
  <Header PageTitle="Portifolio" />
  <router-view></router-view>
</template>

<script>
import Modal from './components/Modal.vue'
import Header from "./components/Header.vue";

export default {
  name: 'App',
  components: {
    Header,
    Modal
  },
  data() {
    return {
      title: 'Modal Title',
      modalText: 'This is some text',
      showModal: false
    }
  },
  methods: {
    ToggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
