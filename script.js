const english = {
brandSub:'FURNITURE WITH CHARACTER',navCollection:'Our collection',navAbout:'About us',navContact:'Contact',heroLabel:'MEBLOPAN · SINCE 2002',heroTitle:'Your space.<br>Your story.',heroDescription:'Furniture that turns a space into a home.<br>From the first idea to the final detail.',explore:'Explore the collection',heroBottom:'DESIGNED FOR LIVING. MADE FOR YOU.',introLabel:'HOME BEGINS WITH YOU',introTitle:'For every room.<br>For every day.',introText:'Beauty lies in furniture that fits your life. We create solutions for the kitchen, bedroom, and every corner of your home — with care for your space and the way you live.',collectionLabel:'OUR COLLECTION',collectionTitle:'Room for every idea.',collectionCount:'04 categories / endless possibilities',kitchen:'Kitchens',kitchenSub:'The heart of the home',wardrobe:'Wardrobes',wardrobeSub:'A place for everything you love',bedroom:'Beds & bedrooms',bedroomSub:'Your peaceful retreat',wholeHome:'Complete interiors',wholeHomeSub:'One story, throughout your home',imageNote:'Images are illustrative and provided as design inspiration.',aboutLabel:'GET TO KNOW MEBLOPAN',aboutTitle:'Experience that<br>becomes part of home.',aboutText:'Our story began on 28 April 2002. Since then, making furniture has been our everyday work — and our way of creating something that becomes part of your everyday life.',aboutText2:'From kitchens and wardrobes to beds and complete apartment furnishing, we see every space as a new opportunity for a practical, beautiful home.',since:'THE YEAR<br>OUR STORY BEGAN',stepsLabel:'FROM AN IDEA TO A HOME',step1:'Tell us your idea',step1Text:'We talk about your space, your needs, and your wishes.',step2:'Let’s work out the details',step2Text:'Together, we explore the look and functionality.',step3:'Let’s create a home',step3Text:'Your idea takes shape through our furniture making.',contactLabel:'THE NEXT STORY IS YOURS',contactTitle:'Let’s make room<br>for your ideas.',contactText:'Have a vision for your home? Give us a call or send us an email.',phoneLabel:'CALL US',emailLabel:'WRITE TO US',footer:'© Meblopan. Making furniture since 2002.',backTop:'Back to top ↑'
};
const elements = [...document.querySelectorAll('[data-i18n]')];
const macedonian = Object.fromEntries(elements.map(el => [el.dataset.i18n, el.innerHTML]));
const photos = [...document.querySelectorAll('main img')];
const photoDescriptions = {
  mk: photos.map(img => img.alt),
  en: ['Living room with a dark green sofa, tall windows and a wooden floor', 'Bright white kitchen with a central island', 'White built-in wardrobes in a contemporary bedroom', 'Contemporary bedroom with a double bed and wooden details', 'Open-plan apartment with a connected kitchen and dining space', 'Dining furniture with wooden and upholstered chairs']
};
function setLanguage(language) {
  const lang = language === 'en' ? 'en' : 'mk';
  const dictionary = lang === 'en' ? english : macedonian;
  elements.forEach(el => { el.innerHTML = dictionary[el.dataset.i18n]; });
  document.documentElement.lang = lang;
  photos.forEach((img, index) => { img.alt = photoDescriptions[lang][index]; });
  document.title = lang === 'en' ? 'Meblopan | Furniture for your home' : 'Меблопан | Мебел за вашиот дом';
  document.querySelector('meta[name="description"]').content = lang === 'en' ? 'Meblopan — making furniture since 2002. Kitchens, wardrobes, beds, and complete apartment furnishing.' : 'Меблопан — производство на мебел од 2002 година. Кујни, плакари, кревети и целосно опремување на стан.';
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
  try { localStorage.setItem('meblopan-language', lang); } catch {}
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
try { setLanguage(localStorage.getItem('meblopan-language') || 'mk'); } catch { setLanguage('mk'); }
