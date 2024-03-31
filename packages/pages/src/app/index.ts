import { injectMetaTag, npm } from 'inject-meta-tag';

declare global {
  const InjectMetaTag: {
    npm_package_version: string;
  };
}

injectMetaTag('inject-meta-tag');
injectMetaTag('inject-meta-tag:version', InjectMetaTag.npm_package_version);
npm('inject-meta-tag', { version: InjectMetaTag.npm_package_version });

const text: string[] = [];

document.head.querySelectorAll('meta').forEach(element => {
  let html = '<meta ';

  for (const name of element.getAttributeNames()) {
    html += `${name}="${element.getAttribute(name)}" `;
  }

  html += '/>';

  text.push(html);
});

const preElement = document.createElement('pre');

preElement.textContent = text.join('\n');

document.body.appendChild(preElement);
