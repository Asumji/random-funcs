function pyramid(layers) {
    const output = []
    for (let i = 0; i < layers; i++) {
        output.push(" ".repeat(layers-i)+"*".repeat(i*2+1))
    }
    return output.join("\n")
}

console.log(pyramid(7))
