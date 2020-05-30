import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  @ViewChild('UploadFileInput', {static: false}) uploadFileInput: ElementRef;
  fileUploadForm: FormGroup;
  fileInputLabel: string;
  private file: any;
  errorMessage: boolean;
  successMessage: boolean;

  constructor(private http: HttpClient,
              private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.fileUploadForm = this.formBuilder.group({
      myfile: ['']
    });
  }

  onFileSelect(event) {
    const af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      //
      // if (!_.includes(af, file.type)) {
      //   alert('Only EXCEL Docs Allowed!');
      // } else {
      //   this.fileInputLabel = file.name;
      //   this.fileUploadForm.get('myfile').setValue(file);
      // }
    }

  }

  onFormSubmit() {
    const formData = new FormData();
    formData.append('file', this.file);
    // formData.append('file', this.fileUploadForm.get('myfile').value);
    // formData.append('agentId', '007');


    this.http.post<any>('http://api.leadslogics.com/api/upload', formData).subscribe(response => {
      this.successMessage = true;
      location.reload();
      if (response.statusCode === 200) {
        // Reset the file input
        this.uploadFileInput.nativeElement.value = '';
        this.fileInputLabel = undefined;


      }
    }, error => {
      console.log(error);
      this.errorMessage = true;
      location.reload();
    });
  }
}
