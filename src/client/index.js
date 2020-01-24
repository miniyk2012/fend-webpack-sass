import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { addListeners } from './js/listener'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/footer.scss'

console.log(checkForName);

// alert("I EXIST")
console.log("CHANGE!!");

(function () {
    addListeners();
})();

// 这样导出, 就把它们导入了Client library
export {
    checkForName,
    handleSubmit
}
