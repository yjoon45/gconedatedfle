class Modal {
  constructor() {
    this.iterateElementAndAttachClickEvent(
      '[data-modal-trigger]',
      this.openModal
    );

    this.iterateElementAndAttachClickEvent(
      '[data-modal-close]',
      this.closeModal
    );
  }

  iterateElementAndAttachClickEvent = (
    selector: string,
    func: CallableFunction
  ) => {
    document
      .querySelectorAll<HTMLButtonElement>(selector)
      .forEach((elm: HTMLButtonElement | null) => {
        elm && elm.addEventListener('click', (event) => func(event), false);
      });
  };

  openModal = (event: MouseEvent) => {
    const modalElm = this.handleModalVisibility(event);

    modalElm && modalElm.showModal();

    this.backdropCloseHandler(modalElm);
  };

  backdropCloseHandler = (dialog: HTMLDialogElement | null | undefined) => {
    if (!dialog) return;

    dialog.addEventListener('click', handleClose, false);

    function handleClose(event: MouseEvent) {
      const target = event.target as HTMLDialogElement | null;

      if (!target || !dialog) return;

      const rect = target.getBoundingClientRect();

      if (
        rect.left > event.clientX ||
        rect.right < event.clientX ||
        rect.top > event.clientY ||
        rect.bottom < event.clientY
      ) {
        dialog.close();
      }
    }
  };

  closeModal = (event: MouseEvent) => {
    const modalElm = this.handleModalVisibility(event);

    modalElm && modalElm.close();
  };

  handleModalVisibility = (event: MouseEvent) => {
    const target = event.currentTarget as HTMLButtonElement;
    const modalId = target.dataset.modalTarget;

    if (!modalId) return;

    return document.querySelector<HTMLDialogElement>(`#${modalId}`);
  };
}

export default Modal;
