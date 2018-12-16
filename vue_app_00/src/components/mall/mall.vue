<template>
    <div class="list-container">
        <twolist-box></twolist-box>
    </div>
</template>


<style>

</style>

<script>
import twolist from "../pub/twolist.vue"

    export default {
        data(){
            return {}
        },
        components:{
            "twolist-box":twolist
        }
    }
</script>