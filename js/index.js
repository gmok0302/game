import Phaser from 'phaser';
import logoImg from '../assets/logo.png';
import bgImg1 from '../assets/background.png'
// import playerImg from './assets/player0.png'
import playerImg from '../assets/Down.png'
import playerImg2 from '../assets/Up.png'
import playerImg3 from '../assets/Left.png'
import playerImg4 from '../assets/Right.png'
import mobImg from '../assets/mob1.png'
import goodImg1 from '../assets/good.png'
import nogoodImg1 from '../assets/nogood.png'


let mobs = [];
let imo = []
let originalPositions = []

class MyGame extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {
        this.load.image('logo', logoImg);
        this.load.image("background1", bgImg1)
        this.load.image("mobImg1", mobImg)
        this.load.image("mobImg2", mobImg)
        this.load.image("mobImg3", mobImg)
        this.load.image("mobImg4", mobImg)
        this.load.image("goodImg1", goodImg1)
        this.load.image("nogoodImg1", nogoodImg1)


        this.load.spritesheet('player1', playerImg, {
            frameWidth: 24,
            frameHeight: 25.5
        })


        this.load.spritesheet('player2', playerImg2, {
            frameWidth: 24,
            frameHeight: 25.5
        })
        this.load.spritesheet('player3', playerImg3, {
            frameWidth: 24,
            frameHeight: 25.5
        })

        this.load.spritesheet('player4', playerImg4, {
            frameWidth: 24,
            frameHeight: 25.5
        })
    }

    create(key, config) {
        this.background1 = this.add.image(0, 0, 'background1')
        this.background1.setOrigin(0, 0)

        this.mobImg1 = this.add.image(100, 200, 'mobImg1')
        this.mobImg1.scale = 0.2

        this.mobImg2 = this.add.image(300, 200, 'mobImg2')
        this.mobImg2.scale = 0.2

        this.mobImg3 = this.add.image(500, 200, 'mobImg3')
        this.mobImg3.scale = 0.2

        this.mobImg4 = this.add.image(700, 200, 'mobImg4')
        this.mobImg4.scale = 0.2

        // mobs.push(this.mobImg1)
        mobs.push(this.mobImg2)
        mobs.push(this.mobImg3)
        mobs.push(this.mobImg4)

        // originalPositions.push({x: 100, y: 200});
        originalPositions.push({x: 300, y: 200});
        originalPositions.push({x: 500, y: 200});
        originalPositions.push({x: 700, y: 200});

        this.player = this.add.sprite(0, 0, "player1")
        this.player.setOrigin(0.0)
        this.player.scale = 4


        // this.player = this.add.sprite(500, 250, "player1")
        // this.player.setOrigin(0.0)
        // this.player.scale = 0.2

        // this.player.flipX = true
        // this.player.flipY = true
        // this.player.angle += 20

        this.goodImg1 = this.add.image(0, 0, "goodImg1")
        this.goodImg1.setOrigin(0.0)
        this.goodImg1.scale = 0.1
        this.goodImg1.alpha = 0;

        this.nogoodImg1 = this.add.image(0, 0, "nogoodImg1")
        this.nogoodImg1.setOrigin(0.0)
        this.nogoodImg1.scale = 0.2
        this.nogoodImg1.alpha = 0;

        imo.push({x: 80, y: 100});
        imo.push({x: 280, y: 100});
        imo.push({x: 480, y: 100});
        imo.push({x: 680, y: 100});

        // const logo = this.add.image(400, 150, 'logo');
        // this.tweens.add({
        //     targets: logo,
        //     y: 450,
        //     duration: 2000,
        //     ease: "Power2",
        //     yoyo: true,
        //     loop: -1
        // });

        // this.anims.create({
        //     key: "player1_anim",
        //     frames: this.anims.generateFrameNumbers('player1'),
        //     frameRate: 12,
        //     repeat: -1
        // })

        this.anims.create({
            key: 'player1_anim',
            frames: [
                {key: 'player1', frame: 8},
                {key: 'player1', frame: 9},
                {key: 'player1', frame: 10},
                {key: 'player1', frame: 11}
            ],
            frameRate: 20, // 프레임 속도를 높여 빠르게 애니메이션 재생
            repeat: -1 // 애니메이션을 한 번만 재생
        });

        this.anims.create({
            key: 'player1_anim2',
            frames: [
                {key: 'player2', frame: 8},
                {key: 'player2', frame: 9},
                {key: 'player2', frame: 10},
                {key: 'player2', frame: 11}
            ],
            frameRate: 20, // 프레임 속도를 높여 빠르게 애니메이션 재생
            repeat: -1 // 애니메이션을 한 번만 재생
        });

        this.anims.create({
            key: 'player1_anim3',
            frames: [
                {key: 'player3', frame: 8},
                {key: 'player3', frame: 9},
                {key: 'player3', frame: 10},
                {key: 'player3', frame: 11}
            ],
            frameRate: 20, // 프레임 속도를 높여 빠르게 애니메이션 재생
            repeat: -1 // 애니메이션을 한 번만 재생
        });

        this.anims.create({
            key: 'player1_anim4',
            frames: [
                {key: 'player4', frame: 8},
                {key: 'player4', frame: 9},
                {key: 'player4', frame: 10},
                {key: 'player4', frame: 11}
            ],
            frameRate: 20, // 프레임 속도를 높여 빠르게 애니메이션 재생
            repeat: -1 // 애니메이션을 한 번만 재생
        });

        this.anims.create({
            key: "player1_idle",
            frames: this.anims.generateFrameNumbers('player1', {start: 0, end: 0}),
            frameRate: 1,
            repeat: 0
        })


        this.player.play('player1_idle')
        this.keyboardInput = this.input.keyboard.createCursorKeys()
        this.player.moving = false
        this.scheduleRandomEvent.call(this);
    }

    update(time, delta) {
        this.movePlayerManager(this.player)
    }

    movePlayerManager(player) {
        const PLAYER_SPEED = 2
        // player.y += PLAYER_SPEED
        if (this.keyboardInput.left.isDown || this.keyboardInput.right.isDown || this.keyboardInput.up.isDown || this.keyboardInput.down.isDown) {
            if (!player.moving) {

                if (this.keyboardInput.up.isDown) {
                    player.play('player1_anim2')
                }
                if (this.keyboardInput.down.isDown) {
                    player.play('player1_anim')
                }
                if (this.keyboardInput.left.isDown) {
                    player.play('player1_anim4')
                }
                if (this.keyboardInput.right.isDown) {
                    player.play('player1_anim3')
                }


            }
            player.moving = true
        } else {
            if (player.moving) {
                player.play('player1_idle')
            }
            player.moving = false
        }

        if (this.keyboardInput.left.isDown) {
            player.x -= PLAYER_SPEED
            player.flipX = false
        } else if (this.keyboardInput.right.isDown) {
            player.x += PLAYER_SPEED
            player.flipX = true
        }
        if (this.keyboardInput.up.isDown) {
            player.y -= PLAYER_SPEED
        } else if (this.keyboardInput.down.isDown) {
            player.y += PLAYER_SPEED
        }

        if (this.keyboardInput.space.isDown) {
            if (this.goodImg1.alpha === 1) {
                this.goodImg1.alpha = 0;
                this.scheduleRandomEvent.call(this);
                this.moveImagesBackToOriginal.call(this);
            } else if (this.nogoodImg1.alpha === 1) {
                this.nogoodImg1.alpha = 0;
                this.scheduleRandomEvent.call(this);
                this.moveImagesBackToOriginal.call(this);
            }
        }
    }

    scheduleRandomEvent() {
        // 1초에서 5초 사이의 랜덤한 시간(밀리초 단위)을 생성
        const randomTime = Phaser.Math.Between(2000, 5000);
        const randomNob = Phaser.Math.Between(1, 2);
        const randomImo = Phaser.Math.Between(1, 2);

        this.time.delayedCall(randomTime, () => {
            if (randomNob === 1 && this.goodImg1.alpha === 0 && this.nogoodImg1.alpha === 0) {
                this.goodImg1.alpha = 1
                this.goodImg1.x = imo[0].x
                this.goodImg1.y = imo[0].y
            } else if (randomNob === 2 && this.goodImg1.alpha === 0 && this.nogoodImg1.alpha === 0) {
                this.nogoodImg1.alpha = 1
                this.nogoodImg1.x = imo[0].x
                this.nogoodImg1.y = imo[0].y
            }
            this.moveImagesToCenter.call(this)

        });
    }

    moveImagesToCenter() {
        let angleStep = (2 * Math.PI) / mobs.length; // 각 이미지 사이의 각도

        mobs.forEach((image, index) => {
            let angle = index * angleStep;
            let radius = 100; // 중심 오브젝트로부터의 거리
            let targetX = this.mobImg1.x + radius * Math.cos(angle);
            let targetY = this.mobImg1.y + radius * Math.sin(angle);

            this.tweens.add({
                targets: image,
                x: targetX,
                y: targetY,
                duration: 0,
                ease: 'Power2'
            });
        });
    }

    moveImagesBackToOriginal() {
        mobs.forEach((image, index) => {
            let originalPosition = originalPositions[index];
            this.tweens.add({
                targets: image,
                x: originalPosition.x,
                y: originalPosition.y,
                duration: 0,
                ease: 'Power2'
            });
        });
    }

}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1000,
    height: 500,
    scene: MyGame,
    backgroundColor: 0x000000,
    physics: {
        default: "arcade",
        arcade: {
            debug: process.env.DEBUG === "true"
        }
    }
};

const game = new Phaser.Game(config);
