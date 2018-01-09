document.getElementById('startDecrypting').addEventListener('click',(message) => {
    console.time('test')
    let answer =  document.getElementById('message').value
    const regex = /(\w)\1/
    while (regex.test(answer)) {
        answer = answer.replace(regex,'')
    }
    document.getElementById('result').innerHTML = answer;
    console.timeEnd('test')
})
