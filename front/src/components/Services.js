import Service from "./Service";
import serviceList from "../storage/services"

export default () => {
    return `<div class="arrow-block">
                <h3>Популярные услуги</h3>
                <div class="services">
                    ${serviceList().map(Service).join('')}
                </div>
            </div>`;
}
