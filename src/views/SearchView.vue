<template>
  <div :class="[{ flexStart: step === 1 }, 'wrapper']">
    <transition name="fade">
      <HeroImage v-if="step === 0" />
    </transition>
    <Claim v-if="step === 0" />
    <SearchInput :value="searchValue" @input="handleInput" :dark="step === 1" />
    <div class="results" v-if="results && !loading && step === 1">
      <Item v-for="item in results" :item="item" :key="item.data[0].nasa_id" @click="handleModalOpen(item)" />
    </div>
    <div class="loader" v-if="step === 1 && loading" />
    <Modal v-if="modalOpen" :item="modalItem" @close-modal="modalOpen = false" />
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import HeroImage from '@/components/HeroImage.vue';
import Claim from '@/components/Claim.vue';
import SearchInput from '@/components/SearchInput.vue';
import Item from '@/components/Item.vue';
import Modal from '@/components/Modal.vue';

const API = 'https://images-api.nasa.gov/';

export default {
  name: 'SearchView',
  data() {
    return {
      modalItem: null,
      modalOpen: false,
      loading: false,
      step: 0,
      searchValue: '',
      results: [],
    };
  },
  methods: {
    handleModalOpen(item) {
      this.modalOpen = true;
      this.modalItem = item;
    },
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
    Modal,
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
  .loader {
    margin-top: 100px;
    display: inline-block;
    width: 64px;
    height: 64px;

    @media (min-width: 768px) {
      width: 90px;
      height: 90px;
    }
  }
  .loader::after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #333;
    border-color: #333 transparent #333 transparent;
    animation: loading 1s linear infinite;

    @media (min-width: 768px) {
      width: 90px;
      height: 90px;
    }
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .results {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    margin-top: 50px;

    @media (min-width: 410px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
</style>
