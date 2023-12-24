function diamond(n){
    if (n < 0 || n % 2 == 0) return null
    if (n == 1) return "*\n"
    let diamond = ["*".repeat(n) + "\n"]
    for (let i = 0; i < n; i++) {
      i++
      if (n-(i+1) <= 0) break
      diamond.push(" ".repeat(diamond.length) + "*".repeat(n-(i+1)) + "\n")
    }
    let diamond2 = diamond.reduce((output, part) => output += part)
    let diamond1 = diamond.reverse().splice(0,diamond.length-1).reduce((output, part) => output += part)
    return diamond1+diamond2
  }

console.log(diamond(25))

/*Output:
            *
           ***
          *****
         *******
        *********
       ***********
      *************
     ***************
    *****************
   *******************
  *********************
 ***********************
*************************
 ***********************
  *********************
   *******************
    *****************
     ***************
      *************
       ***********
        *********
         *******
          *****
           ***
            *
*/
