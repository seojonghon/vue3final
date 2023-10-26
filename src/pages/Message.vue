<template>
    <div class="boards">
        <div class="container">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>번호</th>
                    <th>Email</th>
                    <th>비밀번호</th>
                    <th>선호 프로그래밍 언어</th>
                    <th>수정</th>
                    <th>삭제</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(board, index) in boards" :key="board.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ board.email }}</td>
                    <td>{{ board.password }}</td>
                    <td>{{ board.good }}</td>
                    <td>
                        <button @click="editBoard(board)">수정</button>
                    </td>
                    <td>
                        <button @click="deleteBoard(board.id)">삭제</button>
                    </td>
                </tr>
                </tbody>
            </table>

            <!-- 수정 폼 -->
            <div v-if="editMode">
                <form @submit.prevent="saveEditedBoard">
                    <div class="form-group">
                        <label for="editedEmail">Email</label>
                        <input
                            type="text"
                            id="editedEmail"
                            v-model="editedBoard.email"
                            class="form-control"
                        />
                    </div>
                    <div class="form-group">
                        <label for="editedPassword">비밀번호</label>
                        <input
                            type="text"
                            id="editedPassword"
                            v-model="editedBoard.password"
                            class="form-control"
                        />
                    </div>
                    <div class="form-group">
                        <label for="editedGood">선호 프로그래밍 언어</label>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    v-model="editedBoard.good"
                                    value="JavaScript"
                                />
                                JavaScript
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" v-model="editedBoard.good" value="Python" />
                                Python
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" v-model="editedBoard.good" value="Java" />
                                Java
                            </label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">저장</button>
                    <button @click="cancelEdit" class="btn btn-secondary">취소</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            boards: [],
            editMode: false,
            editedBoard: {
                id: null,
                email: "",
                password: "",
                good: "",
            },
        };
    },
    mounted() {
        this.fetchBoards();
    },
    methods: {
        async fetchBoards() {
            try {
                const response = await axios.get("/api/boards");
                this.boards = response.data;
            } catch (error) {
                console.error(error);
                alert("데이터를 불러오는 데 실패했습니다.");
            }
        },
        editBoard(board) {
            this.editMode = true;
            this.editedBoard.id = board.id;
            this.editedBoard.email = board.email;
            this.editedBoard.password = board.password;
            this.editedBoard.good = board.good;
        },
        async saveEditedBoard() {
            try {
                await axios.put(`/api/boards/${this.editedBoard.id}`, this.editedBoard);
                await this.fetchBoards();
                this.cancelEdit();
            } catch (error) {
                console.error(error);
                alert("수정 중 오류가 발생했습니다.");
            }
        },
        cancelEdit() {
            // 수정 모드 종료
            this.editMode = false;
            // 초기화
            Object.assign(this.editedBoard, {
                id: null,
                email: "",
                password: "",
                good: "",
            });
        },
        async deleteBoard(id) {
            try {
                await axios.delete(`/api/boards/${id}`);
                await this.fetchBoards();
            } catch (error) {
                console.error(error);
                alert("삭제 중 오류가 발생했습니다.");
            }
        },
    },
};
</script>
