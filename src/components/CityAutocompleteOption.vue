<script setup>
defineProps(['cityToFind', 'fullCityName']);
</script>

<template>
  <div v-if="fullCityName.includes(cityToFind)" class="home__city--autocomplete--option">
    {{
      fullCityName.slice(0, fullCityName.toLowerCase().indexOf(cityToFind.toLowerCase()))
    }}<span class="home__city--autocomplete--option--match">
      {{ fullCityName.slice(fullCityName.toLowerCase().indexOf(cityToFind.toLowerCase()),
        fullCityName.toLowerCase().indexOf(cityToFind.toLowerCase()) + cityToFind.length) }}
    </span>{{
      fullCityName.slice(fullCityName.toLowerCase().indexOf(cityToFind.toLowerCase()) + cityToFind.length)
    }}
  </div>
  <div v-else class="home__city--autocomplete--option">
    <span class="home__city--autocomplete--option--match">
      {{ fullCityName }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.home__city--autocomplete--option {
  padding: 20px;
  cursor: pointer;

  &--match {
    color: #FFF;
  }
}

.home__city--autocomplete--option:hover {
  text-decoration: underline;

}
</style>