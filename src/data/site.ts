export const site = {
  name: 'Master Lanka Travels',
  address: 'No 187/90/A Lurdu Mawatha, Thewaththa Rd, Ragama',
  // Replace with the client's WhatsApp number in international format (digits only).
  whatsappNumber: '',
};

export function whatsappUrl(language: 'ja' | 'en', message?: string) {
  const copy = message ?? (language === 'ja'
    ? 'こんにちは。スリランカ旅行について相談したいです。'
    : 'Hello, I would like to ask about a trip to Sri Lanka.');
  const number = site.whatsappNumber.replace(/\D/g, '');
  const base = number ? `https://wa.me/${number}` : 'https://api.whatsapp.com/send';
  return `${base}?text=${encodeURIComponent(copy)}`;
}

export const copy = {
  ja: {
    nav: ['ホーム', '旅のパッケージ', '旅のサービス', '私たちについて', 'お問い合わせ'],
    navEn: ['HOME', 'PACKAGES', 'SERVICES', 'ABOUT', 'CONTACT'],
    whatsapp: 'WhatsAppで旅を相談',
    guideNote: '日本人スタッフが旅に同行し、ご案内します。',
    heroJa: 'スリランカの旅を、\nひとつの地図から。',
    heroEn: 'Find your way through Sri Lanka.',
    intro: '海、緑、歴史がつながる、ひとつの島の旅。\n地図をたよりに、あなただけのスリランカを見つけてみませんか。',
    regions: [
      { en: 'Coast', ja: '海と暮らす', text: 'やさしい時間が流れる海辺の町や、美しいビーチ。海のアクティビティ、ローカルカルチャーに出会う旅へ。' },
      { en: 'Highlands', ja: '緑に出会う', text: '茶畑の広がる高原、滝や森、涼やかな気候。自然の中で過ごす、心ほどける旅をご案内します。' },
      { en: 'Heritage', ja: '歴史を歩く', text: '古代の遺跡や寺院、受け継がれてきた文化。スリランカの奥深い歴史にふれる旅をご案内します。' },
    ],
    routeTitle: '旅をつなぐ\nルートマップ', routeEn: 'ROUTE MAP',
    routeNames: ['西海岸', '中央高地', '文化遺産エリア'],
    packagesHeading: '旅のパッケージ', packagesEn: 'PACKAGES',
    packagesSub: '海・緑・歴史、3つのテーマから、\nあなたらしい旅の組み立てを相談してみませんか。',
    packagesLink: '旅のパッケージを見る',
    disclaimer: '地図のルートと地域は旅のイメージです。実際の行程はご希望に合わせてご相談ください。',
    pages: {
      packages: { title: 'あなたらしい旅を、島の地図から。', subtitle: '海岸線も、高原も、歴史の街も。気になる場所を起点に、旅のかたちを一緒に考えます。', label: '旅のパッケージ', en: 'JOURNEYS' },
      services: { title: '旅の時間を、心地よく。', subtitle: '行き先をつなぐ道のりから、島で過ごすひとときまで。旅の相談はWhatsAppから。', label: '旅のサービス', en: 'HOW WE TRAVEL' },
      about: { title: '旅の景色も、過ごし方も。', subtitle: 'あなたのペースで、島の魅力に出会う旅を。', label: '私たちについて', en: 'ABOUT US' },
      contact: { title: '旅のことを、気軽に相談。', subtitle: '行きたい場所や過ごし方をお聞かせください。WhatsAppでご相談いただけます。', label: 'お問い合わせ', en: 'LET’S TALK' },
    },
    ctaTitle: 'スリランカで、どんな時間を過ごしたいですか？', cta: 'WhatsAppで相談する',
    note: '行程・料金などの詳細は、ご希望を伺ったうえでご案内します。',
    footer: 'スリランカの旅を、ひとつの地図から。',
  },
  en: {
    nav: ['Home', 'Packages', 'Services', 'About', 'Contact'],
    navEn: ['HOME', 'PACKAGES', 'SERVICES', 'ABOUT', 'CONTACT'],
    whatsapp: 'Plan on WhatsApp',
    guideNote: 'A Japanese team member will travel with you and guide you.',
    heroJa: 'Find a Sri Lanka journey,\none map at a time.',
    heroEn: 'A journey shaped around your island story.',
    intro: 'Coast, highlands and heritage, connected across one island.\nLet the map lead you to a Sri Lanka that feels like your own.',
    regions: [
      { en: 'Coast', ja: 'Live by the sea', text: 'Easy hours in seaside towns and beautiful beaches. Discover ocean activities and the character of local coastal life.' },
      { en: 'Highlands', ja: 'Meet the green', text: 'Tea country, waterfalls, forest trails and a cooler climate. Find room to slow down among the highlands.' },
      { en: 'Heritage', ja: 'Walk through time', text: 'Ancient sites, temples and living traditions. Explore the stories that give Sri Lanka its depth.' },
    ],
    routeTitle: 'Journeys\nthat connect', routeEn: 'ROUTE MAP',
    routeNames: ['West Coast', 'Central Highlands', 'Heritage Country'],
    packagesHeading: 'Journey ideas', packagesEn: 'PACKAGES',
    packagesSub: 'Coast, highlands or heritage: tell us what draws you in and shape a journey together.',
    packagesLink: 'Explore journey ideas',
    disclaimer: 'The route and place markers are illustrative. Your actual itinerary can be discussed around your interests.',
    pages: {
      packages: { title: 'Start with the places that move you.', subtitle: 'From the coast to tea country and historic towns, we can shape a trip around the places you want to discover.', label: 'Journey ideas', en: 'JOURNEYS' },
      services: { title: 'Make more room for the journey.', subtitle: 'From the roads between destinations to the moments you spend on the island, start the conversation on WhatsApp.', label: 'Travel services', en: 'HOW WE TRAVEL' },
      about: { title: 'An island to discover. A journey of your own.', subtitle: 'A more personal approach to exploring Sri Lanka, shaped around your pace.', label: 'About us', en: 'ABOUT US' },
      contact: { title: 'Let’s talk about Sri Lanka.', subtitle: 'Share the places and experiences you have in mind. Start a conversation on WhatsApp.', label: 'Contact', en: 'LET’S TALK' },
    },
    ctaTitle: 'What would you like your time in Sri Lanka to feel like?', cta: 'Talk to us on WhatsApp',
    note: 'Itinerary and pricing details are shared after we understand what you have in mind.',
    footer: 'Find your way through Sri Lanka.',
  },
} as const;

export type Language = keyof typeof copy;
export type PageKey = 'home' | 'packages' | 'services' | 'about' | 'contact';

export function pagePath(language: Language, page: PageKey) {
  const localPath = page === 'home' ? '/' : `/${page}/`;
  return language === 'ja' ? localPath : `/en${localPath}`;
}

