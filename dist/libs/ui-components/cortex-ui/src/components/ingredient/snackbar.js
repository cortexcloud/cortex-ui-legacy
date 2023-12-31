import { __decorate, __metadata } from "tslib";
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { timeout } from '../../helper/helper';
let Snackbar = class Snackbar extends LitElement {
    constructor() {
        super(...arguments);
        this.duration = '5';
        this.bgColor = '#2AC78E';
        this.position = 'top';
        this.padding = '22px 62px';
        this.zIndex = 9999;
    }
    render() {
        return html `
      <style>
        :host {
          --top: ${this.position === 'top' ? '64px' : 'auto'};
          --bottom: ${this.position === 'bottom' ? '32px' : 'auto'};
          --translate-out-from: ${this.position === 'top' ? '0%' : '-20%'};
          --translate-out-to: ${this.position === 'top' ? '-20%' : '0%'};
          --translate-in-from: ${this.position === 'top' ? '-20%' : '0%'};
          --translate-in-to: ${this.position === 'top' ? '0%' : '-20%'};

          --padding: ${this.padding};
          --z-index: ${this.zIndex};
        }
      </style>
      <dialog ?open="${this.open}" style="background-color: ${this.bgColor}">
        <div class="snackbar-wrapper">
          <slot></slot>
          <span class="snackbar-message">
            <slot name="message"></slot>
          </span>
        </div>
      </dialog>
    `;
    }
    async updated() {
        if (this.open) {
            await timeout(+(this.duration + '000'));
            this.closeDialog();
        }
    }
    async closeDialog() {
        const dialog = this.shadowRoot?.querySelector('dialog');
        dialog.classList.add('dialog-close');
        await timeout(350);
        dialog.classList.remove('dialog-close');
        this.open = false;
        this.dispatchEvent(new CustomEvent('snackbarClose', {
            detail: {
                open: false,
            },
            bubbles: true,
        }));
    }
};
Snackbar.styles = css `
    :host {
      z-index: var(--z-index);
    }
    .snackbar-wrapper {
      display: flex;
      align-items: center;
      column-gap: 14px;
    }

    .snackbar-message {
      font-size: 20px;
      font-weight: 600;
    }

    dialog {
      position: fixed;
      top: var(--top);
      bottom: var(--bottom);
      left: 0;
      z-index: 999;
      border: none;
      overflow: hidden;
      border-radius: 8px;
      box-shadow: var(--shadow);
      animation: slideY 0.35s ease forwards;
      padding: var(--padding);
      background: var(--bg-content);
      color: white;
    }

    .dialog-close {
      animation: slideYOut 0.35s ease forwards;
    }

    @keyframes slideYOut {
      from {
        opacity: 1;
        transform: translate(0, var(--translate-out-from));
      }
      to {
        opacity: 0;
        transform: translate(0, var(--translate-out-to));
      }
    }

    @keyframes slideY {
      from {
        opacity: 0;
        transform: translate(0, var(--translate-in-from));
      }
      to {
        opacity: 1;
        transform: translate(0, var(--translate-in-to));
      }
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #8ba3b8;
    }

    /* width */
    ::-webkit-scrollbar {
      width: 10px;
      height: 8px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #bbc5ce;
      border-radius: 10px;
    }
  `;
__decorate([
    property({
        type: Object,
    }),
    __metadata("design:type", Boolean)
], Snackbar.prototype, "open", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], Snackbar.prototype, "duration", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], Snackbar.prototype, "bgColor", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], Snackbar.prototype, "position", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], Snackbar.prototype, "padding", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], Snackbar.prototype, "zIndex", void 0);
Snackbar = __decorate([
    customElement('c-snackbar')
], Snackbar);
export { Snackbar };
//# sourceMappingURL=snackbar.js.map