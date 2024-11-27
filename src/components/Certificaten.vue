<template>
    <div class="container text-center" id="Certificaten">
        <div class="row g-2">
            <div class="col-md-6 col-6 col-sm-12" v-for="(certificaat, index) in certificaten" :key="index">
                <div class="card">
                    <div class="card-header">
                        <h3>{{ certificaat.naam }}</h3>
                    </div>
                    <div class="card-body">
                        <p>{{ certificaat.beschrijving }}</p>
                        <p>{{ certificaat.datum }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "Certificaten",
    props: ['certificaten'],
};
</script>