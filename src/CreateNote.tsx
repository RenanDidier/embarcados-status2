import React, { useState } from "react";
import { notesRef } from "./firebase";
import "./form.css";
import person_asset from "./assets/person.png"


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
			<p>Adicione um novo morador</p>
			<form onSubmit={createNote}>
				<input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Digite o nome do condômino" />
			</form>
			<img src={person_asset} alt="Person" className="imagem" />
		</div>
	)
}

export default CreateNote
