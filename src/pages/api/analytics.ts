import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return new Response(null, { status: 204 });
    }

    const body = await request.json().catch(() => ({}));

    // Basic bot/health noise filter
    const ua = (body?.userAgent as string) || '';
    const isBot = /bot|crawler|spider|crawling/i.test(ua);
    if (isBot) {
      return new Response(null, { status: 204 });
    }

    // Optionally, extend: store, forward, or aggregate
    // For now: acknowledge without storing to keep endpoint silent and fast
    return new Response(null, { status: 204 });
  } catch {
    return new Response(null, { status: 204 });
  }
};

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};

