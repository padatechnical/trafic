pins.digitalWritePin(DigitalPin.P8, 1)
pins.digitalWritePin(DigitalPin.P2, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P20) == 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        for (let y = 0; y <= 4; y++) {
            for (let x = 0; x <= 4; x++) {
                led.unplot(x, y)
                music.playTone(262, music.beat(BeatFraction.Half))
                basic.pause(750)
            }
        }
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        music.setTempo(100)
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
        for (let index = 0; index < 7; index++) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . # . .
                `)
            basic.pause(300)
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . # . # .
                `)
            basic.pause(300)
        }
        music.setTempo(140)
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
        for (let index = 0; index < 36; index++) {
            led.toggle(1, 4)
            led.toggle(2, 4)
            led.toggle(3, 4)
            basic.pause(200)
        }
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(3000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else {
        basic.clearScreen()
        basic.showLeds(`
            . # # # .
            # # . . #
            # . # . #
            # . . # #
            . # # # .
            `)
    }
})
