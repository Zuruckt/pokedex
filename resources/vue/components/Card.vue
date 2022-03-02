<template>
  <div class="container rounded-lg">
      <div class="number w-full text-right px-2 text-2xs">#001</div>
      <div class="image flex justify-center">
          <img class="w-20 h-20 m-0" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="bulba">
      </div>
      <div class="name rounded-b-md text-center h-full">Bulbasaur</div>
  </div>
</template>

<script>
export default {
    name: "Card"
}
</script>

<style scoped>
.container {
    width: 105px;
    height: 114px;
    border: 1px solid #74CB48;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.3fr 2.2fr 0.5fr;
    gap: 0px 0px;
    grid-template-areas:
    "number"
    "image"
    "name";
}

.number {
    grid-area: number;
    /*background: red;*/
}
.image {
    grid-area: image;
    /*background: green;*/
}
.name {
    font-size: 0.7rem;
    height: 100%;
    background: #74CB48;
    color: #fff;
    grid-area: name;
    /*background: blue;*/
}
</style>
