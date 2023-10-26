<template>
    <div class="porder">
        <div class="container">
            <main>
                <div class="py-5 text-center"><h2>구매하기</h2>
                </div>
                <div class="row g-5">
                    <div class="col-md-5 col-lg-4 porder-md-last"><h4
                        class="d-flex justify-content-between align-items-center mb-3">
                        <span class="text-primary">신청 목록</span>
                        <span
                            class="badge bg-primary rounded-pill">
                            {{ state.pitems.length }}
                        </span></h4>
                        <ul class="list-group mb-3">
                            <li class="list-group-item d-flex justify-content-between lh-sm"
                                v-for="(i, idx) in state.pitems" :key="idx">
                                <div>
                                    <h6 class="my-0">{{ i.name }}</h6>
                                </div>
                                <span class="text-muted">
                                    {{ lib.getNumberFormatted(i.price - i.price * i.discountPer / 100) }}P
                                </span>
                            </li>
                        </ul>
                        <h3 class="text-center total-price">
                            {{ lib.getNumberFormatted(computedPrice) }}P
                        </h3>
                    </div>
                    <div class="col-md-7 col-lg-8"><h4 class="mb-3">신청자 정보</h4>
                        <div class="needs-validation" novalidate="">
                            <div class="row g-3">
                                <div class="col-12"><label for="username" class="form-label">이름</label>
                                    <input type="text"
                                           class="form-control"
                                           id="username"
                                           v-model="state.form.name">
                                </div>
                            </div>
                            <hr class="my-4">
                            <div class="col-12"><label for="address" class="form-label">주소</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="address"
                                    v-model="state.form.address">
                            </div>

<!--                            <input-->
<!--                                type="text" class="form-control" id="cc-name" v-model="state.form.cardNumber">-->
                            <hr class="my-4">
                            <button class="w-100 btn btn-primary btn-lg" @click="submit()">구매 하기</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import {computed, reactive} from "vue";
import axios from "axios";
import lib from "@/scripts/lib";
import router from "@/scripts/router";

export default {
    setup() {
        const state = reactive({
            pitems: [],
            form: {
                name: "",
                address: "",
                payment: "",
                cardNumber: "",
                pitems: "",
            }
        })
        const load = () => {
            axios.get("/api/pcart/pitems").then(({data}) => {
                console.log(data);
                state.pitems = data;
            })
        };

        const submit = ()=>{
            const args = JSON.parse(JSON.stringify(state.form)) ;
            args.pitems = JSON.stringify(state.pitems);
            axios.post("/api/porders", args).then(()=>{
                alert('구매하였습니다.'); // 변경
                router.push({path:"/porders"})
            })
        }

        const computedPrice = computed(() => {
            let result = 0;

            for (let i of state.pitems) {
                result += i.price - i.price * i.discountPer / 100;
            }
            return result;
        })

        load();

        return {state, lib, computedPrice, submit}
    }
}
</script>
<style scoped>

</style>
