import React, { useState } from "react";
import { notesRef } from "./firebase";
import "./form.css";


function CreateNote() {
	const [ note, setNote ] = useState("")

	const createNote = (e: React.FormEvent<EventTarget>) => {
		e.preventDefault()
		const item = {
			task: note,
			done: false
		}
		notesRef.push(item)
		setNote("")
	}

	return (
		<div className="card">
			<form onSubmit={createNote}>
				<input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Create a note" />
			</form>
		</div>
	)
}

export default CreateNote
