
let spriteX = 2; //links / rechts 
let spriteY = 3; //oben / unten

input.onButtonPressed(Button.A, () => {
    led.unplot(spriteX, spriteY); //alte Koordinaten
    spriteX += 1; //X - Koordinate + 1
    led.plot(spriteX, spriteY); //neue Koordinaten
});

led.plot(spriteX, spriteY); // Sprite wird geladen