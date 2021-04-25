<template>
  <div id="layoutAuthentication" class="bg-primary">
    <div id="layoutAuthentication_content">
      <main>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-5">
              <div class="card shadow-lg border-0 rounded-lg mt-5">
                <div class="card-header">
                  <h3 class="text-center font-weight-light my-4">Giriş Yap</h3>
                </div>
                <div class="card-body">
                  <button @click="login" class="login-github-button">
                    <i class="fab fa-github fa-2x"></i>
                    Github ile Giriş Yap
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <div id="layoutAuthentication_footer">
      <footer class="py-4 bg-light mt-auto">
        <div class="container-fluid">
          <div class="d-flex align-items-center justify-content-between small">
            <div class="text-muted">
              Copyright &copy; <b>Secure Key</b> {{ new Date().getFullYear() }}
            </div>
            <div>
              <a href="#">Gizlilik Politikası</a>
              &middot;
              <a href="#">ŞARTLAR &amp; kOŞULLAR</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { Store, useStore } from "vuex";
import { useRoute,useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const route = useRoute();
     const router=useRouter();
    isTokenExist();
   
    async function isTokenExist() {
      if (route.query.token) {
       const result= await store.dispatch("AuthModule/authorize", route.query.token);
     if(result){
         router.push({name:'home'})
     }
      }
    }
    function login() {
      window.location.href =
        "https://github.com/login/oauth/authorize?client_id=920d5e030080def6ed7c";
    }
    return {
      login,
    };
  },
};
</script>

<style lang="scss" scoped>
.login-github-button {
  background-color: black;
  width: 100%;
  color: white;
  border: 0;
  border-radius: 0.5em;
  padding: 1em;
  display: flex;
  align-items: center;
  gap: 1em;
  justify-content: center;
}
</style>