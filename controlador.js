let objetoAJAX = new XMLHttpRequest();


let url ="https://api.spotify.com/v1/artists/4lxfqrEsLX6N1N4OCSkILp/top-tracks?country=US";


let token = "Bearer BQAeb32UBZQ0q2c_jO-Y2_2mDjiNzTrKxqCZx-F4jZAjNVTq70gUyyoTe00NO6g178m1YpKohsMJ4OZZxg8zOeGW2zL39jGWsSFCITA1CeKJ0Id_TyJuoTGHP4sLc9bcl-393TZEiR4lQixcFke2zezLHoIzW7Im0Pw";


objetoAJAX.open('GET',url,true);


objetoAJAX.setRequestHeader('Authorization',token);


objetoAJAX.onload=function(){
    let respuesta=JSON.parse(this.responseText);
    console.log(respuesta.tracks[0].preview_url);
    console.log(respuesta.tracks[0].album.images[0].url);
    console.log(respuesta.tracks[0].album.name);

    let imagen1 = document.getElementById("imagen1");
    imagen1.src = respuesta.tracks[0].album.images[0].url;

    let titulo1 = document.getElementById("titulo1");
    titulo1.textContent = respuesta.tracks[0].album.name;

    let audio1 = document.getElementById("audio1");
    audio1.src = respuesta.tracks[0].preview_url;
    

    
    let imagen2 = document.getElementById("imagen2");
    imagen2.src=  respuesta.tracks[1].album.images[1].url;

    let titulo2 = document.getElementById("titulo2");
    titulo2.textContent = respuesta.tracks[1].album.name;

    let audio2 = document.getElementById("audio2");
    audio2.src = respuesta.tracks[1].preview_url;



    let imagen3 = document.getElementById("imagen3");
    imagen3.src = respuesta.tracks[2].album.images[1].url;

    let titulo3 = document.getElementById("titulo3");
    titulo3.textContent = respuesta.tracks[2].album.name;

    let audio3 = document.getElementById("audio3");
    audio3.src = respuesta.tracks[2].preview_url;
}


objetoAJAX.send();