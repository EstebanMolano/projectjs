import React, { Component } from 'react';


class Tareas extends Component {

	constructor(){
      super();
      this.state={
        idTareas:"",
        nombreTareas:"",
        descripcionTareas:"",
        prioridadTareas:"",
        id:"",
        nombre:"",
        descripcion:"",
        tareas:[],
        fechaInicio:"",
        fechaFinal:"",
        estado:""
      }
    }

    onGuardar(e){
    	
        var tarea = {
            id:"es",
            nombre : "es" ,
            descripcion:"es",
            tareas: [],
        	fechaInicio:"es",
        	fechaFinal:"es",
        	estado:"progreso"
        }
        tarea.tareas.push({
            id:this.state.idTareas,
            nombre : this.state.nombreTareas,
            descripcion:this.state.descripcionTareas,
            prioridad:this.state.prioridadTareas

        });
        
        e.preventDefault();
        this.props.guardarTarea(tarea);
        
    }


    /**    componentWillReceiveProps(props){
        this.setState({
        id:props.proyecto.id,
        nombre:props.proyecto.nombre,
        descripcion:props.proyecto.descipcion,
        fechaInicio:props.proyecto.fechaInicio,
        fechaFinal:props.proyecto.fechaFinal,
        estado:props.proyecto.estado
      });
    };**/

  

    updateInput(e){
       
      this.setState({
        [e.target.name] : e.target.value
      });
     
    }

  render() {
    return (
      <div className="Tareas">
        <h1> Agrega una tarea al proyecto con descripcion y id "es"</h1>
        <form onSubmit={this.onGuardar.bind(this)}>
            <div className="form-group">
            <label>id</label>
            <input type ="Text" className ="form-control" name="idTareas" value={this.state.idTareas} onChange={this.updateInput.bind(this)}/>
            </div>

            <div className="form-group">
            <label>Nombre</label>
            <input type ="Text" className ="form-control" name="nombreTareas" value={this.state.nombreTareas} onChange={this.updateInput.bind(this)}/>
            </div>

            <div className="form-group">
            <label>Descripcion</label>
            <input type ="Text" className ="form-control" name="descripcionTareas" value={this.state.descripcionTareas} onChange={this.updateInput.bind(this)}/>
            </div>

            <div className="form-group">
            <label>prioridad Inicio</label>
            <input type ="Text" className ="form-control" name="prioridadTareas" value={this.state.prioridadTareas} onChange={this.updateInput.bind(this)}/>
            </div>           
            <button className = "btn btn-primary">Agregar Tarea</button>
        </form>
      </div>
    );
  }
}

export default Tareas;