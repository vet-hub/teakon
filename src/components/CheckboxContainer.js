
export default function CheckboxContainer ({selectedCategory}) {
    /* TODO wann fetchen? arrayquellen anpassen */
    let subCriteriaArray=[]
    
switch(selectedCategory){
    case "origin":
        subCriteriaArray=["origin1","origin2"];
        break;
    case "coffein":
        subCriteriaArray=["coffein1","coffein2"];
        break;
    case "flavour":
        subCriteriaArray=["flavour1","flavour2","flavour3"];
        break;
    case "effect":
        subCriteriaArray=["effect2","effect1"];
        break;
    default:
        subCriteriaArray = ["tee1", "tee2", "tee3"];
        break;
}
    return (
    <div className="checkboxContainer shadow border my-5 w-3/4 px-5 py-2 ">
        {subCriteriaArray.map(entry=>{return( 
            <div>
                <input type="checkbox" id={entry} />
                <label>{entry}</label>
            </div>
        )})}
    </div>
    )

};