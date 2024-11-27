<template>
    <div class="container">
        <div class="row">

            <div class="col-sm-12 col-md-6">
                <h1 class="h1 fw-bold fs-1">Hallo Dit is mijn mijn portifolio!</h1>
                <p class="p about-text">
                    Dit is een portifolio website gemaakt met Vue.js en Bootstrap. Het is een single page application,
                    wat betekent dat de pagina niet opnieuw hoeft te laden wanneer je van pagina wisselt. Dit maakt de
                    website sneller en zorgt voor een betere gebruikerservaring.
                </p>
            </div>

            <div class="col-sm-12 col-md-6">
                <div class="row d-flex justify-content-center">
                    <div class="card pe-0">
                        <div class="row g-0">
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title h5 fs-2 fw-bold">
                                        Niek Geerligs
                                    </h5>
                                    <hr>
                                    <p class="card-text fs-5">
                                        Ik ben een full stack student developer. Ik
                                        heb ervaring met html, css, javascript, vue.js, node.js, php, c# en sql</p>
                                </div>
                            </div>
                            <div class="col-md-4 order-small">
                                <img src="@/assets/niek.jpg" class="img-fluid rounded-end" alt="foto van mij">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Index',
}

</script>
<style scoped>
.container {
    height: 70vh;
    margin-top: 10vh;
}

.p {
    font-size: 1.5rem;
    margin-top: 15px;
}

@media screen and (max-width: 768px) {
    .container {
        height: auto;
    }
    .about-text {
        display: none;
    }

    .order-small {
        order: -1;
    }

    .card {
        margin-top: 20px;
    }

}
</style>