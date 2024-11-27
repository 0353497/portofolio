<template>
  <Header PageTitle="Portifolio" />
  <Modal :title="title" :modalText="modalText" :showModal="showModal" @close-modal="ToggleModal" />
  <router-view></router-view>
</template>

<script>
import Modal from "./components/Modal.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
    Modal,
  },
  data() {
    return {
      title: "WAARSCHUWING",
      modalText: "DIT IS PUUR OM VUE JS TE LEREN, (de schoolopdracht boeit mij niet echt)",
      showModal: true,
    };
  },
  methods: {
    ToggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
