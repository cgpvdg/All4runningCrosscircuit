<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import content from './content.json'
</script>

<template>
  <div class="registration-page">
    <section class="panel home-section home-notice">
      <span class="eyebrow">VIJF CROSSEN. ÉÉN INSCHRIJVING.</span>
      <h2>Het gehele All4running Crosscircuit</h2>
      <p>De inschrijving voor het hele circuit is geopend.</p>
      <p>De inschrijving voor het All4running Crosscircuit <strong>sluit op <time datetime="2026-10-23T19:00:00+02:00">23 oktober om 19.00 uur</time></strong>.</p>
      <a class="button" :href="content.registrationUrl" target="_blank" rel="noopener noreferrer">Inschrijven voor het gehele circuit <ArrowUpRight :size="17"/></a>
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
