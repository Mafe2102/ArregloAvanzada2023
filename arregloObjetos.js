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

let filtrar = estudiantes.filter(function(estudiante){
    return estudiante.equipo=="mde"
})
console.log (filtrar)
