<template>
    <div class="sort">
    	<div class="sort-icon sort-up" @click="sortUp" :class="[ column == lie && sort == 'up' ? 'sort-up-selected' : '']"></div>
    	<div class="sort-icon sort-down" @click="sortDown" :class="[column == lie && sort == 'down' ? 'sort-down-selected' : '']"></div>
    </div>
</template>
<script>
    import bus from './eventBus.js';

    export default {
    	data() {
    		return {
                lie: '',
                sort: '',
    		}
    	},
        props: {
            column: {
                type: String,
                required: true
            },
        },
        methods: {
            sortUp: function() {
                bus.$emit('sortUp', this.column);
            },
            sortDown: function() {
                bus.$emit('sortDown', this.column);
            },
        },
        mounted: function() {
            var _this = this;
            bus.$on('sortStatus', function(column, sort){
                _this.lie = column;
                _this.sort = sort;
            });
        },
    }
</script>
<style>
.sort {
    display: inline-block;
    vertical-align: middle;
}
.sort-icon {
    margin: 2px;
}
.sort-up {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid transparent;
    border-bottom: 5px solid #B6BECB;
}
.sort-down {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-top: 5px solid #B6BECB;
}
.sort-icon:hover {
    cursor: pointer;
}
.sort-up-selected {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid transparent;
    border-bottom: 5px solid #2E86FF;
}
.sort-down-selected {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-top: 5px solid #2E86FF;
}
</style>