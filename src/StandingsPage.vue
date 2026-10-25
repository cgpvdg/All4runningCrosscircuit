<script setup>
import standings from './standings.json'
const publishedAt = '2026-10-25T14:45:08+01:00'
const publicationLabel = new Intl.DateTimeFormat('nl-NL', { timeZone: 'Europe/Amsterdam', dateStyle: 'long', timeStyle: 'short' }).format(new Date(publishedAt))
</script>

<template>
  <div class="standings-page">
    <p class="body-text">Gepubliceerd op <time :datetime="publishedAt">{{ publicationLabel }}</time></p>
    <label class="standings-jump">Ga naar categorie
      <select @change="$event.target.value && $el.querySelector('#' + $event.target.value)?.scrollIntoView({ behavior: 'smooth', block: 'start' })">
        <option value="">Kies een categorie</option>
        <option v-for="(group, index) in standings" :key="group.category" :value="'standings-' + index">{{ group.category }}</option>
      </select>
    </label>
    <section v-for="(group, index) in standings" :id="'standings-' + index" :key="group.category" class="standings-group">
      <h2>{{ group.category }}</h2>
      <div class="standings-scroll" role="region" :aria-label="'Klassement ' + group.category" tabindex="0">
        <table class="standings-table">
          <caption class="visually-hidden">Klassement {{ group.category }}</caption>
          <thead><tr><th v-for="column in group.columns" :key="column" scope="col">{{ column }}</th></tr></thead>
          <tbody><tr v-for="(entry, rowIndex) in group.entries" :key="rowIndex"><template v-for="(cell, cellIndex) in entry" :key="cellIndex"><th v-if="cellIndex === 1" scope="row">{{ cell }}</th><td v-else>{{ cell }}</td></template></tr></tbody>
        </table>
      </div>
    </section>
  </div>
</template>
