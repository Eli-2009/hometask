let add = document.querySelector('.add');
add.addEventListener('click', () =>{
    let tbody = document.querySelector('.tbody');
    let num = tbody.children.length + 1;
    let a = `
        <tr>
            <td>${num}</td>
            <td><input></input></td>
            <td><input></input></td>
            <td><input></input></td>
            <td><button class="sil">Sil</button> <button class="saxla">Yadda saxla</button></td>
        </tr>
    `;
    tbody.innerHTML += a;
})

let saveButtons = tbody.querySelectorAll('.saxla');
let lastButton = saveButtons[saveButtons.length -1]
lastButton.addEventListener('click', () =>{
    save.textContent = 'duzelis et';
    save.style.backgroundColor = 'yellow'
})