<script setup>
import { ArrowUpRight, MapPin } from 'lucide-vue-next'
defineProps({ races: { type: Array, required: true } })
</script>

<template>
  <div class="calendar-cards">
    <article v-for="race in races" :key="race.name" class="calendar-card">
      <header class="calendar-card-heading">
        <div class="calendar-date"><strong>{{ race.day }}</strong><span>{{ race.month }}</span></div>
        <div><span class="eyebrow"><MapPin :size="12"/>{{ race.location }}</span><h3><a :href="race.url" target="_blank" rel="noopener noreferrer">{{ race.name }} <ArrowUpRight :size="18"/></a></h3></div>
      </header>
      <div class="calendar-table-wrap">
        <table class="calendar-program">
          <caption class="visually-hidden">Startprogramma {{ race.name }}</caption>
          <thead><tr><th scope="col">Starttijd</th><th scope="col">Categorie</th><th scope="col">Afstand</th></tr></thead>
          <tbody><tr v-for="(start, index) in race.starts" :key="index"><td><time v-if="start.time">{{ start.time }}</time><span v-else class="time-unknown">Niet vermeld</span></td><th scope="row">{{ start.category }}<span v-if="start.birthYears" class="category-birth-years">Geboortejaren: {{ start.birthYears.join(', ') }}</span></th><td>{{ start.distance.toLocaleString('nl-NL') }} m</td></tr></tbody>
        </table>
      </div>
      <dl class="calendar-location"><div><dt>Locatie</dt><dd>{{ race.venue }}</dd></div><div><dt>Parkeren</dt><dd>{{ race.parking || 'Parkeerinformatie nog niet vermeld.' }}</dd></div></dl>
    </article>
  </div>
</template>
