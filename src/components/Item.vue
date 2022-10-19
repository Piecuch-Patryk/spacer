<template>
  <div :style="style" class="item"></div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      photo: this.item.links[0].href,
      title: this.item.data[0].title,
    };
  },
  computed: {
    style() {
      return `background-image: url("${this.photo}")`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .item {
    width:90vw;
    height: 300px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border-radius: 5px;
    transition: transform .2s ease-in-out;

    @media (min-width: 410px) {
      width: 40vw;
    }

    @media (min-width: 768px) {
      width: 30vw;
    }

    @media (min-width: 1024px) {
      width: 20vw;
    }
  }
  .item:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

</style>
