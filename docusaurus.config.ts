import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import redirects from './redirects.json'
export default {
  title: 'BoundaryKit', url: 'https://docusaurus.boundarykit.com', baseUrl: '/',
  favicon: 'img/favicon.svg', onBrokenLinks: 'throw', markdown: { hooks: { onBrokenMarkdownLinks: 'throw' } }, onBrokenAnchors: 'throw',
  presets: [['classic', { blog: false, docs: {
    remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex], routeBasePath: '/', sidebarPath: './sidebars.ts', lastVersion: 'current',
    versions: { current: { label: 'v2', path: '' }, '1.0': { label: 'v1', path: '1.0' } }
  }, theme: { customCss: './src/css/custom.css' } }]],
  plugins: [['@docusaurus/plugin-client-redirects', { redirects }]],
  stylesheets: ['https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=JetBrains+Mono&family=Space+Grotesk:wght@500;700&display=swap'],
  themeConfig: {
    announcementBar: { id: 'release', content: 'BOUNDARYKIT  /  POLICY ENGINE V2', backgroundColor: '#1D4ED8', textColor: '#fff', isCloseable: false },
    navbar: { logo:{alt:'BoundaryKit',src:'img/logo/logo-dark.svg'}, items: [{to:'/overview',label:'Docs'},{to:'/api-reference',label:'API reference'},{type:'docsVersionDropdown',position:'right'}] },
    footer: {style:'dark',links: [{"title": "Develop", "items": [{"label": "Quickstart", "to": "/quickstart"}]}, {"title": "Reference", "items": [{"label": "API", "to": "/api-reference"}]}, {"title": "Operate", "items": [{"label": "Diagnostics", "to": "/documentation/troubleshooting"}]}, {"title": "Govern", "items": [{"label": "Controls", "to": "/administration/security-compliance"}]}] }
  }
}
