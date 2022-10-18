<template>
  <div class="claim-wrapper">
    <h1 class="claim">SPACER</h1>
    <p class="subclaim">Begin your journey through our amazing galaxy, and discover places you never ever heard of.</p>
    <p class="subclaim">Type anything space-related to start.</p>
  </div>
</template>

<script>

export default {
  name: 'Claim',
};

</script>

<style lang="scss" scoped>
  .claim-wrapper {
    text-align: center;
    width: 350px;
    color: #ddd;

    .claim {
      font-size: 60px;
    }
    .subclaim {
      margin: 20px 0;
      font-size: 20px;
    }
  }
</style>
