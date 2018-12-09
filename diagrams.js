

// const data = JSON.parse(jsondata);
const uniqArr = ["Poland", "Ukraine", "United States", "Norway", "Sweden", "Germany"];
console.log(typeof jsondata)
console.log(jsondata);
let arr = [];
let res; 
jsondata.list.forEach(item => arr.push(item.location.name))


function unique(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true; // запомнить строку в виде свойства объекта
  }

  return Object.keys(obj); // или собрать ключи перебором для IE8-
}

function getCountryValues(txt){
       return arr.filter(i => i === txt)
}

function getResArr(){
  return uniqArr.map(item => getCountryValues(item).length);

}

res = getResArr();
console.log(typeof res[0]);


var oilCanvas = document.getElementById("oilChart");


// oilCanvas.addEventListener('click', handleClick);

function handleClick(event){
	console.log(event);
}
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var oilData = {
	labels: uniqArr,
    datasets: [
        {
            data: res,
            backgroundColor: [
                "#e7e6e6",
                "#dddddd",
                "#cccccc",
                "#bbbbbb",
                "#aaaaaa"
            ]
        }]
};

var pieChart = new Chart(oilCanvas, {
  type: 'pie',
  data: oilData,
  options: {
                    legend: {
                        display: false
                    },
                    'onClick' : function (evt, item) {
                    	oilCanvas.classList.add('d-none');
                    	fields.listByCountries.classList.remove('d-none');
                    	let label = item[0]._model.label;
                        fields.listByCountries.innerHTML = createNameByCountries(jsondata, label)
                    }
                }
});
oilCanvas.onclick = function(evt){
    var activePoints = pieChart.getElementsAtEvent(evt);
    // => activePoints is an array of points on the canvas that are at the same position as the click event.
};