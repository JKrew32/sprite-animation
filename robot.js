class Robot {
    constructor() {
        
    };

    update() {

    }

    draw(ctx) {
        ctx.drawImage(ASSET_MANAGER.getAsset("./robot.png"), 0, 0, 100, 100, 0, 0, 100, 100);
    }
}