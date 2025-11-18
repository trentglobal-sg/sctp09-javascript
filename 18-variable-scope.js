let a = 3;
let z = 4;
{
    console.log(a);
    let a =  4;
    {
        let a = 5;
        let b = 6;
        console.log(a);
        {
            console.log(z);
            let w = 10;
            console.log(a);
        }
    }
    console.log(w);


}
console.log(a);
console.log(b);
console.log(z);