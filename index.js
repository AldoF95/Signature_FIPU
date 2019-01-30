window.onload = function(){
  sastavnica_change(+document.getElementById('ddL').value);
  logo_color_change();
}

function languange_change(){
  var ddl = document.getElementById('ddL').value;
  document.getElementById('lblIme').innerHTML = data[+ddl].ime +":";
  document.getElementById('lblUloga').innerHTML = data[+ddl].uloga+":";
  document.getElementById('lblBrTele').innerHTML = data[+ddl].br_telefona+":";
  document.getElementById('lblSastavnica').innerHTML = data[+ddl].sastavnica+":";
  document.getElementById('lblAdresa').innerHTML = data[+ddl].adresa+":";
  document.getElementById('lblWeb').innerHTML = data[+ddl].web+":";
  document.getElementById('lblMail').innerHTML = data[+ddl].mail+":";
  document.getElementById('td_text').innerHTML = data[+ddl].text;
  sastavnica_change(ddl);
  logo_color_change();
}

function sastavnica_change(i){
  document.getElementById('opt0').innerHTML = sastavnice_data[i].naziv[0];
  document.getElementById('opt1').innerHTML = sastavnice_data[i].naziv[1];
  document.getElementById('opt2').innerHTML = sastavnice_data[i].naziv[2];
  document.getElementById('opt3').innerHTML = sastavnice_data[i].naziv[3];
  document.getElementById('opt4').innerHTML = sastavnice_data[i].naziv[4];
  document.getElementById('opt5').innerHTML = sastavnice_data[i].naziv[5];
  document.getElementById('opt6').innerHTML = sastavnice_data[i].naziv[6];
  document.getElementById('opt7').innerHTML = sastavnice_data[i].naziv[7];
  document.getElementById('opt8').innerHTML = sastavnice_data[i].naziv[8];
  document.getElementById('opt9').innerHTML = sastavnice_data[i].naziv[9];
  document.getElementById('opt10').innerHTML = sastavnice_data[i].naziv[10];
  document.getElementById('opt11').innerHTML = sastavnice_data[i].naziv[11];
  document.getElementById('opt12').innerHTML = sastavnice_data[i].naziv[12];
}

function logo_color_change(){
  var ddl1 = document.getElementById('selectSast').value;
  var ddl2 = document.getElementById('ddL').value;
  getMeta(sastavnice_data[+ddl2].url[+ddl1].toString(), +ddl2, +ddl1);
  document.getElementById('nav_bar').style.backgroundColor=sastavnice_data[0].color[+ddl1];
  document.getElementById('table_box').style.borderColor=sastavnice_data[0].color[+ddl1];
  document.getElementById('logo_img').src = sastavnice_data[+ddl2].url[+ddl1].toString();
  document.getElementById('department').innerHTML = sastavnice_data[+ddl2].fax + ", "+sastavnice_data[+ddl2].naziv[+ddl1];
}

function getMeta(url, i1, i2){
  var img = new Image();
  img.onload = function(){
    var r = this.width/this.height;
    if (r == 1){
      document.getElementById('logo_img').style.width = "110px";
    }
    else if(r > 1){
      document.getElementById('logo_img').style.width = "220px";
    }
  };
  img.src = url;
}
