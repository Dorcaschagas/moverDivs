class CriarCaixas {
    constructor(container) {
        this.$container = $(container)
    }

    montarCaixas(id, titulo) {
        this.$container.append(`
            <div id="div${id}" class="box-container col-2 p-3 me-2 border bg-light">
                ${titulo}
            </div>
        `);
    }

    montarCaixaGrandePequena(id, titulo, caixa) {
        this.$container.append(`
        <div id="div${id}" class="large-container">
            <p class="m-0 p-0 w-100 bg-light text-center titulo">${titulo}</p>
            <div id="smallBoxlarge${id}" class="small-box w-100">${caixa}</div>
        </div>
    `)
    }
}

function carregarPagina(pagina) {
    $('.vertical, .horizontal, .caixaGrandePequena').removeClass('btnClicado')
    if(pagina == 'vertical.html'){
        $('.vertical').addClass('btnClicado')
    }
    if(pagina == 'horizontal.html'){
        $('.horizontal').addClass('btnClicado')
    }
    if(pagina == 'caixaGrandePequena.html'){
        $('.caixaGrandePequena').addClass('btnClicado')
    }
    $('.carregarConteudo').load(`${pagina}`)
}

carregarPagina('vertical.html')