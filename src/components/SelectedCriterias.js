export default 
function SelectedCriterias({chosenCriterias,setChosenCriterias}){
    const unselectCriteria =()=>{
        /* search for index */
        /* remove from array by index */
        setChosenCriterias()/* newArray without unselected criteria */
    }
        return(
        <div className="flex shadow border my-5 w-3/4 px-5 ">
        {chosenCriterias.map(entry=>{
            return(
                <div className="shadow border my-1 py-1 px-2 flex ">
                    <p className="mx-1">{entry}</p>
                    <p className="mx-1 ">x</p> {/* x icon suggesting delete */}
                </div>
            )
        })}
        </div>
        )

}