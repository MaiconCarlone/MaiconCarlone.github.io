console.log('WH-2.js-Start');
Chart.defaults.global.defaultFontFamily='"Fira Mono", monospace';

// Funcao Administrativa de Escolha do Server - Chamar Apenas Pelo Console
function DefUrl(Def){
    UrlPath     = Conf[Def] + ":" + Conf.P;
    JsonPayload = "http://" + UrlPath + "/JsonPayload";
    Greeting    = "http://" + UrlPath + "/Greeting";
    console.log(UrlPath,JsonPayload,Greeting);
    ServerGreeting();
}

// Cria Estrutura de Salvamento Adequada
function BuildSaveFile(InObj){
    let element = ParsName2[0]+'-'+Set2[1];
    let InData  = document.getElementById(element);
    
    if (DataHolder[InData.value]){
        //console.log(InData.value);
        ResultHolder[InData.value] = InObj;
    };
    
};

// Comunicacao com o Servidor para Greeting Payload
function ServerGreeting(){
    let xhrG    = new XMLHttpRequest();
    let H2      = document.getElementById('Server');
    let H3      = document.getElementById('Status');
    
    xhrG.open("POST", Greeting, true);
    xhrG.setRequestHeader('Content-Type', 'application/json');
    xhrG.send(null);
    
    xhrG.onreadystatechange = function() {
        if (xhrG.readyState == 4) {
            
            if (xhrG.status == 200){
                
                let ObjG = JSON.parse(xhrG.responseText);
                if (ObjG.Active == 'OK'){
                    H2.textContent = HeaderContent.ServerS1;
                };
                
            }else if(xhrG.status == 0){

                H2.textContent = HeaderContent.ServerS2;
            };  
        };
    };    
};


// Comunicacao com o Servidor por Get
function ServerGet(){
    let xhrGet   = new XMLHttpRequest();
    let H2      = document.getElementById('Server');
    let H3      = document.getElementById('Status');
    
    xhrGet.open("GET", GUrl(), true);
    xhrGet.setRequestHeader('Content-Type', 'application/json');
    xhrGet.send(null);

    xhrGet.onreadystatechange = function() {
        if (xhrGet.readyState == 4) {
            
            if (xhrGet.status == 200){
                
                let ObjGet = JSON.parse(xhrGet.responseText);
                console.log(ObjGet);
            }
        };
    }; 
};

// Corta a Url
function GUrl(){
    let CUrl   = window.location.search.substr(1);
    let NewUrl = GET + '?' + CUrl;
    return NewUrl
};

// Comunicacao com o Servidor para JsonPayload de Dados
function SendPost(data){
    let xhr = new XMLHttpRequest();
    let H4 = document.getElementById('Tasks');
    let H3 = document.getElementById('Status2');
    xhr.open("POST", JsonPayload, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            
            if (xhr.status == 200){
                let Obj = JSON.parse(xhr.responseText);
                Compositor(Obj);
                BuildSaveFile(Obj);
                H3.textContent = HeaderContent.Status2;
            }else{
                H3.textContent = HeaderContent.Status4;
            };
        };
    H4.textContent = HeaderContent.Tasks1;
    }; 
};

// Insere as Figuras e Tabelas com Base no Objeto Obj
function Compositor(Obj){
    Dotplot("myChart",Obj.X,Obj.Y,Obj.Y1,Obj.Scale);
    Dotplotline("myChart3",Obj.X,Obj.Y1,Obj.Y2,Obj.Y3,Obj.Scale);
    DotplotBar("myChart2",Obj.X,Obj.Y4,Obj.Y5,Obj.Scale);
    ConstructTable('TableContent',Obj.P,Obj.ME,Obj.Cb,Obj.CU);
    ConstructTable2('TableContent2',Obj.X,Obj.Y,Obj.Y1,Obj.Y2,Obj.Y3);   
};

// Muda o Formato de Dados para o Correto para Ser Plotado como Ponto
function TranslateData(A,B){
    let D =[];
    for (element in B){
        let a1 = { x: A[element], y: B[element] };
        D.push(a1);
    }
    return D;
};

// Cria e Destroi figuras - use com moderacao
function CorChart(chart){
      let DId0 = chart + '-' + 'Id0';
      let DId1 = chart + '-' + 'Id1';
      let D0   = document.getElementById(DId0);    
      
      if (document.getElementById(DId1)){
        D0.removeChild(document.getElementById(DId1)); }
        
      let DPlace = document.createElement('div');
      DPlace.id  = DId1;
      D0.appendChild(DPlace);
    
      let Ca     = document.createElement('canvas');
      Ca.id      = chart;
      DPlace.appendChild(Ca);
    
      return chart;
};

// Tabela de Parametros de Resposta
function ConstructTable(place,P,ME,Cb,Cu){
    D = document.getElementById(place);
    let Nll = 5;
    
    if (document.getElementById('T1Id1')){
        D.removeChild(document.getElementById('T1Id1')) }
    
    let T  = document.createElement('table');
    T.id   = 'T1Id1'; 
    
    for (let i = 0; i < Table.C1.length + 1; i++){
        
        if (i == 0){
            let Tr = document.createElement('tr'); 
            for (element of Table.L1){
                let Th = document.createElement('th');  
                Th.textContent = element;
                Tr.appendChild(Th);
                T.appendChild(Tr);      
            }
        } else {
            let il = i-1;
            let ContLine = [Table.C1[il],
                            P[il].toPrecision(Nll),
                            ME[il].toPrecision(Nll),
                            Cb[il].toPrecision(Nll),
                            Cu[il].toPrecision(Nll)];
            let Tr = document.createElement('tr'); 
            for (element of ContLine){
                let Th = document.createElement('td');  
                Th.textContent = element;
                Tr.appendChild(Th);
                T.appendChild(Tr);      
            }
        };
    };
    D.appendChild(T);
};

// Tabela Contendo os Dados Simulados Brutos
function ConstructTable2(place,X,Y,Y1,Y2,Y3){
    D = document.getElementById(place);
    let Nll = 5;
    
     if (document.getElementById('T1Id2')){
        D.removeChild(document.getElementById('T1Id2')) }
    
    let T  = document.createElement('table');
    T.id   = 'T1Id2';
    
    for (let i = 0; i < X.length + 1; i++){
        
        if (i == 0){
            let Tr = document.createElement('tr'); 
            for (element of Table.L2){
                let Th = document.createElement('th');  
                Th.textContent = element;
                Tr.appendChild(Th);
                T.appendChild(Tr);      
            }
        } else {
            let il = i-1;
            let ContLine = [
                            X[il].toPrecision(Nll),
                            Y[il].toPrecision(Nll),
                            Y1[il].toPrecision(Nll),
                            Y2[il].toPrecision(Nll),
                            Y3[il].toPrecision(Nll)
                            ];
            
            let Tr = document.createElement('tr'); 
            for (element of ContLine){
                let Th = document.createElement('td');  
                Th.textContent = element;
                Tr.appendChild(Th);
                T.appendChild(Tr);      
            }
        };
    };
    D.appendChild(T);
};

// Figura 1
function Dotplot(chart,X,Y1,Y2,S){
    
      chart = CorChart(chart);
    
      new Chart(chart, {
      type: "scatter",
      data: {  
        datasets: [{
          pointRadius: 3,
          pointBackgroundColor: "rgba(70, 70, 70, 0.5)",
          label: "Experimental Data",
          borderColor: 'rgba(70, 70, 70,0.0)',
          data: TranslateData(X,Y1)
        },{
          pointRadius: 3,
          pointBackgroundColor: "rgba(153, 51, 51,0.9)",
          label: "Simulated Data",
          borderColor: 'rgba(153, 51, 51,0.9)',
          data: TranslateData(X,Y2)
        }]
      },
      options: {
        legend: {display: true},
        scales: {
          xAxes: [{ticks: {min: S[0], max:S[1]},
                   gridLines: {display:false,drawBorder: true}                   
        }],
          yAxes: [{ticks: {min: S[2], max:1.2, stepSize:0.2},
                  gridLines: {display:true}}],
            
        }
      }
    });

};

// Figura 2
function Dotplotline(chart,X,Y1,Y2,Y3,S){
      chart = CorChart(chart);
      new Chart(chart, {
      type: "line",
      data: { 
        labels: X,  
        datasets: [{
          fill: false,
          pointRadius: 2,    
          label: "Confi. Inter. (C.I) - Lb",
          borderColor: 'rgba(0, 150, 0,0.3)',
          data: Y2
        },{
          fill: false,
          pointRadius: 2,  
          label: "Simulated Data",
          borderColor: 'rgba(153, 51, 51,0.9)',
          data: Y1
        },{
          fill: false,
          pointRadius: 2,  
          label: "Confi. Inter. (C.I) - Ub",
          borderColor: 'rgba(0, 0, 150,0.3)',
          data: Y3
        }]
      },
      options: {
        legend: {display: true},
        scales: {
          xAxes: [{ticks: {min: S[0], max:S[1]},
                   gridLines: {display:false,drawBorder: true}                   
        }],
          yAxes: [{ticks: {min: S[2], max:1.2, stepSize:0.2},
                  gridLines: {display:true}}],
            
        }
      }
    });

};

// Figura 3
function DotplotBar(chart,X,Y4,Y5,S){
      chart = CorChart(chart);
      new Chart(chart, {
      type: "bar",
      data: { 
        labels: X,  
        datasets: [{  
          label: "Normalized discrepancy between C.I. bounds",
          backgroundColor: 'rgba(153, 51, 51,0.2)',
          data: Y4
        },{  
          label: "Normalized discrepancy between Exp. and Simulated Data",
          backgroundColor: 'rgba(70, 70, 70,0.6)',
          data: Y5
        }]
      },
      options: {
        legend: {display: true},
        scales: {
          xAxes: [{ticks: {min: S[0], max:S[1]},
                   gridLines: {display:false,drawBorder: true}                   
        }],
          yAxes: [{ticks: {min: 0, max:1.2, stepSize:0.2},
                  gridLines: {display:true}}],
            
        }
      }
    });

};
