<template>
  <div class="hero-image"></div>
</template>

<script>
export default {
  name: 'HeroImage',
};
</script>

<style lang="scss" scoped>
  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/rocket-launch.jpg');
    background-size: cover;
    background-position: 25% 0%;
    z-index: -1;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.3);
    }
  }

  @media screen and (min-width: 768px) {
    .hero-image {
      background-position: 35% 70%;
    }
  }

</style>
