<template>
    <div class="card shadow-sm">
        <span class="img" :style="{backgroundImage:`url(${item.imgPath})`}"/>
        <div class="card-body">
            <p class="card-text">
                <span>{{ item.name }} &nbsp;</span>

                <span class="discount badge bg-danger">
                    {{ item.discountPer }}P
                </span>
            </p>
            <div class="d-flex justify-content-between align-items-center">
                <button class="btn btn-danger " @click="addToCart(item.id)">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                </button>

                <button class="btn btn-success" @click="addToCart(item.id)">
                    <i class="fa fa-globe" aria-hidden="true"></i>
                    <router-link :to="{ path: '/Inform' }" class="text-white">상세 페이지</router-link>
                </button>
                <small class="price text-muted">
                    {{ lib.getNumberFormatted(item.price)}}P
                </small>

                <small class="real text-danger">
                    {{ lib.getNumberFormatted(item.price + (item.price * item.discountPer / 100)) }}P
                </small>
            </div>
        </div>
    </div>
</template>

<script>
import lib from "@/scripts/lib";
import axios from "axios";

export default {
    name: "Card",
    props:{
        item: Object
    },
    setup() {
        const addToCart = (itemId) => {
            axios.post(`/api/cart/items/${itemId}`).then(() => {
                console.log('success')
                //window.alert("관심목록에 추가되었습니다")
            })
        };
        return {lib, addToCart}
    }
}
</script>
<style scoped>
.card .img {
    display: inline-block;
    width:100%;
    height: 250px;
    background-size: cover;
    background-position: center;
}

.card .card-body .price {
    text-decoration: line-through;
}

</style>
