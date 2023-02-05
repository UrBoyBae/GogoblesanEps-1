const ubahLatar = () => {
    const valueInput = document.getElementById('inputHexa').value;
    const targetObject = document.getElementById('targetObject')

    targetObject.style.backgroundColor = valueInput;
}