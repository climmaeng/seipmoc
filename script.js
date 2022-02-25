// ==============================    REGRA DE NEGÓCIO   ============================== //

function calculo() {

    // ==============================    VALORES INPUTS   ============================== //
    let visitaTecAvaliacao = Number(document.querySelector('#visitaTecnicaAvaliacao').value);
    let montagemDoContrato = Number(document.querySelector('#montagemDoContrato').value);
    let montagemDoPmoc = Number(document.querySelector('#montagemDoPmoc').value);
    let emissaoArtTrt = Number(document.querySelector('#emissaoArtTrt').value);
    let materialGrafico = Number(document.querySelector('#materialGrafico').value);
    let envioDocumentosClientes = Number(document.querySelector('#envioDocumentosClientes').value);
    let valorResponsavelTecnico = Number(document.querySelector('#valorResponsavelTecnico').value);
    let valorHoraManutencao = Number(document.querySelector('#valorHoraManutencao').value);
    let valorDeslocamentoVisita = Number(document.querySelector('#valorDeslocamentoVisita').value);
    let lucroDesejado = Number(document.querySelector('#lucroDesejado').value);
    let porcentagemComissao = Number(document.querySelector('#porcentagemComissao').value);
    let porcentagemNotaFiscal = Number(document.querySelector('#porcentagemNotaFiscal').value);
    let visitasRT = Number(document.querySelector('#visitasRT').value);
    let tempoVisitaRT = Number(document.querySelector('#tempoVisitaRT').value);
    let tempoElaboracaoRelatorios = Number(document.querySelector('#tempoElaboracaoRelatorios').value);
    let visitasManutencao = Number(document.querySelector('#visitasManutencao').value);
    let tempoVisitaManutencao = Number(document.querySelector('#tempoVisitaManutencao').value);
    let tempoPreenchimentoOss = Number(document.querySelector('#tempoPreenchimentoOss').value);
    let materiaisProdutos = Number(document.querySelector('#materiaisProdutos').value);
    let analiseLaboratorial = Number(document.querySelector('#analiseLaboratorial').value);


    // ==============================    CALCULOS   ============================== //

    let custosRTElaboracao = (montagemDoContrato * valorResponsavelTecnico) + (visitaTecAvaliacao * valorResponsavelTecnico) + (montagemDoPmoc * valorResponsavelTecnico)
    let custoElaboracao = custosRTElaboracao + materialGrafico + emissaoArtTrt + envioDocumentosClientes

    //Custo Acompanhamento (Responsável Técnico)
    let custoDeslocamentoVisitasRT = (visitasRT * valorDeslocamentoVisita)
    let custoRTAcompanhamento = (((valorResponsavelTecnico * tempoVisitaRT )+(valorResponsavelTecnico * tempoElaboracaoRelatorios)) * visitasRT)
    let custoAcompanhamento = custoRTAcompanhamento+custoDeslocamentoVisitasRT

    //Custo Manutencao
    let custoTecManutencao = (((valorHoraManutencao * tempoVisitaManutencao)+(valorHoraManutencao * tempoPreenchimentoOss)) * visitasManutencao)
    console.log(custoTecManutencao)
    let custoDeslocamentoManutencao = (visitasManutencao * valorDeslocamentoVisita)
    let custoManutencao = custoTecManutencao + custoDeslocamentoManutencao + materiaisProdutos

    //Análise Laboratorial

    //Custo Responsável Técnico
    let custoRT = valorResponsavelTecnico * (montagemDoContrato + visitaTecAvaliacao + montagemDoPmoc+ (visitasRT * tempoVisitaRT) + (tempoElaboracaoRelatorios * visitasRT))

    //Valor PMOC
    let valorPmoc = (custoElaboracao + custoAcompanhamento + custoManutencao + analiseLaboratorial + ((custoElaboracao + custoAcompanhamento + custoManutencao + analiseLaboratorial)*(lucroDesejado / 100)))/(1-((porcentagemNotaFiscal/100)+(porcentagemComissao/100)))

    //Comissão Vendedor
    let comissao = valorPmoc * (porcentagemComissao / 100)

    //Imposto
    let imposto = valorPmoc * (porcentagemNotaFiscal / 100)

    //Outros custos
    let outrosCustos = analiseLaboratorial + comissao + imposto

    //Lucro Empresa
    let lucroEmpresa = valorPmoc - (custoElaboracao + custoAcompanhamento + custoManutencao + analiseLaboratorial + imposto + comissao)

    
    // ==============================    PREENCHIMENTO RESULTADO   ============================== //

    //Box Custo Elaboração
    document.querySelector('#custoElaboracaoBox').innerHTML = `R$ ${custoElaboracao.toFixed(2)}`
    document.querySelector('#custoElaboracaoRT').innerHTML = `Responsável Técnico: R$ ${custosRTElaboracao.toFixed(2)}`
    document.querySelector('#custoEmissaoARTTRT').innerHTML = `Emissão ART/TRT: R$ ${emissaoArtTrt.toFixed(2)}`
    document.querySelector('#custoEnvioDoc').innerHTML = `Envio Documentação: R$ ${envioDocumentosClientes.toFixed(2)}`
    document.querySelector('#custoMaterialGraf').innerHTML = `Material Gráfico: R$ ${materialGrafico.toFixed(2)}`

    //Box Custo Acompanhamento Responsável Técnico
    document.querySelector('#custoAcompanhamentoBox').innerHTML = `R$ ${custoAcompanhamento.toFixed(2)}`
    document.querySelector('#custoRTAcompanhamento').innerHTML = `Responsável Técnico: R$ ${custoRTAcompanhamento.toFixed(2)}`
    document.querySelector('#custoRTDeslAcompanhamento').innerHTML = `Deslocamento: R$ ${custoDeslocamentoVisitasRT.toFixed(2)}`

    //Box Custo Manutenção
    document.querySelector('#custoManutencaoBox').innerHTML = `R$ ${custoManutencao.toFixed(2)}`
    document.querySelector('#custoTecMan').innerHTML = `Técnico Manutenção: R$ ${custoTecManutencao.toFixed(2)}`
    document.querySelector('#custoDeslMan').innerHTML = `Deslocamento: R$ ${custoDeslocamentoManutencao.toFixed(2)}`
    document.querySelector('#custoMatProdutos').innerHTML = `Materiais e Produtos: R$ ${materiaisProdutos.toFixed(2)}`

    //Box Outros Custos
    document.querySelector('#outrosCustosBox').innerHTML = `R$ ${outrosCustos.toFixed(2)}`
    document.querySelector('#custoLaboratorio').innerHTML = `Análise Laboratorial: R$ ${analiseLaboratorial.toFixed(2)}`
    document.querySelector('#custoComissao').innerHTML = `Comissão: R$ ${comissao.toFixed(2)}`
    document.querySelector('#custoImposto').innerHTML = `Imposto Nota Fiscal: R$ ${imposto.toFixed(2)}`

    //Box Valor PMOC
    document.querySelector('#valorPmocBox').innerHTML = `R$ ${valorPmoc.toFixed(2)}`

    //Box Lucro Empresa
    document.querySelector('#lucroEmpresa').innerHTML = `R$ ${lucroEmpresa.toFixed(2)}`
}
//Custos Elaboracção



// ================================================================================================= //
// ===================================    LIMPAR VALORES INPUT   =================================== //
// ================================================================================================= //

function limpaValores() {
    document.querySelector('#visitaTecnicaAvaliacao').value = 0
    document.querySelector('#montagemDoContrato').value = 0
    document.querySelector('#montagemDoPmoc').value = 0
    document.querySelector('#emissaoArtTrt').value = 0
    document.querySelector('#materialGrafico').value = 0
    document.querySelector('#envioDocumentosClientes').value = 0
    document.querySelector('#valorResponsavelTecnico').value = 0
    document.querySelector('#valorHoraManutencao').value = 0
    document.querySelector('#valorDeslocamentoVisita').value = 0
    document.querySelector('#lucroDesejado').value = 0
    document.querySelector('#porcentagemComissao').value = 0
    document.querySelector('#porcentagemNotaFiscal').value = 0
    document.querySelector('#visitasRT').value = 0
    document.querySelector('#tempoVisitaRT').value = 0
    document.querySelector('#tempoElaboracaoRelatorios').value = 0
    document.querySelector('#visitasManutencao').value = 0
    document.querySelector('#tempoVisitaManutencao').value = 0
    document.querySelector('#tempoPreenchimentoOss').value = 0
    document.querySelector('#materiaisProdutos').value = 0
    document.querySelector('#analiseLaboratorial').value = 0

}


// ================================================================================== //
// ===================================    TELAS   =================================== //
// ================================================================================== //

const GetDisplay = {
    displayInitial: document.querySelector('.inicial'),
    displayForm: document.querySelector('.form'),
    displayResults: document.querySelector('.resultados'),

}

const Display = {
    initial() {
        GetDisplay.displayInitial.style.display = "flex";
        GetDisplay.displayForm.style.display = "none";
        GetDisplay.displayResults.style.display = "none";
    },
    form() {
        GetDisplay.displayInitial.style.display = "none";
        GetDisplay.displayForm.style.display = "flex";
        GetDisplay.displayResults.style.display = "none";
    },
    results() {
        GetDisplay.displayInitial.style.display = "none";
        GetDisplay.displayForm.style.display = "none";
        GetDisplay.displayResults.style.display = "flex";
    }
} 



