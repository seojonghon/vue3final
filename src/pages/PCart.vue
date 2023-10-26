<template>
    <div class="pcart">
        <div class="container">
            <ul><li v-for="(i, idx) in state.pitems" :key="idx">
                    <img :src="i.imgPath"/>
                    <span class="name">{{i.name}}</span>
                    <span class="price">{{ lib.getNumberFormatted(i.price)}}P</span>
                    <i class="fa fa-trash" @click="remove(i.id)"></i>
                </li></ul>
            <router-link to="/porder" class="btn btn-primary">구매하기</router-link>
        </div>
    </div>
</template>
<script>
import {reactive} from "vue";
import axios from "axios";
import lib from "@/scripts/lib";
export default {
    setup() {
        const state = reactive({
            pitems:[]
        })
        const load = () => {
            axios.get("/api/pcart/pitems").then(({data}) => {
                console.log(data);
                state.pitems = data;
            })
        }
        const remove = (itemId)=>{
            axios.delete(`/api/pcart/pitems/${itemId}`).then(()=>{
                load();
            })
        }
        load();

        return {state, lib, remove}
    }
}

</script>
<style scoped>
.pcart ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.pcart ul li {
    border: 1px solid #eee;
    margin-top: 25px;
    margin-bottom: 25px;
}

.pcart ul li img {
    width: 150px;
    height: 150px;
}
.pcart ul li .name {
    margin-left: 25px;
}
.pcart ul li .price {
    margin-left: 25px;
}
.pcart ul li i {
    float: right;
    font-size: 20px;
    margin-top: 65px;
    margin-right: 50px;
}
.pcart .btn {
    width: 300px;
    display:block;
    margin:0 auto;
    padding:30px 50px;
    font-size: 20px;
}
</style>
