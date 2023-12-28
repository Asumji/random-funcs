function capitalizeAfterSpace(string) {
    return string.replace(/^[A-z]|(?<= )[A-z]/g,(letter) => (letter.toUpperCase()))
}

console.log(capitalizeAfterSpace("random sentence cuz need to get some example input."))
