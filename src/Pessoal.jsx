import React, {Component} from "react";
import './css/Pessoal.css'
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Form} from "react-bootstrap";





class Pessoal extends Component {
    render(){
        return (
            <div className="contornoPessoal">
                <Header />
                <div className="perfil-parent">
                    <div className="perfil">
                        <div className="perfil-img">
                            <div className="img">

                            </div>
                        </div>
                        <div className="perfil-form">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Nome
                                        <input type="text" name="name" className="form-control" id="name" />
                                    </label>
                                     
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="number" className="form-label">
                                        idade
                                        <input type="number" className="form-control" name="number" id="number" />
                                    </label>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        E-mail
                                    </label>
                                    <input type="email" name="email" id="email" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="genre" className="form-label">
                                        Genero
                                    </label>
                                    <select className="form-select" id="genre">
                                        <option value="1">Masculino</option>
                                        <option value="2">Feminino</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label">
                                    Foto de Perfil
                                    </label>
                                    <input type="file" name="file" id="file" className="form-control" />
                                    
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Salvar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pessoal