<template>
  <div class="container">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "@/components/forms/LoginForm";

export default {
  name: "LoginPage",
  components: { LoginForm },
  created() {
    if (localStorage.getItem("currentEmail")) {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @include respond-to(phone) {
    align-content: center;
  }
}
</style>