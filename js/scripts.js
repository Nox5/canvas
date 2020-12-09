window.onload = () => {
    const canvas = document.querySelector("canvas")
    const ctx = canvas.getContext('2d')

    // On dessine un rectangle plein
    ctx.fillStyle = "blue"
    ctx.fillRect(300, 200, 50, 150)
    
    //On dessine un rectangle bleu plein et une bordure verte
    ctx.strokeStyle = "green"
    ctx.strokeRect(20, 20, 100, 100)
    ctx.fillRect(20, 20, 100, 100)

    //On dessine un triangle
    //On démarre un chemin
    ctx.fillStyle = "red"
    ctx.beginPath()
    ctx.moveTo(200, 200)
    ctx.lineTo(100, 200)
    ctx.lineTo(100, 300)
    ctx.fill()

    //On dessine un cercle
    ctx.beginPath()
    ctx.arc(300, 100, 25, 0, Math.PI, true)
    ctx.fill()
}