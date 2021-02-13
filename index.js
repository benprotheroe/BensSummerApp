import React, {useState, useEffect} from "react";
import {render} from "react-dom";

function App(){
    const [activities, setActivities] = useState([]);
    const [activity, setActivity]=useState("");
    console.log(activities);
    useEffect(()=>{
        localStorage.setItem("activities",JSON.stringify(activities));
    },[activities])

    function handleSubmitClick(event){
        event.preventDefault();
        setActivities([...activities,activity]);
        setActivity("");

    }
    return <><h1>Things we want to do this summer?</h1>
                <form onSubmit={handleSubmitClick}>
                    <input type="text" name={activity} value={activity} onChange={e => setActivity(e.target.value)}></input>
                    <input type="submit"></input>
                </form>
                <ul>{activities.map((item,index)=><li key={index} value={item}>{item}</li>)}</ul>
    </>

}
render(<App/>, document.querySelector("#root"));