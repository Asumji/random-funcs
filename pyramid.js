function pyramid(layers) {
    return ",".repeat(layers-1).split(",").reduce((a,v,i) => a = [...a," ".repeat(layers-i)+"*".repeat(i*2+1)],[]).join("\n")
}

console.log(pyramid(7))
