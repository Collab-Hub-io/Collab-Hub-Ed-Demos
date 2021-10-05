function audioMath(d) {
    let a = 4, // changing this value will change the log curve, lower is more linear
        x = d*0.001,
        num = (Math.pow(2, a*x) - 1),
        den = (Math.pow(2, a) - 1),
        normaled = num/den,
        scaleTo = [20, 1000] // freq range that you want to scale to
        scaled = scaleIt(normaled, scaleTo),
        output = document.getElementById("mathReadout")
    
    output.innerHTML = scaled
} 

function scaleIt(normaled, to) {
    let range = to[1] - to[0],
        bottom = to[0],
        scaled = range*normaled + bottom
    return Math.round(scaled)
}