
<template>
  <div class="sb-nav-fixed">
    <AppNavbar />
    <div id="layoutSidenav">
      <AppSidebar />
      <router-view></router-view>    
      
    </div>
  </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar.vue";
import AppSidebar from "@/components/AppSidebar.vue";
import AppBase from '@/components/AppBase.vue';

export default {
  components: {
    AppNavbar,
    AppSidebar,
    AppBase
  
  },
};
</script>

<style lang="scss" scoped>
</style>