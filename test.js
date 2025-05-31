
const a = 100
const b = 100
const c = 100
const d = 100
const e = 100
const f = 100
const g = 100
const h = 100

function addKelereng() {
    const kelerengs = [[a, b, c],[ d, e, f], [g, h]]

    const kelerengCount = kelerengs.map(kelereng => {
    let total = 0;
    for(let i = 0; i < kelereng.length; i++) {
        console.log(`kelereng[${i}] = ${kelereng[i]}`);
        
        total += kelereng[i];
    }
    console.log(total);
    return total;
    })
    

}

console.log(addKelereng())