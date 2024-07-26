

export default class Player extends Phaser.Physics.Matter.Sprite {
    constructor() {
        let { scene, x, y, texture, frame } = data;
        super(scene.matter.world, x, y, texture, frame);
        this.scene.add.existing(this);

        const { Body, Bodies } = Phaser.Physics.Matter.Matter;
        var playerCollider = Bodies.circle(this.x, this.y, 15, { 
            isSensor: false, 
            label: 'playerCollider' 
        });
        const compoundBody = Body.create({
            parts: [playerCollider],
            frictionAir: 0.35,
        });
        this.setExistingBody(compoundBody);
        this.setFixedRotation();
    }

    static preload(scene) {

        scene.load.atlas(
            "player_down",
            "assets/images/player_down.png",
            "assets/images/player_down_atlas.json",
        );
        // scene.load.animation("princess_anim", "assets/images/princess_anim.json");
    }

    get velocity() {
        return this.body.velocity;
    }

    update() {
        console.log("update");
        // this.anims.play('princess_idle', true);
        const speed = 2.5;
        let playerVelocity = new Phaser.Math.Vector2();
        if (this.inputKeys.left.isDown) {
            playerVelocity.x = -1;
        } else if (this.inputKeys.right.isDown) {
            playerVelocity.x = 1;
        }
        if (this.inputKeys.up.isDown) {
            playerVelocity.y = -1;
        } else if (this.inputKeys.down.isDown) {
            playerVelocity.y = 1;
        }
        playerVelocity.normalize();
        playerVelocity.scale(speed);
        this.setVelocity(playerVelocity.x, playerVelocity.y);

        // if (Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y) > 0.1) {
        //     this.anims.play("princess_walk", true);
        //   } else {
        //     this.anims.play("princess_idle", true);
        //   }
    }
}