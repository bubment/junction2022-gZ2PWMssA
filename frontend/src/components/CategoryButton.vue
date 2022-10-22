<template>
  <div class="category-button">
    <div class="check-row">
      <span v-if="isChecked">PIPA</span>
    </div>
    <img src="{{ imgUrl }}" class="category-img">
    <span class="category-name">{{ categoryName }}</span>
  </div>
</template>

<script>
export default {
  name: 'CategoryButton',
  props: {
    categoryName: String,
    imgUrl: String,
    isChecked: Boolean
  }
}
</script>

<style scoped>
* {
  border: 1px solid black;
}

.category-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150px;
  width: 150px;
  border: 1px solid #0097c7;
  border-radius: 10px;
}

.check-row {
  display: flex;
  margin-top: 5px;
  justify-content: flex-end;
  height: 20px;
  border: 1px solid black;
  width: 90%;
}

.category-img {
  height: 70px;
  width: 70px;
  margin-top: 10px
}

.category-name {
  margin-top: 10px;
  width: 90%;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>