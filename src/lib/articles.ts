export type ArticleCategory = '대출' | '투자' | '부동산' | '세금' | '예적금' | '반도체';

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: ArticleCategory;
  publishedAt: string;
  keywords: string[];
  relatedCalc?: { label: string; href: string };
}

export const ARTICLES: Article[] = [
  {
    slug: 'loan-repayment-comparison',
    title: '원리금균등 vs 원금균등 상환, 어떤 게 더 유리할까?',
    description: '두 상환 방식의 이자 총액·월 납입금 차이를 비교하고, 내 상황에 맞는 방식을 선택하는 기준을 안내합니다.',
    category: '대출',
    publishedAt: '2025-06-01',
    keywords: ['원리금균등상환', '원금균등상환', '대출 상환 방식', '대출 이자 비교', '주택담보대출 상환', '월 납입금 계산', '대출 이자 계산기', '만기일시상환', '총 이자 비교'],
    relatedCalc: { label: '대출 이자 계산기', href: '/loan' },
  },
  {
    slug: 'compound-interest-72-rule',
    title: '복리의 힘: 72법칙으로 보는 투자 원금 2배 기간',
    description: '복리 효과가 왜 강력한지, 72법칙으로 원금이 두 배 되는 기간을 계산하는 방법을 쉽게 설명합니다.',
    category: '투자',
    publishedAt: '2025-06-10',
    keywords: ['복리 계산', '72법칙', '복리 효과', '투자 원금 2배', '단리 복리 차이', '장기 투자', '복리 계산기', '투자 수익률 계산', '재테크'],
    relatedCalc: { label: '복리 계산기', href: '/compound' },
  },
  {
    slug: 'realestate-tax-checklist',
    title: '부동산 세금 완전 정리: 취득·보유·양도세 한눈에',
    description: '부동산을 사고·보유하고·팔 때 내야 하는 세금을 단계별로 정리했습니다. 절세 포인트까지 함께 확인하세요.',
    category: '부동산',
    publishedAt: '2025-06-18',
    keywords: ['부동산 세금', '취득세', '보유세', '양도소득세', '재산세', '종합부동산세', '부동산 절세', '1세대1주택 비과세', '장기보유특별공제', '부동산 취득세 계산'],
    relatedCalc: { label: '취득세 계산기', href: '/acquisition-tax' },
  },
  {
    slug: 'savings-vs-deposit',
    title: '정기예금 vs 적금, 이자를 더 많이 주는 건 어느 쪽일까?',
    description: '같은 금리라도 실제 받는 이자가 다릅니다. 예금과 적금의 구조적 차이와 세후 수익 비교법을 알기 쉽게 설명합니다.',
    category: '예적금',
    publishedAt: '2025-06-23',
    keywords: ['정기예금 적금 차이', '예금 이자 계산', '적금 이자 계산', '세후 이자', '이자소득세', '예금 금리 비교', '적금 계산기', '정기예금 계산기', 'ISA 비과세', '재테크 예금'],
    relatedCalc: { label: '예적금 계산기', href: '/savings' },
  },
  {
    slug: 'overseas-stock-tax-guide',
    title: '해외주식 양도소득세 신고 방법과 절세 전략',
    description: '해외주식 매도 시 꼭 알아야 할 양도소득세 신고 시기·방법·계산법과 기본공제 250만원 활용 절세 전략을 정리합니다.',
    category: '세금',
    publishedAt: '2025-06-28',
    keywords: ['해외주식 양도소득세', '미국주식 세금', '해외주식 세금 신고', '양도소득세 250만원 공제', '해외주식 절세', '홈택스 양도세 신고', '해외주식 양도세 계산기', '미국주식 ETF 세금', '해외주식 손익통산'],
    relatedCalc: { label: '해외주식 양도소득세 계산기', href: '/stock-tax' },
  },
  {
    slug: 'jongbu-tax-guide',
    title: '종합부동산세(종부세) 완벽 가이드: 계산부터 절세까지',
    description: '종부세 과세 기준, 세율, 계산 방법을 쉽게 설명하고 1세대 1주택자 공제·고령자 세액공제 등 절세 방법을 안내합니다.',
    category: '부동산',
    publishedAt: '2025-07-02',
    keywords: ['종합부동산세', '종부세 계산', '종부세 기준', '1세대1주택 종부세', '종부세 절세', '고령자 세액공제', '장기보유 종부세 공제', '재산세 종부세 차이', '보유세 계산기', '종부세 납부'],
    relatedCalc: { label: '보유세 계산기', href: '/holding-tax' },
  },
  {
    slug: 'samsung-electronics-stock-analysis',
    title: '삼성전자 주식 완전 분석: 사업 구조·배당·반도체 사이클',
    description: '삼성전자 DS·MX·VD 사업 구조와 반도체 업황 사이클 연동 원리, 배당 현황, HBM 전략까지 투자 판단에 필요한 핵심 정보를 정리합니다.',
    category: '반도체',
    publishedAt: '2025-07-10',
    keywords: ['삼성전자 주식', '삼성전자 투자', '삼성전자 배당', '삼성전자 DS부문', '반도체 사이클', '삼성전자 HBM', '삼성전자 파운드리', '삼성전자 PBR', '삼성전자 주가 분석', '삼성전자 우선주'],
    relatedCalc: { label: '평단가 낮추기 계산기', href: '/avgdown' },
  },
  {
    slug: 'skhynix-hbm-ai-investment',
    title: 'SK하이닉스 HBM 투자 포인트: AI 반도체 시대의 최대 수혜주',
    description: 'HBM(고대역폭메모리)이 무엇인지, SK하이닉스가 왜 엔비디아의 핵심 공급사가 됐는지, 투자 리스크와 핵심 지표를 분석합니다.',
    category: '반도체',
    publishedAt: '2025-07-15',
    keywords: ['SK하이닉스 HBM', 'SK하이닉스 주식', 'HBM 투자', '고대역폭메모리', 'SK하이닉스 엔비디아', 'HBM3E', 'SK하이닉스 실적', 'AI 반도체 수혜주', 'SK하이닉스 주가 분석', 'HBM 시장 점유율'],
    relatedCalc: { label: '평단가 낮추기 계산기', href: '/avgdown' },
  },
  {
    slug: 'micron-technology-investment',
    title: '마이크론 테크놀로지(MU) 투자 분석: 미국 유일의 D램 대표주',
    description: '미국 유일의 메모리 반도체 기업 마이크론의 사업 구조, CHIPS Act 보조금 수혜, HBM 추격 현황, 투자 리스크를 분석합니다.',
    category: '반도체',
    publishedAt: '2025-07-20',
    keywords: ['마이크론 주식', '마이크론 테크놀로지', 'MU 주식', '마이크론 HBM', 'CHIPS Act 반도체', '미국 반도체 주식', '마이크론 실적', '마이크론 배당', 'D램 미국 기업', '마이크론 낸드'],
    relatedCalc: { label: '미국 주식 수익률 계산기', href: '/us-stocks' },
  },
  {
    slug: 'semiconductor-cycle-strategy',
    title: '반도체 업황 사이클 완전 분석: 저점 매수·고점 매도 타이밍 잡는 법',
    description: '반도체 사이클의 4단계(회복·호황·조정·침체)와 D램 현물가·재고·CAPEX 등 핵심 지표를 활용한 투자 타이밍 전략을 설명합니다.',
    category: '반도체',
    publishedAt: '2025-07-25',
    keywords: ['반도체 사이클', '반도체 업황', 'D램 현물가', '반도체 투자 타이밍', '반도체 슈퍼사이클', '반도체 저점', 'DRAM 가격', '반도체 CAPEX', '메모리 반도체 투자', '반도체 주식 매수 시점'],
    relatedCalc: { label: '평단가 낮추기 계산기', href: '/avgdown' },
  },
  {
    slug: 'semiconductor-etf-guide',
    title: '반도체 ETF 투자 가이드: 국내·미국 주요 ETF 비교와 선택법',
    description: 'KODEX 반도체, TIGER 반도체, SOXX, SMH 등 국내외 주요 반도체 ETF를 비교하고 세금·환율·구성 종목 기준으로 선택하는 방법을 안내합니다.',
    category: '반도체',
    publishedAt: '2025-07-30',
    keywords: ['반도체 ETF', 'KODEX 반도체', 'SOXX ETF', 'SMH ETF', 'TIGER 반도체', '반도체 ETF 추천', '필라델피아 반도체 지수', '반도체 ETF 세금', '미국 반도체 ETF', 'SOXL 레버리지'],
    relatedCalc: { label: '미국 주식 수익률 계산기', href: '/us-stocks' },
  },
  {
    slug: 'pension-irp-tax-deduction',
    title: '연금저축 IRP 세액공제 완벽 가이드: 최대 148만 5천원 돌려받는 법',
    description: '연금저축·IRP 납입 한도, 세액공제율 13.2~16.5%, 연금저축vs IRP 차이, 수령 시 연금소득세까지 절세 계좌 활용법을 완벽하게 정리합니다.',
    category: '세금',
    publishedAt: '2025-08-05',
    keywords: ['연금저축 세액공제', 'IRP 세액공제', '연금저축 IRP 차이', '연금저축펀드', 'IRP 납입 한도', '연말정산 연금저축', '세액공제 900만원', '연금소득세', '연금저축 ETF', 'IRP 퇴직금'],
    relatedCalc: { label: '복리 수익 계산기', href: '/compound' },
  },
  {
    slug: 'isa-account-guide',
    title: 'ISA 계좌 완전 분석: 중개형·서민형·일반형 비교와 200만원 비과세 활용법',
    description: 'ISA 계좌 유형별(중개형·서민형·일반형) 차이, 비과세 한도 200~400만원 활용법, 만기 후 연금저축 전환 추가 세액공제까지 완전 정리합니다.',
    category: '세금',
    publishedAt: '2025-08-10',
    keywords: ['ISA 계좌', '중개형 ISA', 'ISA 비과세', 'ISA 서민형', 'ISA 납입 한도', 'ISA 배당 ETF', 'ISA 만기 연금전환', 'ISA 절세', '개인종합자산관리계좌', 'ISA 가입 조건'],
    relatedCalc: { label: '예적금 이자 계산기', href: '/savings' },
  },
  {
    slug: 'dividend-stock-investment',
    title: '국내 배당주 투자 가이드: 배당수익률 선별부터 배당소득세 절세까지',
    description: '좋은 배당주 선별 기준(배당성향·지속성·FCF), 국내 고배당 섹터 분석, 배당소득세 15.4% 절세 전략, 배당 재투자 복리 효과를 정리합니다.',
    category: '투자',
    publishedAt: '2025-08-15',
    keywords: ['배당주 투자', '배당수익률', '배당성향', '국내 고배당주', '배당소득세', '배당주 절세', '배당 ETF', '배당 재투자', '배당주 선별 기준', '고배당 ETF'],
    relatedCalc: { label: '평단가 낮추기 계산기', href: '/avgdown' },
  },
  {
    slug: 'tsmc-investment-analysis',
    title: 'TSMC 완전 분석: 세계 1위 파운드리의 경쟁력과 투자 포인트',
    description: 'TSMC 파운드리 사업 모델, AI 반도체 CoWoS 패키징 독점, 지정학 리스크, 삼성전자와의 비교까지 투자 판단에 필요한 핵심 정보를 정리합니다.',
    category: '반도체',
    publishedAt: '2026-06-24',
    keywords: ['TSMC 주식', 'TSM ADR', 'TSMC 파운드리', 'TSMC 투자', 'TSMC CoWoS', 'TSMC 지정학 리스크', 'TSMC 애플', 'TSMC 엔비디아', 'TSMC 삼성 비교', '파운드리 반도체'],
    relatedCalc: { label: '미국 주식 수익률 계산기', href: '/us-stocks' },
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getLatestArticles(n = 3): Article[] {
  return [...ARTICLES]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, n);
}

const CATEGORY_COLOR: Record<ArticleCategory, string> = {
  '대출': '#2563eb',
  '투자': '#16a34a',
  '부동산': '#9333ea',
  '세금': '#dc2626',
  '예적금': '#0891b2',
  '반도체': '#d97706',
};

export function categoryColor(cat: ArticleCategory): string {
  return CATEGORY_COLOR[cat];
}
