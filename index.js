console.log(document);
console.dir(document);
console.dir(document.body.children[0]);


//body
const [h1] = document.body.children;
console.log(h1);
function handlerClickH1() {
    alert('click on h1')
}
h1.addEventListener('click', handlerClickH1);
h1.addEventListener('click', () => { console.log(1) });
h1.addEventListener('click', () => { console.log('word') });
if (Math.random() > 0.8) {
    h1.removeAddEventListener('click', handlerClickH1);
}
h1.onclick= function () {
        console.log('onclick1');
}
    h1.onclick= function () {
        console.log('onclick2');
    }
    h1.onclick= function () {
        console.log('onclick3');
    }
h1.onclick = null;



//tagname
console.dir(document);
const btn = document.getElementsByTagName('button');

for (const button of btn) {
    btn.addEventListener('mousemove', () => {
        console.log(btn);
    })
}

for (const button of btn) {
    btn.addEventListener('mousedown', () => {
        console.log(btn);
    })
}

for (const button of btn) {
    btn.addEventListener('click', () => {
        console.log(btn);
    })
}
const [btn1, , btn3] = document.getElementsByTagName('button');
console.log(btn1);
console.log(btn3);


//btn1.onclick =()=>{console.log('onclick1');} only one 
//btn1.onclick =()=>{console.log('onclick2');}   only one end only last!!!!




//body!!!
console.dir(document)
const body = document.body;
console.log(body);

//id
//option3
const unique = document.getElementById('unique');
console.log(unique);

//class
const items = document.getElementsByClassName('item');
console.log(items);


//querySelector
const btn2 = document.querySelector('button+button');
console.log(btn2);

//querySelectorAll
const buttonsSosed = document.querySelectorAll('button+button');
console.log(buttonsSosed);
