console.log('WH-0.js-Start');

//  Parte Superior
    ConstructCoreDiv();
    Constructheader();
    ConstructHMenu();

//  Parte Central - I
    ConstructBodyDiv('row','lcolumn','rcolumn','CBDl','CBDr');
    NoteLine(NoTes.N1,'CBDl','InRow2','Inp');
    ConstructParBox(ParsName,Set,'CBDl','InColumn','InColumn','InRow');
    ConstructParBox(ParsName1,Set1,'CBDl','InColumn','InColumn','InRow');
    NoteLine(NoTes.N2,'CBDl','InRow2','Inp');
    ConstructCtesBox(CtesName,'CBDl','InColumn22','InColumn22','InRow');
    ConstructImageZone('CBDr','myChart');

//  Parte Central - II
    ConstructImageZone('CBDr','myChart3');
    ConstructImageZone('CBDr','myChart2');
    NoteLine(NoTes.N3,'CBDl','InRow2','Inp');
    ConstructTableZone('CBDl','TableContent');
    NoteLine(NoTes.N4,'CBDl','InRow2','Inp');
    ConstructTableZone('CBDl','TableContent2');

//  Async Code !Warning!
    FR2();                                                                      // Leitura de dados
    Pupulator();                                                                // Pupula os Paramteros

//  Carregando o Exemplo inicial
    DataHolder = data;                                                          // Acumulador
    Compositor(Mockdata);                                                       // Remove o Delay inicial
//  SendPost(DataHolder.Exe);                                                   // Compositor de resultados
//  ServerGreeting();