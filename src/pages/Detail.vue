<template>
    <div>
        <div class="detail-info">
            <div class="detail-info-item">
                <strong>글쓴이:</strong>
                <span>{{ data.writer }}</span>
            </div>
            <div class="detail-info-item">
                <strong>제목:</strong>
                <span>{{ data.title }}</span>
            </div>
            <div class="detail-info-item">
                <strong>내용:</strong>
                <span>{{ data.content }}</span>
            </div>
        </div>

        <button class="button" @click="updateData">수정</button>
        <button class="button" @click="deleteData">삭제</button>
    </div>
</template>

<script>
import data from '@/data';

export default {
    name: 'Detail',
    data() {
        const index = this.$route.params.contentId;
        return {
            data: data[index],
            index: index,
        };
    },
    methods: {
        deleteData() {
            data.splice(this.index, 1);
            this.$router.push({ path: '/' });
        },
        updateData() {
            this.$router.push({
                name: 'Create',
                params: {
                    contentId: this.index,
                },
            });
        },
    },
};
</script>

<style>
.detail-info {
    margin-bottom: 20px;
}

.detail-info-item {
    margin-bottom: 10px;
}

.detail-info-item strong {
    display: inline-block;
    width: 100px;
    font-weight: bold;
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
