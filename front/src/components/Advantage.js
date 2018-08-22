export default (advantage) => {
    return `<div class="advantage">
                <img src="${advantage.image}" alt="${advantage.title}"/>
                <span>${advantage.title}</span>
            </div>`
}
