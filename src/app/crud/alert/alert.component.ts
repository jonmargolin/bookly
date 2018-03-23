import { OnInit, Component } from '@angular/core';
import {AlertService } from './alert.service'
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit {

  constructor( private as: AlertService, public activeModal: NgbActiveModal) { }
  ngOnInit():void {
 
  }
cancel()
{
  this.activeModal.close();
}
  delete(){
    this.as.delete()
  }
}
