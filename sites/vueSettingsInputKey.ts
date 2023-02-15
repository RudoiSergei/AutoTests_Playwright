export const basketVueSettings = [
    'ApartmentHidden',
    // 'ApartmentRequired',
    'DoorwayHidden',
    // 'DoorwayRequired' ,
    'CorpusHidden',
    // 'CorpusRequired',
    'BuildingHidden',
    // 'BuildingRequired',
    'IntercomHidden',
    // 'IntercomRequired',
    'FloorHidden',
    // 'FloorRequired',
    'personalInfoEmailFieldHidden',
    // 'PersonalInfoEmailFieldRequired',
    'PersonalInfoPersonCountHidden',
    // 'PersonalInfoPersonCountRequired',
    'ChangeRequired',
    // 'GratuityRequired',
    'promocodeHidden',
    'MenuLink'
]

  

// export class Datakeys {

//     constructor(){
//     }

//     static setSettings(settings){
//         this.accountPresentsMax = settings.AccountPresentsMax,
//     }
// }

        
        
//           //---- Компонент подарков на день рождения в ЛК ----
//                     //Количество подарков в слайдере количество будет сокращено в мобильной версии
//                     
//                     //-----
        
//                     // ------- Компонент дополнительной информации о заказе ------
//                     //Скрыть поле квартиры
//                     this.apartmentHidden = settings.ApartmentHidden,
//                     //Поле квартиры обязательно к заполнению
//                     this.apartmentRequired = settings.ApartmentRequired,
//                     //Скрыть поле подъезда
//                     this.doorwayHidden = settings.DoorwayHidden,
//                     //Поле подъезда обязательно к заполнению
//                     this.doorwayRequired = settings.DoorwayRequired,
//                     //Скрыть поле строение/корпус
//                     this.corpusHidden = settings.CorpusHidden,
//                     //Поле строение/корпус обязательно к заполнению
//                     this.corpusRequired = settings.CorpusRequired,
//                     //Скрыть отдельное поле для строения
//                     this.buildingHidden = settings.BuildingHidden,
//                     //Отдельное поле для строения обязательно к заполнению
//                     this.buildingRequired = settings.BuildingRequired,
//                     //Скрыть поле домофона
//                     this.intercomHidden = settings.IntercomHidden,
//                     //Поле домофона обязательно к заполнению
//                     this.intercomRequired = settings.IntercomRequired,
//                     //Скрыть поле этажа
//                     this.floorHidden = settings.FloorHidden,
//                     //Поле этажа обязательно к заполнению
//                     this.floorRequired = settings.FloorRequired,
//                     //Отображать поля колонкой
//                     this.additionalInfoShowAsColumn =
//                         settings.AdditionalInfoShowAsColumn,
//                     //--------
        
//                     //----Иконки со ссылками на мобильные приложения --------
//                     //Использовать белый логотип магазинов приложений  не затронет Play Market по юридическим причинам
//                     this.appsUseWhiteLogo = settings.AppsUseWhiteLogo,
//                     //--------
        
//                     //------ Настройки компонентов выбора адреса -----
//                     //Отображение списка городов
//                     this.citySelectDisplay = settings.CitySelectDisplay,
//                     //Показать поле поиска
//                     this.citySelectShowSearch = settings.CitySelectShowSearch,
//                     //Показать попап при входе
//                     this.citySelectShowOnEntrance = settings.CitySelectShowOnEntrance,
//                     //Показать попап только один раз
//                     this.citySelectShowOnce = settings.CitySelectShowOnce,
//                     //Показать кнопку закрытия
//                     this.citySelectShowCloseButton =
//                         settings.CitySelectShowCloseButton,
//                     //------
        
//                     //----- Компонент уведомлений о добавленном продукте ---
//                     //Максимальное количество уведомлений на странице
//                     this.menuNotificationLimit = settings.MenuNotificationLimit,
//                     //Продолжительность показа в миллисекундах
//                     this.menuNotificationDurationMS =
//                         settings.MenuNotificationDurationMS,
//                     //Инвертировать кнопку добавления в корзину
//                     this.menuPageButtonColorInvert =
//                         settings.MenuPageButtonColorInvert,
//                     //--------
        
//                     //----Общие настройки компонентов меню ----
//                     //Увеличивать картинку при наведении курсора
//                     this.menuPageImageZoom = settings.MenuPageImageZoom,
//                     //----------
        
//                     //---- Компонент карточки-конструктора ----
//                     //Способ указания количества модификаторов
//                     this.constructorPageModsType = settings.ConstructorPageModsType,
//                     //Способ расположения модификаторов В строку,Колонка, Две колонки, Три колонки, Четыре колонки
//                     this.constructorPageModsLayout =
//                         settings.ConstructorPageModsLayout,
//                     //Количество оставшихся модификаторов в категории
//                     this.constructorPageShowRemainingMods =
//                         settings.ConstructorPageShowRemainingMods,
//                     // Меньше половины идеально для квадратных фото или половина
//                     this.constructorPagePhotoTakeHalf = settings.ConstructorPagePhotoTakeHalf,
//                     //Способ указания количества модификаторов максимум один
//                     this.constructorPageModsOneType = settings.ConstructorPageModsOneType,
//                     //Способ расположения модификаторов максимум один
//                     this.constructorPageModsOneLayout =
//                         settings.ConstructorPageModsOneLayout,
//                     // Дать возможность указать количество конструкторов которое будет добавлено в корзину
//                     this.constructorPageModsShowCount =
//                         settings.ConstructorPageModsShowCount,
//                     // Отдельный вывод стоимости продуктов и модификаторов
//                     this.constructorPageShowPriceOfMods =
//                         settings.ConstructorPageShowPriceOfMods,
//                     // Разделить категории модификаторов горизонтальной линией
//                     this.constructorPageShowHorizontalLineCategories =
//                         settings.ConstructorPageShowHorizontalLineCategories,
//                     // Всегда показывать кнопку «-» при способе указания количества кнопками
//                     this.constructorPageModsShowMinus =
//                         settings.ConstructorPageModsShowMinus,
//                     // Показать цену на кнопке
//                     this.constructorPageShowPriceOnButton =
//                         settings.ConstructorPageShowPriceOnButton,
//                     // Показать описание у модификаторов
//                     this.constructorPageShowModDescription =
//                         settings.ConstructorPageShowModDescription,
//                     // Показать рекомендованные
//                     this.constructorPageShowRecommended =
//                         settings.ConstructorPageShowRecommended,
//                     //--------
        
//                     //------Настройки ссылок --------
//                     //Ссылка на первый шаг корзины
//                     this.cartFirstStep = settings.CartFirstStep,
//                     //Ссылка на второй шаг корзины
//                     this.cartSecondStep = settings.CartSecondStep,
//                     //Ссылка на пользовательское соглашение
//                     this.agreementLink = settings.AgreementLink,
//                     //Ссылка на профиль
//                     this.loginPersonalCabinetLink = settings.LoginPersonalCabinetLink,
//                     //----------
        
//                     //------ Компонент выбора дополнительных товаров в корзине -----
//                     // Количество дополнительных продуктов в слайдере количество будет сокращено в мобильной версии
//                     this.cartExtraProductsMax = settings.CartExtraProductsMax,
//                     // Включить зачёркивание цены
//                     this.CartExtraPriceStrikethrough = settings.CartExtraPriceStrikethrough,
//                     // Используются длинные названия
//                     this.cartExtraUseLongNames = settings.CartExtraUseLongNames,
//                     //Включить описание у продуктов под названием
//                     this.cartExtraShowDesc = settings.CartExtraShowDesc,
//                     //----
        
//                     //------Компонент продуктов в корзине ------
//                     // Показать подарки на ДР
//                     this.cartShowBirthdayGifts = settings.CartShowBirthdayGifts,
//                     //Включить сортировку продуктов в корзине
//                     this.cartSortingEnabled = settings.CartSortingEnabled,
//                     //Сортировать по цене учитывая количество
//                     this.cartSortByTotalPrice = settings.CartSortByTotalPrice,
//                     //-------
        
//                     // ----- Компонент «Спасибо за заказ!» --------
//                     //Вариант расположения
//                     //Компактный / В колонку
//                     this.orderCompleteView = settings.OrderCompleteView,
//                     //Скрыть кнопку печати заказа
//                     this.orderCompleteHidePrint = settings.OrderCompleteHidePrint,
//                     //Скрыть номер заказа
//                     this.orderCompleteHideNumber = settings.OrderCompleteHideNumber,
//                     //Скрыть статус заказа
//                     this.orderCompleteHideStatus = settings.OrderCompleteHideStatus,
//                     //Показать баннер с моб. приложениями
//                     this.orderCompleteShowApps = settings.OrderCompleteShowApps,
//                     //Показать баннер с соц. сетями
//                     this.orderCompleteShowSocial = settings.OrderCompleteShowSocial,
//                     //Показать баннер без элементов
//                     this.orderCompleteShowAdditional = settings.OrderCompleteShowAdditional,
//                     //Показать описание у позиций заказа
//                     this.orderCompleteShowProductDesc =
//                         settings.OrderCompleteShowProductDesc,
//                     //Фон баннера без элементов соотношение сторон 3:1
//                     this.orderCompleteAdditionalBackground =
//                         settings.OrderCompleteAdditionalBackground,
//                     //Фон баннера с мобильными приложениями соотношение сторон 3:1
//                     this.orderCompleteAppsBackground =
//                         settings.OrderCompleteAppsBackground,
//                     //Фон баннера с социальными сетями соотношение сторон 3:1
//                     this.orderCompleteSocialBackground =
//                         settings.OrderCompleteSocialBackground,
//                     //-------
        
//                     //---- Сохранённые адреса ---
//                     //Скрыть сохранённые адреса
//                     this.savedAddressHidden = settings.SavedAddressHidden,
//                     //------Компонент счётчика товаров в корзине -----
//                     //Выключить счётчик товаров в корзине
//                     this.smallBasketCounterHidden = settings.SmallBasketCounterHidden,
//                     //------
        
//                     // ---- Всплывающая корзина -----
//                     //Корзину всегда видно
//                     this.floatBasketAlwaysShow = settings.FloatBasketAlwaysShow,
//                     //Выключить отображение всплывающей корзины
//                     this.floatBasketHidden = settings.FloatBasketHidden,
//                     //Нижний / Верхний правый угол
//                     this.floatBasketPlaceAtBottom = settings.FloatBasketPlaceAtBottom,
//                     //-----
        
//                     //----- Компонент суммы к оплате -----
//                     //Раскрыть "Подробнее о расчётах" по умолчанию
//                     this.totalSummaryOpenByDefault =
//                         settings.TotalSummaryOpenByDefault,
//                     //-------
        
//                     //----- Компонент выбора улицы из выпадающего списка -----
//                     //Минимальное количество символов необходимое для показа списка
//                     this.streetListAutocompleteMinChars =
//                         settings.StreetListAutocompleteMinChars,
//                     //Максимальное количество предложений в списке
//                     this.streetListAutocompleteNumber =
//                         settings.StreetListAutocompleteNumber,
//                     //----Компонент выбора адреса на первом шаге-----
//                     //Показать кнопку логина в углу попапа
//                     this.addressPopupShowLoginButton =
//                         settings.AddressPopupShowLoginButton,
//                     //----------Компонент выбора типа доставки/самовывоза-----
//                     //Вид переключателя -> Переключатель / Радиокнопки
//                     this.orderTypeVariant = settings.OrderTypeVariant,
//                     //-----
        
//                     //----Компонент кнопки логина -----
//                     //Показать логин на входе
//                     this.loginShowOnEntrance = settings.LoginShowOnEntrance,
//                     //Показать кнопку закрытия
//                     this.loginShowCloseButton = settings.LoginShowCloseButton,
//                     //Показать имя клиента в кнопке
//                     this.loginShowUserNameInButton =
//                         settings.LoginShowUserNameInButton,
//                     //Отображать ссылкой
//                     this.loginShowAsLink = settings.LoginShowAsLink,
//                     //-----
        
//                     //---- Компонент оформления заказа ----
//                     //Клиент должен принять пользовательское соглашение  поставить галочку
//                     this.personalInfoAskForConsent =
//                         settings.PersonalInfoAskForConsent,
//                     //-----
        
//                     //------ Компонент персональной информации -------
//                     //Скрыть поле электронной почты
//                     this.personalInfoEmailFieldHidden =
//                         settings.PersonalInfoEmailFieldHidden,
//                     //Поле электронной почты обязательно к заполнению
//                     this.personalInfoEmailFieldRequired =
//                         settings.PersonalInfoEmailFieldRequired,
//                     //Скрыть поле количества персон
//                     this.personalInfoPersonCountHidden =
//                         settings.PersonalInfoPersonCountHidden,
//                     //Поле количества персон обязательно к заполнению
//                     this.personalInfoPersonCountRequired =
//                         settings.PersonalInfoPersonCountRequired,
        
//         //Включить опцию "Без приборов" рядом с полем количества персон
//                     this.personalInfoShowNoCutleryOption = settings.PersonalInfoShowNoCutleryOption,
//                     //--------
        
//                     //------ # Региональные настройки # -------
//                     //-----Ввод номера телефона ------
//                     this.phoneCountry = settings.PhoneCountry,
//                     // ----- Отображение валюты ----
//                     //Иконка валюты
//                     this.currency = settings.Currency,
//                     //-----
        
//                     //---- Компонент промокода ----
//                     //Выключить поле промокода
//                     this.promocodeHidden = settings.PromocodeHidden,
//                     //-------
        
//                     //--------Компонент выбора точки терминала самовывоза----
//                     //Выбор точки выпадающим списком селектом
//                     this.showTerminalsAsSelect = settings.ShowTerminalsAsSelect,
//                     //Показывать выключенные точки
//                     this.showDisabledTerminals = settings.ShowDisabledTerminals,
//                     //Показать город в названии точки
//                     this.showCityInTerminalSelect = settings.ShowCityInTerminalSelect,
//                     // ---- Компонент способа оплаты ----
//                     //Показать поле "Чаевые"
//                     this.showGratuity = settings.ShowGratuity,
//                     //Поле "Сдача с" обязательно к заполнению
//                     this.changeRequired = settings.ChangeRequired,
//                     //Поле "Чаевые" обязательно к заполнению
//                     this.gratuityRequired = settings.GratuityRequired,
//                     //-------
        
//                     //-----Компонент логина/регистрации----
//                     // Показать поле "Имя"
//                     this.registrationShowName = settings.ShowName,
//                     //Показать поле "Пол"
//                     this.registrationShowGender = settings.ShowGender,
//                     //Показать поле "e-mail"
//                     this.registrationShowEmail = settings.ShowEmail,
//                     //Показать поля согласия на рассылку
//                     this.registrationShowNotifyAllow = settings.ShowNotifyAllow,
//                     //Показать поле "Фамилия"
//                     this.registrationShowSurname = settings.ShowSurname,
//                     //Показать поле "Отчество"
//                     this.registrationShowPatronymic = settings.ShowPatronymic,
//                     //Показать поле даты рождения
//                     this.registrationShowBDay = settings.ShowBDay,
//                     //----------
        
//                     //-----Компонент маленькой корзины-----
//                     //Показывать корзину при наведении вместо нажатия на кнопку. В таком случае нажатие на кнопку ведёт в корзину
//                     this.smallBasketShowOnHover = settings.SmallBasketShowOnHover,
//                     //Только для режима при наведении - развернуть поле для промокода сразу  вместо нажатия на кнопку "у меня есть промокод"
//                     this.smallBasketShowPromoByDefault =
//                         settings.SmallBasketShowPromoByDefault,
//                     //Скрыть корзину при нажатии за пределами области корзины только для режима при нажатии
//                     this.smallBasketHideOnClickOutside =
//                         settings.SmallBasketHideOnClickOutside,
//                     //Заменить надпись "Корзина" на иконку корзины
//                     this.smallBasketShowIcon = settings.SmallBasketShowIcon,
//                     //Что отобразить на кнопке Сумму к оплате, Количество позиций, Суммарное количество товаров, Ничего только иконка или "Корзина"
//                     this.smallBasketShowMode = settings.SmallBasketShowMode,
//                     //------
        
//                     //----Компонент снега ----
//                     //SnowEnabled
//                     this.snowAmount = settings.SnowAmount,
//                     this.snowColor = settings.SnowColor,
//                     this.snowEnabled = settings.SnowEnabled,
//                     this.snowImages = settings.SnowImages,
//                     this.snowOpacity = settings.SnowOpacity,
//                     this.snowSize = settings.SnowSize,
//                     this.snowSpeed = settings.SnowSpeed,
//                     this.snowWind = settings.SnowWind,
//                     //--------
        
//                     //-------Компоненты Яндекс.Карт-----
//                     //Показать кнопку для построения маршрутов
//                     this.yaMapsEnableZoomOnScroll = settings.YaMapsEnableZoomOnScroll,
//                     //Показать поиск
//                     this.yaMapsShowSearchControl = settings.YaMapsShowSearchControl,
//                     //Показать кнопки изменения масштаба
//                     this.yaMapsShowZoomControl = settings.YaMapsShowZoomControl,
//                     //Включить автоопределение адреса
//                     this.yaMapsEnableAutoDetect = settings.YaMapsEnableAutoDetect,
//                     //Показать кнопку с пробками
//                     this.yaMapsShowTrafficControl = settings.YaMapsShowTrafficControl,
//                     //Показать выбор типа карт
//                     this.yaMapsShowTypeSelector = settings.YaMapsShowTypeSelector,
//                     //Цвет точек на карте
//                     this.yaMapsPinColor = settings.YaMapsPinColor,
//                     //Насколько прозрачным будет полигон.Должно быть между 0 полностью видимый и 1 полностью невидимый
//                     this.yaMapsPolygonOpacity = settings.YaMapsPolygonOpacity,
//                     //Иконка точек на карте
//                     this.yaMapsPinIcon = settings.YaMapsPinIcon,
//                     //Цвет выбранной точки на карте
//                     this.yaMapsSelectedPinColor = settings.YaMapsSelectedPinColor,
//                     //Показать кнопку для построения маршрутов
//                     this.yaMapsShowRouteButtonControl = settings.YaMapsShowRouteButtonControl,
//                     //Тип карты По умолчанию - "схема"
//                     this.yaMapsType = settings.YaMapsType,
//                     //Насколько близко будет показана карта.Должно быть больше нуля и меньше 20.
//                     this.yaMapsZoom = settings.YaMapsZoom,
//                     //-----
        
//                     //--------
//                     this.phoneCodeOverride = settings.PhoneCodeOverride,
//                     this.phoneMaskOverride = settings.PhoneMaskOverride,
//                     this.menuLink = settings.MenuLink,
//                     this.theme = settings.Theme,
//                     // -----
        
//                     //-------- Компонент среднего времени доставки ----
//                     // Отображать в корзине
//                     this.averageTimeDisplayInCart = settings.AverageTimeDisplayInCart;
//                     // Отображать в pop-up выбора адреса
//                     this.averageTimeDisplayInPopup = settings.AverageTimeDisplayInPopup;
//                     // Отображать в шапке
//                     this.averageTimeDisplayInHeader = settings.AverageTimeDisplayInHeader;
        


//     }
// }
