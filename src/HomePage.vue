<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import content from './content.json'
import flyer from './assets/flyer.png'
</script>

<template>
  <div class="home-page">
    <section class="page-heading">
      <div class="eyebrow">ALL4RUNNING CROSSCIRCUIT</div>
    </section>

    <figure class="home-flyer">
      <img :src="flyer" width="1115" height="770" alt="All4running Crosscircuit: 25 oktober Hollandia Parkcross, 8 november AVW Dijkgatboscross, 22 november SAV Cross, 6 december Noordkop Duincross en 13 december AV Hera St Georgecross. Prijzenpakket van ruim € 5.000,00." />
    </figure>

    <section class="panel home-section home-notice">
      <span class="eyebrow">NOG EVEN EXTRA AANDACHT</span>
      <h2>Inleveren van de chips</h2>
      <p>Wij missen weer een behoorlijk aantal chips. Dit is ieder jaar een extra kostenpost voor de organisaties. Het aanvullen kost veel werk en geld.</p>
      <p><strong>Kijk dus nog eens goed rond en lever je chip in.</strong> Je kunt deze opsturen naar onderstaand adres of afgeven bij een van de organiserende verenigingen.</p>
      <address>Herman Hommen<br>Kooltuinenweg 12<br>1774 NT Slootdorp</address>
      <p>In Spierdijk <strong>moeten alle chips worden ingeleverd</strong>. Ben je er niet? Stuur de chip dan op naar Herman Hommen, op het adres hierboven.</p>
      <p class="home-signoff">Organisatie All4running Crosscircuit.</p>
    </section>

    <section class="panel home-section">
      <span class="eyebrow">GOED OM TE WETEN</span>
      <h2>Belangrijke mededelingen</h2>
      <h3>Prijsuitreiking</h3>
      <p><strong>Niet aanwezig bij de prijsuitreiking betekent ook geen prijs.</strong></p>
      <h3>Gevonden voorwerpen</h3>
      <p>Gevonden voorwerpen worden <strong>niet meer meegenomen naar de eerstvolgende cross</strong>. Je kunt hiervoor navraag doen bij de organiserende vereniging.</p>
      <h3>Uitslagen en klassement</h3>
      <p>Wij proberen de informatie op de site steeds zo actueel mogelijk te houden. De uitslagen verwerken en publiceren we zo snel mogelijk op de verschillende websites. Daarbij gaat er soms iets fout. Meld het ons, zodat we dit kunnen aanpassen.</p>
      <p>Het klassement wordt zo snel mogelijk bijgewerkt en op de website gezet.</p>
      <h3>Iets niet goed gegaan?</h3>
      <p>Laat het ons weten. We doen ons best om het op te lossen of te veranderen.</p>
      <a :href="`mailto:${content.email}`" class="contact-link">Neem contact op <ArrowUpRight :size="16"/></a>
      <p class="home-signoff">De organisatie van het All4running Crosscircuit.</p>
    </section>

    <section class="panel home-section">
      <span class="eyebrow">DOE MEE AAN HET CIRCUIT</span>
      <h2>Inschrijven en tarieven</h2>
      <p>Op deze site vind je snel alle tijden, ranglijsten en eventuele foto’s terug, zodat je direct op de hoogte bent van je klassering. Voor de best geklasseerden zijn er in het eindklassement mooie prijzen te verdienen en mogelijk een eervolle vermelding in de ‘hall of fame’.</p>
      <div class="home-table-wrap">
        <table class="home-rates">
          <caption>Kosten van het gehele circuit en losse wedstrijden</caption>
          <thead><tr><th scope="col">Categorie</th><th scope="col">Hele circuit</th><th scope="col">Losse wedstrijd</th></tr></thead>
          <tbody>
            <tr><th scope="row">Senioren en masters</th><td>€ 45,00</td><td>€ 12,00</td></tr>
            <tr><th scope="row">Jeugd t/m 12 jaar</th><td>€ 15,00</td><td>€ 4,00</td></tr>
            <tr><th scope="row">Jeugd 13 t/m 18 jaar</th><td>€ 23,00</td><td>€ 6,00</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>Inschrijven voor alle wedstrijden kan ook nog op de wedstrijddag zelf, in Hoorn of Wieringermeer.</strong></p>
      <p>Schrijf je in voor alle wedstrijden tegelijk, ook voor de jeugd. Na iedere wedstrijd staat de tussenstand op de website.</p>
      <RouterLink to="/inschrijven" class="button">Inschrijven voor alle wedstrijden <ArrowUpRight :size="17"/></RouterLink>
    </section>
  </div>
</template>
