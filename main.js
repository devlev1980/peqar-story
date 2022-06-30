const panelHeaders = Array.from(document.querySelectorAll('.panel-heading'));
const expandBtns = Array.from(document.querySelectorAll('.expand_btn'))
let chips = Array.from(document.querySelectorAll('.cheap'));
const buttonFloat = document.getElementById('btn_float')
const chipList = document.getElementById('chip-list');

let templates = [
    {
        content: 'דיווחי על נפלים'

    },
    {
        content: 'דיווחי על נפלים'

    },

    {
        content: 'דיווחי על נפלים'

    },

    {
        content: 'דיווחי על נפלים'

    },


]

let isOpen = false;
buttonFloat.addEventListener('click', (re) => {
    if (isOpen) {
        const liArray = Array.from(document.querySelectorAll('li.chip.new'));
        liArray.forEach(item => item.remove());
    } else {
        templates.forEach((item, index) => {
            let li = `<li role="presentation" class="chip new"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab"> ${item.content}</a></li>`;
            chipList.append(htmlToElements(li)[0]);
        })
    }
    isOpen = !isOpen;
});

function htmlToElements(html) {
    let template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}


panelHeaders.forEach((item, i) => {
    item.classList.remove('opened');


    item.addEventListener('click', (e) => {

        let selectedPannelHeader = panelHeaders.find((item, index) => panelHeaders.indexOf(item) === i)
        if (selectedPannelHeader.classList.contains('opened')) {
            selectedPannelHeader.classList.remove()
        }
        selectedPannelHeader.classList.toggle('opened')
    })
})

