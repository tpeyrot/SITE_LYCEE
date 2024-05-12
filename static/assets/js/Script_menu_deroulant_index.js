document.getElementById("cours-dropdown").addEventListener("mouseover", function() {
    document.getElementById("cours-dropdown-content").style.display = "block";
});

document.getElementById("cours-dropdown").addEventListener("mouseout", function() {
    document.getElementById("cours-dropdown-content").style.display = "none";
});
function showOptions(id) {
    var options = document.getElementById(id);
    options.classList.remove('hidden');
}

function toggleAdditionalOptions() {
    var additionalOptions = document.querySelector('.additional-options');
    additionalOptions.classList.toggle('show');
}
function showAdditionalOptions(position) {
    const additionalOptionsLeft = document.querySelector('.additional-options-left');
    const additionalOptionsRight = document.querySelector('.additional-options-right');

    if (position === 'left') {
        additionalOptionsLeft.style.display = 'flex';
        additionalOptionsRight.style.display = 'none';
    } else if (position === 'right') {
        additionalOptionsLeft.style.display = 'none';
        additionalOptionsRight.style.display = 'flex';
    }
}
