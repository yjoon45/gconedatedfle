import './style.css';

import IframeVideo from './components/iframevideo';
import Modal from './components/modal';

new IframeVideo().init(document.querySelector<HTMLElement>('.gcod-player')!);
new Modal();
