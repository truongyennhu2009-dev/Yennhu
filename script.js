function addComment(){

let name=document.getElementById("name").value
let text=document.getElementById("text").value

if(name==""||text=="") return

let comments=JSON.parse(localStorage.getItem("comments"))||[]

comments.push({
name:name,
text:text
})

localStorage.setItem("comments",JSON.stringify(comments))

showComments()

}

function showComments(){

let comments=JSON.parse(localStorage.getItem("comments"))||[]
let area=document.getElementById("comments")

if(!area) return

area.innerHTML=""

comments.forEach(c=>{

area.innerHTML+=`
<div class="comment">
<b>${c.name}</b><br>
${c.text}
</div>
`

})

}

showComments()
