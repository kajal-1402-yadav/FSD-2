
// Consider below JSON object and fetch values using for loop (for…in/for…of).

const sub =

{

"FSD": [

{

"Topic": "HTML",

"course": "Beginer",

"content": ["tags", "table", "form"],

},

{

"Topic": "CSS",

"course": "Beginer",

"content": ["tags", "table", "form"]

}

]};

for (const key in sub) {
    const e = sub[key];
    console.log(e)   
}
for (const e of sub.FSD) {
    console.log(e)
}
