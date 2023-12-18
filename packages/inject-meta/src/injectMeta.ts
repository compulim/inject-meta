type InjectMetaNPMInit = {
  version: string;
};

export default function injectMeta(name: string, content?: string): void {
  try {
    if (typeof document === 'undefined') {
      return;
    }

    const metaElement = document.createElement('meta');

    metaElement.setAttribute('name', name);
    content && metaElement.setAttribute('content', content);

    document.head.appendChild(metaElement);
  } catch (error) {
    console.error(`inject-meta: Failed to inject <meta name="${name}"> tag.`, error);
  }
}

export function npm(name: string, { version }: InjectMetaNPMInit): void {
  injectMeta(`npm:${name}`, `version=${version}`);
}
