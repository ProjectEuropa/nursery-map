<template>
    <footer>
        <div class="container">
            <small>© {{nowYear}} Team Project Europa</small>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            nowYear:''
        }
    },
    created() {
        this.nowYear = new Date().getFullYear();
    },
}
</script>

<style scoped>
    footer {
        height: 50px;
        padding-top: 25px;
        color: #bfbfbf;
        background-color: #2a2a2a;
    }
</style>

