import React, { Component } from 'react';
import DatePicker from 'react-date-picker';


class ProjectForm extends Component {

	constructor(){
      super();
      this.state={
        id:"",
        nombre:"",
        descripcion:"",
        tareas:[],
        
        fechaFinal:new Date(),
        fechaInicio: new Date(),
        estado:""
      }
    }

    
    onGuardar(e){
      var month = this.state.fechaFinal.getMonth()+1;
      var day = this.state.fechaFinal.getDate();
      var year = this.state.fechaFinal.getFullYear();
    	
        var tarea = {
            id:this.state.id,
            nombre : this.state.nombre,
            descripcion:this.state.descripcion,
            tareas:this.state.tareas,
          	fechaInicio:this.state.fechaInicio,
            fechaFinal:day+ "/" + month+"/" + year,
        	  estado:"progreso"
        }
        
        e.preventDefault();
        this.props.guardar(tarea);
        
    } 

  

    updateInput(e){
      console.log(e.target.name);
      this.setState({
        [e.target.name] : e.target.value
      });
    }
    onChangeInicio = fechaInicio => this.setState({ fechaInicio })

    onChangeFinal = fechaFinal => this.setState({ fechaFinal })


  render() {
    return (
      <div className="ProjectForm">
        <form onSubmit={this.onGuardar.bind(this)}>
            <div className="form-group">
            <label>id</label>
            <input type ="Text" className ="form-control" name="id" value={this.state.id} onChange={this.updateInput.bind(this)}/>
            </div>

            <div className="form-group">
            <label>Nombre</label>
            <input type ="Text" className ="form-control" name="nombre" value={this.state.nombre} onChange={this.updateInput.bind(this)}/>
            </div>

            <div className="form-group">
            <label>Descripcion</label>
            <input type ="Text" className ="form-control" name="descripcion" value={this.state.descripcion} onChange={this.updateInput.bind(this)}/>
            </div>

            <div className="form-group">
            <label>Fecha Inicio</label>
            <DatePicker type ="Text"
         
           className ="form-control" name="fechaInicio" value={this.state.fechaInicio} onChange={this.onChangeInicio}/>
            </div>

            <div className="form-group">
            <label>Fecha Final</label>
            <DatePicker type ="Text" className ="form-control" name="fechaFinal" value={this.state.fechaFinal} onChange={this.onChangeFinal}/>
            </div>
            <button className = "btn btn-primary">Guardar</button>

             
        />
        </form>
      </div>
    );
  }
}

export default ProjectForm;