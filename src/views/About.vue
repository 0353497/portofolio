
<template>
    <div>
        <WatKanIk title="Leerstijl"
            text="Mijn leerstijl is vooral visueel en kinesthetisch. Ik leer het beste door te doen en te zien. Ik ben een echte doener en leer het beste door te experimenteren. Ik ben ook een snelle leerling en kan snel nieuwe dingen oppikken.">
        </WatKanIk>
        <Enneagram />
        <diskProfiel />
        <WatKanIk title="Persoonlijksheid Profiel"
            text="Ik ben extrovert, vriendelijk, niet zorgvuldig, redelijk open en emotioneel stabiel" />
        <div id="pdfRenderer"></div>
    </div>
</template>


<script>
import Enneagram from '@/components/enneagram.vue';
import WatKanIk from '@/components/Wat-kan-Ik.vue';
import diskProfiel from '@/components/disk-profiel.vue';
export default {
    name: 'About',
    components: {
        WatKanIk,
        Enneagram,
        diskProfiel,
    }
}
var pdf = new PDFObject({
    url: "src/assets/CV Niek.pdf",
    id: "pdfRendered",
    pdfOpenParams: {
        view: "FitH"
    }
}).embed("pdfRenderer");
</script>