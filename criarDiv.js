class CriarDivs{
    constructor(container){
        this.$container = $(container)
    }

    addDivCriacao(id, titulo, caixa){
        this.$container.append(`
            <div id="div${id}" class="box-container col-2 p-3 me-2 border bg-light">
                ${titulo}
            </div>
        `);
    }
}