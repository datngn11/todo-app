<template>
  <div class="task">
    <div class="task__header">
      <div class="task__control">
        <router-link :to="'/edit/' + task.id" class="task__control-item">
          <img src="@/assets/img/icon-edit.svg" alt="Edit icon" />
        </router-link>
        <a @click="openPopUp" class="task__control-item">
          <img src="@/assets/img/icon-delete.svg" alt="Trash can icon" />
        </a>
      </div>
    </div>
    <div class="task__body">
      <h2 class="task__title">
        {{ task.title }}
      </h2>
      <p class="task__desc">{{ task.description }}</p>
    </div>
    <ConfirmPopUp
      v-on-clickaway="hidePopUp"
      v-if="showPopUp"
      @confirm-remove="removeConfirmed = true"
      @close-popup="hidePopUp"
    >
      Are you sure you want to delete this task?
    </ConfirmPopUp>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
import ConfirmPopUp from "@/components/popups/ConfirmPopUp";
export default {
  name: "TaskItem",
  mixins: [clickaway],
  props: {
    task: Object
  },
  components: {
    ConfirmPopUp
  },

  data() {
    return {
      removeConfirmed: false,
      showPopUp: false
    };
  },
  methods: {
    openPopUp() {
      this.showPopUp = true;
    },
    hidePopUp() {
      this.showPopUp = false;
    }
  },
  watch: {
    removeConfirmed() {
      if (this.removeConfirmed) {
        this.$emit("remove-task", this.task.id);
        this.showPopup = false;
      }
    }
  }
};
</script>
x
<style lang="scss" scoped>
.task {
  border: 1px solid black;
  border-radius: 5px;

  &__header {
    background-color: #0079bf;
    padding: 10px;
  }

  &__control {
    &-item {
      width: 25px;
      height: 25px;
      display: inline-block;
      color: #fff;
      margin-right: 10px;
      cursor: pointer;

      @include respond-to(phone) {
        width: 20px;
        height: 20px;
      }
    }
    img {
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  &__body {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
  }
  &__title {
    margin: 0 0 20px;
  }
  &__desc {
    margin: 0;
    word-break: break-all;
  }
}
</style>
