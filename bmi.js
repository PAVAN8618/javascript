
var bmi_click = document.getElementById("bmi_click");

const bmi_result = document.getElementById('bmi_result')

bmi_click.addEventListener('submit',(event)=>{
    event.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value)
    var height = parseFloat(document.getElementById('height').value)
    var bmi = weight / (height * height).toFixed(2);
    bmi_result.innerHTML = +bmi

})



