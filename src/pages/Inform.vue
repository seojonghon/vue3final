<template>
    <div class="cart">
        <div class="container">
            <ul>
                <li v-for="(i, idx) in state.items" :key="idx">
                    <img :src="i.imgPath"/>
                    <span class="name">{{i.name}}</span>
                    <span class="content">{{ i.content }}P</span>
                    <button class="btn btn-primary" @click="remove(i.id)">삭제하기</button>
                    <router-link to="/" class="btn btn-primary">홈으로</router-link>
                    <router-link to="/order" class="btn btn-primary">신청하기</router-link>
                </li>
            </ul>
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
            items:[]
        })

        const load = () => {
            axios.get("/api/cart/items").then(({data}) => {
                console.log(data);
                state.items = data;
            })
        }

        const remove = (itemId)=>{
            axios.delete(`/api/cart/items/${itemId}`).then(()=>{
                load();
            })
        }
        load();

        return {state, lib, remove}
    }
}

</script>
<style scoped>
.cart ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.cart ul li {
    border: 1px solid #eee;
    margin-top: 25px;
    margin-bottom: 25px;
}

.cart ul li img {
    width: 150px;
    height: 150px;
}
.cart ul li .name {
    margin-left: 25px;
}
.cart ul li .price {
    margin-left: 25px;
}
.cart ul li i {
    float: right;
    font-size: 20px;
    margin-top: 65px;
    margin-right: 50px;
}
.cart .btn {
    width: 300px;
    display:block;
    margin:0 auto;
    padding:30px 50px;
    font-size: 20px;
}
</style>
