import { ISkill } from "./iskill";

export interface IEmployee {
  id:number;
  name:string;
  email:string;
  phone?:number;
  contactPreference:string;
  skills:ISkill[];
}
