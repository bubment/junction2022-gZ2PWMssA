import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import backendService from '../services/backend-service'

export const useCartStore = defineStore('cart', () => {
  const productsRaw = reactive({})
  const productsRawCat = reactive({})
  const items = reactive({})
  items["champagne"] = 3
  items["beer"] = 10
  items["vodka"] = 5
  // items["hamburger"] = 2
  items["water"] = 8
  // name => quantity pairs

  const categories = reactive([])
  // [] of {name, iconUrl}
  const categoryNames = computed(() => categories.map(c => c.name))

  function addToCart(item, quantity) {
    items[item] = (items[item] ?? 0) + quantity
  }

  function setItemQuantity(item, quantity) {
    if (quantity <= 0) {
      delete items[item]
    } else {
      items[item] = quantity
    }
  }

  function incrementItem(item) {
    items[item] = (items[item] ?? 0) + 1
  }
  function decrementItem(item) {
    const result = (items[item] ?? 0) - 1
    if (result > 0) {
      items[item] = (items[item] ?? 0) - 1
    } else {
      items[item] === undefined ? true : delete items[item]
    }
  }

  async function loadCategories() {
    if (categories.length === 0) {
      const newCategories = (await backendService.getCategories()).data
      for (const c of newCategories) {
        categories.push(c)
      }
    }
  }

  async function loadProductsRaw() {
    // console.log('loadpraw')
    let tmpProductsRaw = (await backendService.getProductsRaw()).data
    // console.log('loadpraw', tmpProductsRaw)
    // for (const o in Object.entries(tmpProductsRaw)) {
    //   productsRaw[o[0]] = o[1]
    // }
    productsRaw["categories"] = tmpProductsRaw.categories
    for (const cat of tmpProductsRaw.categories) {
      productsRawCat[cat.name] = cat.products.map(x=>x.name)
    }
    // productsRawCat = tmpProductsRaw.categories
    // console.log("lpr", productsRaw)
  }

  // const isProductInCategory = computed((categoryName, productName)=> {
  //   return productsRaw.categories.filter(x => x.name === props.categoryName)[0].products.map(x => x.name).includes(item)
  // })

  function itemsByCategory() {
    try {
      return this.productsRaw.categories.filter(x => x.name === props.categoryName)[0].products.map(x => x.name)
    } catch (error) {
      console.log(error)
    }
    return []
  }

  loadCategories()
  loadProductsRaw()
  return { items, addToCart, setItemQuantity,
    incrementItem, decrementItem, categories,
    categoryNames, productsRaw,
    itemsByCategory, productsRawCat
  }
})
