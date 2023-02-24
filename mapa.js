let estudiantes=[
    {
        id:1,
        nombre:"Juan",
        equipo:"nal"
    },
    {
        id:2,
        nombre:"Francia",
        equipo:"mde"
    },
    {
        id:3,
        nombre:"Ana",
        equipo:"mde"
    }
]

//mapeando el arreglo de estudiantes

let mapa=estudiantes.map(function(estudiante){
    estudiante.equipo="nal"
    estudiante.nota=4.5
    return estudiante
})
console.log (mapa)
