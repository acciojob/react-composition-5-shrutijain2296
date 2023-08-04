
import React, {useState} from "react";


const Tabs = ({tabs, tabs2}) =>{
    let [tab1, setTab1] = useState("");
    let [tab2, setTab2] = useState("");

    return(
        <div>
            {
                tabs.map((tab) =>(
                    <ul>
                        <li  onClick = {() => 
                            setTab1(tab.content)
                            }>
                            {tab.title}
                        </li>
                    </ul>
                   
                   
                ))
            }
            <p>This is the content for {tab1}</p>

            {
                tabs2.map((tab) =>(
                    <ul>
                        <li  onClick = {() => 
                            setTab2(tab.content)
                            }>
                            {tab.title}
                        </li>
                    </ul>
                   
                   
                ))
            }
            <p>This is the content for {tab2}</p>

        </div>
    )
}
export default Tabs;