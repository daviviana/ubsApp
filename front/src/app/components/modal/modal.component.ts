import { Component, Injectable, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfig } from './modal.config';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
@Injectable()
export class ModalComponent implements OnInit {
  @Input() public modalConfig: ModalConfig | undefined;
  @ViewChild('modal') private modalContent: TemplateRef<ModalComponent> | undefined;
  private modalRef: NgbModalRef | undefined;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void { }

  open(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.modalRef = this.modalService.open(this.modalContent)
      this.modalRef.result.then(resolve, resolve)
    })
  }

  async close(): Promise<void> {
    if (this.modalConfig!.shouldClose === undefined || (await this.modalConfig!.shouldClose())) {
      const result = this.modalConfig!.onClose === undefined || (await this.modalConfig!.onClose())
      this.modalRef!.close(result);
      if (this.modalConfig?.mustRefresh) {
        window.location.reload();
      }
    }
  }

  async dismiss(): Promise<void> {
    if (this.modalConfig!.shouldDismiss === undefined || (await this.modalConfig!.shouldDismiss())) {
      const result = this.modalConfig!.onDismiss === undefined || (await this.modalConfig!.onDismiss())
      this.modalRef!.dismiss(result);
      if (this.modalConfig?.mustRefresh) {
        window.location.reload();
      }
    }
  }
}