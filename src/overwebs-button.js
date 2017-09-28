import { GluonElement, html } from '../gluonjs/gluon.js';
import '../overwebs-fonts/overwebs-fonts.js';

class OverwebsButton extends GluonElement {
  get template() {
    // TODO: Migrate to --overwebs-window-size
    return html`
    <style>
    :host {
      display: inline-block;
      overflow: visible;
      vertical-align: bottom;
    }

    ::slotted(button) {
      border: 0;
      font: inherit;
    }

    :host([block]) ::slotted(button) {
      width: 100%;
    }

    ::slotted(*) {
      height: calc(46 / 2560 * var(--overwebs-window-size, 1920px));
      padding: 0 calc(25 / 2560 * var(--overwebs-window-size, 1920px));
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      text-shadow: 0 0 calc(8 / 2560 * var(--overwebs-window-size, 1920px)) rgba(256, 256, 256, 0.4), 0 0 calc(2 / 2560 * var(--overwebs-window-size, 1920px)) rgba(256, 256, 256, 0.8);
      font-size: calc(26 / 2560 * var(--overwebs-window-size, 1920px));
      font-family: overwebs-futura;
      text-transform: uppercase;
      user-select: none;
      border-radius: calc(2 / 2560 * var(--overwebs-window-size, 1920px));
      opacity: 0.95;
      cursor: pointer;
      box-sizing: border-box;
      border: 0;
    }

    ::slotted(a) {
      text-decoration: none;
    }
    
    :host([block]) {
      display: block;
    }

    :host([block]) ::slotted(*){
      display: flex;
    }

    :host([big]) ::slotted(*) {
      height: calc(74 / 2560 * var(--overwebs-window-size, 1920px));
      padding: 0 calc(66 / 2560 * var(--overwebs-window-size, 1920px));
      border-radius: calc(3 / 2560 * var(--overwebs-window-size, 1920px));
    }


    :host([big][bigtext]) ::slotted(*) {
      font-size: calc(46 / 2560 * var(--overwebs-window-size, 1920px));
    }

    :host([yellow]) ::slotted(*) {
      background: rgba(240, 177, 64, 0.9);
      box-shadow: inset 0 0 calc(3 / 2560 * var(--overwebs-window-size, 1920px)) calc(1 / 2560 * var(--overwebs-window-size, 1920px)) rgba(208, 151, 52, 1), 0 0 0 calc(1 / 2560 * var(--overwebs-window-size, 1920px)) rgba(120, 82, 36, 1),
        0 0 calc(8 / 2560 * var(--overwebs-window-size, 1920px)) calc(1 / 2560 * var(--overwebs-window-size, 1920px)) rgba(120, 82, 36, 1);
      text-shadow: 0 0 calc(8 / 2560 * var(--overwebs-window-size, 1920px)) rgba(256, 256, 256, 0.4), 0 0 calc(1 / 2560 * var(--overwebs-window-size, 1920px)) rgba(256, 256, 256, 0.8);
    }

    :host([yellow]) ::slotted(*:hover), :host([yellow]) ::slotted(*:focus) {
      background: rgba(264, 194, 70, 0.9);
      box-shadow: 0 0 0 calc(3 / 2560 * var(--overwebs-window-size, 1920px)) #ffffff;
    }

    :host([blue]) ::slotted(*) {
      background: rgba(41, 139, 206, 0.9);
      box-shadow: 0 0 0 calc(1 / 2560 * var(--overwebs-window-size, 1920px)) rgba(33, 95, 144, 0.4), 0 0 calc(6 / 2560 * var(--overwebs-window-size, 1920px)) calc(1 / 2560 * var(--overwebs-window-size, 1920px)) rgba(33, 95, 144, 0.4);
      text-shadow: 0 0 calc(5 / 2560 * var(--overwebs-window-size, 1920px)) rgba(256, 256, 256, 0.3);
    }

    :host([blue]) ::slotted(*:hover), :host([blue]) ::slotted(*:focus) {
      background: rgba(45, 153, 226, 0.9);
      box-shadow: 0 0 0 calc(3 / 2560 * var(--overwebs-window-size, 1920px)) #ffffff;
    }

    :host([purple]) ::slotted(*) {
      background: rgba(178, 0, 255, 0.9);
      box-shadow: 0 0 0 calc(1 / 2560 * var(--overwebs-window-size, 1920px)) rgba(33, 95, 144, 0.4), 0 0 calc(6 / 2560 * var(--overwebs-window-size, 1920px)) calc(1 / 2560 * var(--overwebs-window-size, 1920px)) rgba(33, 95, 144, 0.4);
      text-shadow: 0 0 calc(5 / 2560 * var(--overwebs-window-size, 1920px)) rgba(256, 256, 256, 0.3);
    }

    :host([purple]) ::slotted(*:hover), :host([purple]) ::slotted(*:focus) {
      background: rgba(196, 5, 255, 0.9);
      box-shadow: 0 0 0 calc(3 / 2560 * var(--overwebs-window-size, 1920px)) #ffffff;
    }

    :host([disabled]) ::slotted(*),
    :host([disabled]) ::slotted(*:hover) {
      background: transparent;
      box-shadow: inset 0 0 calc(8 / 2560 * var(--overwebs-window-size, 1920px)) rgba(151, 172, 181, 0.4), 0 0 calc(8 / 2560 * var(--overwebs-window-size, 1920px)) rgba(151, 172, 181, 0.4),
        inset 0 0 calc(3 / 2560 * var(--overwebs-window-size, 1920px)) rgba(151, 172, 181, 0.7), 0 0 calc(2 / 2560 * var(--overwebs-window-size, 1920px)) calc(1 / 2560 * var(--overwebs-window-size, 1920px)) rgba(151, 172, 181, 1);
      color: rgba(141, 166, 181, 0.8);
      text-shadow: 0 0 calc(8 / 2560 * var(--overwebs-window-size, 1920px)) rgba(141, 166, 181, 0.4), 0 0 calc(2 / 2560 * var(--overwebs-window-size, 1920px)) rgba(141, 166, 181, 0.8);
      cursor: default;
    }

    ::slotted(*:focus) {
      outline:none;
    }
    </style>
    <slot id="slot"></slot>
    `;
  }

  static get observedAttributes() {
    return ['disabled'];
  }

  constructor() {
    super();
    this._links = [];
    this._buttons = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.$.slot.assignedNodes().forEach(node => {
      if (node instanceof HTMLAnchorElement) {
        this._links.push(node);
      } else if (node instanceof HTMLButtonElement) {
        this._buttons.push(node);
      }
    });
    if (this.getAttribute('disabled') !== null) {
      this._propagateDisabled(true);
    }
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === 'disabled') {
      this._propagateDisabled(newValue !== null);
    }
  }

  _propagateDisabled(disabled) {
    if (disabled) {
      this._links.forEach(link => {
        link.tabIndex = -1;
        link.style.pointerEvents = 'none';
      });
      this._buttons.forEach(button => {
        button.setAttribute('disabled', '');
      });
    } else {
      this._links.forEach(link => {
        link.tabIndex = undefined;
        link.style.pointerEvents = '';
      });
      this._buttons.forEach(button => {
        button.removeAttribute('disabled');
      });
    }
  }
}

customElements.define(OverwebsButton.is, OverwebsButton);
