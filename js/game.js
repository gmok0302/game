import MainScene from "./MainScene.js";

const config = {
    width: 320,
    height: 240,
    backgroundColor: '#333333',
    type: Phaser.AUTO,
    parent: 'game',
    scene: [MainScene],
    scale: {
        zoom: 2.5,
    },
    physics: {
        default: 'matter',
        matter: {
            debug: false,
            gravity: {y: 0},
        }
    },
    plugins: {
        scene: [
            {
                plugin: PhaserMatterCollisionPlugin,
                key: 'matterCollision',
                mapping: 'matterCollision'
            }
        ]
    }
}

new Phaser.Game(config);