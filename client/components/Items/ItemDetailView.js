import React, { Component } from 'react';

export default class ItemDetailView extends Component {
  render() {
    return (
      <div className="ui form">
        <h4 className="ui dividing header">Datos Generales</h4>
        <div className="ui equal width grid">
          <div className="column">
            <div className="stretched row">
              <div className="column">
                <div className="ui card">
                  <div className="content">
                  </div>
                  <div className="ui bottom attached button">
                    Editar
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ten wide column">
            <div className="field">
              <label>Nombre</label>
              <input type="text" ref="title" placeholder="Nombre Artículo"/>
            </div>
            <div className="field">
              <label>Categoría</label>
              <input type="text" ref="title" placeholder="Seleccione una categoría"/>
            </div>
          </div>
          <div className="column"></div>
        </div>
      </div>
    );
  }
}
