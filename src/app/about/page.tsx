import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetinsight.pages.dev';

export const metadata: Metadata = {
  title: '서비스 소개 | 자산인사이트',
  description: '자산인사이트는 투자자를 위한 무료 계산기 모음 서비스입니다. 물타기 계산기, 해외주식 양도소득세 계산기, 부동산 양도소득세 계산기를 제공합니다.',
  alternates: { canonical: `${BASE_URL}/about` },
};

// 새 계산기 추가 시 이 배열에만 추가하면 됩니다
const CALCULATORS = [
  {
    emoji: '📉',
    name: '물타기 계산기',
    href: '/avgdown',
    guideHref: '/avgdown/guide',
    desc: '주식 평균단가를 낮추는 물타기 전략을 시뮬레이션하고, 목표 평균단가 달성에 필요한 추가 매수 수량을 역산하는 무료 계산 도구입니다.',
    features: [
      { icon: '🔁', title: '물타기 시뮬레이션', desc: '회차별 추가 매수 시 평균단가 변화를 표로 확인. 금액 또는 수량으로 입력 가능' },
      { icon: '🎯', title: '목표단가 역산', desc: '원하는 평균단가로 낮추려면 얼마에 몇 주가 필요한지 자동 계산' },
      { icon: '💰', title: '손익 현황', desc: '현재 주가 입력 시 평가손익·수익률·본전 상승률 즉시 계산' },
      { icon: '💱', title: '달러(USD) 모드', desc: '미국주식 지원. 실시간 환율 자동 조회로 USD·KRW 동시 확인' },
    ],
  },
  {
    emoji: '📈',
    name: '해외주식 양도소득세 계산기',
    href: '/stock-tax',
    guideHref: '/stock-tax/guide',
    desc: '미국·유럽 등 해외주식 매도 시 발생하는 양도소득세를 자동으로 계산합니다. 연간 기본공제 250만원 적용 및 22% 세율을 즉시 확인할 수 있습니다.',
    features: [
      { icon: '📊', title: '양도차익 자동 계산', desc: '매도금액 - 취득원가 - 필요경비를 입력하면 양도차익 즉시 계산' },
      { icon: '💸', title: '기본공제 자동 적용', desc: '연간 250만원 기본공제 자동 적용 후 과세표준 산출' },
      { icon: '🧾', title: '세액 산출', desc: '양도소득세 20% + 지방소득세 2% = 22% 자동 계산' },
    ],
  },
  {
    emoji: '🏠',
    name: '부동산 양도소득세 계산기',
    href: '/realestate-tax',
    guideHref: '/realestate-tax/guide',
    desc: '부동산 매도 시 발생하는 양도소득세를 자동으로 계산합니다. 장기보유특별공제, 1세대1주택 비과세, 누진세율을 자동 적용합니다.',
    features: [
      { icon: '🏡', title: '1세대1주택 비과세', desc: '보유·거주기간, 조정지역 여부에 따른 비과세 요건 자동 판단 (12억 기준)' },
      { icon: '📅', title: '장기보유특별공제', desc: '보유기간 3년 이상 시 연 2% 공제, 최대 30% 자동 적용' },
      { icon: '📐', title: '누진세율 자동 적용', desc: '단기세율(1·2년 미만), 미등기, 일반 누진세율 자동 산출' },
    ],
  },
  {
    emoji: '🏦',
    name: '대출 이자 계산기',
    href: '/loan',
    guideHref: '/loan/guide',
    desc: '대출금액·금리·기간을 입력하면 상환방식별 월 납입금과 총 이자를 자동으로 계산합니다. 연도별 원금·이자·잔여 원금 상환 스케줄도 자동 생성됩니다.',
    features: [
      { icon: '💳', title: '3가지 상환방식 지원', desc: '원리금균등·원금균등·만기일시 선택 후 즉시 계산' },
      { icon: '📅', title: '연도별 상환 스케줄', desc: '매년 납입 원금·이자·잔여 원금 자동 생성' },
      { icon: '📊', title: '상환방식 비교', desc: '총 이자 부담 차이를 한눈에 파악' },
    ],
  },
  {
    emoji: '📊',
    name: '복리 계산기',
    href: '/compound',
    guideHref: '/compound/guide',
    desc: '투자 원금이 복리로 얼마가 되는지, 목표금액 달성에 필요한 원금은 얼마인지 계산합니다. 단리 대비 복리 효과와 연도별 수익 현황도 확인할 수 있습니다.',
    features: [
      { icon: '📈', title: '복리 미래가치 계산', desc: '연복리·월복리·분기복리 선택, 월 추가 납입 반영, 연도별 수익 테이블 제공' },
      { icon: '🎯', title: '현재가치 역산', desc: '목표금액과 기대 수익률로 지금 필요한 투자 원금 자동 계산' },
      { icon: '⚡', title: '단리 대비 복리 효과', desc: '같은 원금·금리에서 단리 대비 복리가 얼마나 더 많이 벌어주는지 즉시 비교' },
    ],
  },
  {
    emoji: '🏦',
    name: '정기예금/적금 계산기',
    href: '/savings',
    guideHref: '/savings/guide',
    desc: '정기예금과 정기적금의 세전·세후 이자를 자동으로 계산합니다. 이자소득세, 세금우대, 비과세 옵션을 지원하며 단리·월복리를 선택할 수 있습니다.',
    features: [
      { icon: '💰', title: '정기예금 계산', desc: '원금·금리·기간 입력 시 단리·복리 이자 즉시 계산' },
      { icon: '📅', title: '정기적금 계산', desc: '월 납입금 기준 만기 수령액 자동 계산 (단리)' },
      { icon: '🧾', title: '이자소득세 자동 처리', desc: '일반과세(15.4%)·세금우대(9.5%)·비과세 선택 후 세후 이자 즉시 확인' },
    ],
  },
  {
    emoji: '🏡',
    name: '취득세 계산기',
    href: '/acquisition-tax',
    guideHref: '/acquisition-tax/guide',
    desc: '부동산 취득 시 납부해야 하는 취득세를 자동으로 계산합니다. 주택 수, 조정대상지역 여부, 전용면적에 따른 세율을 자동 적용합니다.',
    features: [
      { icon: '🏘️', title: '주택 수별 세율 적용', desc: '1~4주택+ 구분, 조정·비조정지역 여부에 따른 세율 자동 적용 (최대 12%)' },
      { icon: '📐', title: '전용면적 반영', desc: '85㎡ 이하(국민주택) 농어촌특별세 비과세 자동 처리' },
      { icon: '🧾', title: '부가세 자동 계산', desc: '지방교육세(취득세×10%), 농어촌특별세 포함 총 납부세액 산출' },
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="container" style={{ paddingTop: '24px', paddingBottom: '40px' }}>
      <Link href="/" className="back-link">← 자산인사이트 홈</Link>

      <div className="card" style={{ marginTop: '16px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>자산인사이트란?</h1>
        <p style={{ fontSize: '14px', lineHeight: '1.8', color: 'var(--text-muted)' }}>
          <strong style={{ color: 'var(--text)' }}>자산인사이트</strong>는 투자자를 위한 무료 계산기 모음 서비스입니다.
          주식·부동산·세금 등 투자에 필요한 계산을 빠르고 정확하게 도와드립니다.
          모든 계산은 브라우저 내에서만 처리되며 서버에 저장되지 않습니다.
        </p>
      </div>

      {CALCULATORS.map((calc) => (
        <div className="card" key={calc.href}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <span style={{ fontSize: '24px' }}>{calc.emoji}</span>
            <div className="card-title" style={{ margin: 0 }}>
              <Link href={calc.href} className="privacy-link" style={{ fontWeight: 800 }}>{calc.name}</Link>
            </div>
          </div>
          <p className="privacy-text">{calc.desc}</p>
          <ul className="feature-list" style={{ gap: '10px' }}>
            {calc.features.map((f) => (
              <li key={f.title}>
                <span className="feature-icon">{f.icon}</span>
                <div>
                  <strong>{f.title}</strong>
                  <p>{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '12px' }}>
            <Link href={calc.guideHref} className="privacy-link" style={{ fontSize: '13px', fontWeight: 600 }}>
              {calc.name} 가이드 보기 →
            </Link>
          </div>
        </div>
      ))}

      <div className="card">
        <div className="card-title">투자·세금 유의사항</div>
        <div className="disclaimer-box">
          <p>본 서비스는 계산 편의를 위한 참고 도구이며, <strong>투자 조언이나 세무 조언을 제공하지 않습니다.</strong></p>
          <p>모든 투자·세금 결정과 그에 따른 결과는 전적으로 본인의 판단과 책임에 있습니다.</p>
          <p>세법은 매년 개정될 수 있으므로 실제 신고 전 최신 내용을 확인하거나 세무사에게 문의하세요.</p>
        </div>
      </div>

      <div className="card">
        <div className="card-title">문의</div>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7' }}>
          서비스 이용 중 불편한 점이나 개선 사항이 있으시면 아래 이메일로 문의해 주세요.<br />
          <strong style={{ color: 'var(--text)' }}>이메일: dlagh123@gmail.com</strong>
        </p>
      </div>
    </main>
  );
}
