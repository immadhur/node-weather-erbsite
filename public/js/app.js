let form = document.getElementById('form');
let searchText = document.getElementById('search');
let msg1 = document.querySelector('#msg1');
let msg2 = document.querySelector('#msg2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    msg1.textContent = 'Loading...';
    msg2.textContent = '';
    let location = searchText.value;
    fetch(`http://madhur:2123/weather?city=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msg1.textContent = data.error;
            }
            else {
                msg1.textContent = location[0].toUpperCase()+location.slice(1);
                msg2.textContent = `${data.text} with Min ${data.minTemp} and Max ${data.maxTemp}`
            }
            searchText.value='';
        });
    })
})