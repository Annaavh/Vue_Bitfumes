<template>
    <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-5">
        <router-link v-for="item in list" :key="item.to" :to="item.to" class="mx-2">{{ item.title }}</router-link>
        <button @click="$emit('openLoginModal')" class="mx-2">Login</button>
    </nav>
</template>

<script>
export default {
    props: { isLoginOpen: Boolean },
    data() {
        return {
            list: [
                { title: "DC Heros", to: "/dc-heros" },
                { title: "Calendar", to: "/calendar" },
                { title: "Markdown", to: "/markdown" },
                { title: "Slider", to: "/slider" },
                { title: "Calculator", to: "/calculator" },
                { title: "Modal", to: "/reusable-modal" },
                { title: "Chat", to: "/chat" }
            ]
        }
    }

}
</script>

<style></style>