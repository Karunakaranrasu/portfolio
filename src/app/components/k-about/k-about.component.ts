import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { KDialogPopupComponent } from '../../common/k-dialog-popup/k-dialog-popup.component';
import FileSaver from 'file-saver';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-k-about',
  imports: [MatIconModule],
  templateUrl: './k-about.component.html',
  styleUrl: './k-about.component.scss'
})
export class KAboutComponent {
  isDownloading = false;
  pdfUrl3: string = 'https://drive.google.com/uc?export=download&id=15qCGXS7SGQ2f-erIGP28oO9KEM6rv998';
  fileURL: any = null;
  isToggle = false;

  docTypes = ['URL', 'Blob', 'ArrayBuffer', 'File System', 'Base64 data'];

  constructor(
    public dialog: MatDialog
  ) {}


  downloadResume() {
  const a = document.createElement('a');
  a.href = this.pdfUrl3;
  a.download = 'invoice.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}




}
