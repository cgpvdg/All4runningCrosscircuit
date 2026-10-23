<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowUpRight, ArrowRight, CalendarDays, MapPin, Menu, X, Flag, ChevronRight } from 'lucide-vue-next'
import content from './content.json'
import HomePage from './HomePage.vue'
import AboutPage from './AboutPage.vue'
import RegistrationPage from './RegistrationPage.vue'
import TermsPage from './TermsPage.vue'
import HallOfFamePage from './HallOfFamePage.vue'
import RaceCalendar from './RaceCalendar.vue'
import all4runningLogo from './assets/all4running.png'
import univeLogo from './assets/unive.webp'
import primeraLogo from './assets/primera.png'
const route = useRoute()
const mobileOpen = ref(false)
const active = computed(() => content.pages.find(p => p.slug === route.params.page))
watch(() => route.path, () => { mobileOpen.value = false; document.title = `${route.path === '/' ? 'Home' : active.value?.label || 'Pagina niet gevonden'} · All4running Crosscircuit` }, { immediate: true })
const safeRegistration = computed(() => /^https:\/\//i.test(content.registrationUrl) ? content.registrationUrl : '')
</script>

<template>
  <div class="site-shell">
    <header class="header">
      <RouterLink to="/" class="brand" aria-label="All4running Crosscircuit home"><span class="brand-lockup"><img class="brand-logo" :src="all4runningLogo" alt="All4running" width="706" height="300"/><span class="brand-sub">CROSSCIRCUIT</span></span></RouterLink>
      <span class="header-note">BUITEN BEGINT HET.</span>
      <RouterLink to="/inschrijven" class="button header-cta">Inschrijven <ArrowUpRight :size="17" /></RouterLink>
      <button class="mobile-toggle" @click="mobileOpen = !mobileOpen" :aria-expanded="mobileOpen" aria-label="Menu openen of sluiten"><X v-if="mobileOpen"/><Menu v-else/></button>
    </header>

    <div class="layout">
      <aside class="sidebar" :class="{ open: mobileOpen }">
        <div class="season"><span class="pink-dot"></span> SEIZOEN {{ content.season }}</div>
        <nav aria-label="Hoofdnavigatie"><RouterLink v-for="(page, index) in content.pages" :key="page.slug" :to="`/${page.slug}`"><span class="nav-number">{{ String(index + 1).padStart(2, '0') }}</span>{{ page.label }}<ChevronRight :size="15" class="nav-chevron"/></RouterLink></nav>
        <div class="sidebar-bottom"><Flag :size="22"/><p>Vijf keer aan de start.<br><strong>Eén mooi seizoen.</strong></p><span>ALL4RUNNING CROSSCIRCUIT</span></div>
      </aside>

      <main>
        <HomePage v-if="route.path === '/'" />
        <template v-else-if="active">
          <section class="hero" v-if="active.slug === 'kalender'">
            <div class="hero-grain"></div><div class="hero-lines"></div><div class="hero-content"><div class="eyebrow"><span class="pink-dot"></span> ALL4RUNNING CROSSCIRCUIT {{ content.season }}</div><h1>{{ active.title }}</h1><p>{{ active.intro }}</p><RouterLink class="button" to="/inschrijven">Loop met ons mee <ArrowUpRight :size="18"/></RouterLink></div><div class="hero-mark" aria-hidden="true">XC<span>{{ content.season }}</span></div><div class="hero-bottom"><span>VAN PARK TOT DUIN</span><span>VOOR IEDERE HARDLOPER <ArrowUpRight :size="14"/></span></div>
          </section>
          <section v-else class="page-heading"><div class="eyebrow">HET CIRCUIT / {{ active.label.toUpperCase() }}</div><h1>{{ active.title }}</h1><p>{{ active.intro }}</p></section>

          <section v-if="['kalender', 'uitslagen'].includes(active.slug)" class="race-section">
            <div class="section-title"><div><span class="eyebrow">{{ active.slug === 'kalender' ? 'ZET ZE IN JE AGENDA' : 'VAN START TOT FINISH' }}</span><h2>{{ active.slug === 'kalender' ? 'De wedstrijden' : 'Uitslagen' }} <span>{{ content.season }}</span></h2></div><span class="count">{{ content.races.length }} wedstrijden</span></div>
            <p class="body-text">{{ active.body }}</p>
            <RaceCalendar v-if="active.slug === 'kalender'" :races="content.races" />
            <div v-else class="race-list"><article class="race-row" v-for="(race, index) in content.races" :key="index"><span class="race-index">{{ String(index + 1).padStart(2, '0') }}</span><div class="race-info"><h3>{{ race.name }}</h3><span><MapPin :size="13"/>{{ race.location }}</span></div><span class="race-state"><CalendarDays :size="14"/>Uitslag volgt</span></article><p v-if="!content.races.length" class="body-text">De wedstrijden worden binnenkort toegevoegd.</p></div>
          </section>
          <AboutPage v-else-if="active.slug === 'over'" />
          <RegistrationPage v-else-if="active.slug === 'inschrijven'" />
          <TermsPage v-else-if="active.slug === 'voorwaarden'" />
          <HallOfFamePage v-else-if="active.slug === 'hall-of-fame'" />
          <section v-else class="panel content-panel"><span class="eyebrow">{{ active.label }}</span><h2>{{ active.slug === 'inschrijven' ? 'Klaar voor de start?' : 'Binnenkort meer' }}</h2><p class="body-text prose">{{ active.body }}</p><a v-if="active.slug === 'inschrijven' && safeRegistration" :href="safeRegistration" target="_blank" rel="noopener noreferrer" class="button">Naar de inschrijving <ArrowUpRight :size="16"/></a><a v-else class="contact-link" :href="`mailto:${content.email}`">Neem contact op <ArrowRight :size="16"/></a></section>

          <section class="join-banner" v-if="active.slug !== 'inschrijven'"><div><span class="eyebrow">HET MOOISTE PAD IS ONVERHARD</span><h2>Tot aan de start.</h2></div><RouterLink to="/inschrijven" class="round-link" aria-label="Ga naar inschrijven"><ArrowUpRight :size="26"/></RouterLink></section>
        </template>
        <section class="page-heading" v-else><div class="eyebrow">404</div><h1>Even van het pad.</h1><p>Deze pagina bestaat niet.</p><RouterLink to="/kalender" class="button">Naar de kalender <ArrowRight :size="16"/></RouterLink></section>
      </main>
    </div>
    <footer><div class="footer-top"><div><span class="eyebrow">EEN VRAAG? WE HELPEN JE GRAAG.</span><a class="email" :href="`mailto:${content.email}`">{{ content.email }} <ArrowUpRight :size="16"/></a></div><div class="sponsors"><span class="eyebrow">MET DANK AAN ONZE SPONSORS</span><div class="sponsor-logos"><a href="https://all4running.nl/" target="_blank" rel="noopener noreferrer"><img class="sponsor-logo sponsor-all4running" :src="all4runningLogo" alt="All4running" width="706" height="300" loading="lazy"/></a><a href="https://www.unive.nl/" target="_blank" rel="noopener noreferrer"><img class="sponsor-logo sponsor-unive" :src="univeLogo" alt="Univé" width="300" height="92" loading="lazy"/></a><a href="https://www.primera.nl/primera-wieringerwerf" target="_blank" rel="noopener noreferrer"><img class="sponsor-logo sponsor-primera" :src="primeraLogo" alt="Primera Wieringerwerf" width="830" height="320" loading="lazy"/></a></div></div></div><div class="footer-bottom"><span>© {{ content.season }} All4running Crosscircuit</span><div><RouterLink to="/voorwaarden">Algemene voorwaarden</RouterLink></div></div></footer>
  </div>
</template>
