const expandBtns = document.querySelectorAll('.expand_btn');
const collapse = Array.from(document.querySelectorAll('.panel-collapse'))
const panelHeaders = document.querySelectorAll('.panel-heading');


let openedLi = collapse.find((item)=> item.classList.contains('in'))

let isOpen = false;


panelHeaders.forEach((panel,index)=>{
        removeExpand(index,panel)
       panel.addEventListener('click',(e)=>{


           expandBtns.forEach((expandBtn)=>{
               expandBtn.classList.remove('expanded')
           })

           // debugger
           // if(panel.classList.contains('expanded')){
           //     expandBtns.item(index).classList.remove('expanded')
           // }

           if (panel.classList.contains('expanded') ){
               expandBtns.item(index).classList.remove('expanded')
               panel.classList.remove('expanded')
           }else{
               expandBtns.item(index).classList.add('expanded')
               panel.classList.add('expanded')
           }


           isOpen = !isOpen;
           if(!isOpen){
               panelHeaders.forEach((panel)=>{
                   panel.classList.remove('expanded')
               })
           }
           // if(isOpen){
           //     expandBtns.item(index).classList.remove('expanded')
           //     panel.classList.remove('expanded')
           // }else{
           //     expandBtns.item(index).classList.add('expanded')
           //     panel.classList.remove('expanded')
           // }

       })

});

function removeExpand(index,panel) {
    if(index === collapse.indexOf(openedLi)){
        expandBtns.item(index).classList.add('expanded');
        panel.classList.add('expanded')
    }
}




