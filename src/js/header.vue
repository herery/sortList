<template>
    <div class="item">
    	<div class="item-colum item-name">
            <span class="item-title">名称</span>
            <v-sort column="name"></v-sort>
        </div>
    	<div class="item-colum item-size">
            <span class="item-title">大小</span>
            <v-sort column="size"></v-sort>
        </div>
    	<div class="item-colum item-time">
            <span class="item-title">修改日期</span>
            <v-sort column="server_mtime"></v-sort>
        </div>
    </div>
</template>
<script>
    import vSort from './sort.vue';

    export default {
    	data() {
    		return {
    		}
    	},
        components: {
            vSort,
        },
    }
</script>
<style>
.item-title {
    vertical-align: middle;
}
</style>