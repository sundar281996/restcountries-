var container = document.createElement("div");
container.className = "container";

var div = document.createElement("div");
div.innerText = "Rest Countries Details";
div.className = "d-flex justify-content-center title";

var row2 = document.createElement("div");
row2.className = "row";

function createcolumn(
  classname,
  titleclass,
  titlename,
  imgclass,
  srcname,
  data1,
  data2,
  data3
) {
  var col = document.createElement("div");
  col.className = "col-lg-4 column";
  card = createCard(
    classname,
    titleclass,
    titlename,
    imgclass,
    srcname,
    data1,
    data2,
    data3
  );
  col.append(card);
  return col;
}

function createCard(
  classname,
  titleclass,
  titlename,
  imgclass,
  srcname,
  data1,
  data2,
  data3
) {
  var card = document.createElement("div");
  card.className = classname;
  var cardtitle = createcardtitle(titleclass, titlename);

  image = createimage(imgclass, srcname);
  data1 = createdata(data1);
  data2 = createdata(data2);
  data3 = createdata(data3);

  card.append(cardtitle, image, data1, data2, data3);
  return card;
}

function createcardtitle(titleclass, titlename) {
  var cardtitle = document.createElement("div");
  cardtitle.className = titleclass;
  cardtitle.innerHTML = titlename;
  return cardtitle;
}

function createimage(classname, srcname) {
  var image = document.createElement("img");
  image.setAttribute("class", classname);
  image.setAttribute("src", srcname);
  image.setAttribute("alt", "flag");
  return image;
}

function createdata(data) {
  var div = document.createElement("div");
  div.className = "card-text";
  div.innerHTML = data;
  return div;
}
var col;
//var url = "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
var url = "https://restcountries.com/v2/all";
//GET:read
function getdata() {
  var res = fetch(url);
  res
    .then((data) => data.json())
    .then((data1) => {
      console.log(data1);
      for (var i = 0; i < data1.length; i++) {
        console.log(
          `name:${data1[i].name} flag :${data1[i].flags.svg} capital: ${data1[i].capital} region: ${data1[i].region} counrtycode: ${data1[i].callingCodes[0]} latlng:${data1[i].latlng}`
        );

        col = createcolumn(
          "card",
          "card-title",
          data1[i].name,
          "card-img-top",
          data1[i].flags.svg,
          `Capital: ${data1[i].capital}`,
          `Region: ${data1[i].region}`,
          `Counrtycode: ${data1[i].callingCodes[0]}`
        );

        row2.append(col);
      }
    })
    .catch((err) => console.log(err));
}
getdata();

container.append(div, row2);
document.body.append(container);
