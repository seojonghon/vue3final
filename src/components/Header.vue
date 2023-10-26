<template>
    <header>
        <div class="collapse bg-dark" id="navbarHeader">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 clo-md-7 py-4">
                        <h4 class="text-white">IT Volunteer Web</h4>
                        <p class="text-muted">회원님의 관심 분야 혹은 전공에 맞추어 IT 교육 봉사를 신청 가능하게 하여 봉사자와 학습자 모두 만족 가능한 사이트 입니다.</p>
                    </div>
                    <div class="col-sm-4 py-4">
                        <h4 class="text-white">사이트 맵</h4>
                        <ul class="list-unstyled">
                            <li>
                                <router-link to="/" class="text-white">메인 화면</router-link>
                            </li>
                            <li v-if="$store.state.account.id">
                                <router-link to="/orders" class="text-white">봉사 신청 기록</router-link>
                            </li>
                            <li v-if="$store.state.account.id">
                                <router-link to="/porders" class="text-white">포인트물품 구매 내역</router-link>
                            </li>
                            <li>
                                <router-link to="/createAccount" class="text-white">회원 가입</router-link>
                            </li>
                            <li>
                                <router-link to="/login" class="text-white" v-if="!$store.state.account.id">로그인
                                </router-link>
                                <a to="/login" class="text-white" @click="logout()" v-else>로그아웃</a>
                            </li>
                            <li>
                              <router-link to="/edit" class="text-white">관리자 페이지</router-link>
                            </li>
                             <li>
                                <router-link to="/Crawling" class="text-white">1365 크롤링</router-link>
                             </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container">
                <router-link to="/" class="navbar-brand d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
                         stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2"
                         viewBox="0 0 24 24">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                        <circle cx="12" cy="13" r="4"/>
                    </svg>
                    <strong>ITEER</strong>
                </router-link>
                  <router-link to="/phome" class="cart btn">
                    <i class="fa fa-home" aria-hidden="true"></i> 포인트 상점
                </router-link>
              <router-link to="/cart" class="cart btn" v-if="$store.state.account.id">
                <i class="fa fa-heart" aria-hidden="true"></i> 봉사장소 관심목록
              </router-link>
              <router-link to="/pcart" class="cart btn" v-if="$store.state.account.id">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i> 포인트 물품 장바구니
              </router-link>
              <router-link to="/Read" class="pcart btn">
                <i class="fa fa-list-alt" aria-hidden="true"></i> 게시판
              </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader"
                        aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
    </header>
</template>

<script>
import store from "@/scripts/store";
import router from "@/scripts/router";
import axios from "axios";

export default {
    name: 'Header',
    setup() {
        const logout = () => {
            axios.post("/api/account/logout").then(()=>{
                store.commit('setAccount', 0);
                router.push({path: "/"});
            });
        }
        return {logout}
    }
}
</script>

<style scoped>
header ul li a{
    cursor: pointer;
}

header ul li i{
    text-align: right;
}

header .navbar .cart{
    margin-left:20px;
    color:#fff;
}

header .navbar .pcart{
    margin-right:auto;
    color:#fff;
}

</style>
