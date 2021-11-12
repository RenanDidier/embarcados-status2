import React from "react"
import "./App.css"
import CreateNote from "./CreateNote"
import ReadNotes from "./ReadNotes"

function App() {
	return (
		<div className="App">
			<CreateNote />
			<ReadNotes />
		</div>
	)
}

export default App
