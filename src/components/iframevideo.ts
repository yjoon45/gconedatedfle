class IframeVideo {
  selector = {
    trigger: '[data-iframe-trigger]',
    container: '[data-iframe-container]',
  };

  context: HTMLElement | null = null;

  loadAndPlayIframeVideo = (event: MouseEvent) => {
    const targetElement = event.currentTarget as HTMLButtonElement;
    const iframeContainer = this.context?.querySelector<HTMLIFrameElement>(
      this.selector.container
    )!;

    const src = iframeContainer.dataset.src;

    if (src) {
      iframeContainer.setAttribute('src', src);
      iframeContainer.removeAttribute('hidden');
    }

    targetElement.remove();
  };

  init = (element: HTMLElement) => {
    this.context = element;

    const trigger = element.querySelector<HTMLButtonElement>(
      this.selector.trigger
    )!;

    trigger.addEventListener('click', this.loadAndPlayIframeVideo, false);
  };
}

export default IframeVideo;
