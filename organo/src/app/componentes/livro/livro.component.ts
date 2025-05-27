import { Component } from '@angular/core';
import { Livro } from './livro';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {
  alternarFavorito() {
    this.livro.favorito = !this.livro.favorito
  }

  livro: Livro = {
    titulo: "As ondas",
    autoria: "Virginia Woolf",
    favorito: false,
    genero: "Ficcao",
    imagem: "https://m.media-amazon.com/images/I/81mQc+sz2OS._UF894,1000_QL80_.jpg"
  }

}
