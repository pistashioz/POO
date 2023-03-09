const s = prompt('add a string')
const n = prompt('add a number')

function echo(s, n){
    let result ='';
    for (let i = 0; i < n; i+=1 ){
        result += s
    }
    console.log(result)
}
echo(s, n)