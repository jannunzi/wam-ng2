import {Directive, ElementRef, Inject} from '@angular/core';

@Directive({
  selector: '[jga-draggable]'
})
export class JgaDraggableDirective {

  elmt: ElementRef;

  constructor(@Inject(ElementRef) elmt: ElementRef) {
    this.elmt = elmt;
  }

  ngAfterViewInit () {
    $(this.elmt.nativeElement)
      .draggable({ helper: 'clone' });
  }

}
