// @ts-check
import { test, expect } from '@playwright/test';
import { Server } from '../sites/domain';
import { SmsSite } from '../sites/sms centre';
const server = new Server()
import { Mokkano } from '../sites/mokkano/underDomains';
const mokkano = new Mokkano()
// export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export async function sleep (ms: number) {
  return new Promise(r => setTimeout(r, ms));
}

// формирование месяца
const date = new Date()
const numberMonth = [
  "Январь",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря"
];
const month = numberMonth[date.getMonth()]
const dateNow = date.getDate() + '.' +  month  + '.' + date.getFullYear() + ' ' + date.getHours() + ":" + date.getMinutes()


// проверка авторизации
// server.domains.forEach(element => {
//   test (`Test pop-up autorization ${element.domain}`, async ({page, context}) => {
//     // Going to a domain
//     await page.goto(Server.protocol + element.domain);
//     await page.evaluate(() => sessionStorage.setItem('address-popup-seen-at-entrance','true'));
//     await page.evaluate(()=> sessionStorage.setItem('show_unavaliable_terminal_message','true'));
//     await page.reload();
//     await page.waitForTimeout(1000);
//     // Open pop-up LogIn
//     await page.click('.v-login-button-text'); 
//     const inputPassword = expect (page.locator("//div[@class='v-login-input-label'][contains(.,'Пароль')]"));
//     if (inputPassword) {
//       //аутентифиуация по паролю
//       console.log("аутентифиуация по паролю");
//       await page.locator('//div[@class="v-login-wrapper-global"]//input[@type="tel"]').type('9991234567',  {delay: 500});
//       await page.locator('//div[@class="v-login-input-block"]//input[@type="text"]').type('939064', {delay: 500})

//       // await page.locator("//input[@class='v-login-input v-login-input-no-limit']").fill(''); 
      
//       //тут нужно дописать открытие нового браузера devino
      
//       await page.locator('//div[@class="v-login-button-action-wrapper v-mb-small"]//button').click();
//       await sleep(10000)
//       // await page.locator("//i[@class='fal fa-times']").click();
//     } else {
//       //аутентифиуация по смс
//       console.log('аутентифиуация по смс');
//       await page.locator("//input[@placeholder='(   )    -  -  ']").fill("9991234567")
//       await page.locator('//div[@class="v-login-input-block"]//button[contains(.,"Запросить код")]').click();
//         await page.locator("//i[@class='fal fa-times']").click();
//       }
//   });
// });



// Проверка заказов самовывоз Моккано
mokkano.underDomains.forEach(element => {
  test (`shop in Mokkano  ${element.uri}`, async({page, context}) => {
    console.log(dateNow);
    await page.goto('https://' + element.uri)
    
    // Подкидывание local storage
    await page.evaluate(()=> localStorage.setItem('city-popup-seen-at-entrance', 'true'))
    await page.reload();

    // Запрос настроек ресторана
    const requestApiVueSettings = await page.request.get('https://mokkano.ru/api/json/vue-settings?restaurant=' + element.restaurantId)
    const responseApiVueSettings = await requestApiVueSettings.json()
    console.log(responseApiVueSettings);
    
    // await sleep(10000)

    // переход в меню и добавление товара в корзину
    await page.locator('//a[@class="px-2 py-sm-2 pl-sm-0 pr-sm-4"][contains(.,"Напитки")]').click()
    
    // цикл продуктов при условии что продукт в стоп листе
    // const dd = expect (page.locator('//div[@class="product-list row mr-0 filterable-items"]//div[contains(@class,"col-xl-20")][1][contains(@class,"in-stop-list")]'))
    // // const product = expect (page.locator('//div[@class="product-list row mr-0 filterable-items"]//div[contains(@class,"in-stop-list")][4]'))
    // if (dd) {
    //   console.log(1);
    // } else {
    //   console.log(2);
    // }

    await page.locator("(//span[contains(.,'В корзину')])[1]").click()
    await page.locator("//button[@class='v-small-basket-button v-btn v-small-basket-button-header v-custom v-ripple-button']").click()
    // await expect(page.locator("(//input[contains(@class,'v-form-control v-mb-small')])[1]")).toBeVisible({ timeout: 2000 })
    const nameUser = "TECT"
    const phoneUser = "77777777777"
    const commentUser = "Не готовить, тестовый   заказ!"
    await sleep(2000)
    await page.waitForTimeout(1000)
    await page.locator("(//input[contains(@class,'v-form-control v-mb-small')])[1]").type(nameUser, { delay: 1300})
    await page.waitForTimeout(1000)
    await sleep(2000)
    await page.locator("//input[contains(@data-maska,'+7 (###) ###-##-##')]").type(phoneUser, { delay: 500})
    // await element.type('World', {delay: 100});
    await sleep(2000)
    await page.locator("//label[@class='toggle-switcher-label'][contains(.,'Самовывоз')]").click()
    await page.locator("(//div[contains(@class,'v-self-service-terminal-item')])[1]").click()
    await page.waitForTimeout(1000)
    await sleep(2000)
    await page.locator("//div[@id='AsyncComponentWrapper.CartStepBlock.AsyncComponentWrapper.CartOrderTypeBlock.AsyncComponentWrapper.CartSelfServiceTerminals.AsyncComponentWrapper.CartCommentcomment']//input[@class='v-form-control v-mb-small']").type(commentUser, { delay: 800})    
    // await page.locator("//label[@class='toggle-switcher-label'][contains(.,'Ко времени')]").click()
    // await page.locator("//select[contains(@class,'v-day-select v-form-control')]").click()
    // await page.locator("//select[contains(@class,'v-day-select v-form-control')]").selectOption({ index: 1 })
    // await page.locator("//select[contains(@class,'v-hour-select v-form-control')]").selectOption({index: 1})
    // await page.locator("//select[@class='v-minute-select v-form-control']").selectOption({index: 1})
    // await sleep(2000)
    await page.locator("//div[@class='v-payment-wrapper'][contains(.,'Картой при получении')]").click()
    // await page.locator("//span[contains(.,'Оформить заказ')]").click()
    await sleep(30000)


    const url =  element.uri
    const thisURL = await page.url().includes('order/complete')
    
    if(thisURL) {
      await page.screenshot({ path: `Screenshot/${url} + ${dateNow}.png`, fullPage: true });
      console.log('item 1');
      
    } else {
      await sleep(30000)
      await page.screenshot({ path: `Screenshot/${url} + " " + ${dateNow}.png`, fullPage: true });
      console.log('item 2');
    }
  })
}) 

// server.domains.forEach(element => {
  
  //   test (`Test shopping pickup ${element.domain}`, async ({page, context}) => {
    
    //     // Going to a domain
    //     await page.goto(Server.protocol + element.domain);
    //     await page.evaluate(() => sessionStorage.setItem('address-popup-seen-at-entrance','true'));
    //     await page.evaluate(()=> sessionStorage.setItem('show_unavaliable_terminal_message','true'));
    //     await page.waitForLoadState('domcontentloaded');
    //     if (element.cookies) {
      //       context.addCookies([{
        //         name: 'ssid443',
        //         value: '2dd1097b-e475-4f99-8468-d59845ffa46e',
        //         domain: element.domain,
        //         path: '/'
        //       }
        //       ]);
        //     };
        
        //     await page.reload();
        //     // await page.waitForTimeout(1000);
        
        //     // получение vue-настроек
        //     const apiVueSettings = await page.request.get(Server.protocol + element.domain + '/api/json/vue-settings?restaurant=' + element.restaurantId);
        //     const restVueSettings = await apiVueSettings.json();
        //     // console.log(restVueSettings);
        
        //     //получение настроек терминала
        //     const apiTerminals = await page.request.get(Server.protocol + element.domain + "/api/json/cities?restaurant=" + element.restaurantId + "&hideIfInactive=true") 
//     const nameTerminals = await apiTerminals.json();
    
//     if (nameTerminals.answer[0].TitleForGeocoding == "") {
//       console.log(1 + nameTerminals.answer[0].Title)
//     }
//     console.log(2 + nameTerminals.answer[0].TitleForGeocoding);
    
    
//     // Going to menu
//     await page.goto(Server.protocol + element.domain + "/menu/napitki");
  
//     // click in product
//     await page.locator(element.linkProduct).click();
  
//     // Going to the basket
//     await page.click('.v-small-basket-button');
  
//     await page.waitForLoadState('domcontentloaded');
    
//     // test promokode
//     // if ()
//     // await page.locator("xpath = (//input[contains(@class,'v-promo-code v-form-control')])[2]").click()
//     // await page.locator("xpath = (//input[contains(@class,'v-promo-code v-form-control')])[2]").fill('test123');
    
//     // await page.locator("(//button[contains(.,'Применить')])[2]").click();
//     // await page.locator(".btn-yes").click();
//     await page.locator("(//input[@class='v-form-control v-mb-small'])[1]").fill('test')
//     await page.waitForTimeout(1000);
//     await page.locator("xpath = (//input[@type='tel'])").fill("7777777777");
//     await page.waitForTimeout(1000);
    
//     if (restVueSettings.answer.PersonalInfoEmailFieldHidden  == false) {
//       await page.locator("//input[contains(@type,'email')]").click();
//       await page.locator("//input[contains(@type,'email')]").fill('test@zakaz.com');
//       await page.waitForTimeout(1000);
//     }

//     //заполнение поля улица
//     await page.locator("//input[contains(@maxlength,'100')]").click;
//     if (nameTerminals.answer[0].TitleForGeocoding == "") {
//       await page.locator("//input[contains(@maxlength,'100')]").fill(nameTerminals.answer[0].Title)
//       await page.waitForTimeout(1000);
//       await page.locator("(//li[contains(@class,'v-autocomplete-variant')])[2]").click();
//     } else {
//       await page.locator("//input[contains(@maxlength,'100')]").fill(nameTerminals.answer[0].TitleForGeocoding);
//     }
//     await page.waitForTimeout(1000);
//     await page.locator("(//input[@maxlength='10'])[1]").fill("1");
// Filling out the profile
//   });
//     await page.waitForLoadState("domcontentloaded");
//     await page.locator(key.locators.form.name).click();
//     if (await page.locator(key.locators.form.email).isVisible()) {
//     }
//     await page.waitForTimeout(1000);
//     await page.locator("xpath = (//input[@type='tel'])").click();
//     await page.waitForTimeout(1000);
//     await page.locator("//input[contains(@type,'email')]").click();
//     await page.locator("//input[contains(@type,'email')]").fill('test@zakaz.com');
//     await page.waitForLoadState('networkidle');
//     await page.locator("xpath = (//label[@for='v-no-shipment'][contains(.,'Самовывоз')])").click();
//     await page.locator("//div[contains(@class,'v-self-service-terminal-item selected')]").click();
//     const addresPickup = await page.locator(".v-self-service-terminal-item selected" || "//div[contains(@class,'v-self-service-terminal-item selected')]" || "//div[@class='v-self-service-terminal-item selected']").innerText();
//     await page.waitForTimeout(1000);
//     let arr = addresPickup.split(' ');
//     let nameStreet = arr[1];
//     // await page.locator("xpath = (//input[@class='v-form-control v-mb-small'])[4]" || "xpath = (//input[contains(@type,'text')])[5]" || "xpath = (//input[contains(@type,'text')])[9]" || "xpaty = (//input[contains(@type,'text')])[10]").fill(nameStreet);
//     // await page.locator("xpath = (//input[@class='v-form-control v-mb-small'])[4]" || "xpath = (//input[contains(@type,'text')])[5]" || "xpath = (//input[contains(@type,'text')])[9]" || "xpaty = (//input[contains(@type,'text')])[10]").fill(nameAdress);
// //     await page.waitForTimeout(5000);
//   });.



// domain.forEach(element => {
//   test (`Test terminal ${element.url}`, async({page, context}) => {

//   // Open site
//   await page.goto('https://xn--80aaaheedkue4cfj3v.xn--p1ai/order');
//   await page.waitForLoadState('networkidle');
//   await page.locator("xpath = (//label[@for='v-no-shipment'][contains(.,'Самовывоз')])").click();
//   await page.locator("//div[contains(@class,'v-self-service-terminal-item selected')]").click();
//   const addresPickup = await page.locator("//div[contains(@class,'v-self-service-terminal-item selected')]").innerText();
//   let arr = addresPickup.split(' ');
//   let nameStreet = arr[1];
//   await page.locator("xpath = (//input[@class='v-form-control v-mb-small'])[4]" || "xpath = (//input[contains(@type,'text')])[5]" || "xpath = (//input[contains(@type,'text')])[9]" || "xpaty = (//input[contains(@type,'text')])[10]").fill(nameStreet);


