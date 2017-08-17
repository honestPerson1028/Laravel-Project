/*
jQWidgets v4.5.1 (2017-April)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges } from '@angular/core';
declare let $: any;

@Component({
    selector: 'jqxButtonGroup',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxButtonGroupComponent implements OnChanges
{
   @Input('disabled') attrDisabled: any;
   @Input('enableHover') attrEnableHover: any;
   @Input('mode') attrMode: any;
   @Input('rtl') attrRtl: any;
   @Input('template') attrTemplate: any;
   @Input('theme') attrTheme: any;
   @Input('width') attrWidth: any;
   @Input('height') attrHeight: any;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['disabled','enableHover','mode','rtl','template','theme'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxButtonGroup;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
      setTimeout(() => {
         if (this.autoCreate) {
            this.createComponent(); 
         }
      }); 
   }

   ngOnChanges(changes: SimpleChanges) {
      if (this.host) {
         for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            let areEqual: boolean;

            if (this[attrName]) {
               if (typeof this[attrName] === 'object') {
                  if (this[attrName] instanceof Array) {
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxButtonGroup(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxButtonGroup(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxButtonGroup(this.properties[i])) {
                  this.host.jqxButtonGroup(this.properties[i], this[attrName]); 
               }
            }
         }
      }
   }

   arraysEqual(attrValue: any, hostValue: any): boolean {
      if (attrValue.length != hostValue.length) {
         return false;
      }
      for (let i = 0; i < attrValue.length; i++) {
         if (attrValue[i] !== hostValue[i]) {
            return false;
         }
      }
      return true;
   }

   manageAttributes(): any {
      let options = {};
      for (let i = 0; i < this.properties.length; i++) {
         let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
         if (this[attrName] !== undefined) {
            options[this.properties[i]] = this[attrName];
         }
      }
      return options;
   }
   createComponent(options?: any): void {
      if (options) {
         $.extend(options, this.manageAttributes());
      }
      else {
        options = this.manageAttributes();
      }
      this.host = $(this.elementRef.nativeElement.firstChild);
      this.host[0].style.marginLeft = '1px';
      this.__wireEvents__();
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxButtonGroup', options);
      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   setOptions(options: any) : void {
      this.host.jqxButtonGroup('setOptions', options);
   }

   // jqxButtonGroupComponent properties
   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxButtonGroup('disabled', arg);
      } else {
          return this.host.jqxButtonGroup('disabled');
      }
   }

   enableHover(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxButtonGroup('enableHover', arg);
      } else {
          return this.host.jqxButtonGroup('enableHover');
      }
   }

   mode(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButtonGroup('mode', arg);
      } else {
          return this.host.jqxButtonGroup('mode');
      }
   }

   rtl(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxButtonGroup('rtl', arg);
      } else {
          return this.host.jqxButtonGroup('rtl');
      }
   }

   template(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButtonGroup('template', arg);
      } else {
          return this.host.jqxButtonGroup('template');
      }
   }

   theme(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxButtonGroup('theme', arg);
      } else {
          return this.host.jqxButtonGroup('theme');
      }
   }


   // jqxButtonGroupComponent functions
   disableAt(index: number): void {
      this.host.jqxButtonGroup('disableAt', index);
   }

   disable(): void {
      this.host.jqxButtonGroup('disable');
   }

   destroy(): void {
      this.host.jqxButtonGroup('destroy');
   }

   enable(): void {
      this.host.jqxButtonGroup('enable');
   }

   enableAt(index: number): void {
      this.host.jqxButtonGroup('enableAt', index);
   }

   focus(): void {
      this.host.jqxButtonGroup('focus');
   }

   getSelection(): any {
      return this.host.jqxButtonGroup('getSelection');
   }

   render(): void {
      this.host.jqxButtonGroup('render');
   }

   setSelection(index: number): void {
      this.host.jqxButtonGroup('setSelection', index);
   }


   // jqxButtonGroupComponent events
   @Output() onButtonclick = new EventEmitter();
   @Output() onSelected = new EventEmitter();
   @Output() onUnselected = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('buttonclick', (eventData: any) => { this.onButtonclick.emit(eventData); });
      this.host.on('selected', (eventData: any) => { this.onSelected.emit(eventData); });
      this.host.on('unselected', (eventData: any) => { this.onUnselected.emit(eventData); });
   }

} //jqxButtonGroupComponent


