export interface Environment {
  API_HOST: string;
  HOST: string;
}

const environments: Record<string, Environment> = {
  dev: {
    API_HOST: 'http://localhost:5006',
    HOST: '/',
  },
  prodSimulation: {
    API_HOST: 'http://localhost:5000/api',
    HOST: '/',
  },
  prod: {
    API_HOST: 'http://localhost:5000/api',
    HOST: '/',
  },
};

export class Env {
  private static instance: Env;
  private static environment: string;
  private constructor() {}
  static init(environment: string) {
    if (!Env.instance) {
      Env.instance = new Env();
      Env.environment = environment;
      console.log('Env init', { environment });
    }
    return Env.instance;
  }
  static getEnv(): Environment {
    if (!Env.environment) {
      throw new Error('No Environment set. Call init.');
    }
    return environments[Env.environment];
  }
}
