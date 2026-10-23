<template>
  <div class="about-page">
    <section class="panel home-section">
      <span class="eyebrow">NA DE WEDSTRIJD</span>
      <h2>Gevonden voorwerpen</h2>
      <p>Gevonden voorwerpen worden <strong>niet meer meegenomen naar de eerstvolgende cross</strong> van het circuit. Na de wedstrijd worden ze nog <strong>14 dagen bewaard bij de organiserende vereniging</strong>.</p>
    </section>

    <section class="panel home-section">
      <span class="eyebrow">EINDPRIJZEN ALL4RUNNING CROSSCIRCUIT</span>
      <h2>Categorieverdeling</h2>
      <h3>Jeugd</h3>
      <ul class="about-list"><li>U8 t/m U10</li><li>U11 t/m U13</li><li>U14 t/m U16</li><li>U17 t/m U20</li></ul>
      <h3>Dames en heren</h3>
      <ul class="about-list"><li><strong>Dames:</strong> 19 t/m 34 jaar, daarna categorieën oplopend met 5 jaar t/m 60 jaar.</li><li><strong>Heren:</strong> 19 t/m 34 jaar, daarna categorieën oplopend met 5 jaar t/m 65 jaar.</li></ul>
      <div class="about-callout"><h3>Let op: categorieën voor dagprijzen</h3><p>Bij de afzonderlijke crossen worden de categorieën voor de dagprijzen samengevoegd. Voor zowel heren als dames gelden de volgende categorieën:</p><p><strong>Senioren · 35–44 · 45–54 · 55–64 · 65+</strong></p></div>
    </section>

    <section class="panel home-section">
      <span class="eyebrow">HET ALGEMEEN KLASSEMENT</span>
      <h2>Puntenverdeling</h2>
      <p>Voor iedere cross kun je punten verdienen voor het algemeen klassement. Om in aanmerking te komen voor het eindklassement moet je aan <strong>minimaal 4 wedstrijden</strong> hebben deelgenomen.</p>
      <ul class="about-list"><li>De <strong>4 beste resultaten</strong> tellen mee voor het eindklassement.</li><li>Loop je alle vijf de crossen? Dan ontvang je <strong>10 bonuspunten</strong>.</li></ul>
      <h3>Welke categorie telt voor het klassement?</h3>
      <p>De categorie waarin je bij de eerste wedstrijd deelneemt, geldt voor alle wedstrijden voor het klassement.</p>
      <p>Wordt een jeugdloper die aan het gehele circuit deelneemt een jaar ouder? Dan blijft deze meelopen in de categorie van de eerste wedstrijd.</p>
      <p>De dagprijzen worden uitgereikt op basis van de categorie waarin je op de wedstrijddag deelneemt.</p>
    </section>

    <section class="panel home-section">
      <span class="eyebrow">IEDERE PLAATS TELT</span>
      <h2>Puntenverdeling per wedstrijd</h2>
      <div class="home-table-wrap"><table class="home-rates points-table"><caption class="visually-hidden">Punten per finishplaats</caption><thead><tr><th scope="col">Plaats</th><th scope="col">Punten</th></tr></thead><tbody><tr v-for="(points, index) in [40, 35, 32, 30, 28, 26, 24, 22, 20]" :key="index"><th scope="row">{{ index + 1 }}e</th><td>{{ points }}</td></tr><tr><th scope="row">10e t/m 28e</th><td>Steeds 1 punt minder per plaats</td></tr></tbody></table></div>
    </section>
  </div>
</template>
