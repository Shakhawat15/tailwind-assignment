// Show And Hide Password

var state = false;

function toggle() {
    var x = document.getElementById('password');
    var y = document.getElementById('hide1');
    var z = document.getElementById('hide2');

    if (state) {
        x.setAttribute('type', 'password');
        y.style.display = 'none';
        z.style.display = 'block';
        state = false;
    } else {
        x.setAttribute('type', 'text');
        y.style.display = 'block';
        z.style.display = 'none';
        state = true;
    }
}