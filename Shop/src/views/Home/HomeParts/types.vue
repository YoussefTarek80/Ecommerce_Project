<template>
  <div class="d-flex align-items-center justify-content-center flex-wrap">
    <div
      class="card m-4  d-flex flex-column align-items-center justify-content-center  "
      v-for="card in cards"
      :key="card.id"
      :style="cardStyle(card.image)"
    >
      <h3>{{ card.title }}</h3>
      <button class="btn "><i class="fa-solid fa-magnifying-glass"></i> Shop now</button>
    </div>
  </div>
  <div class="d-flex align-items-center justify-content-around shopping">
    <div class="d-flex flex-column info">
      <div class="d-flex ">
        <span>New <span class="year">2023</span></span>
      </div>
      
      <span>Clothes Collection</span>
      <button class="btn w-50"><i class="fa-solid fa-magnifying-glass"></i> Shop now</button>
    </div>
    <img src="../../../assets/HomeGallary/Types/[removal 1.png" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Men",
          description: "Description for Card 1",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2022/12/JO/BG/YV/181467825/black-blazers-for-men.jpeg",
        },
        {
          id: 2,
          title: "Women",
          description: "Description for Card 2",
          image: "https://images.healthshots.com/healthshots/en/uploads/2022/09/14175516/financially-independent-1600x900.jpg",
        },
        {
          id: 3,
          title: "Kids",
          description: "Description for Card 3",
          image: "https://www.gap.com/Asset_Archive/GPWeb/content/0030/014/459/assets/mob/SU235172_GapKids_img_MOB.jpg",
        },
      ],
    };
  },
  methods: {
    cardStyle(image) {
      return {
        backgroundImage: `url(${image})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
$color:#7C3FFF;
$second_color:#f47458;
$third_color:#ba68c8;
.card {
  padding: 20px;
  margin-bottom: 10px;
  color: white;
  background-size: cover;
  background-position: center;
  height: 60vh;
  width: 30%;
}
.btn{
    background: white;
    font-size: larger;
    font-weight: 700;
    i{
        padding: 10px;
    }
    &:hover{
      border: 1px solid $third_color;
      color:white;
      background: $third_color;
    }
}
.shopping{
    $color:#7C3FFF;
    background: url('../../../assets/HomeGallary/Types/Frame\ 34.png');
    background-position: center;
    background-size: cover;
    // height: 50vh;
    .info{
      line-height: 6rem;
      .year{
        color:$third_color;
      }
      span{
        font-size: 50px;
        font-weight: 500;
        
      }
    }
}
</style>
