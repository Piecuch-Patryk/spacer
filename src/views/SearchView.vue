<template>
  <div :class="[{ flexStart: step === 1 }, 'wrapper']">
    <transition name="fade">
      <HeroImage v-if="step === 0" />
    </transition>
    <Claim v-if="step === 0" />
    <SearchInput :value="searchValue" @input="handleInput" :dark="step === 1" />
    <ul class="results" v-if="results && !loading && step === 1">
      <Item v-for="item in results" :item="item" :key="item.data[0].nasa_id" />
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import HeroImage from '@/components/HeroImage.vue';
import Claim from '@/components/Claim.vue';
import SearchInput from '@/components/SearchInput.vue';
import Item from '@/components/Item.vue';

const API = 'https://images-api.nasa.gov/';

export default {
  name: 'SearchView',
  data() {
    return {
      loading: false,
      step: 0,
      searchValue: '',
      results: [],
    };
  },
  methods: {
    handleInput: debounce(function (e) {
      this.searchValue = e.target.value;
      this.loading = true;
      axios.get(`${API}search?q=${this.searchValue}&media_type=image`)
      .then((response) => {
          this.results = response.data.collection.items;
          this.loading = false;
          this.step = 1;
      })
        .catch((error) => {
        console.log(error);
      });
    }, 500),
  },
  components: {
    Claim,
    SearchInput,
    HeroImage,
    Item,
},
};
</script>

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s ease-in-out;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  .flexStart.wrapper {
    justify-content: start;
    margin-top: 30px;
  }

  .results {
    list-style: none;
    margin-top: 20px;
  }
</style>
