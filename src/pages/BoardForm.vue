<template>
    <div class="container">
        <h1 class="mt-4">회원 가입</h1>
        <form @submit.prevent="createBoard">
            <label htmlFor="title">ID:</label>
            <input type="text" id="title" v-model="board.email" required /><br />
            <label htmlFor="content">PassWord:</label>
            <input
                type="password"
                id="content"
                v-model="board.password"
                required
            /><br />
            <label htmlFor="good">선호 프로그래밍 언어:</label><br />
            <label>
                <input type="radio" v-model="board.good" value="JavaScript" />
                JavaScript </label
            ><br />
            <label>
                <input type="radio" v-model="board.good" value="Python" />
                Python </label
            ><br />
            <label>
                <input type="radio" v-model="board.good" value="Java" /> Java </label
            ><br />
            <button type="submit" class="btn">가입하기</button>
        </form>
        <!--    <b-modal v-model="showModal" title="회원 가입 완료">-->
        <!--      <p>회원 가입이 완료되었습니다!</p>-->
        <!--    </b-modal>-->
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            board: {
                email: "",
                password: "",
                // good: "",
            },
            // showModal: false,
        };
    },
    methods: {
        createBoard() {
            // AJAX 요청 등을 통해 백엔드에 게시글 생성 요청을 보냅니다.
            // 예시로 axios를 사용한 코드를 작성하였습니다.
            axios
                .post("/api/boards", this.board)
                .then((response) => {
                    console.log(response.data);
                    // 게시글 생성 후 필요한 처리를 수행합니다.
                    // this.showModal = true;
                })
                .catch((error) => {
                    console.error(error);
                    // 에러 처리를 수행합니다.
                });
        },
    },
};
</script>
<style scoped>
. signup-form {
    max-width: 400px;
    margin: 0 auto;
}

. form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

input[type="text"],
input[type="password"],
textarea {
    width: 100%;
    padding: 8px;
    font-size: 16px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
}
</style>
