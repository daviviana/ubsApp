import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormHelper } from './../../../helpers/form.helper';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() control: FormControl | undefined;
  @Input() disabled: boolean = false;
  @Input() type: string = 'text';
  @Input() mask: string = '';
  @Input() minLength: number | null = null;
  @Input() maxLength: number | null = null;
  @Input() icon: string = '';
  @Input() iconPosition: 'left' | 'right' = 'right';
  
  @Output() modelChange = new EventEmitter<string>();
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

  ngModelChange(event: string): void {
    this.modelChange.emit(event);
  }

  iconClickEvent(event: any): void {
    this.iconClick.emit(event);
  }
}
