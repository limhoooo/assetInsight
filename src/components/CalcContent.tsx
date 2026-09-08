import Link from 'next/link';
import { getCalcContent } from '@/lib/calcContent';

interface Props {
  /** CALC_CONTENT의 키 (예: 'avgdown', 'stock-tax') */
  calcKey: string;
}

/**
 * 계산기 페이지 하단에 붙는 설명 본문.
 * 서버 컴포넌트로 렌더링해 정적 HTML에 텍스트가 그대로 포함되도록 한다.
 */
export default function CalcContent({ calcKey }: Props) {
  const content = getCalcContent(calcKey);
  if (!content) return null;

  return (
    <section className="calc-content">
      <div className="card">
        <h2 className="calc-content-title">{content.title}</h2>
        {content.intro.map((p, i) => (
          <p className="privacy-text" key={i}>
            {p}
          </p>
        ))}
      </div>

      {content.sections.map((section) => (
        <div className="card" key={section.heading}>
          <h3 className="privacy-section-title">{section.heading}</h3>

          {section.formula && <div className="guide-formula">{section.formula}</div>}

          {section.paragraphs?.map((p, i) => (
            <p className="privacy-text" key={i} style={{ marginTop: section.formula ? '14px' : 0 }}>
              {p}
            </p>
          ))}

          {section.formulaAfter && <div className="guide-formula">{section.formulaAfter}</div>}

          {section.bullets && (
            <ul className="privacy-list" style={{ marginTop: '14px' }}>
              {section.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}

          {section.table && (
            <>
              <div className="table-wrap" style={{ marginTop: '14px' }}>
                <table>
                  <thead>
                    <tr>
                      {section.table.headers.map((h, i) => (
                        <th key={h} style={i === 0 ? { textAlign: 'left' } : undefined}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, ri) => (
                      <tr key={ri}>
                        {row.map((cell, ci) => (
                          <td key={ci}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {section.table.caption && (
                <p className="calc-content-caption">{section.table.caption}</p>
              )}
            </>
          )}

          {section.note && (
            <div className="info-box" style={{ marginTop: '14px', marginBottom: 0 }}>
              {section.note}
            </div>
          )}

          {section.warn && (
            <div className="guide-warning-box" style={{ marginTop: '14px' }}>
              {section.warn}
            </div>
          )}
        </div>
      ))}

      <div className="card">
        <h3 className="privacy-section-title">자주 묻는 질문</h3>
        <div className="faq-list">
          {content.faqs.map((faq) => (
            <details key={faq.q} className="faq-item">
              <summary className="faq-question">{faq.q}</summary>
              <p className="faq-answer">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="card">
        <h3 className="privacy-section-title">함께 보면 좋은 자료</h3>
        <ul className="privacy-list">
          {content.related.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className="privacy-link">
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="disclaimer-box" style={{ marginTop: '16px' }}>
          {content.disclaimer.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * 계산기 페이지용 FAQPage 구조화 데이터.
 * 페이지 본문의 FAQ와 동일한 내용만 담는다.
 */
export function calcFaqJsonLd(calcKey: string) {
  const content = getCalcContent(calcKey);
  if (!content) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}
