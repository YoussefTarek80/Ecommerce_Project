<template>
  <section class="best-seller text-center">
    <h1>Best Seller</h1>
    <div class="cards d-flex align-items-center justify-content-center flex-wrap">
      <div
        class="card m-5 border-0"
        style="width: 18rem"
        v-for="card in bestseller"
        :key="card.id"
      >
        <img :src="card.image" class="card-img-top" alt="error" />
        <div class="card-body">
          <h5 class="card-title">{{ card.title }}</h5>
          <p class="card-text">
            {{ card.describtion }}
          </p>
          <span>{{ card.sallary }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default{
    data(){
        return{
            bestseller:[
        {
          id: new Date().toISOString() ,
          image:"https://eg.hm.com/assets/styles/HNM/15116071/c8551db42a42c24bd7235aa1efb7807f85386b06/1/image-thumb__4306628__product_listing/c8551db42a42c24bd7235aa1efb7807f85386b06.jpg",
          title:'Card title',
          describtion:'Some quick example text to build on the card title and make up the bulk of the cards content.',
          sallary: 300
        },
        {
          id: new Date().toISOString() ,
          image:"https://eg.hm.com/assets/styles/HNM/16761682/94e2325175b8bf4be9449764f0298d615333186a/1/image-thumb__4945305__product_listing/94e2325175b8bf4be9449764f0298d615333186a.jpg",
          title:'Card title',
          describtion:'Some quick example text to build on the card title and make up the bulk of the cards content.',
          sallary: 400
        },
        {
          id: new Date().toISOString() ,
          image:"https://eg.hm.com/assets/styles/HNM/16736400/e3a90dc9c9fc4e4c1263466b25e62590dfe000fe/1/image-thumb__4896833__product_listing/e3a90dc9c9fc4e4c1263466b25e62590dfe000fe.jpg",
          title:'Card title',
          describtion:'Some quick example text to build on the card title and make up the bulk of the cards content.',
          sallary: 500
        }
      ]
        }
    }
}
</script>
<style lang="scss" scoped></style>
