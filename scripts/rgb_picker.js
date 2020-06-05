var rgb = {'r':'0', 'g':'0', 'b':'0'};

window.addEventListener('load', () => {
    getSliders('.slider');
});

function getSliders (sliderClass) {
    r = g = b = 0;
    document.querySelectorAll(sliderClass)
    .forEach(child => child.addEventListener('input', color => {
        let colorID = color.target.attributes.id.value;
        let colorValue = color.target.value;
        setColor(colorID, colorValue, r, g, b);
    }))}

function setColor(colorID, colorValue, r, g, b) {
    switch (colorID) {
        case 'r': rgb.r = colorValue; r = colorValue; break;
        case 'g': rgb.g = colorValue; g = colorValue; break;
        case 'b': rgb.b = colorValue; b = colorValue; break;
    }
    let rgbBoxColor = `rgb(${r}, ${g}, ${b})`;
    let rgbBGColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    document.querySelector(`#${colorID}TextBox`).attributes.value.textContent = colorValue;
    document.querySelector(`#${colorID}ColorBox`).style.backgroundColor = rgbBoxColor;
    document.querySelector(`#container`).style.backgroundColor=`${rgbBGColor}`;
}
