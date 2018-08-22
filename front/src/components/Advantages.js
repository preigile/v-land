import Advantage from "./Advantage";
import advantagesList from "../storage/advantages"

export default () => {
    return `<div class="arrow-block">
                <h3>Наши Преимущества</h3>
                <div class="advantages">
                    <span>${advantagesList().map(Advantage).join('')}</span>
                </div>
            </div>`
}
