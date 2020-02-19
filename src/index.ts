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

    // console.log(JSON.parse(data.toString()));
    let schemaObj: any = JSON.parse(data.toString());

    // const baseName = schemaObj.id;
    // const baseIn = schemaObj.in;
    // const baseOut = schemaObj.out;
    console.log("data: ", data)

    let baseSchema: any = {};
    baseSchema.type = "object";
    baseSchema.properties = schemaObj.in.parameters;

    console.log("Type: ", baseSchema.type)
    console.log("Properties: ",baseSchema.properties)

    let schemeArr: Schema[];

    let scenarios: Scenarios[];


    let iteration = 0;
    for(const scenarioKey in schemaObj.scenarios){
        console.log("Key: ",scenarioKey);
        console.log("Required: IN: ",(schemaObj.scenarios[scenarioKey].in));
        console.log("Out parameters: ",(schemaObj.scenarios[scenarioKey].out));
        //scenarios[iteration] = schemaObj.scenarios[scenarioKey].in
        iteration++;
    }
    
    // Schema
    // in
    // out

    // Scenarios
    // Vad är required och inte

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // let test : Schema;
    // test.in.parameters;
    // test.out.parameters;
    // test.scenarios;


    // console.log("Baseschema",baseSchema);
    // let baseData = JSON.stringify(baseSchema, null, 4);

    // fs.writeFile('Schema.txt', baseData, (err) => {
    //     if (err) throw err;
    //     console.log('The file has been savZed!');
    // });
});



/*
-i
-o
-id ligger längst nere
*/