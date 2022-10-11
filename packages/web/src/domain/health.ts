export interface HealthService {
  name: string;
  status: string;
}

export interface Health {
  name: string;
  version: string;
  status: string;
  services: HealthService[];
}
