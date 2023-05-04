export default 
function SelectedCriterias({chosenCriterias,setChosenCriterias}){
    const unselectCriteria =(e)=>{
        const indexToDelete = chosenCriterias.findIndex((entry)=>entry.name === e.target.parentNode.id);
        const chosenCriteriasTemp=[...chosenCriterias];
        chosenCriteriasTemp.splice(indexToDelete,1);
        setChosenCriterias(chosenCriteriasTemp);
    }
        return(
        <div className="flex flex-wrap shadow border rounded-xl my-5 w-3/4 px-5 ">
        {chosenCriterias.map(entry=>{
            return(
                <div key={entry.name} className="shadow border rounded-xl my-1 py-1 px-2 flex content-center grow-0 ">
                    <label className="mx-1 text-gray-500">{entry.name}</label>
                    <button id={entry.name} className="btn-xs btn-circle btn-outline w-6 shadow border " onClick={unselectCriteria}>
                        <svg id={entry.name} xmlns="http://www.w3.org/2000/svg" className=" " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            )
        })}
        </div>
        )

}