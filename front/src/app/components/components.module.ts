import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { SidebarComponent } from './sidebar/sidebar.component';
import { InputComponent } from './forms/input/input.component';
import { SelectComponent } from './forms/select/select.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule
  ],
  declarations: [
    SidebarComponent,
    InputComponent,
    SelectComponent,
    ModalComponent
  ],
  exports: [
    SidebarComponent,
    InputComponent,
    SelectComponent,
    ModalComponent
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class ComponentsModule { }
