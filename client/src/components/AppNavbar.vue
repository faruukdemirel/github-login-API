<template>
  <div>
    <nav class="sb-topnav navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand" href="index.html">Secure Key</a>
      <button
        class="ml-auto btn btn-link btn-sm order-1 order-lg-0"
        id="sidebarToggle"
        href="#"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Navbar Search-->

      <!-- Navbar-->
      <ul class="navbar-nav ml-auto ml-md-0">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            id="userDropdown"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            ><i class="fas fa-user fa-fw"></i
          ></a>

          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="userDropdown"
          >
            <router-link
              v-for="dropdownItem in dropdownItems"
              :key="dropdownItem.title"
              class="dropdown-item"
              :to="{name:dropdownItem.to}"
              href="#"
            >
              {{ dropdownItem.title }}
            </router-link>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" @click="logout" >Çıkış Yap</a>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import {removeToken} from '../utils'
import {useRouter} from 'vue-router'
export default {
  setup() {
    const router=useRouter();
    const dropdownItems = [
      {
        title: "Hesap Ayarları",
        to: "accountSettings",
      },
      {
        title: "Hesap Aktiviteleri",
        to: "accountLogs",
      },
    ];
      function logout() {
        removeToken();
        router.push({name:"login"})
    }
    return {
      logout,
      dropdownItems,
    };
  },

};
</script>

<style lang="scss" scoped>
</style>