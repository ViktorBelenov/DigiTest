# DigiTest
Тестовое задание 

1. 
Каким будет результат следующей операции на языке JavaScript: [1, 2, 3] + [4, 5, 6]. Почему был получен такой результат?

Ответ: '1,2,34,5,6'.
Так как использована конкатенация, первый и второй массив привели к строке и сложили. "1, 2, 3" + "4, 5, 6"="1, 2 , 34, 5, 6" 

2. 
Дано выражение:
var a = {b: 1};
var b = a;
b.b = 2;
console.log(a);
Что будет выведено в консоли? Почему был получен такой результат?

Ответ: {b: 2}

Потому что 'a' - объектный тип данных(ссылочный), и когда мы объявляем 'b', мы не создаем новый объект, а ссылаемся на 'a'. В итоге изменение 'b', отражаются на 'a'.

3. 
Написать регулярное выражение, совпадающее с числом с плавающей точкой с точностью до 3 знака после запятой.

Ответ: /^\d+(\.\d{1,3})?$/
Если требуется число с обязательно 3 знаками после запятой, то "?" нужно убрать. 

4. 
Написать регулярное выражение, по которому определяется является ли строка ссылкой. Объяснить, как оно работает.
Ответ: 

const isGoodUrl = urlString => {

    // объект регулярного выражения
    const urlPattern = new RegExp('^(https?:\\/\\/)?'   + // проверка протокола
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'  + // проверка имени домена
    '((\\d{1,3}\\.){3}\\d{1,3}))'                       + // проверка ip адреса (версия 4, не 6)
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'                   + // проверка порта и пути
    '(\\?[;&a-z\\d%_.~+=-]*)?'                          + // проверка параметров запроса
    '(\\#[-a-z\\d_]*)?$','i');                            // проверка хэша

    // сама проверка
    return !!urlPattern.test(urlString);
}
 
5. 
Каким будет значение переменной text после выполнения данного JavaScript кода? 
function setText(message) { 
text = message;
 }
 var text = 'Текст';
 setText('Сообщение');
Опишите, почему получился такой результат.

Ответ: Сообщение
Потому что, при вызове функции setText с аргументом 'Сообщение', переменной из глобальной области видимости, text присваивается значение агрумента, то есть :'Сообщение'.


6. 
Написать функцию для получения список всех артикулов товаров в консоли браузера на странице 
https://groupprice.ru/categories/jenskaya-odejda?referer_from=main_catalog

Ответ:
  function getArticleNumbers() {
  const articles = [];
  const articleElements = document.querySelectorAll('[data-product-id]');
  articleElements.forEach(element => articles.push(element.dataset.productId));
  console.log(articles);
}
Если под артиклями имеется ввиду значение дата атрибута, продукт id.

7. 
Написать функцию для получения всех характеристики товара в консоли браузера в виде объекта в формате attributeName: value на странице 

Ответ: 
  function getProductAttributes() {
  const attributes = {};
  const productAttributeNames = document.querySelectorAll('.parameter-name');
  const productAttributeValues = document.querySelectorAll('.parameter-value');
  console.log(productAttributeNames);
  console.log(productAttributeValues);
  
  for (let i=0; i < productAttributeNames.length; i++) {
    attributes[productAttributeNames[i].textContent] = productAttributeValues[i].textContent;
  }

  console.log(attributes);
}
