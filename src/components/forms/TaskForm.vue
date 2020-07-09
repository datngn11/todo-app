<template>
  <div class="container">
    <form class="form" @submit="handleSubmit" v-on-clickaway="hideForm">
      <div class="form__field">
        <label for="form__title">Title</label>
        <input
          class="input"
          type="text"
          v-model="data.title"
          id="form__title"
        />
      </div>
      <div class="form__field">
        <label for="form__desc">Description</label>
        <textarea
          class="input"
          rows="10"
          id="form__desc"
          v-model="data.description"
        ></textarea>
      </div>
      <button type="submit" class="btn btn--submit">Submit</button>
      <router-link to="/" class="btn--close">
        <img src="@/assets/img/icon-close.svg" alt="Close icon" />
      </router-link>
    </form>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
export default {
  name: "TaskForm",
  data() {
    return {
      data: { title: "", description: "" }
    };
  },
  mixins: [clickaway],
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$emit("save-task", { ...this.data });
      this.data.title = "";
      this.data.description = "";
    },
    hideForm() {
      this.$router.push("/");
    }
  },

  mounted() {
    if (this.$attrs.task) {
      this.data = this.$attrs.task;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 33%;
  box-shadow: 15px 0px 40px 0px rgba(0, 0, 0, 0.5);
  @include respond-to(tablet) {
    width: 50%;
  }
  @include respond-to(phone) {
    z-index: 10;
    width: 100%;
  }
}
.form {
  position: relative;
  background-color: #fff;
  height: 100%;
  padding: 50px 15px;

  textarea {
    margin: 0 0 30px;
    resize: none;
  }
  &__field {
    label {
      font-size: rem(35px);
      display: inline-block;
      margin: 0 0 10px;
      font-weight: 600;
    }
  }
  .btn--close {
    display: block;
    margin: 0 auto;
    width: 100px;
    height: auto;
    @include respond-to(desktop) {
      width: 80px;
    }
    @include respond-to(tablet) {
      width: 60px;
    }
    @include respond-to(phone) {
      width: 35px;
    }
  }
  .btn--submit {
    margin-bottom: 150px;
    @include respond-to(phone) {
      margin-bottom: 60px;
    }
  }
}
</style>
