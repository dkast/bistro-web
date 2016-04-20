import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ItemsView extends Component {
  handleClickNewItem = () => {

  }

  render() {
    return (
      <div>
        <div className="ui secondary pointing menu">
          <div className="header item">
            Artículos
          </div>
          <div className="right menu">
            <a href="#" className="item">
              Lista de Articulos
            </a>
            <a href="#" className="item">
              Modificadores
            </a>
          </div>
        </div>
        <div className="ui secondary menu">
          <div className="ui dropdown item">
            Categorias
            <i className="dropdown icon"></i>
            <div className="menu">
              <div className="item">Prueba</div>
              <div className="item">Prueba2</div>
            </div>
          </div>
          <div className="right menu">
            <div className="item">
              <div className="ui search">
                <div className="ui icon input">
                  <input className="prompt" type="text" placeholder="Buscar..."/>
                  <i className="search icon"></i>
                </div>
              </div>
            </div>
            <div className="ui item">
              <Link
                to="/items/new"
                className="ui primary button">
                Agregar Artículo
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
