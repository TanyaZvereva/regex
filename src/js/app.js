export default class Validator {
    constructor() {
      this.letters = new RegExp('[^A-z0-9-_]');
      this.moreThanThreeNumbers = new RegExp('[0-9]{3,}');
      this.startsWithInvalidCharacters = new RegExp('^[0-9-_]{1,}[A-z-_]');
      this.endsWithInvalidCharacters = new RegExp('[A-z-_][0-9-_]{1,}');
    }
  
    validateUsername(name) {
      if (this.letters.test(name)) {
        throw new Error('name contains invalid characters');
      }
      if (this.moreThanThreeNumbers.test(name)) {
        throw new Error('name contains too many numbers');
      }
      if (this.startsWithInvalidCharacters.test(name)) {
        throw new Error('name starts with invalid characters');
      }
      if (this.endsWithInvalidCharacters.test(name)) {
        throw new Error('name ends with invalid characters');
      }
    }
  }
// export class Validator {
//     constructor(){
//         this.check = new RegExp("[^a-z-_0-9]")
//         this.checkNum = new RegExp("[0-9]{4,}")
//         this.checkStart = new RegExp("^[0-9_-]{1,}[a-z0-9-_]")
//         this.checkEnd = new RegExp("[a-z0-9-_]{1,}[0-9_-]$")
//     }
//     validateUsername(name) {
//       if (this.check.test(name)) {
//           throw new Error("Недопустимые символы")
//       }
//       if(this.checkNum.test(name)) {
//           throw new Error("Нельзя использовать более трёх цифр подряд")
//       }
//       if(this.checkStart.test(name)) {
//           throw new Error("Недопустимые символы в начале")
//       }
//       if(this.checkEnd.test(name)) {
//           throw new Error("Недопустимые символы в конце")
//       }
//     } 
// }
