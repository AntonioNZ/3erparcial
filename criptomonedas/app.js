const opcionesCriptomoneda=async()=>{
    const url="https:///min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
    const respuesta=await fetch(url);
    const resultado=await respuesta.json();
    //console.log(resultado);
    let selectCripto=document.querySelector("#criptomoneda");
    let opcionesHTML=`<option value="">-SELECCIONA-</option>`;
    resultado.Data.map(opcion=>{
        opcionesHTML+=`<option value="${opcion.CoinInfo.name}">${opcion.CoinInfo.FullName}</option>`
    });
    selectCripto.innerHTML=opcionesHTML;
}
const cotizarMoneda=()=>{
    const moneda=document.querySelector("#moneda").value;
    const cripto=document.querySelector("#criptomoneda").value;
    if(moneda===''||cripto===''){
        mostrarError("#msj-error","FALTA SELECCIONAR CAMPOS");
        return;
    }
    cotizar(moneda,cripto);
}

const cotizar=async(moneda="USD", cripto="BTC")=>{
    const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
    //console.log(url);
    const respuesta=await fetch(url);
    const resultado=await respuesta.json();
    resultado=resultado.DISPLAY[cripto][moneda];
    let divResultado=document.querySelector("#divResultado");
    //SPINNER
    divResultado.innerHTML=`<div style="text-aling:center">
    <img src="cargando.gif" width=300 height=300>
    </div>`;
    setTimeout(()=>{
        divResultado.innerHTML=`
        <div class="precio">EL PRECIO ES:<span>${resultado.PRICE}</span></div>
        <div class=""></div>
        <div class=""></div>
        <div class=""></div>
        <div class=""></div>
        `;
    })
}
const mostrarError=(elemento,mensaje)=>{
    divError=document.querySelector(elemento);
    divError.innerHTML=`<p class="red darken-4 error">${mensaje}</p>`;
    setTimeout(()=>{divError.innerHTML=``;},2000);
}