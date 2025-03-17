import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { KSafePipePipe } from '../k-safe.pipe.pipe';

@Component({
  selector: 'app-k-dialog-popup',
  imports: [MatDialogModule,KSafePipePipe],
  templateUrl: './k-dialog-popup.component.html',
  styleUrl: './k-dialog-popup.component.scss'
})
export class KDialogPopupComponent {
  pdfFile:any;
  // dialogData:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.pdfFile = data.pdfFile;
  }
}
