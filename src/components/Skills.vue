<template>
    <div class="container" id="Skills">
        <div class="row text-center">
            <h1>Skills</h1>
        </div>
        <div class="row g-2">
            <div class="col-md-6 col-6 col-sm-12 g-1 progress-col" v-for="(skill, index) in skills" :key="index">
                <h3>{{ skill.name }}</h3>
                <div class="progress" role="progressbar" aria-label="Info striped example"
                    :aria-valuenow="skill.progress" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar progress-bar-striped bg-info" :style="{ width: skill.progress + '%' }">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Skills',
    props: ['skills'],
}
</script>
<style scoped>
.progress-col {
    margin-bottom: 20px;
}
</style>