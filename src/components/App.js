
import React from "react";
import Tabs from "./Tabs";

const App = () => {
  const tabs = [
    {
        title: "Tab 1",
        content: "Tab 1"

    },
    {
        title: "Tab 2",
        content: "Tab 2"

    },
    {
        title: "Tab 3",
        content: "Tab 3"

    }
]
const tabs2 = [
  {
      title: "Tab A",
      content: "Tab A"

  },
  {
      title: "Tab B",
      content: "Tab B"

  },
  {
      title: "Tab C",
      content: "Tab C"

  }
]
  return (
    <div>
        {/* Do not remove the main div */}
        <Tabs tabs = {tabs} tabs2 = {tabs2}/>
        
    </div>
  )
}

export default App
