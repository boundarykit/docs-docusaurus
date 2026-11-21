import React from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'

const cards = [
  {
    "title": "Quickstart",
    "href": "/quickstart",
    "image": "/img/images/cards/card-quickstart.svg"
  },
  {
    "title": "Policies",
    "href": "/documentation/core-concepts",
    "image": "/img/images/cards/card-policies.svg"
  },
  {
    "title": "API",
    "href": "/api-reference",
    "image": "/img/images/cards/card-api.svg"
  },
  {
    "title": "MCP",
    "href": "/mcp",
    "image": "/img/images/cards/card-mcp.svg"
  },
  {
    "title": "Bac",
    "href": "/bac",
    "image": "/img/images/cards/card-bac.svg"
  },
  {
    "title": "Security",
    "href": "/administration/security-compliance",
    "image": "/img/images/cards/card-security.svg"
  }
]

export default function Home() {
  return <Layout title="Developer portal"><main className="portal"><header className="mast"><small>BOUNDARYKIT  /  DEVELOPER PORTAL</small><h1>Build within boundaries.</h1><p>Define which tools an agent can call. Trace each decision to its policy revision.</p><div><Link to="/quickstart">Read the quickstart →</Link><Link to="/architecture">Explore architecture</Link></div><code>npm install @boundarykit/sdk</code></header><section className="tiles">{cards.map(card => <Link key={card.href} to={card.href}><img alt="" src={card.image}/><strong>{card.title} ↗</strong></Link>)}</section></main></Layout>
}
