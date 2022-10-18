<template>
  <li class="item">
    <img :src="this.photo" :alt="this.title">
  </li>
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
};
</script>

<style lang="scss" scoped>
  .item img {
    max-width: 300px;
    border-radius: 5px;
    transition: transform .2s ease-in-out;
  }
  .item img:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

</style>
