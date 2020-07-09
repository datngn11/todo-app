<template>
  <div>
    <div class="tasks">
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        v-on="$listeners"
      ></TaskItem>
    </div>
  </div>
</template>

<script>
import TaskItem from "./TaskItem";

export default {
  name: "TasksList",
  components: { TaskItem },
  props: {
    tasks: Array
  }
};
</script>

<style lang="scss">
.tasks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 25px 50px;
  @include respond-to(tablet) {
    grid-template-columns: repeat(2, 1fr);
    padding: 30px;
  }
  @include respond-to(phone) {
    grid-template-columns: 1fr;
    padding: 30px;
  }
}
</style>
