m1 = document.querySelector(".machine img:nth-child(1)");
m2 = document.querySelector(".machine img:nth-child(2)");
m3 = document.querySelector(".machine img:nth-child(3)");
ballons = ["Graphics/Ballons/B1.png", "Graphics/Ballons/B2.png", "Graphics/Ballons/B3.png", "Graphics/Ballons/B4.png", "Graphics/Ballons/B5.png", "Graphics/Ballons/B6.png", "Graphics/Ballons/B7.png", "Graphics/Ballons/B8.png", "Graphics/Ballons/B9.png", "Graphics/Ballons/B10.png"];
letters = ["Graphics/Letters/A.png", "Graphics/Letters/B.png", "Graphics/Letters/C.png", "Graphics/Letters/D.png", "Graphics/Letters/E.png", "Graphics/Letters/F.png", "Graphics/Letters/G.png", "Graphics/Letters/H.png", "Graphics/Letters/I.png", "Graphics/Letters/J.png", "Graphics/Letters/K.png", "Graphics/Letters/L.png", "Graphics/Letters/M.png", "Graphics/Letters/N.png", "Graphics/Letters/O.png", "Graphics/Letters/P.png", "Graphics/Letters/Q.png", "Graphics/Letters/R.png", "Graphics/Letters/S.png", "Graphics/Letters/T.png", "Graphics/Letters/U.png", "Graphics/Letters/V.png", "Graphics/Letters/W.png", "Graphics/Letters/X.png", "Graphics/Letters/Y.png", "Graphics/Letters/Z.png"];
counter = 0;
b = 0;
l = 0;
z = 1000;
m3.addEventListener("click", function () {
    m3.classList.add("handle");
    m2.classList.add("filler");
    m1.classList.add("box");
    counter++;
    if (b >= ballons.length)
        b = 0;
    if (l >= letters.length)
        l = 0;
    if (counter == 1) {
        grp = document.createElement("div");
        grp.classList.add("balloons");
        grp.style.zIndex = z;
        document.body.appendChild(grp);
        ball = document.createElement("img");
        ball.src = ballons[b];
        grp.appendChild(ball);
        lett = document.createElement("img");
        lett.src = letters[l];
        grp.appendChild(lett);
        rop = document.createElement("img");
        rop.src = "Graphics/rope.png";
        grp.appendChild(rop);
        console.log("Balloon");
        b++;
        l++;
        z--;
        grp.addEventListener("click", function () {
            this.classList.add("burst");
            setTimeout(() => {
                this.remove();
            }, 300);
        });
    }
    if (counter == 2)
        grp.classList.add("phase2");
    if (counter == 3) {
        grp.classList.add("phase3");
        rop.style.opacity = 1;
        counter = 0;
    }
    setTimeout(() => {
        m3.classList.remove("handle");
        m2.classList.remove("filler");
        m1.classList.remove("box");
    }, 300);

});
