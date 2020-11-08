/**
 * Druk op knop A in de simulator.
 * 
 * Dan kan je met het microbit logo draaien in de simulator om de richting te veranderen
 */
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.compassHeading())
})
