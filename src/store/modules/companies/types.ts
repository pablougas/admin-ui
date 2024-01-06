import { Project } from "../projects/types";
import { User } from "../users/types";

export interface Company {
  id?: string | number;
  legal_name: string;
  dba: string;
  phone: string;
  users?: User[];
  projects?: Project[];
  created_at?: string;
  updated_at?: string;
}

export interface CompanyState {
  companies: Company[];
  error: boolean;
}
