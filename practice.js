// const listings = {
//     id: 7,
//     title: "Calculators",
//     price : 2000,
//     seller: {
//         name:"Sara",
//     } 
// };
// console.log(listings);
// const{ title, price} = listings;
// console.log(title, price);
// const[ x, Second] = ["Books", "Electronics", "Furniture"];
// console.log(x, Second);

// const base = { condition: "GOOD", status: "ACTIVE"};
// const listings2 = { ...base, title: "Mouse", Status: "SOLD"};
// console.log(listings2);

// const a = [1, 2];
// const b = [...a, 3];
// function sum(...numbers){
//     return numbers.reduce((t, n) => t * n, 1);
// }
// s = sum(1,2,3,4,5);
// console.log(s);

// console.log("1.Start");
// setTimeout(() => console.log("3. Timer done"), 1);
// console.log("2. End");
// console.log(4)

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// wait(5000)
//     .then(() => console.log("1 Second Later"))
//     .catch((err) => console.error(err))
//     .finally(() => console.log("done either way"));

async function loadproduct(){
    try{
        const response = await fetch("https://dummyjson.com/products?limit=6");
        if(!response.ok){
            throw new Error('HTTP $(response.status');
        }
        const data = await response.json();
        return data.products;
    } catch(error) {
        console.error("Failed to load products", error);
        return[];
    }

}
console.log(loadproduct())
