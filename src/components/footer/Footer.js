import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Lista de Exercícios</h5>
              <p class="grey-text text-lighten-4">
                Atividade desenvolvida em React para disciplina de programação
                web.
              </p>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            © 2020 Elayne Natália de Oliveira Argollo
            <a
              class="grey-text text-lighten-4 right"
              href="https://github.com/elayneargollo/atv_react"
            >
              Project Link GitHub
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
