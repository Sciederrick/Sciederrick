export function capitalize(input) {
    let output = null;
    const inputArray = input.split(' ')
    inputArray.forEach((word, index) => {
        if (index == 0) output = ''
        output += word.charAt(0).toUpperCase().concat(word.substring(1))
        if (inputArray.length != index + 1) output += " "
    })
    return output
}