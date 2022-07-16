const presentationHeading = document.getElementsByClassName("heading")[0],
    greetings = document.getElementById("greetings"),
    words = [{
        element: greetings,
        text: "Hello There!",
        time: 300,
        finished: !1
    }, {
        element: presentationHeading,
        text: "Jacopo Luciani",
        time: 200,
        finished: !1
    }, ],
    wait = a => new Promise(b => setTimeout(b, a)),
    type = (a, b) => {
        a.forEach((a, c) => {
            a.isIntersecting && (typeword(c), b.unobserve(a.target))
        })
    },
    typeword = async c => {
        let a = words[c];
        for (let b = 0; b < a.text.length; b++) {
            let d = a.text[b];
            a.finished || (a.element.textContent = a.element.textContent + d, await wait(a.time))
        }
        a.finished = !0
    }, options = {
        rootMargin: "0px",
        threshold: 1
    }, observer = new IntersectionObserver(type, options);
for (let i = 0; i < words.length; i++) {
    let a = words[i];
    observer.observe(a.element)
}
