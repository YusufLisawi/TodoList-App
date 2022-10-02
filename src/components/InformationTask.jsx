import React from 'react'

export default function InformationTask({tasks}) {
  return (
	<div className="informationTask">
		<div className="tasks__stats">
			Nombre Totale: {tasks.length}
		</div>
		<div className="tasks__stats">
			Nombre Terminer: {tasks.filter(task => task.completed).length}
		</div>
		<div className="tasks__stats">
			Nombre En cours: {tasks.filter(task => !task.completed).length}
		</div>
	</div>
  )
}
