import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-color-picker',
  template: `
    {{ label }}
    <ul>
      <li
        (click)="color = 'blue'"

        [class.selected]="color === 'blue'"
        [style.backgroundColor]="'blue'"
      ></li>
      <li
        (click)="color = 'red'"
        [class.selected]="color === 'red'"
        [style.backgroundColor]="'red'"
        class="selected"
      ></li>
      <li
        (click)="color = 'purple'"
        [class.selected]="color === 'purple'"
        [style.backgroundColor]="'purple'"
      ></li>
    </ul>
  `,
  styles: [
    `
      ul {
        display: flex;
        gap: 1em;
        padding: 0;
        list-style-type: none;
      }

      li {
        border-radius: 5px;
        cursor: pointer;
        padding: 0;
        width: 50px;
        height: 50px;
        background-color: red;
      }

      li.selected {
        border: 2px solid rgba(255, 255, 255, 0.5);
      }
    `,
  ],
})
export class ColorPickerComponent implements OnInit, ControlValueAccessor {
  /*ControlValueAccessor{
    onChange: (_:any) => void = (_: any) => {};

  }*/
  @Input()
  label = 'Sélectionner une couleur';
  color : 'blue' | 'red' | 'purple' = 'blue';

  constructor() {}
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {}
}
