import { Observable } from 'rxjs';

export interface SummatorServiceClient {
  sum: (data: { numbers: number[] }) => Observable<{ result: number }>;
}
