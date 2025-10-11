import { Component } from '@angular/core';

type Option = {
  id: number;
  name: string;
  value: number;
}

type Difficulty = {
  name: string;
  min: number;
  max: number;
}

@Component({
  selector: 'problem-display',
  imports: [],
  templateUrl: './problem-display.html',
  styleUrl: './problem-display.css'
})
export class ProblemDisplay {
  streak: number = 0
  highScore: number = 0
  max: number = 20
  min: number = 5
  value_one: number = 0
  value_two: number = 0
  answer: number = this.multiply()
  clickableValues: Option[] = []

  constructor() {
    this.renew_values()
  }

  multiply(): number {
    return this.value_one * this.value_two
  }

  renew_values(): void {
    // Sets new values for value_one, value_two and calculates the correct answer
    this.value_one = Math.floor(Math.random() * (this.max - this.min) + 1) + this.min
    this.value_two = Math.floor(Math.random() * (this.max - this.min) + 1) + this.min
    this.answer = this.multiply()

    this.create_options()
  }

  create_options(): void {
    this.clickableValues = [
      { id: 1, name: `${this.answer}`, value: this.answer }
    ]

    const wrong_values = new Set<number>()

    // Strategy 1: Off by near by multipliers (most deceptive)
    const nearbyMultipliers = [-2, -1, 1, 2]
    for (const offset of nearbyMultipliers) {
      if (this.answer + offset * this.value_two > 0) {
        wrong_values.add(this.answer + offset * this.value_two)
      }
      if (this.answer + offset * this.value_one > 0) {
        wrong_values.add(this.answer + offset * this.value_one)
      }
    }
    // Strategy 2: Addition instead of multiplication (common student error)
    wrong_values.add(this.value_one + this.value_two)

    // Strategy 3: One factor squared (pattern recognition trap)
    wrong_values.add(this.value_one * this.value_one)
    wrong_values.add(this.value_two * this.value_two)

    // Filter out correct answer and convert to array
    const filtered = Array.from(wrong_values)
      .filter(num => num !== this.answer && num > 0)

    // Randomly select 3
    const selectedWrong = filtered
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)

    // Add to clickableValues
    for (let i = 0; i < selectedWrong.length; i++) {
      this.clickableValues.push({
        id: i + 2,
        name: `${selectedWrong[i]}`,
        value: selectedWrong[i]
      })
    }
    console.log(wrong_values)

    // Shuffle final array
    this.clickableValues.sort(() => Math.random() - 0.5)
    console.log(this.clickableValues)
  }

  checkAnswer(num: number) {
    if (num == this.answer) {
      console.log('correct')
      this.streak++;
      if (this.streak > this.highScore) {
        this.highScore = this.streak;
      }
    } else {
      console.log('incorrect')
      this.streak = 0;
    }
    this.renew_values()
  }
}
