const form  = document.getElementById('registar')
const input = form.querySelector('input')
const ul    = document.getElementById('invitedList');

function createLi(text) {
    const li = document.createElement('li');
    li.textContent = text;
    const label = document.createElement('label')
    label.textContent = 'Confirmed';
    const checkbox = document.createElement('input');
    chexbox.type = 'checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);

    const editButton = document.createElement('button');
    editButton.textContent = 'edit';
    li.appendChild(editButton);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    li.appendChild(removeButton);
    return li;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value;
    input.value = '';
    const li = createLi(text)
    ul.appendChild(li);
});

ul.addEventListener('change', (e) =>{
    const checkbox = event.target;
    const checked = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode;

    if(checked) {
        listItem.className = 'responded'
    } else {
        listItem.className = ''
    }
});

ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        if(e.target.textContent === 'remove') {
            const li = e.target.parentNode;
            const ul = li.parentNode;
            ul.removeChild(li);
        }else if(e.target.textContent === 'remove') {
            console.log('edit')
        }
    }
})