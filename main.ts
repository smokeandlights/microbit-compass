function numeric_heading () {
    basic.showString(" ")
    basic.showString("" + (input.compassHeading()))
    basic.showString("deg")
}
input.onButtonPressed(Button.A, function () {
    if (Always_On == 1) {
        while (Always_On == 1) {
            numeric_heading()
        }
    } else {
        numeric_heading()
        basic.clearScreen()
    }
})
function display_on () {
    if (Always_On == 0) {
        Always_On = 1
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
    } else {
        Always_On = 0
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    }
}
input.onButtonPressed(Button.AB, function () {
    display_on()
})
input.onButtonPressed(Button.B, function () {
    while (Always_On == 1) {
        arrow()
    }
    arrow()
    basic.clearScreen()
})
function arrow () {
    if (input.compassHeading() == 0) {
        basic.showString("N")
    }
    if (input.compassHeading() == 90) {
        basic.showString("E")
    }
    if (input.compassHeading() == 180) {
        basic.showString("S")
    }
    if (input.compassHeading() == 270) {
        basic.showString("W")
    }
    if (input.compassHeading() >= 337.6 && input.compassHeading() <= 359) {
        basic.showArrow(ArrowNames.North)
    }
    if (input.compassHeading() >= 1 && input.compassHeading() <= 22.5) {
        basic.showArrow(ArrowNames.North)
    }
    if (input.compassHeading() >= 22.6 && input.compassHeading() <= 67.5) {
        basic.showArrow(ArrowNames.NorthEast)
    }
    if (input.compassHeading() >= 67.6 && input.compassHeading() <= 89) {
        basic.showArrow(ArrowNames.East)
    }
    if (input.compassHeading() >= 91 && input.compassHeading() <= 112.5) {
        basic.showArrow(ArrowNames.East)
    }
    if (input.compassHeading() >= 112.6 && input.compassHeading() <= 157.5) {
        basic.showArrow(ArrowNames.SouthEast)
    }
    if (input.compassHeading() >= 157.6 && input.compassHeading() <= 179) {
        basic.showArrow(ArrowNames.South)
    }
    if (input.compassHeading() >= 181 && input.compassHeading() <= 202.5) {
        basic.showArrow(ArrowNames.South)
    }
    if (input.compassHeading() >= 202.6 && input.compassHeading() <= 247.5) {
        basic.showArrow(ArrowNames.SouthWest)
    }
    if (input.compassHeading() >= 247.6 && input.compassHeading() <= 269) {
        basic.showArrow(ArrowNames.West)
    }
    if (input.compassHeading() >= 271 && input.compassHeading() <= 292.5) {
        basic.showArrow(ArrowNames.West)
    }
    if (input.compassHeading() >= 292.6 && input.compassHeading() <= 337.5) {
        basic.showArrow(ArrowNames.NorthWest)
    }
}
let Always_On = 0
input.calibrateCompass()
Always_On = 1
while (Always_On == 1) {
    arrow()
}
