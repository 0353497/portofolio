
<template>
    <div>
        <WatKanIk title="Leerstijl"
            text="Mijn leerstijl is vooral visueel en kinesthetisch. Ik leer het beste door te doen en te zien. Ik ben een echte doener en leer het beste door te experimenteren. Ik ben ook een snelle leerling en kan snel nieuwe dingen oppikken.">
        </WatKanIk>
        <Enneagram />
    </div>
</template>


<script>
import Enneagram from '@/components/enneagram.vue';
import WatKanIk from '@/components/Wat-kan-Ik.vue';
export default {
    name: 'About',
    components: {
        WatKanIk,
        Enneagram
    }
}

</script>