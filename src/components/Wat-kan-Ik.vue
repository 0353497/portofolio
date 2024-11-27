<template>
    <div class="container text-center d-flex flex-column justify-content-around">
        <h1 class="h1">{{ title }}</h1>
        <p>{{ text }}</p>
    </div>
</template>
<script>
export default {
    name: "Wat-kan-Ik",
    props: ['title', 'text'],
};
</script>
<style scoped>
.container {
    margin-top: 20px;
    height: 50vh;
}
</style>
