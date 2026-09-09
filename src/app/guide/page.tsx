import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

// 예전 /guide 주소로 들어온 방문자를 위한 리다이렉트용 페이지.
// 정적 내보내기에서는 meta refresh 문서가 생성되므로 색인 대상에서 제외한다.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function GuideRedirect() {
  redirect('/avgdown/guide');
}
