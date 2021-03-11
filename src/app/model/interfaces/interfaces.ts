export interface ISkill {
  skillName: string;
  experienceInYears:number;
  proficiency:string;
}

export interface IEmployee {
  id:number;
  name:string;
  email:string;
  phone?:number;
  contactPreference:string;
  skills:ISkill[];
}
