"use strict";

const root = document.getElementById("root");
const ul = document.createElement("ul");

root.append(ul);
ul.classList.add("userCardContainer");



fetch("/user.json")
    .then((res) => res.json())
    .then((arr) => {
        const newArr = arr.map((obj) => {
            const li = createLi("userCard");
            li.id = obj.id;
            li.append(createImg(obj.profilePicture), createH1(obj.firstName, obj.lastName), createP("Sales manager"), createButton());
            li.addEventListener("click", (event) => {
                li.classList.toggle("classAddEventListener", "userCard");
            });
            return li;
        })
        ul.append(...newArr);

    });







function createUl(className) {
    const ul = document.createElement("ul");
    ul.classList.add(className);
    return ul;
}


function createLi(className) {
    const li = document.createElement("li");
    li.classList.add(className);
    return li;
}

function createButton() {
    const button = document.createElement("button");
    button.textContent = "Connect";
    return button;
}

function createH1(firstName, lastName) {
    const h1 = document.createElement("h1");
    h1.textContent = `${firstName} ${lastName}`;
    return h1;
}

function createP(string) {
    const p = document.createElement("p");
    p.textContent = string;
    return p;
}

function createImg(url) {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "JS";
    return img;
}


