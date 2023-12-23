function capitalizeAfterSpace(string) {
    return string.replace(/^[a-z]|(?<= )[a-z]/g,(letter) => (letter.toUpperCase()))
}

console.log(capitalizeAfterSpace("random sentence cuz need to get some example input."))
