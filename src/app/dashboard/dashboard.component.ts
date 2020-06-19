import {Leads} from '../model/leads';
import {CommonService} from '../common.service';
import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [NgbTooltipConfig],
})
export class DashboardComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, config: NgbTooltipConfig, private api: CommonService, private spinner: NgxSpinnerService,
              private auth: AuthService
  ) {
    // customize default values of tooltips used by this component tree
    config.placement = 'right';
    config.triggers = 'click';
  }

  get f() {
    return this.searchForm.controls;
  }


  submitted = false;
  searchForm: FormGroup;
  responseAPI: any;
  showEmailSearch = false;
  isDisableButton = false;
  val = '';
  parentMessage;
  lead: Leads;


  keyword = 'name';

  leads;

  lead_name = '';
  lead_title = '';
  lead_company = '';
  lead_email = '';
  lead_domain = '';
  offset = 0;
  limit = 1000;
  private
  showError: boolean;
  showNoRecord = false;

  @Output()
  messageEvent = new EventEmitter<Leads>();

  leadObj: Leads = new Leads(
    (this.lead_domain = this.val),
    (this.offset = 0),
    (this.limit = 1000)
  );


  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      domainSearch: ['', Validators.required],
    });
    this.showNoRecord = false;

  }

  onSubmit() {
    this.submitted = true;
    if (this.searchForm.invalid) {
      return;
    }

    // display form values on success
    // alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.searchForm.value, null, 4));
  }


  emailSearch() {

    console.log(this.val);
    this.leadObj.domain = this.val;
    console.log('this is a lead object' + this.leadObj);
    this.api.leadByDomain(this.leadObj).subscribe((lead) => {
      console.log('lead', lead);
      if (Object.keys(lead).length < 8) {
        this.isDisableButton = true;
      }
      if (Object.keys(lead).length > 0) {

        this.spinner.show();
        setTimeout(() => {
          /** spinner ends after 2 seconds */
          this.spinner.hide();
        }, 1000);
        this.showEmailSearch = true;
        this.showNoRecord = false;
      } else {
        this.spinner.show();
        setTimeout(() => {
          /** spinner ends after 2 seconds */
          this.spinner.hide();
        }, 1000);
        this.showEmailSearch = false;
        this.showNoRecord = true;
      }

      this.parentMessage = lead;
      this.isDisableButton = false;
      console.log('disable value', this.isDisableButton);
    });
  }

  check($event: Event) {
    // @ts-ignore
    if ($event.target.value.indexOf('www') >= 0) {
      this.showError = true;
    } else {
      this.showError = false;
    }
  }

  logout() {
    this.auth.logout();
  }
}
