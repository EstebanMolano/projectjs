import React, { Component } from 'react';
import firebase from '../Firebase';
import ProjectForm from './ProjectForm';
import Tareas from '../Tareas/Tareas';
import './Proyecto.css';





function searchingFor(term){
	return function(x){
		return x.nombre.toLowerCase().includes(term.toLowerCase()) || !term;
	}
}

class Proyecto extends Component {


	constructor(){
		super();
		this.state = {
			proyectos : [],
			term :'',
			db:firebase.firestore()
			
		}
			const settings = {timestampsInSnapshots:true};
			this.state.db.settings(settings);
			this.searchHandler = this.searchHandler.bind(this);
	}


	searchHandler(event){
		this.setState({term : event.target.value})
	}

	ComponentWillMount(){
		this.refresh();
		console.log("gola");
	}


	handleGuardar(proyecto){

		this.state.db.collection("proyectos").doc(proyecto.id).set(proyecto);
		this.refresh();
	}

	refresh(){
		this.state.db.collection("proyectos").get().then(
			(querySnapshot) => {
				var proyectos =[];
				querySnapshot.forEach(doc => {
					proyectos.push(doc.data());
				});
				this.setState({
					proyectos:proyectos
				});
			});
	}




  render() {

  	var projectList = this.state.proyectos.filter(searchingFor(this.state.term)).map(
  		task=> {
			var fechas = task.fechaFinal+"";
			var fecha = fechas.split("/");
			console.log(task.id);
			console.log(new Date(fecha[1]+"/"+fecha[0]+"/"+fecha[2]));
  			return <li className={new Date(fecha[1]+"/"+fecha[0]+"/"+fecha[2]) < new Date() ? "Red" : ''} key ={task.id} >
			  			

  						{task.nombre} -- {task.descripcion} --{fecha[1]+"/"+fecha[0]+"/"+fecha[2]}
  						</li>
  		});

  		this.refresh();



    return (

    	
      <div className="Proyecto">
      		<h1> Busqueda de proyectos</h1>
			
      			<input type="text"
      				onChange = {this.searchHandler.bind(this)} />
					  <h1>nombre -- descripciion -- fecha</h1>

      			
      	<ul>
      	
    		{projectList}
    	</ul>

		<h1>Crea tu proyecto</h1>
        <ProjectForm guardar={this.handleGuardar.bind(this)}/>
        <Tareas guardarTarea = {this.handleGuardar.bind(this)}/>


      </div>
    );
  }
}

export default Proyecto;
