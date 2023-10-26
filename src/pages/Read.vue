<template>
    <div class="container">
        <table class="table mt-5">
            <tr>
                <th>글쓴이</th>
                <th>제목</th>
                <th>내용</th>
            </tr>
            <tr v-for="(value, index) in data" :key="index" @click="detail(index)">
                <td>{{ value.writer }}</td>
                <td>{{ value.title }}</td>
                <td>{{ value.content }}</td>
            </tr>
        </table>
        <button class="button" @click="write">글쓰기</button>
    </div>
</template>

<script>
import data from '../data/index.js';

export default {
    name: 'Read',
    data() {
        return {
            data: data,
        };
    },
    methods: {
        write() {
            this.$router.push({ path: 'create' });
        },
        detail(index) {
            this.$router.push({
                name: 'Detail',
                params: {
                    contentId: index,
                },
            });
        },
    },
};
</script>

<style>
.table {
    width: 100%;
    border-collapse: collapse;
}

.table th,
.table td {
    padding: 8px;
    border: 1px solid #ccc;
}

.button {
    padding: 8px 16px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>
