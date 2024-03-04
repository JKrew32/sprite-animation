class Animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration) {
        Object.assign(this, {spritesheet, xStart, yStart, width, height, frameCount, frameDuration});

        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    };

    // drawFrame(tick, ctx, x, y, scale) {
    //     this.elapsedTime += tick;
    //     if (this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
    //     const frame = this.currentFrame();

    //     ctx.drawImage(this.spritesheet,
    //         this.xStart + this.width * frame, this.yStart,
    //         this.width, this.height,
    //         x, y,
    //         this.width, this.height);
    // };

    drawFrame(tick, ctx, x, y, scale) {
        this.elapsedTime += tick;
        if (this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
        const frame = this.currentFrame();

        // Calculate the scaled width and height
        const scaledWidth = this.width * scale;
        const scaledHeight = this.height * scale;

        // Calculate the new x and y positions to center the sprite
        const centerX = (ctx.canvas.width - scaledWidth) / 2;
        const centerY = (ctx.canvas.height - scaledHeight) / 2;

        ctx.drawImage(this.spritesheet,
            this.xStart + this.width * frame, this.yStart, // Source rectangle
            this.width, this.height, // Source rectangle size
            centerX, centerY, // Destination coordinates on the canvas
            scaledWidth, scaledHeight); // Scaled size of the image to draw
    };


    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    };
    
    isDone() {
        return (this.elapsedTime >= this.totalTime);
    };
};

