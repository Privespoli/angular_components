import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

export default function bootstrap(context: any) {
  return bootstrapApplication(AppComponent, {
    providers: [
      // tus providers
    ]
  }, context);
}