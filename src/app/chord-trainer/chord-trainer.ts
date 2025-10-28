import { Component } from '@angular/core';
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
  

  show_status(): void {
    console.log(this.chordList)
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


  }
}
