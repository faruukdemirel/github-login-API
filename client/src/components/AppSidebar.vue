
<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div class="sb-sidenav-menu-heading">Anasayfa</div>
          <router-link class="nav-link" :to="{ name: 'home' }">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            Anasayfa
          </router-link>
          <div v-for="menu in menus" :key="menu.categoryName">
            <div class="sb-sidenav-menu-heading">{{ menu.categoryName }}</div>
            <div v-for="list in menu.lists" :key="list.title">
              <div v-if="list.submenus">
                <a
                  class="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  :data-target="`#${list.title}`"
                  aria-expanded="false"
                  aria-controls="collapseLayouts"
                >
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-columns"></i>
                  </div>
                  {{ list.title }}
                  <div class="sb-sidenav-collapse-arrow">
                    <i class="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  class="collapse"
                  :id="list.title"
                  aria-labelledby="headingOne"
                  data-parent="#sidenavAccordion"
                >
                  <nav class="sb-sidenav-menu-nested nav">
                    <router-link
                      v-for="submenu in list.submenus"
                      :key="submenu.title"
                      class="nav-link"
                      href="layout-static.html"
                      :to="{ name: submenu.to }"
                      >{{ submenu.title }}</router-link
                    >
                  </nav>
                </div>
              </div>

              <router-link v-else class="nav-link" :to="{ name: list.to }">
                <div class="sb-nav-link-icon">
                  <i :class="list.icon"></i>
                </div>
                {{ list.title }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="sb-sidenav-footer">
        <div class="text-center">
            <img
        height="50"
          class="rounded-circle"
          :src="user.avatar_url"
          :alt="`${user.name} profil resmi`"
        />
        </div>
      

        <div class="small">
          <b>{{ user.name }}</b> olarak giriş yapıldı
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const user = computed(() => store.getters["AuthModule/user"]);
    const menus = [
      {
        categoryName: "Api Yönetimi",
        lists: [
          {
            title: "Apiler",
            icon: "fas fa-columns",
            submenus: [
              {
                title: "Yeni Uygulama Oluştur",
                to: "ApiCreate",
              },
              {
                title: "Api Uygulamalrını Yönet",
                to: "ApiList",
              },
            ],
          },
        ],
      },
      {
        categoryName: "Hesap",
        lists: [
          {
            title: "Hesap Ayarları",
            icon: "fa fa-user",
            to: "accountSettings",
          },
          {
            title: "Hesap Aktiviteleri",
            icon: "fa fa-user",
            to: "accountLogs",
          },
        ],
      },
    ];
    return {
      user,
      menus,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>