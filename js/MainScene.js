import Player from "./Player.js";

let coworker_list = []
let coworker_position_list = []
let moved_coworker_list = []

export default class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    preload() {
        console.log("preload");
        // Player.preload(this);
        this.load.image('huh', "../assets/images/huh.png")
        this.load.spritesheet('player1', "../assets/images/down_walk.png", {
            frameWidth: 24,
            frameHeight: 24
        })
        this.load.spritesheet('coworker1', "../assets/images/princess.png", {
            frameWidth: 24,
            frameHeight: 38
        })
        this.load.spritesheet('coworker2', "../assets/images/princess.png", {
            frameWidth: 24,
            frameHeight: 38
        })
        this.load.spritesheet('coworker3', "../assets/images/princess.png", {
            frameWidth: 24,
            frameHeight: 38
        })
        this.load.spritesheet('coworker4', "../assets/images/princess.png", {
            frameWidth: 24,
            frameHeight: 38
        })
        this.load.spritesheet('coworker5', "../assets/images/princess.png", {
            frameWidth: 24,
            frameHeight: 38
        })
        this.load.spritesheet('coworker6', "../assets/images/princess.png", {
            frameWidth: 24,
            frameHeight: 38
        })
        this.load.spritesheet('coworker7', "../assets/images/princess.png", {
            frameWidth: 24,
            frameHeight: 38
        })
        this.load.spritesheet('coworker8', "../assets/images/princess.png", {
            frameWidth: 24,
            frameHeight: 38
        })
        this.load.spritesheet('coworker9', "../assets/images/princess.png", {
            frameWidth: 24,
            frameHeight: 38
        })
        this.load.spritesheet('coworker10', "../assets/images/princess.png", {
            frameWidth: 24,
            frameHeight: 38
        })


        this.load.image("roomTiles", "assets/map/Room_Builder_Office_16x16.png");
        this.load.image("objectTiles", "assets/map/Modern_Office_16x16.png");
        this.load.tilemapTiledJSON("map", "assets/map/map01.json");

    }

    create() {
        console.log("create");
        this.matter.world.setBounds();

        const map = this.make.tilemap({key: "map"});
        const roomTileset = map.addTilesetImage("Room_Builder_Office_16x16", "roomTiles");
        const objectTileset = map.addTilesetImage("Modern_Office_16x16", "objectTiles");

        const background = map.createLayer("background", roomTileset, 0, 0);
        const wall = map.createLayer("wall", roomTileset, 0, 0);
        const desk = map.createLayer("desk", objectTileset, 0, 0);
        const object = map.createLayer("object", objectTileset, 0, 0);

        wall.setCollisionByProperty({collides: true});
        object.setCollisionByProperty({collides: true});
        desk.setCollisionByProperty({collides: true});

        this.matter.world.convertTilemapLayer(wall);
        this.matter.world.convertTilemapLayer(object);
        this.matter.world.convertTilemapLayer(desk);

        // this.player = new Player({
        //     scene: this,
        //     x: 100,
        //     y: 100,
        //     texture: "down_walk",
        //     frame: "princess_idle_1"
        // });
        // this.add.existing(this.player);

        this.huh = this.add.image(0, 0, "huh")
        this.huh.setOrigin(0.0)
        this.huh.setDepth(30)
        this.huh.scale = 0.1
        this.huh.alpha = 0;

        this.player = this.matter.add.sprite(100, 100, "player1", null, {
            isSensor: false,
        })
        this.coworker1 = this.add.sprite(40, 40, "coworker1")
        this.coworker1.setOrigin(0, 0)

        this.coworker2 = this.add.sprite(40, 90, "coworker2")
        this.coworker2.setOrigin(0, 0)

        this.coworker3 = this.add.sprite(40, 150, "coworker3")
        this.coworker3.setOrigin(0, 0)

        this.coworker4 = this.add.sprite(120, 40, "coworker4")
        this.coworker4.setOrigin(0, 0)

        this.coworker5 = this.add.sprite(120, 150, "coworker5")
        this.coworker5.setOrigin(0, 0)

        this.coworker6 = this.add.sprite(230, 40, "coworker6")
        this.coworker6.setOrigin(0, 0)

        this.coworker7 = this.add.sprite(200, 70, "coworker7")
        this.coworker7.setOrigin(0, 0)

        this.coworker8 = this.add.sprite(200, 100, "coworker8")
        this.coworker8.setOrigin(0, 0)

        this.coworker9 = this.add.sprite(270, 70, "coworker9")
        this.coworker9.flipX = true
        this.coworker9.setOrigin(0, 0)

        this.coworker10 = this.add.sprite(270, 100, "coworker10")
        this.coworker10.flipX = true
        this.coworker10.setOrigin(0, 0)

        coworker_list.push(this.coworker1)
        coworker_list.push(this.coworker2)
        coworker_list.push(this.coworker3)
        coworker_list.push(this.coworker4)
        coworker_list.push(this.coworker5)
        coworker_list.push(this.coworker6)
        coworker_list.push(this.coworker7)
        coworker_list.push(this.coworker8)
        coworker_list.push(this.coworker9)
        coworker_list.push(this.coworker10)
        coworker_position_list.push({x: this.coworker1.x, y: this.coworker1.y})
        coworker_position_list.push({x: this.coworker2.x, y: this.coworker2.y})
        coworker_position_list.push({x: this.coworker3.x, y: this.coworker3.y})
        coworker_position_list.push({x: this.coworker4.x, y: this.coworker4.y})
        coworker_position_list.push({x: this.coworker5.x, y: this.coworker5.y})
        coworker_position_list.push({x: this.coworker6.x, y: this.coworker6.y})
        coworker_position_list.push({x: this.coworker7.x, y: this.coworker7.y})
        coworker_position_list.push({x: this.coworker8.x, y: this.coworker8.y})
        coworker_position_list.push({x: this.coworker9.x, y: this.coworker9.y})
        coworker_position_list.push({x: this.coworker10.x, y: this.coworker10.y})


        const {Body, Bodies} = Phaser.Physics.Matter.Matter;
        var playerCollider = Bodies.rectangle(this.player.x, this.player.y, 13, 16, {
            isSensor: false,
            label: 'playerCollider'
        });
        const compoundBody = Body.create({
            parts: [playerCollider],
            frictionAir: 0.35,
        });
        this.player.setExistingBody(compoundBody);
        this.player.setFixedRotation();

        this.player.inputKeys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.UP,
            down: Phaser.Input.Keyboard.KeyCodes.DOWN,
            left: Phaser.Input.Keyboard.KeyCodes.LEFT,
            right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
            space: Phaser.Input.Keyboard.KeyCodes.SPACE,
        });
        this.scheduleRandomEvent.call(this);

        // 프로그래스 바 초기 설정
        this.progress = 90;

        // 프로그래스 바의 배경
        this.progressBarBackground = this.add.graphics();
        this.progressBarBackground.fillStyle(0x222222, 1);
        this.progressBarBackground.fillRect(5, 5, 100, 10);

        // 프로그래스 바
        this.progressBar = this.add.graphics();
        this.progressBar.fillStyle(0xffffff, 1);
        this.progressBar.fillRect(6, 6, 98 * (this.progress / 100), 8);

        // 진행률 텍스트
        this.progressText = this.add.text(108, 6, this.progress + '%', { fontSize: '10px', fill: '#000000' });


        // 남은 시간 초기화
        this.leftTime = 60;

        // 남은 시간 텍스트 배경
        this.leftTimeBackground = this.add.graphics();
        this.leftTimeBackground.fillStyle(0xffffff, 0.8); // 검정색 배경에 50% 투명도
        this.leftTimeBackground.fillRect(145, 2, 110, 20); // 배경의 크기와 위치 조정

        // 남은 시간 텍스트
        this.leftTimeText = this.add.text(150, 5, '남은 시간 60초', {fontSize: '14px', fill : '#000'});

        // 1초마다 진행률을 업데이트하는 타이머 이벤트 설정
        this.time.addEvent({
            delay: 1000, // 1초마다
            callback: this.updateLeftTime,
            callbackScope: this,
            loop: true
        });
    }

    updateLeftTime() {
        if (this.leftTime > 0) {
            this.leftTime -= 1;
        }
        this.leftTimeText.setText(`남은 시간 ${this.leftTime}초`);
    }
    updateProgress() {
        if (this.progress < 100) {
            this.progress += 1; // 진행률 1% 증가
            console.log("진행률 : " + this.progress);
        }

        // 프로그래스 바 업데이트
        this.progressBar.clear();
        this.progressBar.fillStyle(0xffffff, 1);
        this.progressBar.fillRect(6, 6, 98 * (this.progress / 100), 8);
        // 진행률 텍스트 업데이트
        this.progressText.setText(this.progress + '%');

        if (this.progress >= 100) {
            this.progressBar.clear();
            this.progressBar.fillStyle(0x00ff00, 1); // 완료된 바의 색상 (초록색)
            this.progressBar.fillRect(6, 6, 98, 8);
            this.progressText.setText('100%');
        }
    }
    update() {
        // this.player.update();
        const speed = 2.5;
        let playerVelocity = new Phaser.Math.Vector2();
        if (this.player.inputKeys.left.isDown) {
            playerVelocity.x = -1;
        } else if (this.player.inputKeys.right.isDown) {
            playerVelocity.x = 1;
        }
        if (this.player.inputKeys.up.isDown) {
            playerVelocity.y = -1;
        } else if (this.player.inputKeys.down.isDown) {
            playerVelocity.y = 1;
        }
        if (this.player.inputKeys.space.isDown) {
            if (this.huh.alpha === 1) {
                this.huh.alpha = 0;
                this.scheduleRandomEvent.call(this);
                this.moveImagesBackToOriginal.call(this);
            }
        }

        playerVelocity.normalize();
        playerVelocity.scale(speed);

        this.player.setVelocity(playerVelocity.x, playerVelocity.y);
    }

    scheduleRandomEvent() {
        // 1초에서 5초 사이의 랜덤한 시간(밀리초 단위)을 생성
        const randomTime = Phaser.Math.Between(2000, 5000);
        const randomCoworker = Phaser.Math.Between(1, 10);
        const randomCoworkerNumber = Phaser.Math.Between(1, 10);
        let angleStep = (2 * Math.PI) / coworker_list.length;
        console.log(randomTime)
        this.time.delayedCall(randomTime, () => {
            if (this.huh.alpha === 0) {
                this.huh.alpha = 1
                this.huh.x = coworker_list[randomCoworker].x + 5
                this.huh.y = coworker_list[randomCoworker].y - 20

                for (let i = 0; i < randomCoworkerNumber; i++) {
                    let angle = i * angleStep;
                    let radius = 25; // 중심 오브젝트로부터의 거리
                    let targetX = coworker_list[randomCoworker].x + radius * Math.cos(angle);
                    let targetY = coworker_list[randomCoworker].y + radius * Math.sin(angle);

                    if (i !== randomCoworker) {
                        this.tweens.add({
                            targets: coworker_list[i],
                            x: targetX,
                            y: targetY,
                            duration: 0,
                            ease: 'Power2'
                        });
                        moved_coworker_list.push(coworker_list[i])
                    }

                }
                // coworker_list.forEach((image, index) => {
                //     let angle = index * angleStep;
                //     let radius = 25; // 중심 오브젝트로부터의 거리
                //     let targetX = coworker_list[randomCoworker].x + radius * Math.cos(angle);
                //     let targetY = coworker_list[randomCoworker].y + radius * Math.sin(angle);
                //
                //     if (index !== randomCoworker) {
                //         this.tweens.add({
                //             targets: image,
                //             x: targetX,
                //             y: targetY,
                //             duration: 0,
                //             ease: 'Power2'
                //         });
                //     }
                // });
            }
        });
    }

    moveImagesBackToOriginal() {
        coworker_list.forEach((image, index) => {
            let originalPosition = coworker_position_list[index];
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