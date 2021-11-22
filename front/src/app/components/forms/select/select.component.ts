import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormHelper } from './../../../helpers/form.helper';

interface Options {
    label: string;
    value: any;
};

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() control: FormControl | undefined;
  @Input() options: Array<Options> = [];
  @Input() placeholder: string = '';
  @Input() icon: string = 'expand_more';
  @Input() iconPosition: 'left' | 'right' = 'right';
  @Output() iconClick = new EventEmitter<any>();

  constructor(private formHelper: FormHelper) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.disabled) {
      if (changes.disabled.currentValue) {
        this.control?.disable();
      } else {
        this.control?.enable();
      }
    }
  }

  get required(): boolean {
    return !!this.control && !!this.control.errors && this.control.hasError('required');
  }

  get error(): boolean {
    return !!this.control && !!this.control.errors && this.control.touched;
  }

  get errors(): Array<string> {
    if (this.control?.errors) {
      return this.formHelper.errorMap(this.control.errors);
    }
    return [];
  }
}
