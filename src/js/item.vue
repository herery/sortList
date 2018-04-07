<template>
    <div class="item">
    	<div class="item-colum item-name">{{item.name}}</div>
    	<div class="item-colum item-size">{{item.size | filterSize}}</div>
    	<div class="item-colum item-time">{{item.server_mtime | filterDate}}</div>
    </div>
</template>
<script>
    export default {
    	data() {
    		return {
    			message: 'vue hello'
    		}
    	},
    	props: {
    		item: {
    			type: Object,
    			required: true
    		},
    	},
        filters: {
            filterSize: function (value) {
                if( value == 0 || value == '') {
                    return '-';
                }
                var danwei = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
                var index = 0;
                var restValue = value;
                while( restValue / 1024 > 1 ) {
                    index++;
                    restValue = restValue / 1024;
                }
                return Math.round(restValue * 100) / 100 + danwei[index];
            },
            filterDate: function (date){
                var date = new Date(date * 1000);

                var Y = date.getFullYear();
                var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
                var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
                var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
                var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes());
                var s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());

                return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s;
            }
        }
    }
</script>
<style>
</style>