<template>
  <section class="new-arrival text-center">
    <h1>New Arrival</h1>
    <div class="swiper-container">
      <div class="swiper-wrapper cards d-flex">
        <div class="card m-5 border-0 swiper-slide" v-for="card in DataArr" :key="card.id">
          <img :src="card.image" class="card-img-top" alt="error" />
        <div class="card-body">
          <h5 class="card-title">{{ card.title }}</h5>
          <p class="card-text ">
            {{ card.describtion }}
          </p>
          <span>{{ card.sallary }} $</span>
          <button class="btn btn-success ms-3">Add to card</button>
        </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper';

export default {
  data(){
    return{
      DataArr:[
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
        },
        {
          id: new Date().toISOString() ,
          image:"https://eg.hm.com/assets/styles/HNM/16736400/e3a90dc9c9fc4e4c1263466b25e62590dfe000fe/1/image-thumb__4896833__product_listing/e3a90dc9c9fc4e4c1263466b25e62590dfe000fe.jpg",
          title:'Card title',
          describtion:'Some quick example text to build on the card title and make up the bulk of the cards content.',
          sallary: 500
        },
        {
          id: new Date().toISOString() ,
          image:"https://eg.hm.com/assets/styles/HNM/16736400/e3a90dc9c9fc4e4c1263466b25e62590dfe000fe/1/image-thumb__4896833__product_listing/e3a90dc9c9fc4e4c1263466b25e62590dfe000fe.jpg",
          title:'Card title',
          describtion:'Some quick example text to build on the card title and make up the bulk of the cards content.',
          sallary: 500
        },
        {
          id: new Date().toISOString() ,
          image:"https://eg.hm.com/assets/styles/HNM/16736400/e3a90dc9c9fc4e4c1263466b25e62590dfe000fe/1/image-thumb__4896833__product_listing/e3a90dc9c9fc4e4c1263466b25e62590dfe000fe.jpg",
          title:'Card title',
          describtion:'Some quick example text to build on the card title and make up the bulk of the cards content.',
          sallary: 500
        },
        {
          id: new Date().toISOString() ,
          image:"https://eg.hm.com/assets/styles/HNM/16736400/e3a90dc9c9fc4e4c1263466b25e62590dfe000fe/1/image-thumb__4896833__product_listing/e3a90dc9c9fc4e4c1263466b25e62590dfe000fe.jpg",
          title:'Card title',
          describtion:'Some quick example text to build on the card title and make up the bulk of the cards content.',
          sallary: 500
        },
        
      ]
    }
  },
  mounted() {
    new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  overflow: hidden;
  cursor: grab;
}
.swiper-slide {
  min-width: 15%;
 
}
</style>
