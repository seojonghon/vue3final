<template>
    <div class="phome">
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col" v-for="(pitem, idx) in state.pitems" :key="idx">
                        <PCard :pitem="pitem"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import axios from "axios";
import {reactive} from "vue";
import PCard from "@/components/PCard.vue";


export default {
    name: "PHome",
    components: {PCard},
    setup() {
        const state = reactive({
            pitems: []
        })

        axios.get("/api/pitems").then(({data}) => {
            state.pitems = data;
        })
        return {state}
    }
}
</script>

<style scoped>

</style>
