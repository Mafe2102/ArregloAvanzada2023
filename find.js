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
let buscador=estudiantes.find(function(estudiante){
    return estudiante.id==3
})
console.log(buscador)

let filtro=estudiantes.filter(function(estudiante){
    return estudiante.id==3
})
console.log(filtro)

let busqueda=estudiantes.some(function(estudiante){
    return estudiante.id==3
})
console.log(busqueda)