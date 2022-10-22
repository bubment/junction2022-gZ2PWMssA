<template>
  <div class="category-button">
    <div class="check-row">
      <div v-if="isChecked" class="category-check">
        <BIconCheckLg></BIconCheckLg>
      </div>
    </div>
    <img :src="imgUrl" class="category-img">
    <span class="category-name">{{ category.displayName }}</span>
  </div>
</template>

<script>
import backendService from '../services/backend-service';
import { BIconCheckLg } from 'bootstrap-icons-vue';

export default {
  name: 'CategoryButton',
  components: {
    BIconCheckLg,
  },
  props: {
    category: Object,
    isChecked: Boolean
  },
  computed: {
    imgUrl: function () {
      return backendService.composeCategoryImgUrl(this.category);
    }
  }
}
</script>

<style scoped>
.category-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 160px;
  width: 160px;
  border: 1px solid var(--cc-accent);
  border-radius: 10px;
  margin-top: 10px;
}

.check-row {
  display: flex;
  margin-top: 5px;
  justify-content: flex-end;
  width: 100%;
  height: 20px;
}

.category-img {
  height: 80px;
  width: 80px;
  margin-top: 5px;
}

.category-name {
  color: var(--cc-secondary);
  width: 90%;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.category-check {
  display: flex;
  color: var(--cc-primary);
  align-items: center;
  justify-content: center;
  background-color: var(--cc-gray);
  border-radius: 50%;
  width: 24px;
  height: 24px;
}
</style>