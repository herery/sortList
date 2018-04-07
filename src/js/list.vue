<template>
	<div class="items">
        <v-header></v-header>
    	<v-item v-for="item in all" :item="item"></v-item>
    </div>
</template>
<script>
	import vItem from './item.vue';
	import vHeader from './header.vue';
    import bus from './eventBus.js';

    export default {
    	data() {
    		return {
    			all: [
                    {
                        name: 'ding.mp4',
                        server_ctime: 1503974155,
                        server_mtime: 1503974155,
                        size: 30048144
                    },
    				{
    					name: 'my-pick.jpg',
    					server_ctime: 1496137790,
						server_mtime: 1496137790,
    					size: 492329
    				},
                    {
                        name: '我的头像.zip',
                        server_ctime: 1488878186,
                        server_mtime: 1488878186,
                        size: 40744
                    },
                    {
                        name: '我的资源',
                        server_ctime: 1490935394,
                        server_mtime: 1490935394,
                        size: 0
                    },
                    {
                        name: 'ding.mp4',
                        server_ctime: 1503974155,
                        server_mtime: 1503974155,
                        size: 30048144
                    },

    			]
    		}
    	},
    	components: {
            vItem,
            vHeader,
        },
        mounted: function() {
            var _this = this;
            bus.$on('sortUp', function(column){
                _this.all = _this.all.sort(_this.compare(column, 1));
                bus.$emit('sortStatus', column, 'up');
            });
            bus.$on('sortDown', function(column){
                _this.all = _this.all.sort(_this.compare(column));
                bus.$emit('sortStatus', column, 'down');
            });
        },
        methods: {
            compare: function(property, order = 0) {
                return function(obj1, obj2) {
                    var value1 = obj1[property];
                    var value2 = obj2[property];
                    return order ? (value1 == value2 ? 0 : (value1 < value2 ? -1 : 1 )) : (value1 == value2 ? 0 : (value2 < value1 ? -1 : 1 ));
                };
            }
        }

    }
</script>
<style>
.items {
	width: 900px;
    margin: auto;
    border: 2px solid #f2f6fd;
    border-radius: 10px;
}
</style>