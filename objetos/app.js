const alumno = {
    no_control: "20415082060249",
    nombre: "Ranulfo Ajeandro",
    ap: "Suarez",
    am: "Sanchez",
    direccion: {
    calle: "Jesus Solares",
    colonia: "La Palma",
    no: 52,
    municipio: "Tecamac",
    cp: 55755,
    },
    casado: true,
    hermanos: ["Jocelyn"],
};
const { nombre, casado, ap, am } = alumno;
console.log("Nombre: " + nombre + " " + ap + " " + am);
console.log("Casado: " + casado);
console.log(JSON.stringify(alumno));

const alumno2 = JSON.parse(
    `{"no_control":"20415082060249","nombre":"Ranulfo Alejandro","ap":"Suarez","am":"Sanchez","direccion":{"calle":"Jesus Solares","colonia":"La Palma","no":52,"municipio":"Tecamac","cp":55755},"casado":true,"hermanos":["Jocelyn"]}`
);

console.log(alumno2);
console.log(alumno2.nombre + " " + alumno2.ap + " " + alumno2.am);

localStorage.setItem("alumno1", JSON.stringify(alumno));
localStorage.setItem("alumno2", JSON.stringify(alumno2));

const api = async () => {
    const url = await fetch("alumno.json");
    const json = await url.json();
    console.log(json);
    divRes = document.querySelector("#Res");
    json.map((user) => {
    divRes.innerHTML += `
        <p>
        <b>ID: </b>${user.id}
        <br>
        <b>Nombre: </b>${user.nombre}
        ${user.ap}
        ${user.am}
        <br>
        <b>No_Control: </b>${user.no_control}
        <br>
        <b>Direccion</b>
        <br>
        <b>Calle: </b>${user.direccion.calle}
        <br>
        <b>Colonia: </b>${user.direccion.colonia}
        <br>
        <b>No: </b>${user.direccion.no}
        <br>
        <b>Municipio: </b>${user.direccion.municipio}
        <br>
        <b>Cp: </b>${user.direccion.cp}
        <br>
        <b>Casado: </b>${user.casado}
        <br>
        <b>Hermanos: </b>${user.hermanos}
        <hr>
        </p>
        `;
    });
};