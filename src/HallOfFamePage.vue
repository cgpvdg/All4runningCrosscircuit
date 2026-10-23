<script setup>
import archive from './hall-of-fame.json'
</script>

<template>
  <div class="fame-archive">
    <section v-for="edition in archive" :key="edition.year" class="panel fame-year" :aria-labelledby="`year-${edition.year}`">
      <header class="fame-heading"><div><span class="eyebrow">ERELIJST</span><h2 :id="`year-${edition.year}`">{{ edition.year }}</h2></div><span class="fame-points">{{ edition.points }} punten</span></header>
      <table class="fame-table"><caption class="visually-hidden">Erelijst {{ edition.year }} — {{ edition.points }} punten</caption><thead><tr><th scope="col">Naam</th><th scope="col">Categorie</th></tr></thead><tbody><tr v-for="(entry, index) in edition.entries" :key="index"><th scope="row">{{ entry.name }}</th><td>{{ entry.category }}</td></tr></tbody></table>
    </section>
  </div>
</template>
