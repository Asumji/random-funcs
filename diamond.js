function diamond(n){
    if (n < 0 || n % 2 == 0) return null
    let diamond = []
    for (let i = 1; i <= Math.floor(n/2); i++) {
        diamond.push(" ".repeat(Math.ceil(n/2)-i)+"*".repeat(i+(i-1)))
    }
    return diamond.join("\n") + "\n" + "*".repeat(n) + "\n" + diamond.reverse().join("\n")
  }

console.log(diamond(25))
