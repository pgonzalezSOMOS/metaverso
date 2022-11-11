//Import images for the project
import Paths from "../src/assets/images/Paths.svg"
import project from "../src/assets/images/project.png"
import ind_telefonica from "../src/assets/images/ind_telefonica.png"
import ind_mafre from "../src/assets/images/ind_mafre.png"
import ind_acciona from "../src/assets/images/ind_acciona.png"
import experiences from "../src/assets/images/experiences.png"
// import glasses from "../src/assets/images/glasses.svg"
import repsol_project from "../src/assets/images/repsol_project.png"


//Data
let customData = {
    contentInfo : [
        {
        BoxTitle : "CREACIÓN DE METAVERSOS", 
        BoxDescription : ["Diseñamos y desarrollamos experiencias inmersivas en las principales plataformas como Decentraland, Roblox o Spatial", "Creamos metaversos ad-hoc personalizados como por ejemplo showrooms, conferencias o workshops virtuales", "Experiencias gamificadas y tokenizadas"],
        Image: experiences
        },
        
        {
            BoxTitle : "CONTENIDOS INMERSIVOS", 
            BoxDescription : ["Modelado 3D, video y renderizado de alta calidad", "Aplicaciones de realidad virtual y aumentada", "Video 360 y bla bla bls"],
        },
        {
            BoxTitle : "AVATARES Y GAMIFICACIÓN", 
            BoxDescription: ["Programación de juegos para el entretenimiento y la socialización", "Creación de avatares personalizados o con Ready player me", "Creación de wearables y skins"],
        },
        {
            BoxTitle : "ESTRATEGIA Y CONSULTORÍA", 
            BoxDescription: ["Estratégia y consultoria de marca en el metaverso", "Diseño de experiencias formativas y demostrativas de productos","Campañas de redes e influencers"],
        },
    ], 
    projects : [
        {
            id: 1,
            img : project,
            fullImage : repsol_project,
            brand: "REPSOL",
            project: "DESCENTRALAND",
            title: "REPSOL X DESCENTRALAND",
            description : [
             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus." , "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.", " Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."]
        },
        {
            id: 2,
            img : project,
            fullImage : repsol_project,
            brand: "TELEFÓNICA",
            project: "METAVERSE",
            title: "TELEFÓNICA X METAVERSE",
            description:[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus." , "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.", " Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."]
        },
        {
            id: 3,
            img : project,
            fullImage : repsol_project,
            brand: "MAFRE",
            project: "SPATIAL",
            title: "MAFRE X SPATIAL",
            description:[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus." , "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.", " Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."]
        },
        {
             id: 4,
             img : project,
             fullImage : repsol_project,
             brand: "ACCIONA",
             project: "VR / AR",
             title: "ACCIONA X VR / AR",
             description: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus." , "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.", " Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."]
        },
        {
            id: 5,
            img : project,
            fullImage : repsol_project,
            brand: "KATA MEDIA",
            project: "ROBLOX",
            title: "KATA MEDIA X ROBLOX",
            description: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus." , "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.", " Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."]
        },
    ]
}

export default customData;


