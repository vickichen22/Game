var game = new Phaser.Game(800,600,Phaser.CANVAS,'game.Div')
var mainState = {
    preload: function() {
        this.load.image('background', 'Pictures/city.png'
      
    },

    create: function() {
    	this.background = this.game.add.sprite(0, 0, 'background')
        
        
    },

    update: function() {

    },

    render: function() {

    }
}

game.state.add("mainState",mainState);
game.state.start("mainState");
