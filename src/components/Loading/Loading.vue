<script src="./Loading.js" lang="js"></script>
<style lang="scss" src="./Loading.scss" scoped></style>

<template>
  <div class="loading" v-if="active">
    <div class="bg"></div>
    <div class="spinner">
      <svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" width="40" height="40" stroke="#007bff">
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)" stroke-width="2">
            <circle stroke-opacity=".25" cx="18" cy="18" r="18"></circle>
            <path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s" repeatCount="indefinite"></animateTransform></path>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>