# P2P Car Sharing Landing Page

Responzivní landing page pro novou platformu P2P sdílení aut v Česku.

## Funkce

- **Mobile-first design** - optimalizováno pro mobilní zařízení
- **Responzivní layout** - přizpůsobí se všem velikostem obrazovek
- **Moderní UI/UX** - čisté rozhraní s plynulými animacemi
- **SEO optimalizované** - kompletní metadata a structured data
- **Interaktivní prvky**:
  - Waitlist integrace
  - Smooth scrolling při kliknutí na CTA
  - Expandabilní FAQ sekce
  - Hover efekty na kartách

## Struktura

### Produkční soubory (nahrajte na server):
- `index.html` - hlavní HTML struktura
- `styles.min.css` - minifikované styly (70% menší) ✅
- `script.min.js` - minifikovaný JavaScript (60% menší) ✅
- `Frame 22.png` - favicon/logo
- `504023be-b3db-48a4-97de-8628cf689182.png` - hero obrázek
- `robots.txt` - instrukce pro vyhledávače
- `sitemap.xml` - mapa stránek
- `.htaccess` - Apache konfigurace (komprese, caching)

### Vývojové soubory (pro úpravy):
- `styles.css` - všechny styly a responzivní breakpointy
- `script.js` - interaktivní funkce

## Spuštění

Jednoduše otevřete `index.html` ve vašem prohlížeči. Žádné další závislosti nejsou potřeba.

## SEO Optimalizace

### Implementované prvky:

✅ **Meta tagy**
- Title tag s klíčovými slovy
- Meta description
- Keywords
- Open Graph pro Facebook/LinkedIn
- Twitter Card
- Canonical URL

✅ **Structured Data (JSON-LD)**
- WebSite schema
- Organization schema
- FAQPage schema
- Service schema

✅ **Sémantické HTML**
- Správné použití heading hierarchie (H1, H2, H3)
- ARIA labels pro přístupnost
- Semantic HTML5 elementy
- Microdata markup

✅ **Technická SEO**
- robots.txt
- sitemap.xml
- .htaccess s kompresí a cachingem
- Mobile-first responsive design
- Rychlé načítání (žádné externí závislosti)

### Před zveřejněním:

1. **Doména nastavena** - `https://autasobe.cz/` je již nakonfigurována v:
   - ✅ `index.html` (meta tagy a structured data)
   - ✅ `robots.txt`
   - ✅ `sitemap.xml`

2. **Přidejte obrázky pro social media**:
   - Vytvořte `og-image.jpg` (1200x630px) pro Open Graph
   - Přidejte cestu k obrázku do meta tagů

3. **Google Search Console**:
   - Zaregistrujte web v Google Search Console
   - Nahrajte `sitemap.xml`
   - Ověřte vlastnictví domény

4. **Google Analytics** (volitelné):
   - Přidejte Google Analytics tracking kód

5. **SSL certifikát**:
   - Získejte SSL certifikát (Let's Encrypt zdarma)
   - Odkomentujte HTTPS redirect v `.htaccess`

## Responzivní breakpointy

- **Mobile**: < 640px (výchozí)
- **Tablet**: ≥ 640px
- **Desktop**: ≥ 768px
- **Large Desktop**: ≥ 1024px

## Klíčová slova pro SEO

Stránka je optimalizovaná pro tyto vyhledávací výrazy:
- P2P carsharing
- Sdílení aut
- HoppyGo alternativa
- Car sharing Česko
- Půjčovna aut Praha
- Peer to peer carsharing

