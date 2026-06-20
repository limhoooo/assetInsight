import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '서비스 소개 | 물타기 계산기',
  description: '물타기 계산기는 주식 평균단가를 낮추는 물타기 전략을 시뮬레이션하고, 목표 평균단가 달성에 필요한 추가 매수 수량을 역산하는 무료 계산 도구입니다.',
};

export default function AboutPage() {
  return (
    <main className="container" style={{ paddingTop: '24px', paddingBottom: '40px' }}>
      <Link href="/" className="back-link">← 계산기로 돌아가기</Link>

      <div className="card" style={{ marginTop: '16px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>물타기 계산기란?</h1>
        <p style={{ fontSize: '14px', lineHeight: '1.8', color: 'var(--text-muted)' }}>
          주식 투자 중 보유 종목의 주가가 하락했을 때, 추가 매수를 통해 평균단가를 낮추는 전략을
          <strong style={{ color: 'var(--text)' }}> '물타기'</strong>라고 합니다.
          물타기 계산기는 이 과정을 빠르고 정확하게 계산해주는 무료 도구입니다.
          원화(KRW) 국내주식과 달러(USD) 미국주식을 모두 지원합니다.
        </p>
      </div>

      <div className="card">
        <div className="card-title">주요 기능</div>
        <ul className="feature-list">
          <li>
            <span className="feature-icon">🔁</span>
            <div>
              <strong>물타기 시뮬레이션</strong>
              <p>최초 매수 이후 추가 매수를 회차별로 입력하면 각 시점의 평균단가 변화를 표로 확인할 수 있습니다. 금액 또는 수량으로 입력 방식을 선택할 수 있습니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">🎯</span>
            <div>
              <strong>목표단가 역산</strong>
              <p>원하는 평균단가(목표)로 낮추려면 얼마에 몇 주를 추가로 사야 하는지 역산해드립니다. 추가 매수 예정가와 목표 평균단가를 입력하면 필요 수량과 금액을 자동 계산합니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">💰</span>
            <div>
              <strong>손익 현황</strong>
              <p>현재 주가를 입력하면 보유 수량 기준 평가금액, 평가손익, 수익률을 즉시 계산합니다. 물타기 시뮬레이션 결과가 있으면 그 기준으로 계산됩니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">💱</span>
            <div>
              <strong>달러(USD) 모드 & 실시간 환율</strong>
              <p>미국주식 전용 모드에서는 실시간 환율을 자동 조회하여 투자금과 손익을 달러(USD)와 원화(KRW)로 동시에 보여줍니다. 환율 직접 입력도 가능합니다.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="card">
        <div className="card-title">이런 분께 유용합니다</div>
        <ul className="use-case-list">
          <li>보유 주식이 하락해 물타기를 고민 중인 투자자</li>
          <li>특정 평균단가를 목표로 추가 매수 계획을 세우고 싶은 분</li>
          <li>미국주식 투자 중 달러와 원화 기준 손익을 한눈에 확인하고 싶은 분</li>
          <li>여러 차례 나눠 매수한 종목의 평균단가를 빠르게 계산하고 싶은 분</li>
        </ul>
      </div>

      <div className="card">
        <div className="card-title">투자 유의사항</div>
        <div className="disclaimer-box">
          <p>본 서비스는 계산 편의를 위한 참고 도구이며, <strong>투자 조언이나 종목 추천을 제공하지 않습니다.</strong></p>
          <p>모든 투자 결정과 그에 따른 결과는 전적으로 투자자 본인의 판단과 책임에 있습니다.</p>
          <p>주식 투자는 원금 손실의 위험이 있으며, 과거의 수익률이 미래의 수익을 보장하지 않습니다.</p>
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
