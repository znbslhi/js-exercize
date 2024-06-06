let $=document
let inpElm=$.getElementsByTagName('input')
let ulElm=$.querySelector('.todos')
let iElm=$.getElementsByTagName('i')

function addToDo(event){
    let liElm=$.createElement('li')
    let spanElm=$.createElement('span')
    let iElmNew=$.createElement('i')
    liElm.classList.add('list-group-item','d-flex','justify-content-between','align-items-center')
    iElmNew.classList.add('fa','fa-trash-o','delete')
    spanElm.innerHTML=event.target.value.trim()
    liElm.append(spanElm,iElmNew)
    ulElm.append(liElm)
    event.target.value=''
}
function getInputValue(event){
    if(event.key=='Enter')
    {
        if(event.target.value){
            addToDo(event)
            event.preventDefault()//form Elements needs submit,so when you press enter,page refresh
                
        }else{
            alert('invalid input!')
        }
    }
}
function removeClick(event){
    event.target.parentElement.remove()
}

for(let i=0;i<iElm.length;i++)
{
    iElm[i].addEventListener('click',removeClick)
}

inpElm[0].addEventListener('keydown',getInputValue)


