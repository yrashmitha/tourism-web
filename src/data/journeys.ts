import type { Language } from './site';

export type LocalizedText = Record<Language, string>;
export type JourneyTheme = 'wildlife' | 'culture' | 'highlands' | 'coast';

export interface JourneyDay {
  title: LocalizedText;
  description: LocalizedText;
}

export interface Journey {
  id: string;
  days: number;
  nights: number;
  image: string;
  theme: JourneyTheme;
  title: LocalizedText;
  summary: LocalizedText;
  route: LocalizedText;
  highlights: LocalizedText[];
  itinerary: JourneyDay[];
  fit: LocalizedText;
}

// Suggested routes inspired by https://travelwithsampath.com/packages/.
// These are journey ideas, pending the client's itinerary and service confirmation.
// The reference names Sigiriya in its two-day tour but only publishes Day 1;
// the proposed second day below completes that outline rather than quoting a schedule.
export const journeys: Journey[] = [
  {
    id: 'yala-safari',
    days: 1,
    nights: 0,
    image: '/images/yala-safari.webp',
    theme: 'wildlife',
    title: { ja: 'ヤーラのサファリ', en: 'Yala safari' },
    summary: { ja: '開けた草原や水辺に、野生の気配を探す一日。', en: 'Watch for wildlife across Yala’s open landscapes.' },
    route: { ja: 'ヤーラ国立公園', en: 'Yala National Park' },
    highlights: [
      { ja: 'ジープでめぐる自然', en: 'Safari drive' },
      { ja: '野鳥の観察', en: 'Birdlife' },
      { ja: '草原と水辺の風景', en: 'Open landscapes' },
    ],
    itinerary: [
      { title: { ja: 'ヤーラ国立公園', en: 'Yala National Park' }, description: { ja: 'ジープで野生動物を探します。見られる動物は当日の状況により異なります。', en: 'Explore by jeep; sightings vary.' } },
    ],
    fit: { ja: '自然や野生動物が好きな方へ', en: 'For nature lovers' },
  },
  {
    id: 'kandy-sigiriya',
    days: 2,
    nights: 1,
    image: '/images/heritage-scene.webp',
    theme: 'culture',
    title: { ja: 'キャンディとシーギリヤ', en: 'Kandy & Sigiriya' },
    summary: { ja: '湖畔の古都と岩山の遺跡。島の歴史にふれる2日間。', en: 'A temple city and an ancient rock fortress.' },
    route: { ja: 'コロンボ → キャンディ → シーギリヤ', en: 'Colombo → Kandy → Sigiriya' },
    highlights: [
      { ja: '仏歯寺', en: 'Tooth Temple' },
      { ja: 'キャンディ湖', en: 'Kandy Lake' },
      { ja: 'シーギリヤ・ロック', en: 'Sigiriya Rock' },
    ],
    itinerary: [
      { title: { ja: 'コロンボからキャンディへ', en: 'Colombo → Kandy' }, description: { ja: '仏歯寺と湖畔の街をめぐります。', en: 'Temple and lakeside exploring.' } },
      { title: { ja: 'キャンディからシーギリヤへ', en: 'Kandy → Sigiriya' }, description: { ja: '岩山の遺跡へ。出発地や帰路に合わせて行程をご相談ください。', en: 'Discover the rock fortress.' } },
    ],
    fit: { ja: '短い日程で文化にふれたい方へ', en: 'For a cultural escape' },
  },
  {
    id: 'culture-tea-country',
    days: 4,
    nights: 3,
    image: '/images/highlands-scene.webp',
    theme: 'highlands',
    title: { ja: '文化と紅茶の高原へ', en: 'Culture & tea country' },
    summary: { ja: '古代の遺跡から、茶畑に包まれた丘へ。島の内陸をつなぐ旅。', en: 'Ancient heritage gives way to the tea hills.' },
    route: { ja: 'シーギリヤ → キャンディ → ヌワラ・エリヤ', en: 'Sigiriya → Kandy → Nuwara Eliya' },
    highlights: [
      { ja: 'シーギリヤの遺跡', en: 'Sigiriya Rock' },
      { ja: 'キャンディの歴史', en: 'Kandy’s heritage' },
      { ja: '紅茶の高原', en: 'Tea country' },
    ],
    itinerary: [
      { title: { ja: 'コロンボからシーギリヤへ', en: 'Colombo → Sigiriya' }, description: { ja: '岩山の遺跡と周辺の風景へ。', en: 'Fortress and village scenery.' } },
      { title: { ja: 'シーギリヤからキャンディへ', en: 'Sigiriya → Kandy' }, description: { ja: '寺院と湖畔をめぐります。', en: 'Temple and lakeside.' } },
      { title: { ja: 'キャンディからヌワラ・エリヤへ', en: 'Kandy → Nuwara Eliya' }, description: { ja: 'ランボダの滝と茶畑の風景をたどります。', en: 'Ramboda Waterfall and tea.' } },
      { title: { ja: 'ヌワラ・エリヤからコロンボへ', en: 'Nuwara Eliya → Colombo' }, description: { ja: '山あいの景色を楽しみながら帰路へ。', en: 'A scenic return.' } },
    ],
    fit: { ja: '歴史と緑の風景を楽しみたい方へ', en: 'For culture and green horizons' },
  },
  {
    id: 'coast-island-highlights',
    days: 6,
    nights: 5,
    image: '/images/coast-scene.webp',
    theme: 'coast',
    title: { ja: '南海岸から、島の高原へ', en: 'Coast to hill country' },
    summary: { ja: '南の海辺、サファリ、高原の街へ。日ごとに景色が変わる周遊。', en: 'Southern shores, safari country and mountain towns.' },
    route: { ja: 'ゴール → ヤーラ → エッラ → キャンディ', en: 'Galle → Yala → Ella → Kandy' },
    highlights: [
      { ja: 'ゴールの旧市街', en: 'Galle Fort' },
      { ja: 'ヤーラのサファリ', en: 'Yala safari' },
      { ja: 'エッラの山並み', en: 'Ella viewpoints' },
    ],
    itinerary: [
      { title: { ja: '南海岸をめぐる', en: 'South coast' }, description: { ja: 'ゴール、ウェリガマ、ミリッサを経てタンガッラへ。', en: 'Galle, Weligama, Mirissa, Tangalle.' } },
      { title: { ja: 'ヤーラからエッラへ', en: 'Yala → Ella' }, description: { ja: 'サファリの後、高原へ移動します。', en: 'Safari, then the hills.' } },
      { title: { ja: 'エッラからヌワラ・エリヤへ', en: 'Ella → Nuwara Eliya' }, description: { ja: '滝や茶畑の景色をたどります。', en: 'Waterfalls and tea country.' } },
      { title: { ja: 'ヌワラ・エリヤからキャンディへ', en: 'Nuwara Eliya → Kandy' }, description: { ja: '湖畔から山道を抜け、古都へ。', en: 'Lake views; mountain roads.' } },
      { title: { ja: 'キャンディの街をめぐる', en: 'Kandy' }, description: { ja: '寺院と街の散策を楽しみます。', en: 'Temple and city exploring.' } },
      { title: { ja: 'キャンディからコロンボへ', en: 'Kandy → Colombo' }, description: { ja: 'コロンボ、または空港へ戻ります。', en: 'Return to Colombo or airport.' } },
    ],
    fit: { ja: '多彩な風景をひとつの旅で', en: 'For a varied island journey' },
  },
];
