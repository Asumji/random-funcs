var verb_past = ["caught", "swam in", "ate", "broke", "carried", "saw", "made", "did"]

var verb_future = ["will catch", "will swim in", "will eat", "will brake", "will carry", "will see", "will make", "will do"]

var time = [["At 10pm", "future"], ["Sometimes", "regularly"], ["Tommorow", "future"], ["In 2015", "past"], ["In the ol' times", "past"]]

var res1 = Math.floor(Math.random() * noun.length)
var res2 = Math.floor(Math.random() * verb.length)
var res3 = Math.floor(Math.random() * adjective.length)
var res4 = Math.floor(Math.random() * object.length)
var res5 = Math.floor(Math.random() * time.length)
//sentence = time[res5] + " " + noun[res1] + " " + verb[res2] + " " + adjective[res3] + " " + object[res4] + "."

// switch(time[res5][1]) {
//     case "regularly":
//         sentence = time[res5][0] + " " + noun[res1] + " " + verb[res2] + " " + adjective[res3] + " " + object[res4] + "."
//         console.log("Reg")

//     case "future":
//        sentence = time[res5][0] + " " + noun[res1] + " " + verb_future[res2] + " " + adjective[res3] + " " + object[res4] + "."
//        console.log("Future")

//     case "past":
//        sentence = time[res5][0] + " " + noun[res1] + " " + verb_past[res2] + " " + adjective[res3] + " " + object[res4] + "."
//        console.log("Past")
// }

if (time[res5][1] == "regularly") {
    sentence = time[res5][0] + " " + noun[res1] + " " + verb[res2] + " " + adjective[res3] + " " + object[res4] + "."
    console.log("Reg")
} else if (time[res5][1] == "future") {
    sentence = time[res5][0] + " " + noun[res1] + " " + verb_future[res2] + " " + adjective[res3] + " " + object[res4] + "."
    console.log("Future")
} else if (time[res5][1] == "past") {
    sentence = time[res5][0] + " " + noun[res1] + " " + verb_past[res2] + " " + adjective[res3] + " " + object[res4] + "."
    console.log("Past")
}



console.log(sentence)
