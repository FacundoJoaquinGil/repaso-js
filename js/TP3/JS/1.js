//1-Ejercicio
meses=[
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviebre",
    "diciembre",
]

//primera forma
//document.write(meses)

//segunda forma
document.body.innerHTML=
    `<ul> ${meses.map(m =>
        `<li>${m}</li>`
    )}
    </ul>`

