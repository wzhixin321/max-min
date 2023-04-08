let u = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(u)
})
basic.forever(function () {
    u = input.temperature()
})
