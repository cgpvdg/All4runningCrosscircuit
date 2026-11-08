<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import events from './photoalbums.json'
</script>

<template>
  <section v-for="event in events" :key="event.name" class="panel photoalbums-page">
    <span class="eyebrow">{{ event.date }} / {{ event.location }}</span>
    <h2>{{ event.name }}</h2>
    <section v-for="group in event.groups" :key="group.photographer" class="photoalbums-photographer">
      <h3>Foto’s van {{ group.photographer }}</h3>
      <ul class="photoalbums-links">
        <li v-for="album in group.albums" :key="album.url"><a :href="album.url" target="_blank" rel="noopener noreferrer" :aria-label="album.title + ' — foto’s van ' + group.photographer"><span>{{ album.title }}</span><ArrowUpRight :size="18" /></a></li>
      </ul>
    </section>
  </section>
</template>

<style scoped>
.photoalbums-page + .photoalbums-page {
  margin-top: 24px;
}
</style>
