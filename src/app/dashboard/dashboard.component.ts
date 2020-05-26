import {Leads} from './../model/leads';
import {CommonService} from './../common.service';
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [NgbTooltipConfig],
})
export class DashboardComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    config: NgbTooltipConfig,
    private api: CommonService
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
  loaded = false;
  loading = true;

  keyword = 'name';
  // domains = [
  //   {
  //     name: "Netflix",
  //     domain: "www.netflix.com",
  //     results: "2.978 Emails",
  //     logo:
  //       "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg",
  //   },
  //   {
  //     name: "Amazon",
  //     domain: "www.amazon.com",
  //     results: "39.14 Emails",
  //     logo:
  //       "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg",
  //   },
  //   {
  //     name: "Netflix",
  //     domain: "www.netflix.com",
  //     results: "20.27 Emails",
  //     logo:
  //       "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg",
  //   },
  //   {
  //     name: "Amazon",
  //     domain: "www.amazon.com",
  //     results: "39.14 Emails",
  //     logo:
  //       "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg",
  //   },

  //   {
  //     name: "Netflix",
  //     domain: "www.amazon.com",
  //     results: "39.14 Emails",
  //     logo:
  //       "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg",
  //   },

  //   {
  //     name: "Amazon",
  //     domain: "www.amazon.com",
  //     results: "39.14 Emails",
  //     logo:
  //       "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg",
  //   },

  //   {
  //     name: "Netflix",
  //     domain: "www.amazon.com",
  //     results: "39.14 Emails",
  //     logo:
  //       "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg",
  //   },
  // ];

  leads;

  lead_name = '';
  lead_title = '';
  lead_company = '';
  lead_email = '';
  lead_domain = '';
  offset = 0;
  limit = 8;
  private showError: boolean;
  loading: boolean;

  @Output() messageEvent = new EventEmitter<Leads>();

  leadObj: Leads = new Leads(
    (this.lead_domain = this.val),
    (this.offset = 0),
    (this.limit = 8)
  );

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      domainSearch: ['', Validators.required],
    });
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
    this.showEmailSearch = !this.showEmailSearch;

    console.log(this.val);
    this.leadObj.domain = this.val;
    console.log(this.leadObj);
    this.api.leadByDomain(this.leadObj).subscribe((lead) => {
      console.log('Lead', lead);
      this.loading = true;
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

}
