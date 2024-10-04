// let elencoBacchette = localStorage.getItem("bacchetta");
// let elenco = [];

// if(elencoBacchette == null){
//     localStorage.setItem("bachetta", JSON.stringify(elenco))
// }
// else{
//     elenco = JSON.parse(elencoBacchette);
// }





function aggiungi(){
    let elencoBacchette = localStorage.getItem("bacchetta") != null 
                            ? JSON.parse(localStorage.getItem("bacchetta")) : [];
    
    let varCodice =  document.getElementById("input-codice").value;                           
    let varMateriale= document.getElementById("input-materiale").value;
    let varNucleo = document.getElementById("input-nucleo").value;
    let varLunghezza = document.getElementById("input-lunghezza").value;
    let varResistenza = document.getElementById("input-resistenza").value;
    let varMago = document.getElementById("input-mago").value;
    let varCasata = document.getElementById("input-casata").value;

    let acquisto = {
        codice: varCodice,
        materiale: varMateriale,
        nucleo: varNucleo,
        lunghezza : varLunghezza,
        resistenza : varResistenza,
        mago : varMago,
        casata : varCasata,
        
    };

    elencoBacchette.push(acquisto);
    localStorage.setItem("bacchetta", JSON.stringify(elencoBacchette))
    
    location.href = "shop.html"
    stampaTabella();
}
stampaTabella();

function stampaTabella(){
    let dion = document.getElementById("corpo-tabella-shop");
    console.log(dion)
    let elencoBacchette = localStorage.getItem("bacchetta") != null 
                            ? JSON.parse(localStorage.getItem("bacchetta")) : [];

    let shopp = "";
    for(let [idx, item] of elencoBacchette.entries()){
        shopp += `
            <tr>
                <td>${idx + 1}</td>
                <td>${item.codice}</td>
                <td>${item.materiale}</td>
                <td>${item.nucleo}</td>
                <td>${item.resistenza}</td>
                <td>${item.mago}</td>
                <td>${item.casata}</td>
                <td>
                    <button type="button" class="btn btn-danger" onclick="elimina(${idx})">Elimina</button>
                    <button type="button" class="btn btn-warning" onclick="modifica(${idx})">Modifica</button>
                </td>
            </tr>
        `;
    }
    document.getElementById("corpo-tabella-shop").innerHTML=shopp;
}



function elimina(indice){
    let elencoBacchette = localStorage.getItem("bacchetta") != null 
                            ? JSON.parse(localStorage.getItem("bacchetta")) : [];

    elencoBacchette.splice(indice, 1);

    localStorage.setItem("bacchetta", JSON.stringify(elencoBacchette))
    stampaTabella();
}

function modifica(indice){
    $("#modaleModifica").modal('show');
    $("#btn-salva").data('identif', indice);

    let elencoBacchette = localStorage.getItem("bacchetta") != null 
                            ? JSON.parse(localStorage.getItem("bacchetta")) : [];

    for(let [idx, item] of elencoBacchette.entries()){
        if(indice == idx){
            document.getElementById("input-codice").value = item.codice;
            document.getElementById("input-materiale").value = item.materiale;
            document.getElementById("input-nucleo").value = item.nucleo;
            document.getElementById("input-lunghezza").value = item.lunghezza;
            document.getElementById("input-resistenza").value = item.resistenza;
            document.getElementById("input-mago").value = item.mago;
            document.getElementById("input-casata").value = item.casata;
        }
    }
}

function salva(varBottone){

    let posizione = $(varBottone).data('identif')
    document.getElementById("input-codice").value = item.codice;
    document.getElementById("input-materiale").value = item.materiale;
    document.getElementById("input-nucleo").value = item.nucleo;
    document.getElementById("input-lunghezza").value = item.lunghezza;
    document.getElementById("input-resistenza").value = item.resistenza;
    document.getElementById("input-mago").value = item.mago;
    document.getElementById("input-casata").value = item.casata;

    let elencoBacchette = localStorage.getItem("bacchetta") != null 
                            ? JSON.parse(localStorage.getItem("bacchetta")) : [];

    for(let [idx, item] of elencoBacchette.entries()){
        if(idx == posizione){
            item.codice = varCodice;
            item.materiale = varMateriale;
            item.nucleo = varNucleo;
            item.lunghezza = varLunghezza;
            item.resistenza = varResistenza;
            item.mago = varMago;
            item.casata = varCasata;

            localStorage.setItem("bacchetta", JSON.stringify(elencoBacchette));
            stampaTabella();
            $("#modaleModifica").modal('hide');
            return;
        }
    }
}


