<template>
  <div class="search-wrapper">
    <label for="search">
      <input
        id="search"
        name="search"
        type="text"
        placeholder="mars"
        :searchValue="searchValue"
        @input="handleChange"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    searchValue: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleChange(e) {
      this.$emit('input', e.target.value);
    },
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
    transition: box-shadow .3s ease-in-out;

    &::placeholder {
      color: #ddd;
    }
    &:focus {
      outline: none;
      box-shadow: 0 10px 20px -8px rgba(255,255,255,.3);
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
