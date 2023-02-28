const tic_tac_toe = {
     board: ['','','','','','','','',''],
     simbols: { 
        options: ['X','O'], /*aqui vamos controlar os jogadores, qm vai ser a vez de jogar, e n vai ser só um array*/
        turn_index: 0, /*qm é o da vez, o X ou O*/
        change: function() { /*essa função faz a troca de jogadores*/
            this.turn_index = (this.turn_index === 0 ? 1 : 0);
        }
    },
    container_element: null,
    /*para controlar a função make, usa o atributo abaixo*/
    gameover: false,
    winning_sequences: [ /*essas são as sequências vencedoras*/
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6], 
    ],

    init: function(container){
      this.container_element = container;
    },

    /*essa função vai efetuar a jogada*/
    make_play: function(position){
       if(this.gameover) return false;
       if(this.board[position] === ''){ /*se for vazio eu continuo a jogada*/
          this.board[position] = this.simbols.options [ this.simbols.turn_index ];
           /*o X e O já está sendo preenchido no board do inspencionar, mas n aparece na tela do jogo, ai faz esse comando para reescrever*/
          this.draw(); /* ao cliclar no jogo ele só vai aparecer o x, então faz outra função para fazer a troca de X e O*/
          let winning_sequences_index = this.check_winning_sequences( this.simbols.options [ this.simbols.turn_index ] );
          if(winning_sequences_index >= 0){
               this.game_is_over();
          } else {
            this.simbols.change();
          }
          return true;
       } else {
        return false;
       }
    
    },
    game_is_over: function(){ /*essa função vai fazer o gameover, pode fazer que a jogada ganhadora seja pintada*/
        this.gameover = true;
        console.log("GAME OVER");
    },
/*reiniciar o jogo*/
    start: function(){
        this.board.fill('');
        this.draw(); /*escrever na tela*/
        this.gameover = false;
    },

    check_winning_sequences: function(simbol){ /*aqui vai verificar qual ganhou*/
        for(i in this.winning_sequences){
            if(this.board [ this.winning_sequences[i][0] ] == simbol &&
                this.board [ this.winning_sequences[i][1] ] == simbol &&
                this.board [ this.winning_sequences[i][2] ] == simbol){
                    console.log('Sequência vencedora: ' + i);
                    return i;
                } 
        };
        return -1; 
    },

     draw: function(){ //esse draw vai escrever todo vez que eu clicar na tela o array, o board
         let content = '';

         for( i in this.board) {
            content += '<div onclick="tic_tac_toe.make_play(' + i + ')">' + this.board[i] + '</div>';
         }

         this.container_element.innerHTML = content;
     }

};