type Domain = {
    domain: string,
    restaurantId: string,
    cookies: string,
    linkProduct: string
}

export class Server {
    domains: Array<Domain>
    static protocol =  "https://";
    constructor(){
        this.domains = [
            // {
            //     domain: "ebisan.mnogo.menu",
            //     restaurantId: "6155a7f0-321d-4d80-8f0c-f6fc8db8f25b"
            // },
            // {
            //     domain: "kuru-beru.ru",
            //     restaurantId: "ed01f0c6-e547-4dda-a6ef-669480f396e3",
            //     cookies: "false",
            //     linkProduct: "(//span[@class='product-price'])[2]"
            // },
            // {
            //     domain: "vivatpizza.ru",
            //     restaurantId: "31759fd3-68c7-42f4-ab9e-50936951725e",
            //     cookies: "false",
            //     linkProduct: "(//span[@class='product-price'])[2]"
            // //  await page.locator("(//input[contains(@placeholder,'Введите промокод')])[2]").fill('test123');
            // },
            // {
            //     domain: "oscocafe.ru",
            //     restaurantId: "5dcf0864-0785-4af6-ba48-245a691960fd",
            //     cookies: 'true',
            //     linkProduct: "(//span[@class='product-price'])[2]"
            // },
            {
            //     // жадина говядина
                domain: "xn--80aaaheedkue4cfj3v.xn--p1ai",
                restaurantId: "5a79ac58-fd83-488d-ada6-95f06562aaba",
                linkProduct: "(//span[@class='product-price'])[2]",
                cookies: "false"
            },
            // {
            //     domain: "deluxe.pizza",
            //     restaurantId: "729f7ad2-0452-4129-a022-eb0ef664dfa2",
            //     cookies: false
            // },
            // {
            //     domain: "krd-paren.ru",
            //     restaurantId: "bdbc977b-ffc9-4b32-8d8a-e71aa59b0981", 
            //     cookies: false
            // }
            
        ]
    }
    
    // static domain = "www.pizzaking.ua";
    // static ssidId = "bcdc01b8-a34e-4305-9b43-ed50c9ada9db";
    // static domain = "dostavka-perm.ru";
    // static ssidId = "becaacc8-665e-4fbf-8932-3825370ec686";
    // static domain = "bao.cafe";
    // static ssidId = "89861167-610c-4832-8d8b-19918c37152c";
    // static domain = "lipetskpizza.ru";
    // static ssidId = "9e4a3653-bfad-4e71-9af8-1584969b89a7";
    // static domain = "zhitnaya.buloshnaya.ru";
    // static ssidId = "8368e2bf-717d-4be4-9f9e-60631123981f";
    // static domain = "tuktuk.mnogo.menu";
    // static ssidId = "4a43ce01-caf3-4f14-a1b6-3e69472fb067";
    // static domain = "dostavka89.com";
    // static ssidId = "5fe0861f-df4b-46ac-bdc6-5d014065df0c";
    // static ssidId = "918e5647-483a-4ead-95e2-1ff65c1421b7";
    // static domain = "krd-paren.ru";
    // static domain = "krd-paren.mnogo.menu";
    // static ssidId = "e30f628e-5d1f-4ba6-a9e7-615c1ef324e2";
    // static domain = "deluxe.pizza";
    // static domain = "deluxe.mnogo.menu";
    // static domain = "office.one-line.ru:8036";
    // static ssidId = "918e5647-483a-4ead-95e2-1ff65c1421b7";
    // static domain = "pizznroll.ru";
    // static ssidId = "662471c9-2eaf-44dd-8196-1af6e9b9ece9";
    // static domain = "rocknrolls.one-line.ru";
    // static domain = "lawazza-pizza.ru";
    // static ssidId = "3f8b6007-946f-4921-a930-5f929621b567";
    // static ssidId = "acd6f260-ee83-477f-aa35-ce77335c73de";
    // static domain = "www.meteorpizza.ru";
    // static ssidId = "6f254c1c-348e-47f0-801a-5c734653877a";
    // static domain = "bibi-sushi.ru";
    // static ssidId = "5c4a6f8a-dac0-4f13-9383-28f65c2b19d4";
    // static domain = "pepperspizza.ru";
    // static ssidId = "036971c4-5c37-40b7-871d-4519db0cc8dc";
    // static domain = "vivatpizza.mnogo.menu";
    // static domain = "vivatpizza.ru";
    // static ssidId = "c341f19d-a550-4b1c-9df3-4ed0a97a9472";
    // static restaurantId = "31759fd3-68c7-42f4-ab9e-50936951725e";
    // static domain = "mario.pizza";
    // static ssidId = "7de0f8b0-9ae1-4cc9-8e48-e3b0b8665580";
    // static domain = "pizza-milana.ru";
    // static ssidId = "1e92738b-1270-417f-b9e0-caa820948234";
    // static domain = "milana.mnogo.menu";
    // static ssidId = "d089fb27-8f14-11e8-92b1-00155d024ec8";
    // static domain = "gabsfood.ru";
    // static ssidId = "df70742d-602d-496b-b4a8-871730e9f569";
    // static domain = "pizza314.ru";
    // static ssidId = "0bbcf0b0-dd18-421b-af21-ea8d9e0fb866";
    // static domain = "hofo.club";
    // static ssidId = "68a9bc7c-a391-4219-ad49-0a452aada162";
    // static domain = "tokapizza.ru";
    // static ssidId = "ab9c9745-7142-4042-bc91-52692c062f2d";
    // static domain = "lawazza-pizza.ru";
    // static ssidId = "3f8b6007-946f-4921-a930-5f929621b567";
    // static domain = "subandburger.ru";
    // static ssidId = "d6db2248-28db-498d-89b3-5d8abc8448c2";
    // static domain = "sushi-shef.ru";
    // static ssidId = "3e324a19-47b1-4e7b-ae1b-9d5760bbb711";
    // static domain = "pizzagaudi.ru";
    // static ssidId = "e99dc471-7518-4115-976d-17e4b0e1ecb3";
    // static domain = "milanopizza.mnogo.menu";
    // static ssidId = "d7f1f5ba-578d-4380-9adc-5031ce3aa0be";
    // static domain = "pepperspizza.ru";
    // static ssidId = "036971c4-5c37-40b7-871d-4519db0cc8dc";
    // static domain = "mokkano.ru";
    // static domain = "mokkano.mnogo.menu";
    // static ssidId = "c3ce6815-eee2-4b11-ae80-db086f3ee6fe";
    // "domainPunycode": true;
    // static domain = "чудопицца46.рф";
    // static ssidId = "2e02c9d0-1748-4f6c-991a-29101ddd50a6";
    // "domainPunycode": false
    // static domain = "dolinavkusa.ru";
    // static ssidId = "d990a357-d90b-4897-ae74-6c198fee4f29";
    // static domain = "pizzaterra.ru";
    // static ssidId = "df055c45-617c-4489-b6eb-dc5db5087bbb";
    // static domain = "marmelad.terrasa.site";
    // static ssidId = "4e0819ec-b16a-4430-b0e2-bb56ff7e2a7c";
    // static domain = "stupino.magicpizza.su";
    // static ssidId = "fb896752-3d23-41c7-aedd-4c4ca5b84157";
    // static domain = "zavodvezet.ru";
    // static ssidId = "7a62e7c6-a952-4052-b737-901d863fbb50"
    // static domain = "biysk.grilnica.ru";
    // static domain = "biysk.mnogo.menu";
    // static ssidId = "68ee8f28-c771-4f71-a6a5-f479b9c02ed7";
    // static domain = "bijsk.mnogo.menu";
    // static ssidId = "68ee8f28-c771-4f71-a6a5-f479b9c02ed7";
    // static domain = "miyagi-sushi.ru";
    // static ssidId = "036971c4-5c37-40b7-871d-4519db0cc8dc";
    // static domain = "22334444.mnogo.menu";
    // static ssidId = "65736c9a-4539-4abe-96c6-4da7948f6776";
    // static domain = "grilnitsa-old.mnogo.menu";
    // static ssidId = "85a7c88f-c9c3-4147-8d05-de1737b86b2e";
    // static domain = "pizza-sushi.com";
    // static domain = "domodedovo.pizza-sushi.mnogo.menu";
    // static ssidId = "5e1070dd-7dba-46a5-b2ea-4c2754ee3048";
    // static domain = "pizzalisa.ru";
    // static ssidId = "efe78a01-55a2-4b0b-b5b2-c3e6ea8ae295";
    // static domain = "okinavakazan.ru";
    // static domain = "okinava.mnogo.menu";
    // static ssidId = "3753f484-f65f-4a31-bb84-7a339a9081ea";
    // static domain = "sushi-time-izh.ru";
    // static ssidId = "9cdcdb41-1075-4777-b3f4-e1cfa51ee7ff";
    // static domain = "vkusnomnom.ru";
    // static ssidId = "3fc34c6f-f72a-43cb-a3b9-fd0e5b899d98";
    // static domain = "gabsfood.ru";
    // static ssidId = "df70742d-602d-496b-b4a8-871730e9f569";
    // static domain = "pizzaterra.ru";
    // static ssidId = "df055c45-617c-4489-b6eb-dc5db5087bbb";
    // static domain = "dostavka-perm.ru";
    // static ssidId = "becaacc8-665e-4fbf-8932-3825370ec686";
    // static domain = "fenix.pizza";
    // static ssidId = "5741ed62-f78b-438d-a8f5-005aaaad90fe";
    // static domain = "bonappetit-62.ru";
    // static ssidId = "806e484e-768f-41da-a603-22274fa6e9e8";
    // static domain = "sushi-boom.com";
    // static ssidId = "3055c266-281e-4c14-861a-15d9b5a64178";
    // static domain = "pepperspizza.ru";
    // static domain = "pepperstest.mnogo.menu";
    // static ssidId = "036971c4-5c37-40b7-871d-4519db0cc8dc";
    // static domain = "kishmish72.ru";
    // static ssidId = "9b16cdb1-d56c-417a-8d12-33eddeca5b9a";
    // static domain = "denpizzi.mnogo.menu";
    // static ssidId = "ba1b75ff-b10e-40c9-af55-62693d14d198";
    // static domain = "barcherry.ru";
    // static ssidId = "1c2e8ba6-5aba-47c9-81ea-fde1487f7940";
    // static domain = "fastvegan.ru";
    // static ssidId = "2d959143-7346-46a7-bace-49a927187f36";
    // static domain = "brusnika.nu";
    // static ssidId = "6ac63131-443f-462f-baf5-5ac5fe6f57eb";
    // static domain = "i-sushi.ru";
    // static ssidId = "5e72fc3b-9b80-43fd-8546-bda5c0b531db";
    // static domain = "reutov.mnogo.menu";
    // static ssidId = "918e5647-483a-4ead-95e2-1ff65c1421b7"
    // static domain = "giros12.ru";
    // static ssidId = "63880e38-e61d-479b-9de2-3a887d3f470b";
    // static domain = "sanremo-pizza.com";
    // static ssidId = "d4c48ebd-8c8d-42a2-8393-f0e9e995cd62";
    // static domain = "yespizza.ru";
    // static ssidId = "b1fb637c-cbcb-43a1-bd77-7d7724fdf339";
    // static domain = "bonpizza.ru";
    // static ssidId = "33fe08bd-707f-43da-b05e-dc8698a7bb5b";
    // static domain = "osco.mnogo.menu";
    // static ssidId = "19485573-57b1-4f50-8b3e-4da9c620d020";
    // static domain = "myasoroob.mnogo.menu";
    // static ssidId = "a7797e87-2b57-4f88-a7d3-d6bf5aa8316a";
    // static domain = "yojy.ru";
    // static ssidId = "99cd4457-d713-46ea-a7e9-8aff974d7ca1";
    // static domain = "pepepizza.ru";
    // static ssidId = "649de5df-7e18-4685-8ed7-3c6fbd8bde03";
    // static domain = "mitberi.ru";
    // static ssidId = "581d7408-2ea7-4c22-9792-974924879b21";
    // static domain = "palermo.mnogo.menu";
    // static ssidId = "df9939dc-f541-46ce-9a84-5115d5c85739";
    // static domain = "rnd.pizza-sicilia.ru";
    // static domain = "test.sicilia.mnogo.menu";
    // static ssidId = "54b08a38-a3f1-4b7e-89b1-bfdf3ba11f40";
    // static domain = "fiesta-pizza.ru";
    // static ssidId = "7c43b7f0-8bb9-4a4a-b3d1-e6d4bf29db5c";
    // static domain = "ebisan.mnogo.menu";
    // static ssidId = "21e5eec4-f16a-4e58-9741-97c601d620d0";
    // static domain = "cafe-metelica.ru";
    // static ssidId = "3b59491e-c6d5-4934-bb90-f1c2c131a457"
    // static domain = "express-trattoria.ru";
    // static ssidId = "d5a4b541-0841-4cb6-a952-96a9e23ee99d";
    // static domain = "urbanfood-tmb.ru";
    // static ssidId = "92bfdc08-5f89-46d5-929d-7a03f47b9e29";
    // "domain" : "imperiya-sushi.ru";
    // static ssidId = "73ff54eb-ff72-4be8-9a7e-10c972797d08"
    // static domain = "mrsushkin.ru";
    // static ssidId = "f893ca2a-c3bb-4d3d-be38-3b1fe9cc2b15";
    // static domain = "www.townhouse-cafe.com";
    // static ssidId = "a1e57486-2c11-4b46-be57-8599431e9e44";
    // static domain = "sushi-oz.ru";
    // static ssidId = "424f172c-ee62-475e-82d8-9b698f550609";
    // static domain = "darvin-eda.ru";
    // static domain = "darvin-eda.ru.mnogo.menu";
    // static ssidId = "1969be1a-d0e0-43fd-a876-281ecfdca6de";
    // static domain = "product.mnogo.menu";
    // static ssidId = "cdd02864-9044-44dc-af4a-d9b0bfbdc035";
    // static domain = "rollwok.ru";
    // static ssidId = "29bff243-fd8a-4f6d-8a77-96538d0e578a";
    // static domain = "skoro-pizza.ru";
    // static ssidId = "f327f102-9d01-45e5-a771-79d0dd4d7a5d"
}

