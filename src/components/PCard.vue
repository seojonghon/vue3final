<template>
    <div class="pcard shadow-sm">
        <span class="img" :style="{backgroundImage:`url(${pitem.imgPath})`}"/>
        <div class="pcard-body">
            <p class="pcard-text">
                <span>{{ pitem.name }}&nbsp;</span>
                <!--                <span class="discount badge bg-danger">-->
                <!--                    {{ pitem.discountPer }}%-->
                <!--                </span>-->
            </p>
            <div class="d-flex justify-content-between align-Pitems-center">
                <button class="btn btn-primary" @click="addToCart(pitem.id)">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </button>
                <small class="price text-muted">
                    {{ lib.getNumberFormatted(pitem.price)}}P
                </small>
                <!--                <small class="real text-danger">-->
                <!--                    {{ lib.getNumberFormatted(pitem.price - (pitem.price * pitem.discountPer / 100)) }}%-->
                <!--                </small>-->
            </div>
        </div>
    </div>
</template>

<script>
import lib from "@/scripts/lib";
import axios from "axios";

export default {
    name: "PCard",
    props:{
        pitem: Object
    },
    setup(){
        const addToCart = (itemId)=>{
            axios.post(`/api/pcart/pitems/${itemId}`).then(()=>{
                console.log('success')
            })
        };
        return {lib, addToCart}
    }
}
</script>
<style scoped>
.pcard .img {
    display: inline-block;
    width:100%;
    height: 250px;
    background-size: cover;
    background-position: center;
}

</style>
