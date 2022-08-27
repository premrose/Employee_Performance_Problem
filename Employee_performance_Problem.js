function sample(){
    var text = '{ "allData" : [' +
        '{ "Date": "23-02-2015", "ProjectName": "AAA ","Hours": 0.5,"Owner": "sankar","Team": "Design","BillingStatus": "Billable" },' +
        '{ "Date": "18-02-2015","ProjectName": "AAA ","Hours": 1.2,"Owner": "sdcs","Team": "Design","BillingStatus": "Billable" },' +
        '{ "Date": "17-02-2015","ProjectName": "BBB","Hours": 0.3,"Owner": "anumothu","Team": "Dev","BillingStatus": "Billable" } ]}'; 
        let a = [], b=[];
    var obj = JSON.parse(text);
    for (let i = 0; i<= text.length; i++) {
        for (let j = 0; j<= i; j++) {
            let name = obj.allData[i].Owner;
            let Project = obj.allData[i].ProjectName;
            let hours = obj.allData[i].Hours;
            let team = obj.allData[i].Team;
            let name1 = obj.allData[j].Owner;
            let Project1 = obj.allData[j].ProjectName;
            let hours1 = obj.allData[j].Hours;
            let team1 = obj.allData[j].Team;
            if ( hours < hours1 ) {
                a.push(name);
                console.log(a);
            }
            if(team === team1){
                b.push(team);
                console.log(b);
            }
        }
    }
        

}