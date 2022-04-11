// Base Project: https://irisclustering.herokuapp.com/
// https://www.codegrepper.com/code-examples/javascript/javascript+load+file+from+path
//https://www.geeksforgeeks.org/how-to-read-a-local-text-file-using-javascript/
console.log('WH-1.js-Start');

// Div. Principal - Tudo dentro 
function ConstructCoreDiv(){
    let CDiv = document.createElement('div');
    CDiv.id  = 'CoreDiv';
    document.body.appendChild(CDiv);
    return CDiv;
};

// Constro o Header
function Constructheader(){
    let D1  = document.createElement('div');
    let D2  = document.createElement('div');
    let H1 = document.createElement('h2');
    let H2 = document.createElement('h3');
    let H3 = document.createElement('h3');
    let H4 = document.createElement('h3');
    let H5 = document.createElement('h3');
    
    D1.className   = 'BoxOne';
    D1.appendChild(D2);
    D2.className   = 'row';
    
    H1.textContent = HeaderContent.Title;
    H2.textContent = HeaderContent.ServerS1;
    H3.textContent = HeaderContent.Status1;
    H4.textContent = HeaderContent.Tasks1;
    H5.textContent = HeaderContent.Status5;
    
    H2.id = 'Server';
    H3.id = 'Status';
    H4.id = 'Tasks';
    H5.id = 'Status2';
    
    D2.appendChild(H1);
    D2.appendChild(H2);
    D2.appendChild(H3);
    D2.appendChild(H4);
    D2.appendChild(H5);
    document.getElementById('CoreDiv').appendChild(D1);
    
    ServerGreeting();
};

// Linha de Menu
function ConstructHMenu(){
    let D1 = document.createElement('div');
    D1.className = 'Mrow';
    document.getElementById('CoreDiv').appendChild(D1);
    
    for (element of ['Input','Type','Band','Run']){
        let D2 = document.createElement('div');
        D2.className = 'Mcolumn';
        let ElId  = 'MContainer-' + element;
        D2.id = ElId;
        D1.appendChild(D2);
        
        if (element == 'Input'){ConstructDataLoader(ElId)};
        if (element == 'Type'){CostructExport(ElId)};
        if (element == 'Band'){ConstructParBox(ParsName2,Set2,ElId,'Inp','InColumn2','InRow2')};
        if (element == 'Run'){CostructRunner(ElId)};
    };
};

// Div. do Body
function ConstructBodyDiv(r,lc,rc,cl,cr){
    let D1 = document.createElement('div');
    let D2 = document.createElement('div');
    let D3 = document.createElement('div');
    
    D1.className = r;
    D2.className = lc;
    D3.className = rc;
    D2.id        = cl;
    D3.id        = cr;

    D1.appendChild(D2);
    D1.appendChild(D3);
    
    document.getElementById('CoreDiv').appendChild(D1);
};

// Caixa e Botao de Leitura de Arquivo
function ConstructDataLoader(place){
    let D = document.createElement('div');
    let D2 = document.createElement('div');
    let In = document.createElement('input');
    let Lab = document.createElement('label');
    
    D.className   = 'BoxOne';
    D2.className = 'LabelD2';
    Lab.htmlFor = 'arquivo';
    Lab.textContent = 'Select The Spectra Input File (.Json)';
    In.type = 'file';
    In.name =  'arquivo';
    In.id = 'arquivo';
    
    D.appendChild(D2);
    D2.appendChild(Lab);
    D2.appendChild(In);
    
    document.getElementById(place).appendChild(D);
}

// Funcao de Leitura de daods
function FR2() {
        document.getElementById('arquivo')
        .addEventListener('change', function() {
              
        let fr = new FileReader();
            
            fr.onload = function(e){
                let Objr = JSON.parse(e.target.result);
                DataHolder = Objr;
                //console.log(Objr);
            };
              
            fr.readAsText(this.files[0]);
                
        });
};

// Constroi as Linhas dee Parametros
function ConstructParLine(Name,InSet,place,CHeader,Cplace,Iplace){
    let D = document.createElement('div');
    let Drow = document.createElement('div');
    
    D.className    = 'BoxOne';
    D.id = 'D-' + Name;
    Drow.className = Iplace;
    D.appendChild(Drow);
    
    for (element of InSet){
        let Column = document.createElement('div');
        let In = {};
        
        if (element == InSet[0]){
            In = document.createElement('p');
            In.textContent = Name;
            Column.className = CHeader;
        }else{
            In = document.createElement('input');
            In.placeholder = element;
            Column.className = Cplace;
        }
        
        In.id = Name + '-' + element;
        //console.log(In.id);
        
        Column.appendChild(In);
        Drow.appendChild(Column);
    };
    document.getElementById(place).appendChild(D);
};

// Constroi a Caixa de Parametros
function ConstructParBox(PN,InSet,place,CHeader,Cplace,Iplace){
    for (element of PN){
        ConstructParLine(element,InSet,place,CHeader,Cplace,Iplace);
    };
};

// Executa a Simulacao
function CostructRunner(place){
    let D  = document.createElement('div');
    let B  = document.createElement('button');
    let H4 = document.getElementById('Tasks');
    let Dm = document.getElementById('D-'+ParsName2[0]);
    
    D.className   = 'BoxOne';
    B.textContent = Label.B1;
    B.className = 'ButtonR';
    
    B.onclick  = function(){
        element = ParsName2[0]+'-'+Set2[1];
        InData  = document.getElementById(element);
        
        if (DataHolder[InData.value]){
            
            Dm.style.backgroundColor = 'white';
            H4.textContent = HeaderContent.Tasks2;
            GetPopulation();
            SendPost(DataHolder[InData.value]);
        } else {
            InData.value = null;
            InData.placeholder = 'Error in input Data';
            Dm.style.backgroundColor = Alert.Error;
        };
    };
    
    D.appendChild(B);
    document.getElementById(place).appendChild(D)   
};

// Exporta o resultado
function CostructExport(place){
    let D = document.createElement('div');
    let B = document.createElement('button');
    
    D.className   = 'BoxOne';
    B.textContent = Label.B2;
    B.className   = 'ButtonR'
    
    B.onclick = function(){
        for (element in DataHolder){
             
             if(ResultHolder[element]){}else{
                ResultHolder[element] = DataHolder[element];
                };
        };
        
        Download(JSON.stringify(ResultHolder), 'Data.Json', 'application/json')
    }
    
    D.appendChild(B);
    document.getElementById(place).appendChild(D)   
};

// Download Content
function Download(content, filename, contentType){
  let a    = document.createElement('a');
  let file = new Blob([content], {type: contentType});
  
  a.href= URL.createObjectURL(file);
  a.download = filename;
  a.click();

  URL.revokeObjectURL(a.href);
};

// Zonas de Imagem
function ConstructImageZone(place,chart){
    let D = document.createElement('div');
    let D2 = document.createElement('div');
    
    D.className   = 'BoxOne';
    D.id  = chart + '-' + 'Id0'
    D2.id = chart + '-' + 'Id1'

    D.appendChild(D2);
    document.getElementById(place).appendChild(D);
};

// Zonas de Tabela
function ConstructTableZone(place,Did){
    let D  = document.createElement('div');
    D.className   = 'BoxOne';
    D.id          =  Did;
    
    document.getElementById(place).appendChild(D);
};

// Popula os Parametros
function PopulousLC(D,Pn,Sn){
    let c = 0;
    for (element1 of Pn){
        for (element2 of Sn){
            if (element2 !=  'Name'){
                
                InId = element1+ '-' +element2;
                InId = InId.replaceAll("\\s", "");
                //console.log(InId);
                Inplace = document.getElementById(InId);
                Inplace.value = D[element2][c];
            };
        };
        c = c + 1;
    };
};

// Popula a Escala
function PopulousL(D,Pn,Sn,Ob){
    let c = -1;
    for (element1 of Pn){
        for (element2 of Sn){
            if (element2 !=  'Name'){
                
                InId = element1+ '-' +element2;
                InId = InId.replaceAll("\\s", "");
                //console.log(c," ",InId);
                Inplace = document.getElementById(InId);
                Inplace.value = D[Ob][c];
            };
             c = c + 1;
        };
    };
};

// Popula as Constantes
function PopulousCtes(D,Pn,Ob){
    let c = 0;
    for (element of Pn){
        let InId = element + '-1';
        //console.log(element,InId);
        Inplace = document.getElementById(InId);
        Inplace.value = D[Ob][c];
        c += 1;
    };
};

// Chama as funcoes de populacao
function Pupulator(){
    let H3 = document.getElementById('Status');
    element = ParsName2[0]+'-'+Set2[1];
    InData  = document.getElementById(element);
    //console.log(InData);
    
    InData.oninput = function(){
        if (DataHolder[InData.value]){
            H3.textContent = HeaderContent.Status3;
            PopulousLC(DataHolder[InData.value],ParsName,Set);
            PopulousL(DataHolder[InData.value],ParsName1,Set1,'Scale');
            PopulousCtes(DataHolder[InData.value],CtesName,'Ct');
        }else{
            H3.textContent = HeaderContent.Status1;
        };
        
        };
};

// Coleta todos os Valores,chama tdas as GetPopulous*
function GetPopulation(){
    element = ParsName2[0]+'-'+Set2[1];
    InData  = document.getElementById(element);
    
    if (DataHolder[InData.value]){
        GetPopulousLC(DataHolder[InData.value],ParsName,Set);
        GetPopulousL(DataHolder[InData.value],ParsName1,Set1,'Scale');
        GetPopulousCtes(DataHolder[InData.value],CtesName,'Ct');
    };
};

// Coleta Valores das constantes
function GetPopulousCtes(D,Pn,Sn){
    let c = 0;
    
    for (element of Pn){
        InId = element + '-1';
        Inplace = document.getElementById(InId);
        D[Sn][c] = JSON.parse(Inplace.value);
        
        c = c + 1;
    };
    
    let rid = 'D-'+Pn[0];
    let DivPar = document.getElementById(rid);
    
    if (D[Sn][0] > 0){
        DivPar.style.backgroundColor = 'white';
    }else{
        DivPar.style.backgroundColor = Alert.Error;
    }
};

// Coleta Valores da Escala
function GetPopulousLC(D,Pn,Sn){
    let c = 0;
    for (element1 of Pn){
        let c1 = 0;
        let Accumulator = [];
        let rid = 'D-'+element1;
        let DivPar = document.getElementById(rid);
        
        for (element2 of Sn){
            
            if (element2 !=  'Name'){
                InId = element1+ '-' +element2;
                InId = InId.replaceAll("\\s", "");
                Inplace = document.getElementById(InId);
                D[element2][c] = JSON.parse(Inplace.value);
                
                Accumulator[c1] = D[element2][c];
                c1 = c1 + 1;
            };
        };
        
        if (Accumulator[0] <= Accumulator[1] && Accumulator[2] >= Accumulator[0] && Accumulator[2] <= Accumulator[1]){
            DivPar.style.backgroundColor = 'white';
        }else{
            DivPar.style.backgroundColor = Alert.Error;
        }
        c = c + 1;
    };
};

// Coleta Valores dos Parametros 
function GetPopulousL(D,Pn,Sn,Ob){
    let c = -1;
    for (element1 of Pn){
        let c1 = 0;
        let Accumulator = [];
        let rid = 'D-'+element1;
        let DivPar = document.getElementById(rid);
        
        for (element2 of Sn){
            
            if (element2 !=  'Name'){   
                InId = element1+ '-' +element2;
                InId = InId.replaceAll("\\s", "");
                Inplace = document.getElementById(InId);
                D[Ob][c] = JSON.parse(Inplace.value);
                
                Accumulator[c1] = D[Ob][c];
                c1 = c1 + 1;
            };
             c = c + 1;
        };
        
        //console.info(Accumulator);
        if (Accumulator[0] < Accumulator[1]){
            DivPar.style.backgroundColor = 'white';
        }else{
            DivPar.style.backgroundColor = Alert.Error;
        }
    };
};


// Constori Linha das Ctes
function CtesLines(CteName,place,CHeader,Cplace,Iplace){
    let D    = document.createElement('div');
    let Drow = document.createElement('div');
    
    D.className     = 'BoxOne';
    D.id            = 'D-' + CteName;
    Drow.className  = Iplace;
    D.appendChild(Drow);
    
    for (element in [0,1]){
        let Column = document.createElement('div');
        let In = {};
        
        if (element == 0){
            In = document.createElement('p');
            In.textContent = CteName;
            Column.className = CHeader;
        }else{
            In = document.createElement('input');
            In.placeholder = CteName + ' Value';
            Column.className = Cplace;
        }
        
        In.id = CteName + '-' + element;
        //console.log(In.id);
        
        Column.appendChild(In);
        Drow.appendChild(Column);
    };
    document.getElementById(place).appendChild(D);
}


// Constroi a Caixa de Constantes
function ConstructCtesBox(PN,place,CHeader,Cplace,Iplace){
    let Drow = document.createElement('div');
    let Dl   = document.createElement('div');
    let Dr   = document.createElement('div');
    let Pl   = document.getElementById(place);
    
    Drow.className  = 'Mrow';
    Dl.className    = 'Halfcolumn';
    Dr.className    = 'Halfcolumn';
    
    Pl.appendChild(Drow);
    Drow.appendChild(Dl);
    Drow.appendChild(Dr);
    
    Dl.id = PN[0];
    Dr.id = PN[1];
    
    CtesLines(PN[0],Dl.id,CHeader,Cplace,Iplace);
    CtesLines(PN[1],Dr.id,CHeader,Cplace,Iplace);

};


// Constori Notacao de Caixa
function NoteLine(Name,place,Cl1,Cl2){
    let D           = document.createElement('div');
    let Drow        = document.createElement('div');
    let In          = document.createElement('p');
    
    D.className     = 'BoxOne';
    D.id            = 'Note-Line-' + Name;
    Drow.className  = Cl1;
    
    In.textContent  = Name;
    In.id           = Name + '-Note';
    In.className    = Cl2;
    
    D.style.backgroundColor = 'rgb(242, 242, 242)';
    D.appendChild(Drow);
    Drow.appendChild(In);
    document.getElementById(place).appendChild(D);
};











