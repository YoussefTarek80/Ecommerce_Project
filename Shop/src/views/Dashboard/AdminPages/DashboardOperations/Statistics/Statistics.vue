<template>
  <section>
    <div
      class="cards d-flex gap-5 flex-wrap align-items-center justify-content-center"
    >
    
      <div
        class="semi-card p-4 d-flex flex-column flex-wrap shadow-lg rounded-5"
        :style="{ 'background-color': getBackgroundColor(card.id) }"
        v-for="card in cardItems"
      >
        <img :src="card.img" class="m-3" alt="" />
        <div
          class="info d-flex flex-column align-items-center justify-content-center"
        >
          <span class="fs-5 fw-bold" :style="{ color: getColor(card.id) }">{{
            card.title
            
          }}</span>
          <span class="fs-4 fw-bold" :style="{ color: getColor(card.id) }">{{
            getCardNumbers(card)
          }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      cardItems: [
        {
          id: 1,
          img: "https://modernize-vue3-dark.netlify.app/assets/icon-briefcase-5ac68925.svg",
          title: "Clients",
        },
        {
          id: 2,
          img: "https://modernize-vue3-dark.netlify.app/assets/icon-user-male-ff0c3edd.svg",
          title: "Admins",
          
        },
        {
          id: 3,
          img: "https://modernize-vue3-dark.netlify.app/assets/icon-mailbox-58a01fce.svg",
          title: "Products",
        },
      ],
    };
  },
  computed: {
    admins() {
      return this.$store.getters["admins/getAdmins"] ;
    },
    getAllAdmins() {
      return this.$store.getters["admins/getTotalAdmins"];
    },
    getAllProducts() {
      const products = this.$store.getters["products/getProducts"];
      if (products) {
        return products.length;
      } else {
        return false;
      }
    },
    getAllClients(){
      return this.$store.getters["admins/getTotalUsers"];
    }
  },
  mounted() {
    this.$store.dispatch("admins/fetchAdmins");
    this.$store.dispatch("products/fetchProducts");
    this.$store.dispatch("admins/fetchUsers");
    // console.log(this.getAllAdmins)
  },
  methods: {
    getBackgroundColor(id) {
      const idToColor = {
        1: "#4d3a2a",
        2: "#253662",
        3: "#1C455D",
      };
      return idToColor[id];
    },
    getColor(id) {
      const idToColor = {
        1: "#FFC107",
        2: "#0D6EFD",
        3: "#17A2B8",
      };
      return idToColor[id];
    },
    getCardNumbers(card) {
      if (card.title === "Admins") {
        return this.getAllAdmins; 
      }
      else if(card.title==="Products"){
        return this.getAllProducts; 
      }
      else if(card.title==="Clients"){
        return this.getAllClients; 
      }
      return card.numbers;
    },
  },
};
</script>
<style scoped lang="scss">
.semi-card {
  width: 40%;
}
</style>
