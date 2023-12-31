import { __decorate, __metadata } from "tslib";
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let Toggle = class Toggle extends LitElement {
    constructor() {
        super(...arguments);
        this.leftValue = '';
        this.rightValue = '';
        // Note: It's means focus on left value.
        this.checked = true;
    }
    render() {
        return html `<label id="toggle-container">
      <input type="checkbox" name="toggle" id="toggle" @click="${this.clickToggle}" .checked="${this.checked}" />
      <label class="toggle-inner" for="toggle" data-left="${this.leftValue}" data-right="${this.rightValue}"> </label>
    </label>`;
    }
    isChecked() {
        const checkbox = this.shadowRoot?.getElementById('toggle');
        return checkbox?.checked;
    }
    clickToggle(e) {
        this.checked = e.target.value;
    }
};
Toggle.styles = css `
    #toggle-container {
      cursor: pointer;
      position: relative;
      display: block;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: var(--grey-500);
      background-color: var(--grey-200);
      padding: 6px;
      border-radius: 24px;
    }

    #toggle {
      position: absolute;
      cursor: pointer;
      opacity: 0;
    }

    .toggle-inner {
      position: relative;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .toggle-inner:before,
    .toggle-inner:after {
      cursor: pointer;
      display: block;
      padding: 8px 12px;
      border-radius: 24px;
      box-sizing: border-box;
      transition: 200ms ease-out;
      white-space: nowrap;
    }

    .toggle-inner:before {
      content: attr(data-left);
      color: var(--grey-500);
      background-color: transparent;
      box-shadow: unset;
    }

    .toggle-inner:after {
      content: attr(data-right);
      color: var(--grey-700);
      background-color: var(--grey-100);
      box-shadow: 0px 0px 2px rgba(42, 57, 89, 0.04), 0px 4px 16px rgba(63, 82, 122, 0.08);
    }

    #toggle:checked + .toggle-inner:before {
      color: var(--grey-700);
      background-color: var(--grey-100);
      box-shadow: 0px 0px 2px rgba(42, 57, 89, 0.04), 0px 4px 16px rgba(63, 82, 122, 0.08);
    }

    #toggle:checked + .toggle-inner:after {
      color: var(--grey-500);
      background-color: transparent;
      box-shadow: unset;
    }
  `;
__decorate([
    property(),
    __metadata("design:type", Object)
], Toggle.prototype, "leftValue", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], Toggle.prototype, "rightValue", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Toggle.prototype, "checked", void 0);
Toggle = __decorate([
    customElement('c-toggle')
], Toggle);
export { Toggle };
//# sourceMappingURL=toggle.js.map