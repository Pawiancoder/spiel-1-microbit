
let spriteX = 2; //links / rechts
let spriteY = 3; //oben / unten

input.onButtonPressed(Button.A, () => {
    led.unplot(spriteX, spriteY);
    spriteX += 1;
    led.plot(spriteX, spriteY);
});

led.plot(spriteX, spriteY);