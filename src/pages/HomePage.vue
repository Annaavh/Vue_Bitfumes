<template>
    <div class="m-auto">
        <h1 class="text-center">Welcome to Home page</h1>
    </div>
</template>

<script>
export default {

    data(){
        return {
            store:this.$store.state
        }
    },
    mounted(){
        console.log(this.$store.state)
    }
}
</script>
<style></style>