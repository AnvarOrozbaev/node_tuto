import 'colors'
 export class printPrimeNumbers{
  error = 'некорректные вводные данные'
  colors = ['green', 'yellow', 'red']
  index = 0
  args:(string|number)[]
  constructor(args:(string|number)[] = []){
    this.args = process.argv.length === 4 ? process.argv : args
    this.init()
  }
  checkArgLength(data){
    if(data.length !== 4 ) {
      console.log(this.error.red)
      return 
    } 
    return data.slice(2)
  }
  getRange(data){
   return data.map(Number).filter( i => !Number.isNaN(i))
  }
  checkRangeLength(range){
    if(!range || range.length !== 2) {
      console.log(this.error.red)
      return
    }
    return range
  }
  fillArr(range){
    const [start, end] = range
    return Array(end - start+1).fill(0).map((_, idx) => start + idx)
  }
  filterPrimeNumbers(arr){
    return arr.filter(i => {
      for(let j = 2; j < i; j++){
        if (i % j == 0 ) {
          return  false
        }
      }
      return true
    })
  }
  printColoredNumbers(arr){
    arr.map(i => {
      console.log(`${i}`[this.colors[this.index]])
      this.index++
      if(this.index === 3) this.index = 0
      return i
    })
  }
  checkEmptyArr(arr){
    if (arr.length === 0) console.log('простых чисел нет в этом диапозоне'.red);
  }

  init(){
    const data = this.checkArgLength(this.args)
    if(!data)return
    const range = this.getRange(data)
    if(!this.checkRangeLength(range))return
    const arrOfNumbers = this.fillArr(range)
    const arrOfPrimeNumbers = this.filterPrimeNumbers(arrOfNumbers)
    this.printColoredNumbers(arrOfPrimeNumbers)
    this.checkEmptyArr(arrOfPrimeNumbers)
    return arrOfPrimeNumbers
  }
}






