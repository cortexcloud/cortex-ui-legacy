import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CLayout } from '../../interfaces/components.interface';
import '../ingredient/image';

@customElement('c-error-404')
export class Error404 extends LitElement {
  static styles = css`
    .error-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      row-gap: 16px;
      margin-bottom: 60px;
    }

    .text-1 {
      color: var(--gray-700);
      font-weight: var(--font-semibold);
      font-size: var(--fs-18);
    }

    .text-2 {
      color: var(--gray-600);
    }

    .text-refresh {
      color: var(--color-5-500);
      cursor: pointer;
      user-select: none;
      transition: color 0.125s;
    }

    .text-refresh:active {
      color: var(--color-5-600);
    }
  `;

  render() {
    return html`
      <div class="error-wrapper">
        <c-image .draggable="${false}" src="search-empty-state"></c-image>
        <div class="text-1">ไม่พบข้อมูลที่คุณค้นหา</div>
        <div class="text-2">ลองตรวจสอบข้อมูลของคุณอีกครั้ง</div>
      </div>
    `;
  }

  updated() {
    const cLayout = document.body.querySelector('c-layout') as CLayout;

    if (cLayout) {
      setTimeout(() => {
        cLayout.titleName = 'Page not found';
        cLayout.requestUpdate();
      }, 0);
    }
  }
}
