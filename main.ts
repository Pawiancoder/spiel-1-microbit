
let spriteX = 0; //links / rechts 
let spriteY = 3; //oben / unten

input.onButtonPressed(Button.A, () => {
    led.unplot(spriteX, spriteY); //alte Koordinaten
    spriteX += 1; //X - Koordinate + 1
    led.plot(spriteX, spriteY); //neue Koordinaten
});

input.onButtonPressed(Button.B, () => {
    led.unplot(spriteX , spriteY);
    spriteX = 0;
    led.plot(spriteX, spriteY);
})

led.plot(spriteX, spriteY); // Sprite wird geladen