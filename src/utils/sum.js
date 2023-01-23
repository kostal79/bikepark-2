export default class MySum {
  first() {
    return 1
  }

  second() {
    return 2
  }

  sum() {
      return this.second() + this.first() ;
    }
}