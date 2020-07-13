<template>
  <div class="container">
    <TopPanel :currEmail="currEmail" @logout="logout" />
    <TasksList :tasks="tasks" @remove-task="removeTask" />
    <router-view
      @save-task="saveTask"
      :key="$route.params.id"
      :task="selectedTask"
    />
    <router-link to="/new" class="btn--add">
      <img src="@/assets/img/icon-add.svg" alt="" />
    </router-link>
  </div>
</template>

<script>
import TasksList from "@/components/tasks/TasksList";

import TopPanel from "../components/panels/TopPanel";

import { tasks as data } from "@/tasks.js";
import { generate as id } from "shortid";

export default {
  name: "Home",
  components: { TasksList, TopPanel },
  data() {
    return {
      tasks: [],
      selectedTask: {},
      currEmail: localStorage.getItem("currentEmail")
    };
  },
  created() {
    if (localStorage.getItem("currentEmail")) {
      this.tasks = data;
    } else {
      this.$router.push("/login");
    }
  },

  methods: {
    removeTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id);
    },
    saveTask(task) {
      task.id ? this.updateTask(task) : this.addTask(task);
    },
    addTask(task) {
      this.tasks.push({ id: id(), ...task });
      this.$router.push("/");
    },
    updateTask(task) {
      this.tasks = this.tasks.map(t => (t.id === task.id ? { ...task } : t));
      this.$router.push("/");
    },
    logout() {
      delete localStorage.currentEmail;
      this.$router.push("/login");
    }
  },
  watch: {
    "$route.params.id"(id) {
      this.selectedTask = { ...this.tasks.find(t => t.id === id) };
    }
  }
};
</script>

<style lang="scss" scopedSlot>
.btn--add {
  display: inline-block;
  position: fixed;
  // position: relative;
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 50px;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
  &:hover {
    transform: scale(0.9);
  }
}
</style>
