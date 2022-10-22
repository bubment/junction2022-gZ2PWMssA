import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = reactive({})
  items["pineapple"] = 2
  items["apple"] = 1
  // name => quantity pairs

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

  return { items, addToCart, setItemQuantity, incrementItem, decrementItem }
})
