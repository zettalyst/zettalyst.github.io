import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('post');
  const site = context.site;

  // URL 목록 생성 (trailing slash 없음)
  const urls = [
    site.href.replace(/\/$/, ''), // 홈페이지
    ...posts.map(post => `${site.href}post/${post.slug}`), // 포스트들
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}