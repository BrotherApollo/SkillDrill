import { Component, signal } from '@angular/core';
import { ProblemDisplay } from './problem-display/problem-display';

@Component({
  selector: 'app-root',
  imports: [ProblemDisplay],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SkillDrill');
}
