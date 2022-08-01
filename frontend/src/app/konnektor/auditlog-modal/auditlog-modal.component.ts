import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AuditLogDTO} from "../../../../target/generated-sources/openapi";

@Component({
  selector: 'app-modal-content',
  templateUrl: './auditlog-modal.component.html',
})
export class AuditLogModal {

  public auditlogs: Array<AuditLogDTO> = [];

  constructor(public activeModal: NgbActiveModal) {}

  public onAddNew(): void {
    console.log(this.auditlogs.length);
    // new entry pushed to the auditlogs, with
  }

  public onSaveAll(): void {

  }

}

