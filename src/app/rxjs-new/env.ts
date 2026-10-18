import { RouteService } from "../route-service";
import { RouteService2 } from "../route-service2";
import { Logger } from "../token";

const environment = {
  production: true,
  apiUrl: 'http://localhost:3000/api',
  timeout: 3000
}

export function getEnvironment() {
 return new Logger(environment.production);

}