<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div class="form__avatar">
      <img src="@/assets/img/icon-user.png" alt="User Avatar" />
    </div>
    <label class="form__label" for="email" autocomplete="off">Email:</label>
    <input
      type="text"
      v-model="data.email"
      id="email"
      class="input"
      placeholder="Your email"
    />
    <p v-if="errors.email" class="form__message" style="color: red">
      * {{ errors.email }}
    </p>
    <button type="submit" class="btn btn--submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      data: { email: "" },
      errors: {}
    };
  },

  methods: {
    validate(data) {
      const errors = {};
      const regex = /[\w.+-]+@[\w9-]+\.[\w-.]+/;
      if (!data.email) errors.email = "Email field can not be blank";
      if (data.email && !data.email.match(regex))
        errors.email = "Email must be valid";

      return errors;
    },
    handleSubmit() {
      this.errors = this.validate(this.data);
      if (Object.keys(this.errors).length === 0) {
        localStorage.setItem("currentEmail", this.data.email);
        this.$router.push("/");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  width: 40%;
  box-sizing: border-box;
  padding: 50px 15px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.2);
  @include respond-to(tablet) {
    width: 70%;
  }
  @include respond-to(phone) {
    padding: 0 15px;
    width: 100%;
    box-shadow: none;
  }
  &__avatar {
    width: 33%;
    margin: 0 auto 50px;
    @include respond-to(phone) {
      width: 50%;
    }
  }
  &__label {
    display: inline-block;
    margin: 0 0 15px;
  }

  &__message {
    margin: 0 0 15px;
  }
}
</style>
