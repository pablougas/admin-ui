import { User } from "../users/types";

export interface Project {
  id?: string | number;
  name: string;
  address: string;
  company_id: string | number;
  user_id: string | number;
  project_manager: User;
  owner: User;
  designer: User;
  start_date: string;
  projected_start_date: string;
  end_date: string;
  projected_end_date: string;
  blueprint?: File;
  avatar?: string;
}

export interface ProjectState {
  projects: Project[];
  error: boolean;
}
