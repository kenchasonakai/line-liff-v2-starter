window.onload = () => {
  const default_apikey = 'https://api.gnavi.co.jp/RestSearchAPI/v3/?';
  const keyid = "keyid=cef47ca1112a065456f7be4443382b59";
  const submit_button = document.getElementById("submit");
  var latitude = 'aaa';
  var longitude = 'aaa';

  const get_current_location = (data) => {
    var crd = data.coords
    latitude = crd.latitude;
    longitude = crd.longitude;
    console.log(latitude)
    console.log(longitude)
    return `&latitude=${latitude}&longitude=${longitude}&range=1`
  }

  const set_query = () => {
    navigator.geolocation.getCurrentPosition(get_current_location)
    let name = document.getElementById("name").value;
    console.log(name)
    let array = new Array();
    var address = false
    if(address){
      array.push(address)
    }
    if(name){
      array.push(`&name=${name}`)
    }
    return array.join("")
  }

  const grnv = () => {
    var result = document.getElementById("result");
    result.innerHTML = ""
    let query = set_query();
    console.log(query)
    console.log(query)
    let fetch_query = encodeURI(default_apikey + keyid + query)
    fetch(fetch_query)
    .then(response => response.json())
    .then(data => {
      for(element of data.rest){
        var p = document.createElement("p")
        var newContent = document.createTextNode(element.name);
        p.appendChild(newContent)
        result.appendChild(p)
      }
    })
  }
  submit_button.addEventListener('click', () => {
    grnv()
    console.log(latitude)
    console.log(longitude)
  }, false);
}
