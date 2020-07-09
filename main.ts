let nb = 0
input.onButtonPressed(Button.A, function () {
    while (nb < 10) {
        nb = nb + 1
        basic.showNumber(nb)
    }
})
