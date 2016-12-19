import {Directive, ElementRef, Inject} from '@angular/core';

@Directive({
  selector: '[jga-sortable]'
})
export class JgaSortableDirective {

  elmt: ElementRef;

  constructor(@Inject(ElementRef) elmt: ElementRef) {
    this.elmt = elmt;
  }

  ngAfterViewInit () {
    $(this.elmt.nativeElement)
      .sortable({
        start: function (event, ui) {
          console.log('Sortable old Position: ' + ui.item.index());
        },
        stop: function (event, ui) {
          console.log('Sortable new Position: ' + ui.item.index());
        }
      });
  }

}
