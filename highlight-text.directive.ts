import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appHighlightText]',
})
export class HighlightTextDirective implements OnChanges {
  @Input() highlightText = '';
  @Input() highlightColor = 'yellow';
  originalHTML = '';
  originalContent: { [key: string]: string } = {};

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    const { currentValue, firstChange } = changes['highlightText'];
    if (firstChange) {
      this.highlightTextInTdTags(currentValue);
    } else {
      this.restoreOriginalContent();
      if (currentValue) {
        this.highlightTextInTdTags(currentValue);
      }
    }
  }

  private highlightTextInTdTags(searchText: string): void {
    // Find all the <td> elements within the table
    const tdElements = this.el.nativeElement.querySelectorAll('td');

    // Loop through each <td> element and highlight the matched text
    tdElements.forEach((td: HTMLElement) => {
      // Ensure that the td has text content before processing
      if (td.textContent) {
        // Create the regular expression to handle spaces and empty search text
        const escapedSearchText = searchText.replace(
          /[.*+\-?^${}()|[\]\\]/g,
          '\\$&'
        );
        const regexp = new RegExp(
          `(${escapedSearchText.split(/\s+/).join('|')})`,
          'gi'
        );

        const innerHTML = td.innerHTML;
        td.innerHTML = innerHTML.replace(
          regexp,
          `<span class="highlighted">$1</span>`
        );
      }
    });
  }

  private restoreOriginalContent(): void {
    // Restore the original content of the <td> elements
    const tdElements = this.el.nativeElement.querySelectorAll('td');
    tdElements.forEach((td: HTMLElement) => {
      const innerHTML = td.innerHTML;
      td.innerHTML = innerHTML.replace(
        /<span class="highlighted">(.*?)<\/span>/gi,
        '$1'
      );
    });
  }
}
