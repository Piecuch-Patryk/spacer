<template>
  <div class="wrapper">
    <Claim />
    <SearchInput />
  </div>
</template>

<script>
import Claim from '@/components/Claim.vue';
import SearchInput from '@/components/SearchInput.vue';

export default {
  name: 'SearchView',
  components: {
    Claim,
    SearchInput,
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-image: url('@/assets/rocket-launch.jpg');
    background-size: cover;
    background-position: 25% 0%;
  }

  @media screen and (min-width: 768px) {
    .wrapper {
      background-position: 35% 70%;
    }
  }
</style>
