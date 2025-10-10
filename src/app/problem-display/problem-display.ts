import { Component } from '@angular/core';

type Option = {
  id: number;
  name: string;
  value: number;
}

@Component({
  selector: 'problem-display',
  imports: [],
  templateUrl: './problem-display.html',
  styleUrl: './problem-display.css'
})
export class ProblemDisplay {
  value_one: number = 0
  value_two: number = 0 
  answer: number = this.multiply()
  clickableValues: Option[] = []

  multiply(): number{
    return this.value_one * this.value_two
  }

  renew_values(): void {
    // Sets new values for value_one, value_two and calculates the correct answer
    const max: number = 10
    this.value_one = Math.floor(Math.random() * max)
    this.value_two = Math.floor(Math.random() * max)
    this.answer = this.multiply()
  }

  create_options(): void {
    console.log("start")
    this.clickableValues = [
      {id: 1, name: `${this.answer}`, value: this.answer}
    ]
  }

  shuffle(array: Array<any>): void {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}
}
