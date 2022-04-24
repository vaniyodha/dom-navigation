//navigate the node tree using node relationships.
let p = document.getElementById("main");
console.log(p.childNodes); // by using childnode we can get the length of the parent child
console.log(p.childElementCount)//it represents the the no of child in that parent tag
console.log(p.firstElementChild) // it will show the 1st element of the child node
console.log(p.lastElementChild)//it will shows the last element of the child node
console.log(p.firstChild)// the element will takes empty text as 1st child
console.log(p.lastChild)// the element will takes empty text as last schild
console.log(p.children[4])// we can access the child node by  using  array index
console.log(p.nextSibling)//in js link we written the difer sothat js never end
console.log(p.previousSibling)
let midele = document.getElementById("subclass3");
console.log(midele.nextElementSibling)//it will display next element
console.log(midele.textContent)//it display the content in the tag
//in dom we can change the css also
midele.style.backgroundColor='blue'
midele.style.color='white'
midele.style.textAlign='center'
midele.style.fontFamily='cursive'
midele.style.fontWeight ='bolder'
midele.style.textShadow='5px'
let sub= document.getElementsByClassName(".subclass5")
console.log(sub.textContent)
