<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Modal :title="title" :modalText="modalText" :showModal="showModal" @close-modal="ToggleModal" />
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'Modal Title',
      modalText: 'This is some text',
      showModal: true
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
