import { ImageResponse } from 'next/og';

export const alt = 'Victor — AI Automation & Agent Workflow Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Loads Instrument Serif at build time so the card matches the site's
 * type identity. Fails soft: if the font cannot be fetched the card
 * still renders in the default sans rather than breaking the build.
 */
async function loadDisplaySerif(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      'https://fonts.googleapis.com/css2?family=Instrument+Serif&display=swap',
      { headers: { 'User-Agent': 'Mozilla/5.0' } }
    ).then((r) => r.text());

    const url = css.match(/src:\s*url\(([^)]+)\)/)?.[1];
    if (!url) return null;

    const res = await fetch(url);
    if (!res.ok) return null;

    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const serif = await loadDisplaySerif();

  const fonts = serif
    ? [{ name: 'Instrument Serif', data: serif, style: 'normal' as const, weight: 400 as const }]
    : [];
  const display = serif ? 'Instrument Serif' : 'sans-serif';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#f4f1ea',
          padding: '68px 76px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top rule + eyebrow */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              color: '#686459',
              fontSize: 22,
              letterSpacing: 3,
              textTransform: 'uppercase',
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                backgroundColor: '#2e5e4e',
              }}
            />
            AI Automation &amp; Agent Workflows
          </div>
          <div style={{ display: 'flex', height: 3, backgroundColor: '#d5d2cb', marginTop: 22 }} />
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontFamily: display,
              fontSize: 132,
              lineHeight: 1,
              letterSpacing: -5,
              color: '#16150f',
              display: 'flex',
            }}
          >
            I build agentic systems
          </div>
          <div
            style={{
              fontFamily: display,
              fontSize: 132,
              lineHeight: 1.06,
              letterSpacing: -5,
              color: '#2e5e4e',
              display: 'flex',
            }}
          >
            that run in production.
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '3px solid #16150f',
            paddingTop: 26,
            fontSize: 25,
            color: '#3b382f',
          }}
        >
          <div style={{ display: 'flex', fontFamily: display, fontSize: 34, color: '#16150f' }}>
            Victor
            <span style={{ color: '#ab5d37' }}>.</span>
          </div>
          <div style={{ display: 'flex', gap: 22, fontSize: 23, color: '#686459' }}>
            <span>Bangkok, Thailand</span>
            <span>·</span>
            <span>n8n · Google Cloud · MCP · Python</span>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
