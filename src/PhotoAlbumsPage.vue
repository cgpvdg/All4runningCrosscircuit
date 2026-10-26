<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import groups from './photoalbums.json'
</script>

<template>
  <section class="panel photoalbums-page">
    <span class="eyebrow">25 OKTOBER 2026 / HOORN</span>
    <h2>Parkcross Hoorn</h2>
    <section v-for="group in groups" :key="group.photographer" class="photoalbums-photographer">
      <h3>Foto’s van {{ group.photographer }}</h3>
      <ul class="photoalbums-links">
        <li v-for="album in group.albums" :key="album.url"><a :href="album.url" target="_blank" rel="noopener noreferrer" :aria-label="album.title + ' — foto’s van ' + group.photographer"><span>{{ album.title }}</span><ArrowUpRight :size="18" /></a></li>
      </ul>
    </section>
  </section>
</template>
