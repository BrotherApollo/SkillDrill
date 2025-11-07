import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chord-trainer',
  imports: [FormsModule],
  templateUrl: './chord-trainer.html',
  styleUrl: './chord-trainer.css'
})
export class ChordTrainer {
  naturalChords: boolean = true;
  sharpChords: boolean = true;
  flatChords: boolean = true;
  majorChords: boolean = true;
  minorChords: boolean = true;
  chordList: string[] = [];
  displayChordList: string = "";
  displayChord = signal<string>("");
  private displayInterval?: number;
  displayDelay: number = 5;
  
  constructor() {
    this.generate_chord_list()
  }

  ngOnDestroy() {
    this.stopLoop();
  }

  show_status(): void {
    console.log(this.chordList)
  }

  displayChords(): void {
    this.generate_chord_list();
    this.displayChordList = this.chordList.join(", ");

    this.stopLoop();
    this.displayChord.set("");
  }

  chordLoop() {
    // Setting first value
    let index = 1;
    this.displayChord.set(this.chordList[0])

    // clearing other loops
    this.stopLoop()

    // loop timer that trigger every {displayDelay} seconds
    this.displayInterval = window.setInterval(() => {
      this.displayChord.set(this.chordList[index]);
      console.log(this.displayChord())
      index++;
      index = (index + 1) % this.chordList.length;
    }, this.displayDelay * 1000)

    // removing displayed list
    this.displayChordList = "";
  }

  stopLoop(): void {
    clearInterval(this.displayInterval)
  }

  generate_chord_list(): void {
    this.chordList = []
    // Base chord lists
    let baseChords: string[] = ["A", "B", "C", "D", "E", "F", "G"]; // Natural
    let sharps: string [] = [] // Sharps
    let flats: string[] = [] // Flats
    // populating sharp/flat lists
    for (let chord of baseChords) {
      sharps.push(chord+"#")
      flats.push(chord+"b")
    }

    // compiling list based on checkboxes
    console.log(baseChords)
    let actualBase: string[] = []
    if (this.naturalChords) {
      actualBase = actualBase.concat(baseChords)
    }
    if (this.sharpChords) {
      actualBase = actualBase.concat(sharps)
    }
    if (this.flatChords) {
      actualBase = actualBase.concat(flats)
    }
    console.log(actualBase)

    // Chord variations (major, minor, ect ...)
    for (let base of actualBase) {
      if (this.majorChords) {
        this.chordList.push(base)
      }
      if (this.minorChords) {
        this.chordList.push(base+"m")
      }
    }

    // shuffle the list
    this.chordList.sort(() => Math.random() - 0.5)
  }
}
