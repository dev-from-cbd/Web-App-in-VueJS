const app = Vue.createApp({
  data() {
    return {
      product: "iPhone 13",
    };
  },

  /*
  data() {
    return {
      premium: true,
      cart: [],
    };
  },
  */

  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
  },
});
