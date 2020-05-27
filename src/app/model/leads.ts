export class Leads {
  id: number;
  lead_name: string;
  lead_title: string;
  lead_company: string;
  lead_email: string;
  domain: string;
  offset : number;
  limit  : number;
  name : string;

  constructor( lead_domain: string, lead_offSet : number, lead_limit  : number, nameLead? : string){
    this.domain = lead_domain;
    this.offset = lead_offSet;
    this.limit = lead_limit;
    this.name = nameLead;
  }

}