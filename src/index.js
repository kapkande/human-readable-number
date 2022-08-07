module.exports = function toReadable(number) {
    const input = number
    let inputArrAdd = String(input).split('')
    let lengthInput = inputArrAdd.length;
    console.log(inputArrAdd)
    const zero = ['', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine'
    ];
    const ten = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'
    ];
    var twenty = ['', 'twenty', 'thirty', 'forty', 'fifty',
        'sixty', 'seventy', 'eighty', 'ninety'
    ];
    let setArr = []
    let resolt

    if (lengthInput == 3) {
        setArr.push(zero[inputArrAdd[0]] + ' hundred ')
        if (inputArrAdd[1] == 0) {
            setArr.push(zero[inputArrAdd[2]])

        } else if (inputArrAdd[1] < 2) {

            setArr.push(ten[inputArrAdd[2]])
        } else if (inputArrAdd[2] == 0) {
            setArr.push(twenty[inputArrAdd[1] - 1])
        } else {
            setArr.push(twenty[inputArrAdd[1] - 1] + ' ' + zero[inputArrAdd[2]])
        }
    } else if (lengthInput == 2) {
        if (inputArrAdd[0] < 2) {
            setArr.push(ten[inputArrAdd[1]])

        } else if (inputArrAdd[1] == 0) {
            setArr.push(twenty[inputArrAdd[0] - 1])
        } else {
            setArr.push(twenty[inputArrAdd[0] - 1] + ' ' + zero[inputArrAdd[1]])
        }
    } else {
        inputArrAdd[0] == 0 ? setArr.push('zero') : setArr.push(zero[inputArrAdd[0]])

    }




    resolt = setArr.join("")
    console.log(resolt)

    let resolt1 = resolt.split('')
    if (resolt[resolt1.length - 1] === ' ') {
        resolt1.pop()
    }
    return resolt1.join("")

}