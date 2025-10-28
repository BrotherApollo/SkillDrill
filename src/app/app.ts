import { Component, signal } from '@angular/core';
import { ProblemDisplay } from './problem-display/problem-display';
import { ChordTrainer } from "./chord-trainer/chord-trainer";
import { Toolbar } from "./toolbar/toolbar";

@Component({
  selector: 'app-root',
  imports: [ProblemDisplay, ChordTrainer, Toolbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SkillDrill');
}
