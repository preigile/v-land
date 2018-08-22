export default (service) => {
    console.log('service', service);
    return `<div class="service">
                <img src="${service.image}" alt="${service.title}"/>
                <h5 class="service-title">${service.title}</h5>
                <span class="service-description">${service.description}</span>
                <span class="service-cost">${service.cost}</span>
                <span class="service-time">${service.duration}</span>
            </div>`
}
