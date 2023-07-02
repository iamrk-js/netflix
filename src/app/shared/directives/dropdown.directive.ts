import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @Input('appDropdown') className!: string; // The class name to toggle

  constructor(private elementRef: ElementRef) { }

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    event.stopPropagation();
    this.elementRef.nativeElement.classList.toggle(this.className);
    this.elementRef.nativeElement.nextElementSibling.classList.toggle(this.className);
  }
}
