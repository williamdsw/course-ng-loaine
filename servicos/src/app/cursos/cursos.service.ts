import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

    // FIELDS

    static criouNovoCurso = new EventEmitter<string>();
    emitirCursoCriado = new EventEmitter<string>();

    private cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];

    // HELPER FUNCTIONS

    getCursos() {
        return this.cursos;
    }

    addCurso(curso: string) {
        this.cursos.push (curso);
        this.emitirCursoCriado.emit (curso);
        CursosService.criouNovoCurso.emit (curso);
    }

}
