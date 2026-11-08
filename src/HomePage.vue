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

    <section class="panel home-section home-intro" aria-labelledby="home-intro-title">
      <h2 id="home-intro-title">Jouw tempo, jouw uitdaging, jouw circuit!</h2>
      <p>Zin in een sportieve uitdaging? Trek je hardloopschoenen aan en doe mee! Of je nu gaat voor een snelle tijd, je eigen grenzen wilt verleggen of gewoon lekker wilt hardlopen: <strong>dit circuit is er voor iedereen!</strong></p>
      <p>Ga jij de uitdaging aan om het <strong>hele circuit</strong> te lopen en een mooie plek in het eindklassement te veroveren? Of kies je liever voor één of meerdere losse wedstrijden? <strong>Alles kan, jij bepaalt!</strong></p>
      <p>En het mooie is: je hoeft echt geen snelle loper te zijn om mee te doen. Van fanatieke wedstrijdlopers tot enthousiaste recreanten, van snelle kilometervreters tot lopers die lekker hun eigen tempo aanhouden: <strong>iedereen staat aan dezelfde start en gaat voor zijn eigen prestatie!</strong></p>
      <p>Geniet van de sfeer, moedig elkaar aan, daag jezelf uit en beleef vooral het plezier van samen hardlopen. Want of je nu als eerste, in het midden of als laatste over de finish komt: <strong>iedere finish is een overwinning!</strong></p>
      <p class="home-intro-callout"><strong>Dus waar wacht je nog op? Kies jouw wedstrijd(en), ga de uitdaging aan en beleef het circuit op jouw manier!</strong></p>
    </section>

    <section class="panel home-section home-notice" aria-labelledby="home-notice-title">
      <strong class="eyebrow">HELP ONS DE CHIPS COMPLEET TE HOUDEN!</strong>
      <h2 id="home-notice-title">Vergeet je chip niet in te leveren!</h2>
      <p>Elk jaar blijven er helaas behoorlijk wat chips achter bij deelnemers. Dat is jammer, want deze chips zijn nodig voor de volgende wedstrijden. Het vervangen van ontbrekende chips kost de organiserende verenigingen veel tijd en geld.</p>
      <p><strong>Heb jij nog een chip thuis liggen? Help ons dan door deze alsnog in te leveren!</strong> Dat kan bij een van de organiserende verenigingen of door de chip op te sturen naar:</p>
      <address><strong>Herman Hommen</strong><br>Kooltuinenweg 12<br>1774 NT Slootdorp</address>
      <p class="home-notice-callout"><strong>Let op: bij de wedstrijd in Spierdijk moeten alle chips worden ingeleverd!</strong> Kun je daar niet bij zijn? Stuur je chip dan op naar bovenstaand adres.</p>
      <p><strong>Alvast bedankt voor je medewerking!</strong> Zo houden we samen het All4running Crosscircuit goed georganiseerd.</p>
      <p class="home-signoff"><em>Organisatie All4running Crosscircuit</em></p>
    </section>

    <section class="panel home-section" aria-labelledby="home-announcements-title">
      <strong class="eyebrow">GOED OM TE WETEN</strong>
      <h2 id="home-announcements-title">Belangrijke mededelingen</h2>
      <div class="home-announcements">
        <div>
          <h3>Prijsuitreiking</h3>
          <p><strong>Je kunt je prijs alleen ophalen tijdens de prijsuitreiking.</strong> Ben je er niet bij, dan vervalt je prijs.</p>
        </div>
        <div>
          <h3>Gevonden voorwerpen</h3>
          <p>Ben je iets kwijtgeraakt tijdens een cross? Vraag bij de organiserende vereniging na of het gevonden is. Gevonden voorwerpen worden <strong>niet meegenomen naar de volgende cross</strong>.</p>
        </div>
        <div>
          <h3>Uitslagen en klassement</h3>
          <p>Na elke wedstrijd publiceren we de uitslagen en werken we het klassement zo snel mogelijk bij. Klopt je uitslag of je plek in het klassement volgens jou niet? Laat het ons weten, dan kijken we het na.</p>
        </div>
        <div>
          <h3>Vragen of opmerkingen?</h3>
          <p>Is er iets anders misgegaan of heb je een vraag? Stuur ons gerust een bericht.</p>
          <a :href="`mailto:${content.email}`" class="contact-link">Neem contact op <ArrowUpRight :size="16" aria-hidden="true"/></a>
        </div>
      </div>
      <p class="home-signoff"><em>De organisatie van het All4running Crosscircuit</em></p>
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
            <tr><th scope="row">Jeugd t/m U13</th><td>€ 15,00</td><td>€ 4,00</td></tr>
            <tr><th scope="row">Jeugd U14 t/m U20</th><td>€ 23,00</td><td>€ 6,00</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>Inschrijven voor alle wedstrijden kan ook nog op de wedstrijddag zelf, in Hoorn of Wieringermeer.</strong></p>
      <p>Schrijf je in voor alle wedstrijden tegelijk, ook voor de jeugd. Na iedere wedstrijd staat de tussenstand op de website.</p>
      <RouterLink to="/inschrijven" class="button">Inschrijven voor alle wedstrijden <ArrowUpRight :size="17"/></RouterLink>
    </section>
  </div>
</template>

<style scoped>
.home-announcements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 19rem), 1fr));
  gap: 1rem;
  margin-top: 1.25rem;
}

.home-announcements > div {
  padding: 1rem;
  border-radius: 6px;
  background: #f4f4ee;
}

.home-announcements h3 {
  margin: 0;
}

.home-announcements p {
  margin: 0.5rem 0 0;
}

.home-notice > h2 {
  font-size: clamp(1.5rem, 4vw, 2rem);
  line-height: 1.2;
}

.home-notice > address {
  width: fit-content;
  border-radius: 6px;
}

.home-notice > .home-notice-callout {
  padding: 0.85rem 1rem;
  border-left: 3px solid var(--pink);
  background: #fff4f7;
}

.home-intro {
  border-top: 4px solid var(--pink);
}

.home-intro > h2 {
  margin-top: 0;
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  line-height: 1.2;
}

.home-intro > p {
  max-width: 72ch;
  font-size: 1rem;
  line-height: 1.65;
}

.home-intro > .home-intro-callout {
  margin-bottom: 0;
  padding: 1rem 1.25rem;
  border-left: 3px solid var(--pink);
  background: #f4f4ee;
}
</style>
