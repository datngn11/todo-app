<template>
  <header class="header">
    <div class="email">
      <span> {{ currEmail }} </span>
    </div>
    <span @click="$emit('logout')" class="logout">Log Out</span>
  </header>
</template>

<script>
export default {
  name: "TopPanel",
  props: {
    currEmail: String
  }
};
</script>

<style lang="scss">
.header {
  padding: 15px;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logout {
  display: inline-block;
  padding: 5px 15px;
  background-color: #0079bf;
  color: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: #0068a5;
  }
}
</style>
