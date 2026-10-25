<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import content from './content.json'
</script>

<template>
  <div class="registration-page">
    <section class="panel home-section home-notice">
      <span class="eyebrow">VIJF CROSSEN. ÉÉN INSCHRIJVING.</span>
      <h2>Het gehele All4running Crosscircuit</h2>
      <p>De online inschrijving voor het gehele All4running Crosscircuit is <strong>gesloten</strong>.</p>
      <p>Inschrijven voor het gehele circuit kan nog wel <strong>ter plekke bij de Dijkgatboscross</strong>.</p>
    </section>

    <section class="panel home-section">
      <span class="eyebrow">KIES JOUW WEDSTRIJD</span>
      <h2>Los inschrijven</h2>
      <p>Het is ook mogelijk om per wedstrijd los in te schrijven.</p>
      <ul class="registration-links">
        <li v-for="race in content.races" :key="race.name"><a :href="race.registrationUrl" target="_blank" rel="noopener noreferrer"><span><span class="registration-date">{{ race.day }} {{ race.month }}</span><strong>Inschrijven voor {{ race.name }}</strong></span><ArrowUpRight :size="19"/></a></li>
      </ul>
    </section>
  </div>
</template>
