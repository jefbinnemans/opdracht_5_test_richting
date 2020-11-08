/**
 * Draai met het microbit logo in de simulator om de richting te veranderen
 */
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.compassHeading())
})
