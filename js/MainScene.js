import Player from "./Player.js";

let coworker_list = []
let coworker_position_list = []

const MAXIMUM_COWORKER_NUMBER = 4

const init_position_x = [60, 60, 170, 170]
const init_position_y = [40, 110, 40, 110]

let desk_object = {}
let man1_obj = {}
let man2_obj = {}
let man3_obj = {}
let man4_obj = {}
let man5_obj = {}
let random_coworker_number = []
let random_coworker_list = []
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
        for (let i = 0; i < MAXIMUM_COWORKER_NUMBER; i++) {
            this.load.image('desk_object' + i, "../assets/desk2/desk_right_02.png")
        }
        for (let i = 0; i < MAXIMUM_COWORKER_NUMBER; i++) {
            this.load.image('man1_obj' + i, "../assets/desk2/1.png")
        }
        for (let i = 0; i < MAXIMUM_COWORKER_NUMBER; i++) {
            this.load.image('man2_obj' + i, "../assets/desk2/2.png")
        }
        for (let i = 0; i < MAXIMUM_COWORKER_NUMBER; i++) {
            this.load.image('man3_obj' + i, "../assets/desk2/3.png")
        }
        for (let i = 0; i < MAXIMUM_COWORKER_NUMBER; i++) {
            this.load.image('man4_obj' + i, "../assets/desk2/4.png")
        }
        for (let i = 0; i < MAXIMUM_COWORKER_NUMBER; i++) {
            this.load.image('man5_obj' + i, "../assets/desk2/5.png")
        }


        this.load.image("roomTiles", "assets/map/Room_Builder_Office_16x16.png");
        this.load.image("objectTiles", "assets/map/Modern_Office_16x16.png");
        this.load.tilemapTiledJSON("map", "assets/map/easy_map_01.json");
        // this.load.tilemapTiledJSON("map", "assets/map/map01.json");
    }

    create() {
        console.log("create");
        this.matter.world.setBounds();

        const map = this.make.tilemap({key: "map"});
        const roomTileset = map.addTilesetImage("Room_Builder_Office_16x16", "roomTiles");
        const objectTileset = map.addTilesetImage("Modern_Office_16x16", "objectTiles");

        const background = map.createLayer("background", roomTileset, 0, 0);
        const wall = map.createLayer("wall", roomTileset, 0, 0);
        // const desk = map.createLayer("desk", objectTileset, 0, 0);
        const object = map.createLayer("object", objectTileset, 0, 0);

        wall.setCollisionByProperty({collides: true});
        object.setCollisionByProperty({collides: true});
        // desk.setCollisionByProperty({collides: true});

        this.matter.world.convertTilemapLayer(wall);
        this.matter.world.convertTilemapLayer(object);
        // this.matter.world.convertTilemapLayer(desk);

        this.huh = this.add.image(0, 0, "huh")
        this.huh.setOrigin(0.0)
        this.huh.setDepth(30)
        this.huh.scale = 0.1
        this.huh.alpha = 0;

        this.player = this.matter.add.sprite(50, 50, "player1", null, {
            isSensor: false,
        })
        for (let i = 0; i < MAXIMUM_COWORKER_NUMBER; i++) {
            desk_object['desk_object' + i] =
                {
                    object: this.add.sprite(init_position_x[i], init_position_y[i], "desk_object" + i),
                    position_x: init_position_x[i],
                    position_y: init_position_y[i]
                }
            man1_obj['man1_obj' + i] =
                {
                    object: this.add.sprite(init_position_x[i], init_position_y[i], "man1_obj" + i),
                    position_x: init_position_x[i],
                    position_y: init_position_y[i]
                }
            man2_obj['man2_obj' + i] =
                {
                    object: this.add.sprite(init_position_x[i], init_position_y[i], "man2_obj" + i),
                    position_x: init_position_x[i],
                    position_y: init_position_y[i]
                }
            man3_obj['man3_obj' + i] =
                {
                    object: this.add.sprite(init_position_x[i], init_position_y[i], "man3_obj" + i),
                    position_x: init_position_x[i],
                    position_y: init_position_y[i]
                }
            man4_obj['man4_obj' + i] =
                {
                    object: this.add.sprite(init_position_x[i], init_position_y[i], "man4_obj" + i),
                    position_x: init_position_x[i],
                    position_y: init_position_y[i]
                }
            man5_obj['man5_obj' + i] =
                {
                    object: this.add.sprite(init_position_x[i], init_position_y[i], "man5_obj" + i),
                    position_x: init_position_x[i],
                    position_y: init_position_y[i]
                }
            //
            if (i === 2 || i === 3) {
                desk_object['desk_object' + i].object.flipX = true
                man1_obj['man1_obj' + i].object.flipX = true
                man2_obj['man2_obj' + i].object.flipX = true
                man3_obj['man3_obj' + i].object.flipX = true
                man4_obj['man4_obj' + i].object.flipX = true
                man5_obj['man5_obj' + i].object.flipX = true
            }
            //
            desk_object['desk_object' + i].object.setOrigin(0, 0)
            man1_obj['man1_obj' + i].object.setOrigin(0, 0)
            man2_obj['man2_obj' + i].object.setOrigin(0, 0)
            man3_obj['man3_obj' + i].object.setOrigin(0, 0)
            man4_obj['man4_obj' + i].object.setOrigin(0, 0)
            man5_obj['man5_obj' + i].object.setOrigin(0, 0)
            //
            desk_object['desk_object' + i].object.alpha = 0
            man2_obj['man2_obj' + i].object.alpha = 0
            man3_obj['man3_obj' + i].object.alpha = 0
            man4_obj['man4_obj' + i].object.alpha = 0
            man5_obj['man5_obj' + i].object.alpha = 0
        }
        //
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
        this.progressText = this.add.text(108, 6, this.progress + '%', {fontSize: '10px', fill: '#000000'});


        // 남은 시간 초기화
        this.leftTime = 60;

        // 남은 시간 텍스트 배경
        this.leftTimeBackground = this.add.graphics();
        this.leftTimeBackground.fillStyle(0xffffff, 0.8); // 검정색 배경에 50% 투명도
        this.leftTimeBackground.fillRect(145, 2, 110, 20); // 배경의 크기와 위치 조정

        // 남은 시간 텍스트
        this.leftTimeText = this.add.text(150, 5, '남은 시간 60초', {fontSize: '14px', fill: '#000'});

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
                this.huh.alpha = 0
                this.scheduleRandomEvent.call(this);
            }
        }

        playerVelocity.normalize();
        playerVelocity.scale(speed);

        this.player.setVelocity(playerVelocity.x, playerVelocity.y);
    }

    scheduleRandomEvent() {
        // 1초에서 5초 사이의 랜덤한 시간(밀리초 단위)을 생성
        const random_time = Phaser.Math.Between(2000, 5000);
        const random_huh = Phaser.Math.Between(0, MAXIMUM_COWORKER_NUMBER - 1);

        this.time.delayedCall(random_time, () => {
            if (this.huh.alpha === 0) {
                // 어? 생성
                this.huh.alpha = 1
                if (random_huh === 2 || random_huh === 3) {
                    this.huh.x = desk_object['desk_object' + random_huh].position_x + 50
                } else {
                    this.huh.x = desk_object['desk_object' + random_huh].position_x + 25
                }
                this.huh.y = desk_object['desk_object' + random_huh].position_y + 10

                // random_coworker_number = Phaser.Math.Between(1, 3)
                // random_coworker_list.length = 0
                // while (random_coworker_list.length <= random_coworker_number){
                //     let n = Phaser.Math.Between(1, 3)
                // }

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