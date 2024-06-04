<template>
  <AppHeader 
  :isLoginOpen="isLoginOpen"
   @openLoginModal="isLoginOpen = true"
    />
  <div class="w-full flex">
    <router-view></router-view>


  </div>
  <teleport to = "body">
    <LoginModal v-if="isLoginOpen" @closeLogin="isLoginOpen=false" />
  </teleport>
  
</template>

<script>

import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal"

export default {
  data() {
        return {
            isLoginOpen: false
        }
    },
  components: { AppHeader, LoginModal }

}
</script>

<!-- <style scoped>
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';

  /* Your custom styles here */
</style> -->





<!-- <template>
  <h1 v-if="isShowing" v-html="paragraph"></h1>
  <p v-else-if="isShowing === null">This is v-else-if</p>
  <p v-else>This is v-else part</p> -->

  <!-- <p>{{ title }}</p> -->
  <!-- similar things between these 2 lines -->
  <!-- <p v-text="title"></p> -->
  <!-- v-once renders 1 time , if we have setinterval it updates but in html it will show 1 time the orignal value not updated -->
  <!-- <p>Something else</p> -->
<!-- </template> -->

<!-- <script>
export default {
  data() {
    return {
      isShowing: null,
      title: "Heyy Vue3",
      paragraph: "<h1>There is some text here</h1>"
    }
  }
}
</script> -->


