// @ts-check
import { test, expect } from '@playwright/test';
import { Server } from '../sites/domain';
import { SmsSite } from '../sites/sms centre';
const server = new Server()

server.domains.forEach(element => {
  test (`Test pop-up autorization ${element.domain}`, async ({page, context}) => {
    // Going to a domain
    await page.goto(Server.protocol + element.domain);
    //если поп-ап выбор адреса
    const adressPopAp = expect (page.locator("//div[@class='modal-arora-content modal-address-selector-popup']"));
    if (!adressPopAp) { 
      console.log("pass");
      await page.evaluate(() => sessionStorage.setItem('address-popup-seen-at-entrance','true'));
      await page.evaluate(()=> sessionStorage.setItem('show_unavaliable_terminal_message','true'));
      await page.reload();
      await page.waitForTimeout(1000);
    } else {
        console.log("sms");
        await page.click('.v-login-button-text'); // Open pop-up LogIn
        // проверка формы с паролем или нет
        const inputPassword = expect (page.locator("//div[@class='v-login-input-label'][contains(.,'Пароль')]"));
        //аутентифиуация по смс
        if (inputPassword) {
            console.log("step1");
            await page.locator("//input[@placeholder='(   )    -  -  ']").fill('9991234567');
            await page.locator("//button[@class='v-login-button v-login-border'][contains(.,'Запросить код')]").click();
            await page.locator("//input[@class='v-login-input v-login-input-no-limit']").fill(''); //тут нужно дописать открытие нового браузера devino
            await page.locator("//div[@class='v-login-button-action-wrapper v-mb-small']//button[@class='v-login-button']").click();
        } else {
            //аутентифиуация по паролю
            console.log('step2');
            await page.locator("//input[@placeholder='(   )    -  -  ']").fill("9991234567")
            await page.locator("//input[@class='v-form-control v-login-input']")
            await page.locator("xpath = (//i[@class='fal fa-times'])").click();
          }
      }
  });
});

  
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
    
    


    
    
//     // Filling out the profile
//   });
// //     await page.waitForLoadState("domcontentloaded");
// //     await page.locator(key.locators.form.name).click();

// //     if (await page.locator(key.locators.form.email).isVisible()) {
// //     }

// //     await page.waitForTimeout(1000);
// //     await page.locator("xpath = (//input[@type='tel'])").click();
// //     await page.waitForTimeout(1000);
// //     await page.locator("//input[contains(@type,'email')]").click();
// //     await page.locator("//input[contains(@type,'email')]").fill('test@zakaz.com');
// //     await page.waitForLoadState('networkidle');
// //     await page.locator("xpath = (//label[@for='v-no-shipment'][contains(.,'Самовывоз')])").click();
// //     await page.locator("//div[contains(@class,'v-self-service-terminal-item selected')]").click();
// //     const addresPickup = await page.locator(".v-self-service-terminal-item selected" || "//div[contains(@class,'v-self-service-terminal-item selected')]" || "//div[@class='v-self-service-terminal-item selected']").innerText();
// //     await page.waitForTimeout(1000);
// //     let arr = addresPickup.split(' ');
// //     let nameStreet = arr[1];
// //     // await page.locator("xpath = (//input[@class='v-form-control v-mb-small'])[4]" || "xpath = (//input[contains(@type,'text')])[5]" || "xpath = (//input[contains(@type,'text')])[9]" || "xpaty = (//input[contains(@type,'text')])[10]").fill(nameStreet);
  
    
// //     // await page.locator("xpath = (//input[@class='v-form-control v-mb-small'])[4]" || "xpath = (//input[contains(@type,'text')])[5]" || "xpath = (//input[contains(@type,'text')])[9]" || "xpaty = (//input[contains(@type,'text')])[10]").fill(nameAdress);
    
    
    
// //     await page.waitForTimeout(5000);
//   });
// // domain.forEach(element => {
// //   test (`Test terminal ${element.url}`, async({page, context}) => {

// //   // Open site
// //   await page.goto('https://xn--80aaaheedkue4cfj3v.xn--p1ai/order');
// //   await page.waitForLoadState('networkidle');
// //   await page.locator("xpath = (//label[@for='v-no-shipment'][contains(.,'Самовывоз')])").click();
// //   await page.locator("//div[contains(@class,'v-self-service-terminal-item selected')]").click();
// //   const addresPickup = await page.locator("//div[contains(@class,'v-self-service-terminal-item selected')]").innerText();
// //   let arr = addresPickup.split(' ');
// //   let nameStreet = arr[1];
// //   await page.locator("xpath = (//input[@class='v-form-control v-mb-small'])[4]" || "xpath = (//input[contains(@type,'text')])[5]" || "xpath = (//input[contains(@type,'text')])[9]" || "xpaty = (//input[contains(@type,'text')])[10]").fill(nameStreet);
