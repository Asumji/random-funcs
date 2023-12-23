function putInAFrame(string, center) {
    let offset = new Array(...string.split(" ")).sort((a,b) => {return b.length - a.length})[0]
    offset.length % 2 == 0 ? offset = offset.length+1 : offset = offset.length
    let output = "*".repeat(offset+4)+"\n"
    string.split(" ").forEach(word => {
        if (word.length % 2 == 0) word = word + " "
        output += "* " + " ".repeat((Math.round((offset+1-word.length)/2)-1)*center) + word + " ".repeat(Math.round((offset+1-word.length)/(2-(!center)))) + "*\n"
    });
    output += "*".repeat(offset+4)
    return output
}
console.log(putInAFrame("Hello World What else would I write here? hereisalongword to show somemoreofthis",true))

/*Output:
    *******************
    *      Hello      *
    *      World      *
    *      What       *
    *      else       *
    *      would      *
    *        I        *
    *      write      *
    *      here?      *
    * hereisalongword *
    *       to        *
    *      show       *
    * somemoreofthis  *
    *******************
*/
