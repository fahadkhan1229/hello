import { Component, OnInit } from "@angular/core";
import { NgbTooltipConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  providers: [NgbTooltipConfig],
})
export class DashboardComponent implements OnInit {
  title: String;
  emails: any;
  startPage: Number;
  paginationLimit: Number;

  keyword = "name";
  domains = [
    {
      name: "Netflix",
      domain: "www.netflix.com",
      results: "2.978 Emails",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg",
    },
    {
      name: "Amazon",
      domain: "www.amazon.com",
      results: "39.14 Emails",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg",
    },
    {
      name: "Netflix",
      domain: "www.netflix.com",
      results: "20.27 Emails",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg",
    },
    {
      name: "Amazon",
      domain: "www.amazon.com",
      results: "39.14 Emails",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg",
    },

    {
      name: "Netflix",
      domain: "www.amazon.com",
      results: "39.14 Emails",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg",
    },

    {
      name: "Amazon",
      domain: "www.amazon.com",
      results: "39.14 Emails",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg",
    },

    {
      name: "Netflix",
      domain: "www.amazon.com",
      results: "39.14 Emails",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg",
    },
  ];

  constructor(config: NgbTooltipConfig) {
    // customize default values of tooltips used by this component tree
    config.placement = "right";
    config.triggers = "click";

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
  showMoreItems() {
    this.paginationLimit = Number(this.paginationLimit) + 5;
  }
  showLessItems() {
    this.paginationLimit = Number(this.paginationLimit) - 5;
  }

  public counterValue: number = 0;
  increment() {
    this.counterValue++;
  }
  decrement() {
    this.counterValue--;
  }

  ngOnInit() {}
}
