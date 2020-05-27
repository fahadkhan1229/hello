import { Leads } from "./../model/leads";
import { CommonService } from "./../common.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-email-search",
  templateUrl: "./email-search.component.html",
  styleUrls: ["./email-search.component.scss"],
})
export class EmailSearchComponent implements OnInit {
  @Input() showSearchPartially: boolean;
  @Input() childMessage: Leads;
  @Input() domainName: string;
  @Input() leadoffset: number;
  @Input() isDisable: boolean = false;

  nameValue: string = "";

  message: Leads;
  receiveMessage($event: Leads) {
    this.message = $event;
    console.log(this.message);
  }
  showEmailList: boolean = false;

  title: String;
  emails: any;
  startPage: Number;
  paginationLimit: Number;

  constructor(private api: CommonService) {
    this.emails = [
      { id: 1, name: "Cristine Crazie", emailid: "crisinte-craze@gmail.com" },
      { id: 2, name: "Christy Grosz", emailid: "cgrosz@netflix.com" },
      { id: 3, name: "Nasim Cambron", emailid: "ncambron@netflix.com" },
      { id: 4, name: "Amina Fishburn", emailid: "afishburn@netflix.com" },
      { id: 5, name: "Lyn Cowan", emailid: "lcowan@netflix.com" },
      { id: 6, name: "Kristy Chan", emailid: "kchan@netflix.com" },
      { id: 7, name: "Pedro Navarro", emailid: "pnavarro@netflix.com" },
      { id: 8, name: "Isadora Laban", emailid: "ilaban@netflix.com" },
      { id: 9, name: "Keiko Shimabukuro", emailid: "kshimabukuro@netflix.com" },
      { id: 10, name: "Kristin Kirland", emailid: "kkirland@netflix.com" },
      { id: 11, name: "Cristine Crazie", emailid: "crisinte-craze@gmail.com" },
      { id: 12, name: "Christy Grosz", emailid: "cgrosz@netflix.com" },
      { id: 13, name: "Nasim Cambron", emailid: "ncambron@netflix.com" },
      { id: 14, name: "Amina Fishburn", emailid: "afishburn@netflix.com" },
      { id: 15, name: "Lyn Cowan", emailid: "lcowan@netflix.com" },
      { id: 16, name: "Lyn Cowan", emailid: "lcowan@netflix.com" },
      { id: 17, name: "Kristy Chan", emailid: "kchan@netflix.com" },
      { id: 18, name: "Pedro Navarro", emailid: "pnavarro@netflix.com" },
      { id: 19, name: "Isadora Laban", emailid: "ilaban@netflix.com" },
      {
        id: 20,
        name: "Keiko Shimabukuro",
        emailid: "kshimabukuro@netflix.com",
      },
    ];

    this.startPage = 0;
    this.paginationLimit = 8;
  }

  lead_domain = "";
  domain = "";
  offset = 0;
  limit = 8;
  name = "";

  leadObj: Leads = new Leads(
    (this.domain = ""),
    (this.offset = 0),
    (this.limit = 8),
    (this.name = "")
  );

  countLeads;
  countArray: any;

  showMoreItems() {
    // this.paginationLimit = Number(this.paginationLimit) + 5;

    this.leadObj.offset = Number(this.leadObj.offset) + 8;
    this.leadObj.domain = this.domainName;
    this.leadObj.limit = 8;
    console.log(this.leadObj);
    this.api.leadByDomain(this.leadObj).subscribe((a) => {
      console.log("Lead2", a);

      this.countArray = Object.keys(a).length;
      console.log("length", this.countArray);
      if (this.countArray < 8 || this.countArray == 0) {
        this.isDisable = true;
      } else {
        this.isDisable = false;
      }

      if (this.countArray != 0) {
        this.childMessage = a;
      }
    });
  }
  showLessItems() {
    //this.paginationLimit = Number(this.paginationLimit) - 5;

    this.leadObj.offset = Number(this.leadObj.offset) - 8;
    this.leadObj.domain = this.domainName;
    this.leadObj.limit = 8;
    console.log(this.leadObj);
    this.api.leadByDomain(this.leadObj).subscribe((a) => {
      console.log("Lead2", a);

      this.countArray = Object.keys(a).length;
      console.log("length", this.countArray);
      if (this.countArray < 8 || this.countArray == 0) {
        this.isDisable = true;
      } else {
        this.isDisable = false;
      }

      if (this.countArray != 0) {
        this.childMessage = a;
      }
    });
  }

  public counterValue: number = 0;
  increment() {
    this.counterValue++;
  }
  decrement() {
    this.counterValue--;
  }

  emailList() {
    this.showEmailList = !this.showEmailList;
    console.log(this.nameValue);
    this.leadObj.offset = 0;
    this.leadObj.domain = this.domainName;
    this.leadObj.limit = 8;
    this.leadObj.name = this.nameValue;
    this.api.leadByName(this.leadObj).subscribe((a) => {
      console.log("Lead2", a);
      this.childMessage = a;
      this.nameValue = "";
    });
    (document.getElementById("showMore") as HTMLButtonElement).disabled = false;
  }
  ngOnInit() {}
}
