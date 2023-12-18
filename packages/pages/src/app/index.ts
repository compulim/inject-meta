import { injectMeta, npm } from 'inject-meta';

declare global {
  const process: {
    env: {
      npm_package_version: string;
    };
  };
}

injectMeta('inject-meta');
injectMeta('inject-meta:version', process.env.npm_package_version);
npm('inject-meta', { version: process.env.npm_package_version });

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
