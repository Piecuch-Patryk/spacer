<template>
  <div class="wrapper">
    <HeroImage />
    <Claim />
    <SearchInput :searchValue="searchValue" @input="handleInput" />
  </div>
</template>

<script>
import Claim from '@/components/Claim.vue';
import axios from 'axios';
import debounce from 'lodash.debounce';
import SearchInput from '@/components/SearchInput.vue';
import HeroImage from '../components/HeroImage.vue';

const API = 'https://images-api.nasa.gov/';

export default {
  name: 'SearchView',
  data() {
    return {
      searchValue: '',
      results: [],
    };
  },
  methods: {
    handleInput: debounce(function () {
      axios.get(`${API}search?q=${this.searchValue}&media_type=image`)
        .then((response) => {
          this.results = response.data.collection.items;
          console.log(this.results);
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
  }
</style>
