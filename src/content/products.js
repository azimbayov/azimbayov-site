// Single source of truth for the 6 Gumroad products.
// The Templates page reads from this. The Decap CMS panel edits this file (see /public/admin/config.yml).
export const products = [
  {
    id: 's5aud',
    slug: '5s-audit-scorecard',
    gumroad: 'https://7271788677210.gumroad.com/l/5s-audit-scorecard',
    cats: ['5s', 'lean', 'ci'],
    type: 'template',
    format: 'WORD + PDF',
    translations: {
      az: { h: '5S Audit Scorecard', p: '21 yoxlama nöqtəsi, avtomatik reytinq zolaqları, quraşdırılmış tədbir planı.' },
      en: { h: '5S Audit Scorecard', p: '21 checkpoints, automatic rating bands, built-in action plan.' },
      tr: { h: '5S Denetim Kartı',   p: '21 kontrol noktası, otomatik derecelendirme bantları, hazır aksiyon planı.' },
    },
  },
  {
    id: 'gform',
    slug: 'gemba-walk-observation-form',
    gumroad: 'https://7271788677210.gumroad.com/l/gemba-walk-observation-form',
    cats: ['ci', 'kaizen'],
    type: 'template',
    format: 'WORD + PDF',
    translations: {
      az: { h: 'Gemba Walk Müşahidə Forması', p: 'Müşahidə + operator müsahibəsi + SOP uyğunluğu + tədbir planı.' },
      en: { h: 'Gemba Walk Observation Form', p: 'Observation + operator interview + SOP compliance + action plan.' },
      tr: { h: 'Gemba Walk Gözlem Formu',     p: 'Gözlem + operatör görüşmesi + SOP uyumu + aksiyon planı.' },
    },
  },
  {
    id: 'gproc',
    slug: 'gemba-walk-procedure',
    gumroad: 'https://7271788677210.gumroad.com/l/gemba-walk-procedure',
    cats: ['ci', 'kaizen'],
    type: 'procedure',
    format: 'WORD + PDF',
    translations: {
      az: { h: 'Gemba Walk Proseduru', p: 'RACI, 10 addımlı metod, KPI-lar, risk qeydiyyatı.' },
      en: { h: 'Gemba Walk Procedure', p: 'RACI, 10-step method, KPIs, risk register.' },
      tr: { h: 'Gemba Walk Prosedürü', p: "RACI, 10 adımlı yöntem, KPI'lar, risk kaydı." },
    },
  },
  {
    id: 's5proc',
    slug: '5s-implementation-audit-procedure',
    gumroad: 'https://7271788677210.gumroad.com/l/5s-implementation-audit-procedure',
    cats: ['5s', 'lean', 'ci'],
    type: 'procedure',
    format: 'WORD + PDF',
    translations: {
      az: { h: '5S Tətbiq və Audit Proseduru',       p: '1S-dən 5S-ə addım cədvəlləri, RACI, üç sadə qayda.' },
      en: { h: '5S Implementation & Audit Procedure',p: 'Step tables for 1S through 5S, RACI, three rules of thumb.' },
      tr: { h: '5S Uygulama ve Denetim Prosedürü',   p: "1S'den 5S'e adım tabloları, RACI, üç basit kural." },
    },
  },
  {
    id: 'oproc',
    slug: 'oee-analysis-procedure',
    gumroad: 'https://7271788677210.gumroad.com/l/oee-analysis-procedure',
    cats: ['oee', 'ci', 'lean'],
    type: 'procedure',
    format: 'WORD + PDF',
    translations: {
      az: { h: 'OEE Analiz Proseduru', p: 'Formullar, tam analiz axını (Pareto → RCA → tədbir → yoxlama).' },
      en: { h: 'OEE Analysis Procedure',p: 'Formulas, full analysis flow (Pareto → RCA → action → verify).' },
      tr: { h: 'OEE Analiz Prosedürü', p: 'Formüller, tam analiz akışı (Pareto → RCA → aksiyon → doğrulama).' },
    },
  },
  {
    id: 'oxlsx',
    slug: 'oee-analysis-report-excel',
    gumroad: 'https://7271788677210.gumroad.com/l/oee-analysis-report-excel',
    cats: ['oee', 'ci', 'pdca'],
    type: 'workbook',
    format: 'EXCEL',
    translations: {
      az: { h: 'OEE Analiz Hesabatı (Excel)', p: 'Canlı formullar (A × P × Q), aylıq/rüblük/illik avtomatik yığım.' },
      en: { h: 'OEE Analysis Report (Excel)', p: 'Live formulas (A × P × Q), monthly/quarterly/YTD auto-rollups.' },
      tr: { h: 'OEE Analiz Raporu (Excel)',   p: 'Canlı formüller (A × P × Q), aylık/üç aylık/YTD otomatik özet.' },
    },
  },
];

export const allCategories = ['lean', 'ci', 'kaizen', 'oee', '5s', 'rca', 'smed', 'pokayoke', 'pdca'];
