const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const backgroundMusic = document.getElementById('backgroundMusic');

const story = {
    start: {
        text: "En un rincón lejano del universo, en un pequeño y colorido planeta, vivía Pou, una adorable criatura en forma de patata. Pou era curioso y lleno de energía, pero había algo que siempre había deseado: encontrar a su mamá.",
        choices: [
            { text: "IR A BUSCAR A suMAMA", next: 'signal' },
            { text: "BUSCAR RIQUESA ", next: 'asteroids' },
            { text: "BUSCAR PENSION ALIMENTICIA", next: 'planets' }
        ]
    },
    signal: {
        text: "escuchar una bos que le llama y es la mama",
        choices: [
            { text: "IR EN BUSQUEDA DE MICHA MORRA", next: 'board' },
            { text: "SEGIR LA VOZ COMO ESQUISO", next: 'investigate' }
        ]
    },
    asteroids: {
        text: "VAS POR EL CAMINO DEL DINERO ",
        choices: [
            { text: "Seguir la pista", next: 'follow' }
        ]
    },
    planets: {
        text: "INVESTIGAS COMO DEMANDARLA.",
        choices: [
            { text: "SABES TUS DERECHOS", next: 'artifact' }
        ]
    },
    board: {
        text: "ENCUENTRAS UN SENDERO LLENO DE POUAS PERO AL PASO DEL TIEMPO TE DAS CUANTA QUE EL SECTSO NO LO ES TODO Y QUIERES A TU MAMA DE VUELTA",
        choices: [
            { text: "BUSCAR MAS POUAS CHIDAS", next: 'takeArtifact' },
            { text: "REFLEXIONAR", next: 'negotiate' }
        ]
    },
    investigate: {
        text: "VAS EN BUSQUEDA DE TU MAMA Y BUSCAS EL ORIGEN",
        choices: [
            { text: "CORRER PARA BUSCAR A SU MOM", next: 'help' }
        ]
    },
    follow: {
        text: "ENCUENTRAS UN VIDEO DE CARLOS MUÑOS Y COMO SER RICO",
        choices: [
            { text: "VER VIDEO", next: 'temple' }
        ]
    },
    artifact: {
        text: "LA CONFRONTAS POR EL ABANDONO",
        choices: [
            { text: "USAR TUS DERECHOS", next: 'useArtifact' },
            { text: "RECAPACITAR Y PENAR EN LA CHINGA QUE TE DARA", next: 'destroyArtifact' }
        ]
    },
    takeArtifact: {
        text: "TODO ERA UNA TRAMPA Y EN REALIDAD ERA UN POU TRAVESTI ",
        choices: [
            { text: "PELEAS POR EL BIEN DE TU HUMANIDAD", next: 'fight' },
            { text: "ENTREGARTE ", next: 'portal' }
        ]
    },
    negotiate: {
        text: "REFLEXIONAS TANTO QUE YA PIERDES TU FELICIDAD POR NO HABER IDO POR TU MOM",
        choices: [
            { text: "IR POR TU MOM", next: 'returnArtifact' },
            { text: "CAER DE NUEVO EN LOS ENCANTOS DE UNA POUA", next: 'secureArtifact' }
        ]
    },
    help: {
        text: "ENCUENTRAS A TU MAMA Y SE ABRAZAN PORQUE TE QUIERE MUCHO",
        choices: [
            { text: "TE LA LLEVAS A TU CASA ", next: 'adventures' }
        ]
    },
    temple: {
        text: "ENCUENTRAS BUENOS COMENTARIOS ",
        choices: [
            { text: "SEGIR LOS CONSEJOS", next: 'takeArtifact' },
            { text: "VER QUE ES UNA TONTERIA", next: 'leaveArtifact' }
        ]
    },
    useArtifact: {
        text: "ESTAN EN LA CORTE Y LE TOCA ARGUMENTAR",
        choices: [
            { text: "YO TE DI LA VIDA", next: 'parallel' },
            { text: "PREFIERES DEMANDAR AL PAPA", next: 'return' }
        ]
    },
    destroyArtifact: {
        text: "MEJOR CHAMBEAS Y ELLA TE HACE GISO",
        choices: [
            { text: "Reiniciar Juego", next: 'start' }
        ]
    },
    fight: {
        text: "SE HACE LA AUTOMURICION PERO ERA MENTIRA.",
        choices: [
            { text: "YA IR POR TU MAMA", next: 'safePlace' },
            { text: "YA MEJOR IR POR UNOS CHETOS", next: 'confront' }
        ]
    },
    portal: {
        text: "TE ENTREGAS Y TE DAS CUENTA QUE NO TE TRATARON MAL.",
        choices: [
            { text: "SEGUR AHI CON ELLOS", next: 'exploreDimension' },
            { text: "SEGIR EN BUSQUEDA DEL DINERO", next: 'findPortal' }
        ]
    },
    returnArtifact: {
        text: "ENCUENTRAS A TU MAMA PERO ELLA TE MADREA POR NO ESCOGERLA PRIMERO.",
        choices: [
            { text: "Reiniciar Juego", next: 'start' }
        ]
    },
    secureArtifact: {
        text: "VUELVES A CAER EN LOS ENCANTOS Y AHORA TODOS SON POU TAVESTIS",
        choices: [
            { text: "ENTREGARSE", next: 'hide' },
            { text: "MORIR", next: 'fight' }
        ]
    },
    adventures: {
        text: "LLEGAN A SU CASA Y TE HACE GISO",
        choices: [
            { text: "Reiniciar Juego", next: 'start' }
        ]
    },
    leaveArtifact: {
        text: "TE VUELKVES UN EMPREARIO GUAPO, pERO NI CON TODO EL DINERO ESTAS CON TU MOM.",
        choices: [
            { text: "Reiniciar Juego", next: 'start' }
        ]
    },
    parallel: {
        text: "CON ESE ARGUMENTO DESACREDITO TODAS LAS LEYES Y PERDISTE",
        choices: [
            { text: "Reiniciar Juego", next: 'start' }
        ]
    },
    return: {
        text: "LO DEMANDAS PERO SI EN TU VIDA NO APARECIO MENOS EN LA CORTE.",
        choices: [
            { text: "Reiniciar Juego", next: 'start' }
        ]
    },
    safePlace: {
        text: "VAS POR TU MAMA PERO TE CHINGA",
        choices: [
            { text: "Reiniciar Juego", next: 'start' }
        ]
    },
    confront: {
        text: "TE ESTAS COMIENDO UNOS CHETOS PERO TRISTE",
        choices: [
            { text: "Reiniciar Juego", next: 'start' }
        ]
    },
    exploreDimension: {
        text: "TE QUEDAS CON ELLOS Y TE HACEN GISO,PERO NO ES EL DE TU MOM.",
        choices: [
            { text: "Reiniciar Juego", next: 'start' }
        ]
    },
    findPortal: {
        text: "SIGUES LOS CONSEJOS DEL VIDEO Y QUIEBRAS",
        choices: [
            { text: "Reiniciar Juego", next: 'start' }
        ]
    },
    hide: {
        text: "SE ENTREGA Y LO HACEN TRAVESTI.",
        choices: [
            { text: "Reiniciar Juego", next: 'start' }
        ]
    }
};

function showStoryNode(node) {
    storyElement.innerHTML = story[node].text;
    choicesElement.innerHTML = '';
    story[node].choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => showStoryNode(choice.next);
        choicesElement.appendChild(button);
    });

    }

showStoryNode('start');
