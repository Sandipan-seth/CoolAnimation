window.addEventListener("mousemove", (details) => {

    var rect = document.querySelector("#rect")

    var xval = gsap.utils.mapRange(
            0,
            window.innerWidth,
            100 + rect.getBoundingClientRect().width/2,
            window.innerWidth - 100- rect.getBoundingClientRect().width/2,
            details.clientX
        )

    var yval = gsap.utils.mapRange(
        0,
        window.innerHeight,
        50 + rect.getBoundingClientRect().height/2,
        window.innerHeight - 50- rect.getBoundingClientRect().height/2,
        details.clientY
    )


    gsap.to('#rect', {
        left: xval + 'px',
        top: yval + 'px',
        ease: Power3
    })
})