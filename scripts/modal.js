 const images = document.querySelectorAll(".images img");
        const modal = document.querySelector(".modal");
        const modalImg = document.querySelector(".modalImg");
        const modalTxt = document.querySelector(".modalTxt");
        const close = document.querySelector(".close");
        const prevBtn = document.querySelector(".prevBtn");
        const nextBtn = document.querySelector(".nextBtn");

        images.forEach((image, index) => {
            image.addEventListener("click", () => {
                modalImg.src = image.src;
                modalTxt.innerHTML = image.alt;
                modal.classList.add("appear");

                let imageIndex = index;
                let next = imageIndex++;
                let prev = imageIndex--;
                // keyboard esc, <, > shortcuts
                window.addEventListener("keyup", (e) => {
                    if (next >= images.length) {
                        next = 0;
                    } if (prev < 0 ) {
                        prev = images.length - 1;
                    }
// Above block line 59-63 loops through photos infinitely with arrow keys but does not apply function to prev/next buttons
                    if(e.keyCode === 37) {
                        modalImg.src = images[prev].src;
                        modalTxt.innerHTML = images[prev].alt;
                        prev--;
                        next = prev + 2;
                    } else if (e.keyCode === 39) {
                        modalImg.src = images[next].src;
                        modalTxt.innerHTML = images[next].alt;
                        next++;
                        prev = next - 2;
                    } else if (e.keyCode === 27) {
                        modal.classList.remove("appear");
                    }
                });

                prevBtn.addEventListener("click", () => {
                    modalImg.src = images[prev].src;
                    modalTxt.innerHTML = images[prev].alt;
                    prev--;
                    next = prev + 2;
                });

                nextBtn.addEventListener("click", () => {
                    modalImg.src = images[next].src;
                    modalTxt.innerHTML = images[next].alt;
                    next++;
                    prev = next - 2;
                });

                close.addEventListener("click", ()=> {
                    modal.classList.remove("appear");
                });
            });
        });