<template>
    <div v-if="show" class="mobile">
        <slot >
        </slot> 
        <img src="../../assets/MobileGallary/21131263.jpg" alt="">
    </div>
</template>
<script>
export default{
    props:['show']
}
</script>
<style scoped lang="scss">

.mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  img{
    width: 60%;
}
}
</style>