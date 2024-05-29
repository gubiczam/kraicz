import React from 'react';
import './App.css';
import galeria0 from './images/galeria0.jpg';
import galeria1 from './images/galeria1.jpg';
import galeria2 from './images/galeria2.jpg';
import galeria3 from './images/galeria3.jpg';
import galeria4 from './images/galeria4.jpg';
import kraicz_peter1 from './images/kraicz_peter1.jpg';
import kraicz_peter2 from './images/kraicz_peter2.jpg';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Kraicz Lakásétterem</h1>
      </header>
      <section className="fullscreen-section" style={{ backgroundImage: `url(${galeria0})` }}>
        <div className="section-box">
          <h2>Sziasztok!</h2>
          <p>
          Végre rávettem magam, hogy leegyszerűsítsük kapcsolattartásunkat és egyszerűbbé tegyem a kérdéseitekre a választ, elkészült a weblap.
            A legfontosabb kérdésekre megkapjátok a választ, mi lesz a kaja és mikor találkozhatunk újra.
            Ilyen oldalakon illik valamilyen bemutatkozó szöveggel előállni, jó fényben tündökölni, én inkább koncentrálnék arra amit szeretek csinálni, főzni és egyes vélemények szerint alkotni valami finomat.
            Szeptembertől szombat esténként várlak benneteket hozzánk a családi asztalhoz.
            
          </p>
        </div>
      </section>
      <section className="gallery">
        <img className="gallery-half" src={galeria1} alt="Gallery image 1" />
        <img className="gallery-half" src={galeria2} alt="Gallery image 2" />
        <img className="gallery-half" src={galeria3} alt="Gallery image 3" />
        <img className="gallery-half" src={galeria4} alt="Gallery image 4" />
      </section>
      <section>
        <div className="section-box">
          <h2>Mi is az a lakásétterem?</h2>
          <p>
          Lakásétterem. Ez a fogalom már nálunk sem ismeretlen. A kiindulópont ugyan Kubába tehető, ahol az 1990-es évektől gombamód szaporodtak a félig meddig legális, sőt leggyakrabban illegális családi étkezdék. A sorba aztán beállt Spanyolország, New York és 2007-ben nagy örömünkre Budapest is. Elegáns és modern vagy antik és polgári lakásban, profi séfek vagy a főzés szerelmeseinek tálalásában, a cél mégis mindegyikben közös: barátságos, meghitt hangulatban gasztronómiai élményt nyújtani másoknak.
          </p>
          <p>
            Amit ígérni tudok, 5 fogásos vacsorát, a hozzá tartozó kiváló borokat és kellemes családias hangulatot.
            Aki ismeri fanatizmusomat az tudja, hogy imádom a különböző nemzetek konyháját, a fúziós ételeket, bele-bele kacsintgatok a molekuláris gasztronómiába a sous vide technológiába, de nagyon gyakran használom a kemencémet, a sparheltet és a faszenes grillezőt is.
            Esténként 19 órakor kezdünk és mivel frissen készítek mindent, úgy számolj az időddel, hogy este 22 óra körül végzünk. Kérem az időpontok tiszteletben tartását.
            Jó idő esetén a teraszon fogadlak benneteket, míg rossz idő esetén a kemence melege mellett a konyhámban.
          </p>
          <p>
            Én imádom a húsokat és főleg abból készítem ételeimet, de ha vegetáriánus vagy kérlek jelezd előre és kedvenceddel kedveskedem neked.
            A különböző allergénekre (kazein, mogyoró, glutén, stb.) viszont nem tudok odafigyelni, mivel ezek nem nehezítik meg életünket.
            Továbbá a kalóriatáblázatot sem ismerem. Amit zsírral és bő zsírral kell készíteni, az úgy is készül.
          </p>
          <p>
            Kérlek benneteket, ha jönni szeretnétek hívjatok a <strong>06-70-33-20-643</strong> számon.
          </p>
        </div>
      </section>
      <section className="chef-images">
        <img src={kraicz_peter1} alt="Kraicz Péter" />
        <img src={kraicz_peter2} alt="Kraicz Péter" />
      </section>
      <footer>
        <p>&copy; 2024 Kraicz Lakásétterem <strong>06-70-33-20-643</strong></p>
      </footer>
    </div>
  );
}

export default App;
