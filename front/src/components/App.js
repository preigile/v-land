import Header from "./Header";
import Registration from "./Registration";
import Advantages from "./Advantages";
import Services from "./Services";
import Footer from "./Footer";
import Information from "./Information";

export default () => {
    return `${Header()}
            ${Registration()}
            ${Advantages()}
            ${Services()}
            ${Information()}
            ${Footer()}`;
}
