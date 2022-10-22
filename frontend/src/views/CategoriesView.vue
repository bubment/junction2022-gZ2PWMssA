<template>
  <div class="container">
  <div class="top-text">Choose product by category...</div>
    <div class="categories-container row row-col-2">
      <CategoryButton v-for="category in categories" :key="category.name" :isChecked="true" :category="category">
      </CategoryButton>
    </div>
  </div>
</template>

<script>
import backendService from '../services/backend-service'
import CategoryButton from '../components/CategoryButton.vue';

export default {
  name: 'CategoriesView',
  components: {
    CategoryButton
  },
  data() {
    return {
      categories: []
    }
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      this.categories = (await backendService.getCategories()).data;
    },
  }
}
</script>

<style scoped>
.top-text {
  margin-top: 10px;
  margin-left: 15px;
  color: var(--cc-secondary);
  font-size: 18px;
}

.categories-container {
  justify-content: space-between;
  grid-gap: 10px;
  margin: 0 5px;
}
</style>