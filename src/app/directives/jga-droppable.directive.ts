import {Directive, ElementRef, Inject} from '@angular/core';

@Directive({
  selector: '[jga-droppable]'
})
export class JgaDroppableDirective {

  elmt: ElementRef;

  constructor(elmt: ElementRef) {
    this.elmt = elmt;
  }

  ngOnInit() {

  }

  ngAfterViewInit () {
    var pageHtml,
        actionHtml = "<h3 class='node'>Action</h3>",
        conditionalHtml = "<h3 class='node'>Conditional</h3>";

    $(this.elmt.nativeElement)
      .droppable({
        drop: function (qq, ww) {
          console.log('Dropped!');
        }
      });
  }

}
