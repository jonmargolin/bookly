import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbModal, ModalDismissReasons, NgbActiveModal, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from './edit/edit.component';
import { WindowComponent } from './window/window.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';
import { AddbookComponent } from './addbook/addbook.component';
import { ValidationService } from './validation.service';
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [EditComponent, WindowComponent, AlertComponent, AddbookComponent],
  entryComponents: [
    AddbookComponent,
    EditComponent, 
    WindowComponent,
    AlertComponent
    
  ],
  providers: [
    NgbActiveModal,
    ReactiveFormsModule,
    EditComponent, 
    WindowComponent,
    AlertComponent,
    AlertService,
    ValidationService
  ],
  exports:[WindowComponent]
})
export class CrudModule { }
