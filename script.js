import data from './data.json'  assert { type: "json" };

// class Human{
// 	constructor(name,age,weight,hair,eyes,brain){
//      this.name=name;
// 	 this.age=age;
// 	 this.weight=weight;
// 	 this.hair=hair;
// 	 this.eyes=eyes;
// 	 this.brain=brain
// 	}
//    rander(){
// 		// let div=document.createElement('div');
//         console.log(this.name);
// 	}
// }
// class Woman extends Human{
//     constructor(name,age,weight,hair,eyes,brain,bnazd){
// 		super(name,age,weight,hair,eyes,brain);
// 		this.bnazd=bnazd;
// 	}
// }
// const armen=new Human('armen',12,40,'black','green',true);
// const armen2=new Human('armen2',122,402,'black2','green2',true);
// const armine=new Woman('armine',20,60,'pinksilver','silver',true,true);
// // console.dir(armen);
// // console.dir(armen2);
// // console.dir(armine);
// // const arr=[armen,armen2,armine];
// // console.log(arr);
// armen.rander()

const arrBuy=JSON.parse(localStorage.getItem('basket')) || [];
const parent_kinder=document.querySelector('.parent_kinder')
class Choclate{
	constructor(id,name,price,description,img){
		this.id=id
		this.name=name;
		this.price=price;
		this.description=description;
		this.img=img;
		this.sayHi=()=>{
			console.log('barev');
		}
	}
	rander(){
	let div=document.createElement('div');
	div.dataset.id=this.id
	div.className='kinder_div'
	div.innerHTML=`<img src="${this.img}">
	               <h2>${this.name}</h2><span>${this.price}</span>
				  <p>${this.description}</p>
	              <span class="decrement">-</span>
				  <input value="0" disabled class="count">
				  <span class="increment">+</span>
				  <button class="buy">buy</button>
				  `
	const increment=div.querySelector('.increment');
	const count=div.querySelector('.count');
	const decrement=div.querySelector('.decrement');
	increment.addEventListener('click',()=>{
			count.value++
	})
	decrement.addEventListener('click',()=>{
		if(count.value>0){
	      count.value--
		}	
	})
	const add_basket=div.querySelector('.buy');
	add_basket.addEventListener('click',()=>{
    arrBuy.push(this.id);
    localStorage.setItem("basket",JSON.stringify(arrBuy))
	})
	 parent_kinder.append(div)
	}


};


data.forEach(i=>{
let elem=new Choclate(i.id,i.name,i.price,i.description,i.img)
	elem.rander()
})
// function changeCount(){
// 		const decrementBtn=document.querySelectorAll('.decrement');
// 		const increment=document.querySelectorAll('.increment');
// 	}
// //__proto__// hxum e ayn Classin vori instance@ handisanum e tvyal object


// let obj1={
// 	name:'poxos1',
// 	lastName:'iii'
// };

// let obj2={
// 	name:'poxos2',
// 	getName(){
//      console.log(this.name);
// 	}
// };

// let obj3={
// 	name:'poxos3'
// };

// let obj4={
// 	name:'poxos4',
// 	getLastName(){
// 		console.log(this.lastName);
// 	}
// };
// obj1.__proto__=obj2;
// obj2.__proto__=obj3;
// obj3.__proto__=obj4;

// console.dir(obj1)
// obj1.getLastName()