import fs from "fs";
import path from "path";

let input = process.argv.slice(2);
console.log(input);

//Schema
interface Schema{
    in : {
        parameters: Parameters;
    };
    out : { 
        parameters: Parameters;
    };
    //scenarios : Scenarios;
}

interface Scenario{
    
}

interface Scenarios{
    [key: string]: { in: In,out: Out}
}

//bör required vara parameters?
interface In {
    required?: string[];
}

//bör required vara parameters?
interface Out{
    parameters: string[];
}

interface Parameters {
    [key: string]: Parameter;
}

interface Parameter {
    [key: string] : number | string | boolean;
}

fs.readFile(path.resolve(__dirname, input[0]), (err, data) => {
    if (err) throw err;

    let schemaObj: any = JSON.parse(data.toString());

    let baseSchema: any = {};
    baseSchema.type = "object";
    baseSchema.properties = schemaObj.in.parameters;
    
    //console.log("Type: ", baseSchema.type)
    //console.log("Properties: ",baseSchema.properties)

    let schemeArr: Schema[];
    let scenarios: Scenarios = schemaObj.scenarios;

    for(const scenarioKey in schemaObj.scenarios){

        //Each in and out parameters in scenarios
        let ins = scenarios[scenarioKey].in;
        let outs = scenarios[scenarioKey].out;

        console.log('Scenario:', scenarioKey)
        ins.forEach(value => {
            console.log(schemaObj.in[value]);
            // console.log('value:', value)
        });   
    }
    //console.log("Scenarios", scenarios);

    let baseData = JSON.stringify(scenarios, null, 4);
    
    fs.writeFile('Schema.txt', baseData, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});

/*
-i
-o
*/