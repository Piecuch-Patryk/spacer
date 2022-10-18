<template>
<div class="search-wrapper">
  <label for="search">
    <input
      id="search"
      name="search"
      type="text"
      placeholder="mars"
      v-model="searchValue"
      @input="handleInput"
    />
  </label>
</div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';

const API = 'https://images-api.nasa.gov/';

export default {
  name: 'SearchInput',
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
      })
        .catch((error) => {
        console.log(error);
      });
    }, 500),
  },
};

</script>

<style lang="scss" scoped>
.search-wrapper {
  display: flex;
  flex-direction: column;
  width: 300px;

  input {
    height: 30px;
    border: 0;
    width: 100%;
    font-size: 20px;
    text-align: center;
    color: #ddd;
    background: none;
    border-bottom: 1px solid #ddd;

    &::placeholder {
      color: #ddd;
    }
    &:focus {
      outline: none;
      background: none;
    }
    &:active {
      background: none;
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #ddd;
  }
}
</style>
