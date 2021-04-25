<template>
  <div id="layoutSidenav_content">
     <main class="container-fluid">
          <AppBreadcrumb :items="['Anasayfa']" />
         
            <slot></slot>
          
        </main>
  </div>
</template>

<script>
import AppBreadcrumb from "@/components/AppBreadcrumb.vue";
    export default {
       components:{
             AppBreadcrumb,
       } 
    }
</script>

<style lang="scss" scoped>

</style>