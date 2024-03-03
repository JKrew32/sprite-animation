class Robot {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./robot.png"), 0, 0, 250, 250, 16, 0.2);
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 25, 25 );
    };
}