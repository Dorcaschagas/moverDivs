class CriadorDiv{
    constructor(containerSelector){
        this.container = $(containerSelector);
    }

    criandoDivs(id, titulo, caixa){
        this.container.append(`
            <div id="${id}" class="large-container d-grid">
                <p class="m-0 p-0 w-100 bg-light text-center titulo">${titulo}</p>
                <div id="smallBox${id}" class="small-box w-100">${caixa}</div>
            </div>
        `)
    }
}

const criandoDiv = new CriadorDiv('.areaListas');
for (let i = 0; i < 5; i++) {
    criandoDiv.criandoDivs(`large${i}`,`titulo${i}`,`caixa${i}`)
}