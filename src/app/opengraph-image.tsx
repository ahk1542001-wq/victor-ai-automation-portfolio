import { ImageResponse } from 'next/og';

export const alt = 'Victor — AI Automation & Agent Workflow Specialist';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0a0a09',
          padding: '76px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: 14,
              height: 14,
              backgroundColor: '#58f28f',
              borderRadius: 999,
              marginRight: 18,
            }}
          />
          <div
            style={{
              color: '#e5e0d1',
              fontSize: 25,
              letterSpacing: 4,
            }}
          >
            AI AUTOMATION &amp; AGENT WORKFLOWS
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              color: '#58f28f',
              fontSize: 170,
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: -5,
            }}
          >
            VICTOR
          </div>
          <div style={{ color: '#FBF9F5', fontSize: 42, marginTop: 26 }}>
            I build agentic systems that run in production.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            color: '#d6cfbc',
            fontSize: 25,
            borderTop: '1px solid #2a2924',
            paddingTop: 30,
          }}
        >
          <div>Bangkok, Thailand</div>
          <div>n8n · Google Cloud · MCP · Python</div>
        </div>
      </div>
    ),
    size
  );
}
