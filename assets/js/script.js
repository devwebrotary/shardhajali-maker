document.addEventListener('DOMContentLoaded', () => {
    // --- 1. DOM Element References ---
    const eventTypeSelect = document.getElementById('eventType');
    const inputLanguageSelect = document.getElementById('inputLanguage');
    const themeSelector = document.querySelector('.theme-selector');

    // Title Customization
    const inbuiltTitleRadio = document.getElementById('inbuiltTitle');
    const customTitleRadio = document.getElementById('customTitle');
    const inbuiltTitleOptionsDiv = document.getElementById('inbuiltTitleOptions');
    const customTitleInputDiv = document.getElementById('customTitleInput');
    const predefinedOccasionTitleSelect = document.getElementById('predefinedOccasionTitle');
    const customOccasionTitleInputs = {
        gujarati: document.getElementById('customOccasionTitle_gujarati'),
        hindi: document.getElementById('customOccasionTitle_hindi'),
        english: document.getElementById('customOccasionTitle_english')
    };
    const occasionTitleFontSize = document.getElementById('occasionTitleFontSize');
    const occasionTitleFontSizeValue = document.getElementById('occasionTitleFontSizeValue');
    const occasionTitleFontColor = document.getElementById('occasionTitleFontColor');
    const occasionTitleBoldCheckbox = document.getElementById('occasionTitleBold');

    // Deceased Details
    const deceasedNameInputs = {
        gujarati: document.getElementById('deceasedName_gujarati'),
        hindi: document.getElementById('deceasedName_hindi'),
        english: document.getElementById('deceasedName_english')
    };
    const eventDateInput = document.getElementById('eventDate');
    const eventPlaceInputs = {
        gujarati: document.getElementById('eventPlace_gujarati'),
        hindi: document.getElementById('eventPlace_hindi'),
        english: document.getElementById('eventPlace_english')
    };
    const photoUploadInput = document.getElementById('photoUpload');
    const deceasedNameFontSize = document.getElementById('deceasedNameFontSize');
    const deceasedNameFontSizeValue = document.getElementById('deceasedNameFontSizeValue');
    const deceasedNameFontColor = document.getElementById('deceasedNameFontColor');
    const deceasedNameBoldCheckbox = document.getElementById('deceasedNameBold');
    const datePlaceFontSize = document.getElementById('datePlaceFontSize');
    const datePlaceFontSizeValue = document.getElementById('datePlaceFontSizeValue');
    const datePlaceFontColor = document.getElementById('datePlaceFontColor');
    const datePlaceBoldCheckbox = document.getElementById('datePlaceBold');

    // Messages
    const messageTextInputs = {
        gujarati: document.getElementById('messageText_gujarati'),
        hindi: document.getElementById('messageText_hindi'),
        english: document.getElementById('messageText_english')
    };
    const messageFontSize = document.getElementById('messageFontSize');
    const messageFontSizeValue = document.getElementById('messageFontSizeValue');
    const messageFontColor = document.getElementById('messageFontColor');
    const messageBoldCheckbox = document.getElementById('messageBold');

    // Family Details
    const inbuiltFamilyTitleRadio = document.getElementById('inbuiltFamilyTitle');
    const customFamilyTitleRadio = document.getElementById('customFamilyTitle');
    const inbuiltFamilyTitleOptionsDiv = document.getElementById('inbuiltFamilyTitleOptions');
    const customFamilyTitleInputDiv = document.getElementById('customFamilyTitleInput');
    const predefinedFamilyTitleSelect = document.getElementById('predefinedFamilyTitle');
    const customFamilyTitleInputs = {
        gujarati: document.getElementById('customFamilyTitle_gujarati'),
        hindi: document.getElementById('customFamilyTitle_hindi'),
        english: document.getElementById('customFamilyTitle_english')
    };
    const familyTitleFontSize = document.getElementById('familyTitleFontSize');
    const familyTitleFontSizeValue = document.getElementById('familyTitleFontSizeValue');
    const familyTitleFontColor = document.getElementById('familyTitleFontColor');
    const familyTitleBoldCheckbox = document.getElementById('familyTitleBold');
    const familyNamesInputsContainer = document.getElementById('familyNamesInputsContainer');
    const addFamilyMemberBtn = document.getElementById('addFamilyMemberBtn');
    const familyNameFontSize = document.getElementById('familyNameFontSize');
    const familyNameFontSizeValue = document.getElementById('familyNameFontSizeValue');
    const familyNameFontColor = document.getElementById('familyNameFontColor');
    const familyNameBoldCheckbox = document.getElementById('familyNameBold');
    // Family Mobile Styling
    const familyMobileFontSize = document.getElementById('familyMobileFontSize');
    const familyMobileFontSizeValue = document.getElementById('familyMobileFontSizeValue');
    const familyMobileFontColor = document.getElementById('familyMobileFontColor');
    const familyMobileBoldCheckbox = document.getElementById('familyMobileBold');
    const familyMobileNewLineCheckbox = document.getElementById('familyMobileNewLine');

    // Family Layout Radios
    const familyLayout1Col = document.getElementById('familyLayout1Col');
    const familyLayout2Col = document.getElementById('familyLayout2Col');
    const familyLayoutAuto = document.getElementById('familyLayoutAuto');

    // Custom Sections (below family)
    const customSectionsContainer = document.getElementById('customSectionsContainer');
    const addCustomSectionBtn = document.getElementById('addCustomSectionBtn');

    // Custom Sections (above family)
    const upperCustomSectionsContainer = document.getElementById('upperCustomSectionsContainer');
    const addUpperCustomSectionBtn = document.getElementById('addUpperCustomSectionBtn');

    // Advanced Styling Toggle
    const toggleAdvancedStyling = document.getElementById('toggleAdvancedStyling');
    const advancedStylingOptions = document.getElementById('advancedStylingOptions');

    // Card Background Color
    const cardBackgroundColorInput = document.getElementById('cardBackgroundColor');

    // Card Padding
    const cardPaddingTop = document.getElementById('cardPaddingTop');
    const cardPaddingTopValue = document.getElementById('cardPaddingTopValue');
    const cardPaddingBottom = document.getElementById('cardPaddingBottom');
    const cardPaddingBottomValue = document.getElementById('cardPaddingBottomValue');
    const cardPaddingLeft = document.getElementById('cardPaddingLeft');
    const cardPaddingLeftValue = document.getElementById('cardPaddingLeftValue');
    const cardPaddingRight = document.getElementById('cardPaddingRight');
    const cardPaddingRightValue = document.getElementById('cardPaddingRightValue');

    // Generate & Download Buttons
    const generateBtn = document.getElementById('generateBtn');
    const downloadBtn = document.getElementById('downloadBtn');

    // Tribute Card Display Elements
    const tributeCard = document.getElementById('tributeCard');
    const displayOccasion = document.getElementById('displayOccasion');
    const displayPhoto = document.getElementById('displayPhoto');
    const displayDeceasedName = document.getElementById('displayDeceasedName');
    const displayDatePlace = document.getElementById('displayDatePlace');
    const displayMessageSection = document.getElementById('displayMessageSection');
    const displayFamilyHeading = document.getElementById('displayFamilyHeading');
    const displayFamilyNamesLayout = document.getElementById('displayFamilyNamesLayout');
    const displayCustomSections = document.getElementById('displayCustomSections');
    const displayUpperCustomSections = document.getElementById('displayUpperCustomSections');


    // --- 2. Global `cardData` Object (Central State Management) ---
    const cardData = {
        eventType: 'punyatithi',
        language: 'gujarati',
        theme: 'theme1',

        // Main Title/Occasion
        mainTitleOption: 'inbuilt',
        occasionText: {
            besanu: {
                titles: {
                    gujarati: ['॥ બેસણું ॥', '॥ સદ્ગત બેસણું ॥'],
                    hindi: ['॥ बेसनुं ॥', '॥ सद्गत बेसनुं ॥'],
                    english: ['॥ Condolence Meeting ॥']
                }
            },
            termu: {
                titles: {
                    gujarati: ['॥ તેરમું ॥', '॥ સદ્ગત તેરમું ॥'],
                    hindi: ['॥ तेरहवीं ॥'],
                    english: ['॥ Thirteenth Day Ceremony ॥']
                }
            },
            utarkriya: {
                titles: {
                    gujarati: ['॥ ઉત્તરક્રિયા ॥', '॥ સદ્ગત ઉત્તરક્રિયા ॥'],
                    hindi: ['॥ उत्तरक्रिया ॥'],
                    english: ['॥ Last Rites ॥']
                }
            },
            chhamhi: {
                titles: {
                    gujarati: ['॥ છમ્હી ॥', '॥ સદ્ગત છમ્હી ॥'],
                    hindi: ['॥ छमाही ॥'],
                    english: ['॥ Six-Month Memorial ॥']
                }
            },
            punyatithi: {
                titles: {
                    gujarati: [
                        '॥ પ્રથમ વાર્ષિક પુણ્યતિથિ ॥',
                        '॥ દ્વિતીય વાર્ષિક પુણ્યતિથિ ॥',
                        '॥ તૃતીય વાર્ષિક પુણ્યતિથિ ॥',
                        '॥ ચતુર્થ વાર્ષિક પુણ્યતિથિ ॥',
                        '॥ પંચમ વાર્ષિક પુણ્યતિથિ ॥',
                        '॥ પુણ્યતિથિ ॥'
                    ],
                    hindi: [
                        '॥ प्रथम वार्षिक पुण्यतिथि ॥',
                        '॥ द्वितीय वार्षिक पुण्यतिथि ॥',
                        '॥ तृतीय वार्षिक पुण्यतिथि ॥',
                        '॥ पुण्यतिथि ॥'
                    ],
                    english: [
                        '॥ First Death Anniversary ॥',
                        '॥ Second Death Anniversary ॥',
                        '॥ Third Death Anniversary ॥',
                        '॥ Death Anniversary ॥'
                    ]
                }
            },
            varsi: {
                titles: {
                    gujarati: ['॥ વર્ષી ॥', '॥ વાર્ષિક શ્રાદ્ધ ॥'],
                    hindi: ['॥ वर्षी ॥', '॥ वार्षिक श्राद्ध ॥'],
                    english: ['॥ Annual Memorial ॥']
                }
            },
            shradhanjali: {
                titles: {
                    gujarati: ['॥ શ્રદ્ધાંજલિ ॥', '॥ ભાવપૂર્ણ શ્રદ્ધાંજલિ ॥'],
                    hindi: ['॥ श्रद्धांजलि ॥', '॥ भावपूर्ण श्रद्धांजलि ॥'],
                    english: ['॥ Tribute ॥', '॥ Heartfelt Tribute ॥']
                }
            }
        },
        customOccasionTitle: { gujarati: '', hindi: '', english: '' },
        occasionTitleFontSize: '33',
        occasionTitleFontColor: '#5a3d2b',
        occasionTitleBold: true,

        // Deceased Details
        deceasedName: {
            gujarati: 'સ્વ. રાજભાલાલ ઝવેરભાઈ સવાણી',
            hindi: 'स्व. राजभालाल झवेरभाई सवाणी',
            english: 'Late. Rajabhalal Zaverbhai Savani'
        },
        deceasedNameFontSize: '23',
        deceasedNameFontColor: '#5a3d2b',
        deceasedNameBold: true,
        datePlaceFontSize: '16',
        datePlaceFontColor: '#5a3d2b',
        datePlaceBold: false,
        deceasedPhoto: './assets/img/placeholder.png',
        eventDate: '15.10.2023',
        eventPlace: {
            gujarati: 'ગામ. વડિયા, પાલીતાણા',
            hindi: 'ग्राम. वडिया, पालिताणा',
            english: 'Village: Vadiya, Palitana'
        },

        // Messages (one string per language, each line = separate message)
        messageText: {
            gujarati: 'મનુષ્ય જન્મથી નહીં પણ કર્મથી ઓળખાય છે.\nએટલે જ તો મરણ કરતા સ્મરણ વધુ યાદગાર બને છે.\nજેમાં આપની સ્મૃતિ એક વરદાન છે.\nતમે ગયા પણ તમારી યાદ હજુ જીવંત છે.\nપ્રભુ આપના આત્મા ને શાંતિ આપે એ જ પ્રાર્થના.',
            hindi: 'मनुष्य जन्म से नहीं बल्कि कर्म से जाना जाता है।\nइसलिए मृत्यु से अधिक स्मरण यादगार बनता है।\nजिसमें आपकी स्मृति एक वरदान है।\nआप चले गए, लेकिन आपकी यादें अभी भी जीवित हैं।\nप्रभु आपकी आत्मा को शांति प्रदान करे, यही प्रार्थना है।',
            english: 'A human is known not by birth, but by deeds.\nThat is why remembrance is more memorable than death.\nIn which, your memory is a blessing.\nYou are gone, but your memory is still alive.\nMay God grant peace to your soul, this is our prayer.'
        },
        messageFontSize: '18',
        messageFontColor: '#5a3d2b',
        messageBold: false,

        // Family Section
        familyTitleOption: 'inbuilt',
        familyLayout: '2', // '1', '2', or 'auto'
        familyInbuiltTitles: {
            gujarati: {
                default: '॥ લિ. ॥',
                shokatour: '॥ શોકાતુર ॥',
                samast: '॥ સમસ્ત પરિવાર ॥'
            },
            hindi: {
                default: '॥ लि. ॥',
                shokatour: '॥ शोकातुर ॥',
                samast: '॥ समस्त परिवार ॥'
            },
            english: {
                default: '॥ From ॥',
                shokatour: '॥ Deeply Grieved ॥',
                samast: '॥ Entire Family ॥'
            }
        },
        customFamilyTitle: { gujarati: '', hindi: '', english: '' },
        familyNames: [
            { gujarati: 'મનુભાઈ રાજભાલાલ સવાણી', hindi: 'मनुभाई राजभालाल सवाणी', english: 'Manubhai Rajabhalal Savani' },
            { gujarati: 'તુળશીભાઈ રાજભાલાલ સવાણી', hindi: 'तुळसीभाई राजभालाल सवाणी', english: 'Tulshibhai Rajabhalal Savani' },
            { gujarati: 'હિરેન તળશીભાઈ સવાણી', hindi: 'हिरेन तल्सीभाई सवाणी', english: 'Hiren Talshibhai Savani' },
            { gujarati: 'રાજભા તળશીભાઈ સવાણી', hindi: 'राजभा तल्सीभाई सवाणी', english: 'Rajbha Talshi bhai Savani' },
        ],
        familyNameFontSize: '18',
        familyNameFontColor: '#7a5f4c',
        familyNameBold: false,

        // Family Mobile Styling
        familyMobileFontSize: '16',
        familyMobileFontColor: '#7a5f4c',
        familyMobileBold: false,
        familyMobileNewLine: false,

        // Family Title Styling (separate from member names)
        familyTitleFontSize: '20',
        familyTitleFontColor: '#5a3d2b',
        familyTitleBold: true,

        // Custom Sections (below family)
        customSections: [],

        // Custom Sections (above family)
        upperCustomSections: [],

        // Global Styles
        cardBackgroundColor: '#fdf5e6',
        cardPaddingTop: '50',
        cardPaddingBottom: '50',
        cardPaddingLeft: '60',
        cardPaddingRight: '60',
    };

    // --- 3. Helper Functions ---

    // Auto-fit font size: reduces font size until element doesn't overflow card width
    function autoFitFontSize(element, maxFontSize, minFontSize) {
        if (!minFontSize) minFontSize = 10;
        let fontSize = parseInt(maxFontSize);
        element.style.fontSize = fontSize + 'px';
        const cardWidth = tributeCard.clientWidth - 20; // some padding margin
        while (element.scrollWidth > cardWidth && fontSize > minFontSize) {
            fontSize--;
            element.style.fontSize = fontSize + 'px';
        }
    }

    // Populates predefined title dropdowns
    function populatePredefinedTitles() {
        // Main Occasion Titles
        predefinedOccasionTitleSelect.innerHTML = '';
        const eventData = cardData.occasionText[cardData.eventType];
        if (eventData && eventData.titles && eventData.titles[cardData.language]) {
            eventData.titles[cardData.language].forEach((title, i) => {
                const option = document.createElement('option');
                option.value = title;
                option.textContent = title;
                predefinedOccasionTitleSelect.appendChild(option);
            });
        }

        // Family Titles
        predefinedFamilyTitleSelect.innerHTML = '';
        const currentFamilyTitles = cardData.familyInbuiltTitles[cardData.language];
        if (currentFamilyTitles) {
            for (const key in currentFamilyTitles) {
                const option = document.createElement('option');
                option.value = currentFamilyTitles[key];
                option.textContent = currentFamilyTitles[key];
                predefinedFamilyTitleSelect.appendChild(option);
            }
        }
        predefinedFamilyTitleSelect.value = cardData.familyInbuiltTitles[cardData.language]['default'];
    }


    // Toggles visibility of language-specific input fields
    function updateLanguageInputVisibility() {
        const currentLang = cardData.language;
        document.querySelectorAll('.lang-input').forEach(input => {
            if (input.dataset.lang === currentLang) {
                input.classList.remove('hidden');
            } else {
                input.classList.add('hidden');
            }
        });
    }

    // Updates the display of font size slider values
    function updateSliderValueDisplay() {
        occasionTitleFontSizeValue.textContent = `${occasionTitleFontSize.value}px`;
        deceasedNameFontSizeValue.textContent = `${deceasedNameFontSize.value}px`;
        messageFontSizeValue.textContent = `${messageFontSize.value}px`;
        familyNameFontSizeValue.textContent = `${familyNameFontSize.value}px`;
        familyMobileFontSizeValue.textContent = `${familyMobileFontSize.value}px`;
    }

    // --- 4. Render Control Panel (Initial & On-Change) ---
    function renderControlPanel() {
        // Set dropdowns
        eventTypeSelect.value = cardData.eventType;
        inputLanguageSelect.value = cardData.language;

        // Theme selector
        document.querySelectorAll('.theme-option').forEach(option => {
            option.classList.remove('active');
            if (option.dataset.theme === cardData.theme) {
                option.classList.add('active');
            }
        });

        // Title options
        inbuiltTitleRadio.checked = (cardData.mainTitleOption === 'inbuilt');
        customTitleRadio.checked = (cardData.mainTitleOption === 'custom');
        if (cardData.mainTitleOption === 'inbuilt') {
            inbuiltTitleOptionsDiv.classList.remove('hidden');
            customTitleInputDiv.classList.add('hidden');
        } else {
            inbuiltTitleOptionsDiv.classList.add('hidden');
            customTitleInputDiv.classList.remove('hidden');
        }

        // Populate predefined titles
        populatePredefinedTitles();

        // Deceased Details
        for (const lang in deceasedNameInputs) deceasedNameInputs[lang].value = cardData.deceasedName[lang];
        eventDateInput.value = cardData.eventDate;
        for (const lang in eventPlaceInputs) eventPlaceInputs[lang].value = cardData.eventPlace[lang];

        // Custom Title Inputs
        for (const lang in customOccasionTitleInputs) customOccasionTitleInputs[lang].value = cardData.customOccasionTitle[lang];

        // Message Textareas
        for (const lang in messageTextInputs) {
            messageTextInputs[lang].value = cardData.messageText[lang];
        }
        messageFontSize.value = cardData.messageFontSize;
        messageFontSizeValue.textContent = cardData.messageFontSize + 'px';
        messageFontColor.value = cardData.messageFontColor;
        messageBoldCheckbox.checked = cardData.messageBold;

        // Family Layout radios
        if (cardData.familyLayout === '1') familyLayout1Col.checked = true;
        else if (cardData.familyLayout === '2') familyLayout2Col.checked = true;
        else familyLayoutAuto.checked = true;

        // Family Title options
        inbuiltFamilyTitleRadio.checked = (cardData.familyTitleOption === 'inbuilt');
        customFamilyTitleRadio.checked = (cardData.familyTitleOption === 'custom');
        if (cardData.familyTitleOption === 'inbuilt') {
            inbuiltFamilyTitleOptionsDiv.classList.remove('hidden');
            customFamilyTitleInputDiv.classList.add('hidden');
        } else {
            inbuiltFamilyTitleOptionsDiv.classList.add('hidden');
            customFamilyTitleInputDiv.classList.remove('hidden');
        }
        for (const lang in customFamilyTitleInputs) customFamilyTitleInputs[lang].value = cardData.customFamilyTitle[lang];

        // Family Names Inputs
        familyNamesInputsContainer.innerHTML = '';
        cardData.familyNames.forEach((name, index) => {
            const familyGroup = createFamilyMemberInputGroup(name, index);
            familyNamesInputsContainer.appendChild(familyGroup);
        });

        // Custom Sections (below family)
        renderCustomSectionsControls(customSectionsContainer, cardData.customSections);

        // Custom Sections (above family)
        renderCustomSectionsControls(upperCustomSectionsContainer, cardData.upperCustomSections);

        // Advanced Styling Toggle
        if (toggleAdvancedStyling.checked) {
            advancedStylingOptions.classList.remove('hidden');
        } else {
            advancedStylingOptions.classList.add('hidden');
        }

        // Set slider and color picker values
        occasionTitleFontSize.value = cardData.occasionTitleFontSize;
        occasionTitleFontSizeValue.textContent = cardData.occasionTitleFontSize + 'px';
        occasionTitleFontColor.value = cardData.occasionTitleFontColor;
        occasionTitleBoldCheckbox.checked = cardData.occasionTitleBold;

        deceasedNameFontSize.value = cardData.deceasedNameFontSize;
        deceasedNameFontSizeValue.textContent = cardData.deceasedNameFontSize + 'px';
        deceasedNameFontColor.value = cardData.deceasedNameFontColor;
        deceasedNameBoldCheckbox.checked = cardData.deceasedNameBold;

        datePlaceFontSize.value = cardData.datePlaceFontSize;
        datePlaceFontSizeValue.textContent = cardData.datePlaceFontSize + 'px';
        datePlaceFontColor.value = cardData.datePlaceFontColor;
        datePlaceBoldCheckbox.checked = cardData.datePlaceBold;

        messageFontSize.value = cardData.messageFontSize;
        messageFontSizeValue.textContent = cardData.messageFontSize + 'px';
        messageFontColor.value = cardData.messageFontColor;
        messageBoldCheckbox.checked = cardData.messageBold;

        familyNameFontSize.value = cardData.familyNameFontSize;
        familyNameFontSizeValue.textContent = cardData.familyNameFontSize + 'px';
        familyNameFontColor.value = cardData.familyNameFontColor;
        familyNameBoldCheckbox.checked = cardData.familyNameBold;

        familyMobileFontSize.value = cardData.familyMobileFontSize;
        familyMobileFontSizeValue.textContent = cardData.familyMobileFontSize + 'px';
        familyMobileFontColor.value = cardData.familyMobileFontColor;
        familyMobileBoldCheckbox.checked = cardData.familyMobileBold;
        familyMobileNewLineCheckbox.checked = cardData.familyMobileNewLine;

        familyTitleFontSize.value = cardData.familyTitleFontSize;
        familyTitleFontSizeValue.textContent = cardData.familyTitleFontSize + 'px';
        familyTitleFontColor.value = cardData.familyTitleFontColor;
        familyTitleBoldCheckbox.checked = cardData.familyTitleBold;

        cardBackgroundColorInput.value = cardData.cardBackgroundColor;

        cardPaddingTop.value = cardData.cardPaddingTop;
        cardPaddingTopValue.textContent = cardData.cardPaddingTop;
        cardPaddingBottom.value = cardData.cardPaddingBottom;
        cardPaddingBottomValue.textContent = cardData.cardPaddingBottom;
        cardPaddingLeft.value = cardData.cardPaddingLeft;
        cardPaddingLeftValue.textContent = cardData.cardPaddingLeft;
        cardPaddingRight.value = cardData.cardPaddingRight;
        cardPaddingRightValue.textContent = cardData.cardPaddingRight;

        updateLanguageInputVisibility();
        updateTributeCardDisplay();
    }

    // --- 5. Dynamic Input Group Creation Functions ---



    function createFamilyMemberInputGroup(nameObj = { gujarati: '', hindi: '', english: '', mobile: '' }, index) {
        const div = document.createElement('div');
        div.classList.add('family-member-group', 'input-group', 'mb-2');

        // Ensure mobile property exists
        if (!nameObj.mobile) nameObj.mobile = '';

        div.innerHTML = `
            <input type="text" class="form-control family-member-input lang-input" data-lang="gujarati" value="${escapeHtml(nameObj.gujarati)}" placeholder="ગુજરાતીમાં નામ">
            <input type="text" class="form-control family-member-input lang-input hidden" data-lang="hindi" value="${escapeHtml(nameObj.hindi)}" placeholder="हिंदी में नाम">
            <input type="text" class="form-control family-member-input lang-input hidden" data-lang="english" value="${escapeHtml(nameObj.english)}" placeholder="Name in English">
            <input type="text" class="form-control family-member-mobile" value="${escapeHtml(nameObj.mobile)}" placeholder="Mobile No.">
            <button class="btn btn-outline-danger remove-family-member-btn" type="button" data-index="${index}">✕</button>
        `;
        div.querySelectorAll('.family-member-input').forEach(input => {
            input.addEventListener('input', (e) => {
                const lang = e.target.dataset.lang;
                cardData.familyNames[index][lang] = e.target.value;
                updateTributeCardDisplay();
            });
        });
        div.querySelector('.family-member-mobile').addEventListener('input', (e) => {
            cardData.familyNames[index].mobile = e.target.value;
            updateTributeCardDisplay();
        });
        div.querySelector('.remove-family-member-btn').addEventListener('click', () => {
            cardData.familyNames.splice(index, 1);
            renderControlPanel();
        });
        return div;
    }

    // --- Custom Sections Controls (shared for upper and lower) ---
    function renderCustomSectionsControls(container, sectionsArray) {
        container.innerHTML = '';
        sectionsArray.forEach((section, index) => {
            const editor = createCustomSectionEditor(section, index, sectionsArray);
            container.appendChild(editor);
        });
    }

    function createCustomSectionEditor(sectionObj, index, sectionsArray) {
        const div = document.createElement('div');
        div.classList.add('custom-section-editor');

        // Default values if undefined (for backward compatibility or new objects)
        if (!sectionObj.titleFontSize) sectionObj.titleFontSize = 18;
        if (!sectionObj.titleColor) sectionObj.titleColor = '#5a3d2b';
        if (sectionObj.titleBold === undefined) sectionObj.titleBold = true;

        if (!sectionObj.bodyFontSize) sectionObj.bodyFontSize = 16;
        if (!sectionObj.bodyColor) sectionObj.bodyColor = '#5a3d2b';
        if (sectionObj.bodyBold === undefined) sectionObj.bodyBold = false;

        div.innerHTML = `
            <div class="section-actions">
                <button class="btn btn-outline-secondary move-up-btn" type="button" title="ઉપર ખસેડો">▲</button>
                <button class="btn btn-outline-secondary move-down-btn" type="button" title="નીચે ખસેડો">▼</button>
                <button class="btn btn-outline-danger remove-section-btn" type="button" title="દૂર કરો">✕</button>
            </div>
            
            <!-- Title Section -->
            <div class="mb-2 p-2 border rounded bg-white">
                <label class="form-label fw-bold small text-brown">વિભાગ શીર્ષક:</label>
                <input type="text" class="form-control section-title-input mb-2" value="${escapeHtml(sectionObj.title)}" placeholder="શીર્ષક લખો">
                
                <div class="d-flex gap-2 align-items-center">
                    <div class="d-flex align-items-center gap-1">
                        <label class="form-label small mb-0 text-muted">ફ:</label>
                        <input type="range" class="form-range section-title-font-size" min="10" max="30" value="${sectionObj.titleFontSize}" style="width:60px;">
                        <span class="section-title-font-size-val small text-muted">${sectionObj.titleFontSize}px</span>
                    </div>
                    <div class="d-flex align-items-center gap-1">
                        <input type="color" class="form-control form-control-color section-title-font-color" value="${sectionObj.titleColor}" style="width:30px;height:25px;padding:2px;">
                    </div>
                    <div class="form-check d-flex align-items-center gap-1 mb-0">
                        <input class="form-check-input section-title-bold-check" type="checkbox" ${sectionObj.titleBold ? 'checked' : ''}>
                        <label class="form-check-label small fw-bold">B</label>
                    </div>
                </div>
            </div>

            <!-- Body Section -->
            <div class="mb-2 p-2 border rounded bg-white">
                <label class="form-label fw-bold small text-brown">વિભાગ ટેક્સ્ટ:</label>
                <textarea class="form-control section-body-input mb-2" rows="3" placeholder="ટેક્સ્ટ લખો">${escapeHtml(sectionObj.body)}</textarea>

                <div class="d-flex gap-2 align-items-center">
                    <div class="d-flex align-items-center gap-1">
                        <label class="form-label small mb-0 text-muted">ફ:</label>
                        <input type="range" class="form-range section-body-font-size" min="10" max="30" value="${sectionObj.bodyFontSize}" style="width:60px;">
                        <span class="section-body-font-size-val small text-muted">${sectionObj.bodyFontSize}px</span>
                    </div>
                    <div class="d-flex align-items-center gap-1">
                        <input type="color" class="form-control form-control-color section-body-font-color" value="${sectionObj.bodyColor}" style="width:30px;height:25px;padding:2px;">
                    </div>
                    <div class="form-check d-flex align-items-center gap-1 mb-0">
                        <input class="form-check-input section-body-bold-check" type="checkbox" ${sectionObj.bodyBold ? 'checked' : ''}>
                        <label class="form-check-label small fw-bold">B</label>
                    </div>
                </div>
            </div>
        `;

        // --- TITLE Events ---
        div.querySelector('.section-title-input').addEventListener('input', (e) => {
            sectionsArray[index].title = e.target.value;
            updateTributeCardDisplay();
        });

        const titleFontSlider = div.querySelector('.section-title-font-size');
        const titleFontSizeVal = div.querySelector('.section-title-font-size-val');
        titleFontSlider.addEventListener('input', (e) => {
            sectionsArray[index].titleFontSize = e.target.value;
            titleFontSizeVal.textContent = e.target.value + 'px';
            updateTributeCardDisplay();
        });

        div.querySelector('.section-title-font-color').addEventListener('input', (e) => {
            sectionsArray[index].titleColor = e.target.value;
            updateTributeCardDisplay();
        });

        div.querySelector('.section-title-bold-check').addEventListener('change', (e) => {
            sectionsArray[index].titleBold = e.target.checked;
            updateTributeCardDisplay();
        });

        // --- BODY Events ---
        div.querySelector('.section-body-input').addEventListener('input', (e) => {
            sectionsArray[index].body = e.target.value;
            updateTributeCardDisplay();
        });

        const bodyFontSlider = div.querySelector('.section-body-font-size');
        const bodyFontSizeVal = div.querySelector('.section-body-font-size-val');
        bodyFontSlider.addEventListener('input', (e) => {
            sectionsArray[index].bodyFontSize = e.target.value;
            bodyFontSizeVal.textContent = e.target.value + 'px';
            updateTributeCardDisplay();
        });

        div.querySelector('.section-body-font-color').addEventListener('input', (e) => {
            sectionsArray[index].bodyColor = e.target.value;
            updateTributeCardDisplay();
        });

        div.querySelector('.section-body-bold-check').addEventListener('change', (e) => {
            sectionsArray[index].bodyBold = e.target.checked;
            updateTributeCardDisplay();
        });

        // --- Action Buttons ---
        div.querySelector('.move-up-btn').addEventListener('click', () => {
            if (index > 0) {
                const temp = sectionsArray[index];
                sectionsArray[index] = sectionsArray[index - 1];
                sectionsArray[index - 1] = temp;
                renderControlPanel();
            }
        });

        div.querySelector('.move-down-btn').addEventListener('click', () => {
            if (index < sectionsArray.length - 1) {
                const temp = sectionsArray[index];
                sectionsArray[index] = sectionsArray[index + 1];
                sectionsArray[index + 1] = temp;
                renderControlPanel();
            }
        });

        div.querySelector('.remove-section-btn').addEventListener('click', () => {
            sectionsArray.splice(index, 1);
            renderControlPanel();
        });

        return div;
    }

    // Escape HTML to prevent injection
    function escapeHtml(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }


    // --- 6. `updateTributeCardDisplay()` Function (Render Preview) ---
    function updateTributeCardDisplay() {
        // Apply Theme
        tributeCard.classList.remove('theme1', 'theme2', 'theme3');
        tributeCard.classList.add(cardData.theme);

        // Apply Background Color
        tributeCard.style.backgroundColor = cardData.cardBackgroundColor;

        // Apply Padding
        tributeCard.style.paddingTop = `${cardData.cardPaddingTop}px`;
        tributeCard.style.paddingBottom = `${cardData.cardPaddingBottom}px`;
        tributeCard.style.paddingLeft = `${cardData.cardPaddingLeft}px`;
        tributeCard.style.paddingRight = `${cardData.cardPaddingRight}px`;

        // Occasion Title
        let currentOccasionTitle;
        if (cardData.mainTitleOption === 'custom') {
            currentOccasionTitle = cardData.customOccasionTitle[cardData.language] || 'કસ્ટમ શીર્ષક';
        } else {
            currentOccasionTitle = predefinedOccasionTitleSelect.value || 'શીર્ષક';
        }
        displayOccasion.textContent = currentOccasionTitle;
        displayOccasion.style.fontSize = `${cardData.occasionTitleFontSize}px`;
        displayOccasion.style.color = cardData.occasionTitleFontColor;
        displayOccasion.style.fontWeight = cardData.occasionTitleBold ? 'bold' : 'normal';

        // Auto-fit title if it overflows
        autoFitFontSize(displayOccasion, cardData.occasionTitleFontSize, 16);

        // Deceased Details
        displayDeceasedName.textContent = cardData.deceasedName[cardData.language];
        displayDeceasedName.style.fontSize = `${cardData.deceasedNameFontSize}px`;
        displayDeceasedName.style.color = cardData.deceasedNameFontColor;
        displayDeceasedName.style.fontWeight = cardData.deceasedNameBold ? 'bold' : 'normal';
        autoFitFontSize(displayDeceasedName, cardData.deceasedNameFontSize, 14);

        displayDatePlace.textContent = cardData.eventDate + ' (' + cardData.eventPlace[cardData.language] + ')';
        displayDatePlace.style.fontSize = `${cardData.datePlaceFontSize}px`;
        displayDatePlace.style.color = cardData.datePlaceFontColor;
        displayDatePlace.style.fontWeight = cardData.datePlaceBold ? 'bold' : 'normal';
        displayPhoto.src = cardData.deceasedPhoto;

        // Messages (split textarea by newlines)
        displayMessageSection.innerHTML = '';
        const messageLines = (cardData.messageText[cardData.language] || '').split('\n').filter(line => line.trim() !== '');
        messageLines.forEach(line => {
            const p = document.createElement('p');
            p.textContent = line;
            p.style.fontSize = `${cardData.messageFontSize}px`;
            p.style.color = cardData.messageFontColor;
            if (cardData.messageBold) p.style.fontWeight = 'bold';
            displayMessageSection.appendChild(p);
        });

        // Family Section
        let currentFamilyHeading;
        if (cardData.familyTitleOption === 'custom') {
            currentFamilyHeading = cardData.customFamilyTitle[cardData.language] || 'કુટુંબ';
        } else {
            currentFamilyHeading = predefinedFamilyTitleSelect.value || cardData.familyInbuiltTitles[cardData.language]['default'];
        }

        displayFamilyHeading.textContent = currentFamilyHeading;
        displayFamilyHeading.style.fontSize = `${cardData.familyTitleFontSize}px`;
        displayFamilyHeading.style.color = cardData.familyTitleFontColor;
        displayFamilyHeading.style.fontWeight = cardData.familyTitleBold ? 'bold' : 'normal';

        displayFamilyNamesLayout.innerHTML = '';
        displayFamilyNamesLayout.classList.remove('two-columns');

        const names = cardData.familyNames.filter(name => name[cardData.language] && name[cardData.language].trim() !== '');
        const numNames = names.length;
        const layout = cardData.familyLayout;

        if (numNames === 0) {
            // Nothing to render
        } else if (layout === '1') {
            // Single column: all names stacked vertically
            names.forEach(name => {
                const p = document.createElement('p');
                p.textContent = name[cardData.language];
                p.style.fontSize = `${cardData.familyNameFontSize}px`;
                p.style.color = cardData.familyNameFontColor;
                if (cardData.familyNameBold) p.style.fontWeight = 'bold';

                if (name.mobile) {
                    if (cardData.familyMobileNewLine) {
                        p.appendChild(document.createElement('br'));
                    } else {
                        p.appendChild(document.createTextNode(" "));
                    }
                    const mobileSpan = document.createElement('span');
                    mobileSpan.textContent = name.mobile;
                    mobileSpan.style.fontSize = `${cardData.familyMobileFontSize}px`;
                    mobileSpan.style.color = cardData.familyMobileFontColor;
                    if (cardData.familyMobileBold) mobileSpan.style.fontWeight = 'bold';
                    else mobileSpan.style.fontWeight = 'normal';
                    p.appendChild(mobileSpan);
                }

                p.style.textAlign = 'center';
                p.style.textAlignLast = 'auto';
                displayFamilyNamesLayout.appendChild(p);
            });
        } else if (layout === '2') {
            // Two columns: all names in 2-col grid
            displayFamilyNamesLayout.classList.add('two-columns');
            names.forEach(name => {
                const p = document.createElement('p');
                p.textContent = name[cardData.language];
                p.style.fontSize = `${cardData.familyNameFontSize}px`;
                p.style.color = cardData.familyNameFontColor;
                if (cardData.familyNameBold) p.style.fontWeight = 'bold';

                if (name.mobile) {
                    if (cardData.familyMobileNewLine) {
                        p.appendChild(document.createElement('br'));
                    } else {
                        p.appendChild(document.createTextNode(" "));
                    }
                    const mobileSpan = document.createElement('span');
                    mobileSpan.textContent = name.mobile;
                    mobileSpan.style.fontSize = `${cardData.familyMobileFontSize}px`;
                    mobileSpan.style.color = cardData.familyMobileFontColor;
                    if (cardData.familyMobileBold) mobileSpan.style.fontWeight = 'bold';
                    else mobileSpan.style.fontWeight = 'normal';
                    p.appendChild(mobileSpan);
                }

                displayFamilyNamesLayout.appendChild(p);
            });
            // If odd number, center the last one
            if (numNames % 2 !== 0) {
                const lastChild = displayFamilyNamesLayout.lastElementChild;
                if (lastChild) {
                    lastChild.classList.add('center-name');
                }
            }
        } else {
            // Auto: odd count → first name centered, rest 2-col; even → all 2-col
            if (numNames % 2 !== 0) {
                const centerName = document.createElement('p');
                centerName.classList.add('center-name');
                centerName.textContent = names[0][cardData.language];
                centerName.style.fontSize = `${cardData.familyNameFontSize}px`;
                centerName.style.color = cardData.familyNameFontColor;
                if (cardData.familyNameBold) centerName.style.fontWeight = 'bold';

                if (names[0].mobile) {
                    if (cardData.familyMobileNewLine) {
                        centerName.appendChild(document.createElement('br'));
                    } else {
                        centerName.appendChild(document.createTextNode(" "));
                    }
                    const mobileSpan = document.createElement('span');
                    mobileSpan.textContent = names[0].mobile;
                    mobileSpan.style.fontSize = `${cardData.familyMobileFontSize}px`;
                    mobileSpan.style.color = cardData.familyMobileFontColor;
                    if (cardData.familyMobileBold) mobileSpan.style.fontWeight = 'bold';
                    else mobileSpan.style.fontWeight = 'normal';
                    centerName.appendChild(mobileSpan);
                }

                displayFamilyNamesLayout.appendChild(centerName);

                if (numNames > 1) {
                    displayFamilyNamesLayout.classList.add('two-columns');
                    for (let i = 1; i < numNames; i++) {
                        const p = document.createElement('p');
                        p.textContent = names[i][cardData.language];
                        p.style.fontSize = `${cardData.familyNameFontSize}px`;
                        p.style.color = cardData.familyNameFontColor;
                        if (cardData.familyNameBold) p.style.fontWeight = 'bold';

                        if (names[i].mobile) {
                            if (cardData.familyMobileNewLine) {
                                p.appendChild(document.createElement('br'));
                            } else {
                                p.appendChild(document.createTextNode(" "));
                            }
                            const mobileSpan = document.createElement('span');
                            mobileSpan.textContent = names[i].mobile;
                            mobileSpan.style.fontSize = `${cardData.familyMobileFontSize}px`;
                            mobileSpan.style.color = cardData.familyMobileFontColor;
                            if (cardData.familyMobileBold) mobileSpan.style.fontWeight = 'bold';
                            else mobileSpan.style.fontWeight = 'normal';
                            p.appendChild(mobileSpan);
                        }

                        displayFamilyNamesLayout.appendChild(p);
                    }
                }
            } else {
                displayFamilyNamesLayout.classList.add('two-columns');
                names.forEach(name => {
                    const p = document.createElement('p');
                    p.textContent = name[cardData.language];
                    p.style.fontSize = `${cardData.familyNameFontSize}px`;
                    p.style.color = cardData.familyNameFontColor;
                    if (cardData.familyNameBold) p.style.fontWeight = 'bold';

                    // Add Mobile Number if present
                    if (name.mobile) {
                        const mobileSpan = document.createElement('span');
                        mobileSpan.textContent = " " + name.mobile;
                        mobileSpan.style.fontSize = `${cardData.familyMobileFontSize}px`;
                        mobileSpan.style.color = cardData.familyMobileFontColor;
                        if (cardData.familyMobileBold) mobileSpan.style.fontWeight = 'bold';
                        else mobileSpan.style.fontWeight = 'normal';
                        p.appendChild(mobileSpan);
                    }

                    displayFamilyNamesLayout.appendChild(p);
                });
            }
        }

        // Render custom sections (shared helper)
        function renderSectionsOnCard(container, sectionsArray) {
            container.innerHTML = '';
            sectionsArray.forEach(section => {
                const hasTitle = section.title && section.title.trim();
                const hasBody = section.body && section.body.trim();

                if (hasTitle || hasBody) {
                    const block = document.createElement('div');
                    block.classList.add('custom-section-block');

                    if (hasTitle) {
                        const titleEl = document.createElement('div');
                        titleEl.classList.add('custom-section-title');
                        titleEl.textContent = section.title;
                        titleEl.style.fontSize = (section.titleFontSize || 18) + 'px';
                        titleEl.style.color = section.titleColor || '#5a3d2b';
                        if (section.titleBold) titleEl.style.fontWeight = 'bold';
                        block.appendChild(titleEl);
                    }

                    if (hasBody) {
                        const bodyEl = document.createElement('div');
                        bodyEl.classList.add('custom-section-body');
                        bodyEl.textContent = section.body;
                        bodyEl.style.fontSize = (section.bodyFontSize || 16) + 'px';
                        bodyEl.style.color = section.bodyColor || '#5a3d2b';
                        if (section.bodyBold) bodyEl.style.fontWeight = 'bold';
                        block.appendChild(bodyEl);
                    }

                    container.appendChild(block);
                }
            });
        }

        // Upper custom sections (above family)
        renderSectionsOnCard(displayUpperCustomSections, cardData.upperCustomSections);

        // Lower custom sections (below family)
        renderSectionsOnCard(displayCustomSections, cardData.customSections);
    }

    // Family Mobile Listeners
    familyMobileFontSize.addEventListener('input', (e) => {
        cardData.familyMobileFontSize = e.target.value;
        familyMobileFontSizeValue.textContent = e.target.value + 'px';
        updateTributeCardDisplay();
    });
    familyMobileFontColor.addEventListener('input', (e) => {
        cardData.familyMobileFontColor = e.target.value;
        updateTributeCardDisplay();
    });
    familyMobileBoldCheckbox.addEventListener('change', (e) => {
        cardData.familyMobileBold = e.target.checked;
        updateTributeCardDisplay();
    });
    familyMobileNewLineCheckbox.addEventListener('change', (e) => {
        cardData.familyMobileNewLine = e.target.checked;
        updateTributeCardDisplay();
    });


    // --- 7. Event Listeners ---

    // Event Type & Language change
    eventTypeSelect.addEventListener('change', (e) => {
        cardData.eventType = e.target.value;
        renderControlPanel();
    });

    inputLanguageSelect.addEventListener('change', (e) => {
        cardData.language = e.target.value;
        renderControlPanel();
    });

    // Theme Selection
    themeSelector.addEventListener('click', (e) => {
        const selectedTheme = e.target.closest('.theme-option');
        if (selectedTheme) {
            cardData.theme = selectedTheme.dataset.theme;
            renderControlPanel();
        }
    });

    // Title Option Radios
    inbuiltTitleRadio.addEventListener('change', () => { cardData.mainTitleOption = 'inbuilt'; renderControlPanel(); });
    customTitleRadio.addEventListener('change', () => { cardData.mainTitleOption = 'custom'; renderControlPanel(); });
    predefinedOccasionTitleSelect.addEventListener('change', () => {
        if (cardData.mainTitleOption === 'inbuilt') updateTributeCardDisplay();
    });
    for (const lang in customOccasionTitleInputs) {
        customOccasionTitleInputs[lang].addEventListener('input', (e) => {
            cardData.customOccasionTitle[lang] = e.target.value;
            updateTributeCardDisplay();
        });
    }

    // Deceased Details Inputs
    for (const lang in deceasedNameInputs) {
        deceasedNameInputs[lang].addEventListener('input', (e) => {
            cardData.deceasedName[lang] = e.target.value;
            updateTributeCardDisplay();
        });
    }
    eventDateInput.addEventListener('input', (e) => { cardData.eventDate = e.target.value; updateTributeCardDisplay(); });
    for (const lang in eventPlaceInputs) {
        eventPlaceInputs[lang].addEventListener('input', (e) => {
            cardData.eventPlace[lang] = e.target.value;
            updateTributeCardDisplay();
        });
    }

    // Photo Upload
    photoUploadInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                cardData.deceasedPhoto = e.target.result;
                updateTributeCardDisplay();
            };
            reader.readAsDataURL(file);
        }
    });

    // Message Textarea Inputs
    for (const lang in messageTextInputs) {
        messageTextInputs[lang].addEventListener('input', (e) => {
            cardData.messageText[lang] = e.target.value;
            updateTributeCardDisplay();
        });
    }

    // Message Font Size
    messageFontSize.addEventListener('input', (e) => {
        cardData.messageFontSize = e.target.value;
        messageFontSizeValue.textContent = e.target.value + 'px';
        updateTributeCardDisplay();
    });

    // Message Font Color
    messageFontColor.addEventListener('input', (e) => {
        cardData.messageFontColor = e.target.value;
        updateTributeCardDisplay();
    });

    // Message Bold
    messageBoldCheckbox.addEventListener('change', (e) => {
        cardData.messageBold = e.target.checked;
        updateTributeCardDisplay();
    });

    // Family Layout Radios
    [familyLayout1Col, familyLayout2Col, familyLayoutAuto].forEach(radio => {
        radio.addEventListener('change', (e) => {
            cardData.familyLayout = e.target.value;
            updateTributeCardDisplay();
        });
    });

    // Family Title Option Radios
    inbuiltFamilyTitleRadio.addEventListener('change', () => { cardData.familyTitleOption = 'inbuilt'; renderControlPanel(); });
    customFamilyTitleRadio.addEventListener('change', () => { cardData.familyTitleOption = 'custom'; renderControlPanel(); });
    predefinedFamilyTitleSelect.addEventListener('change', () => {
        if (cardData.familyTitleOption === 'inbuilt') updateTributeCardDisplay();
    });
    for (const lang in customFamilyTitleInputs) {
        customFamilyTitleInputs[lang].addEventListener('input', (e) => {
            cardData.customFamilyTitle[lang] = e.target.value;
            updateTributeCardDisplay();
        });
    }

    // Family Member Add Button
    addFamilyMemberBtn.addEventListener('click', () => {
        cardData.familyNames.push({ gujarati: '', hindi: '', english: '' });
        renderControlPanel();
    });

    // Custom Section Add Buttons
    addCustomSectionBtn.addEventListener('click', () => {
        cardData.customSections.push({ title: '', body: '', fontSize: '16', color: '#5a3d2b' });
        renderControlPanel();
    });

    addUpperCustomSectionBtn.addEventListener('click', () => {
        cardData.upperCustomSections.push({ title: '', body: '', fontSize: '16', color: '#5a3d2b' });
        renderControlPanel();
    });

    // Advanced Styling Toggle
    toggleAdvancedStyling.addEventListener('change', () => {
        if (toggleAdvancedStyling.checked) {
            advancedStylingOptions.classList.remove('hidden');
        } else {
            advancedStylingOptions.classList.add('hidden');
        }
    });

    // --- Inline Font Size, Color, and Bold listeners ---

    // Occasion Title
    occasionTitleFontSize.addEventListener('input', (e) => {
        cardData.occasionTitleFontSize = e.target.value;
        occasionTitleFontSizeValue.textContent = e.target.value + 'px';
        updateTributeCardDisplay();
    });
    occasionTitleFontColor.addEventListener('input', (e) => {
        cardData.occasionTitleFontColor = e.target.value;
        updateTributeCardDisplay();
    });
    occasionTitleBoldCheckbox.addEventListener('change', (e) => {
        cardData.occasionTitleBold = e.target.checked;
        updateTributeCardDisplay();
    });

    // Deceased Name
    deceasedNameFontSize.addEventListener('input', (e) => {
        cardData.deceasedNameFontSize = e.target.value;
        deceasedNameFontSizeValue.textContent = e.target.value + 'px';
        updateTributeCardDisplay();
    });
    deceasedNameFontColor.addEventListener('input', (e) => {
        cardData.deceasedNameFontColor = e.target.value;
        updateTributeCardDisplay();
    });
    deceasedNameBoldCheckbox.addEventListener('change', (e) => {
        cardData.deceasedNameBold = e.target.checked;
        updateTributeCardDisplay();
    });

    // Date + Place
    datePlaceFontSize.addEventListener('input', (e) => {
        cardData.datePlaceFontSize = e.target.value;
        datePlaceFontSizeValue.textContent = e.target.value + 'px';
        updateTributeCardDisplay();
    });
    datePlaceFontColor.addEventListener('input', (e) => {
        cardData.datePlaceFontColor = e.target.value;
        updateTributeCardDisplay();
    });
    datePlaceBoldCheckbox.addEventListener('change', (e) => {
        cardData.datePlaceBold = e.target.checked;
        updateTributeCardDisplay();
    });

    // Family Name (members)
    familyNameFontSize.addEventListener('input', (e) => {
        cardData.familyNameFontSize = e.target.value;
        familyNameFontSizeValue.textContent = e.target.value + 'px';
        updateTributeCardDisplay();
    });
    familyNameFontColor.addEventListener('input', (e) => {
        cardData.familyNameFontColor = e.target.value;
        updateTributeCardDisplay();
    });
    familyNameBoldCheckbox.addEventListener('change', (e) => {
        cardData.familyNameBold = e.target.checked;
        updateTributeCardDisplay();
    });

    // Family Title (heading)
    familyTitleFontSize.addEventListener('input', (e) => {
        cardData.familyTitleFontSize = e.target.value;
        familyTitleFontSizeValue.textContent = e.target.value + 'px';
        updateTributeCardDisplay();
    });
    familyTitleFontColor.addEventListener('input', (e) => {
        cardData.familyTitleFontColor = e.target.value;
        updateTributeCardDisplay();
    });
    familyTitleBoldCheckbox.addEventListener('change', (e) => {
        cardData.familyTitleBold = e.target.checked;
        updateTributeCardDisplay();
    });

    // Card Background Color (only remaining Advanced control)
    cardBackgroundColorInput.addEventListener('input', (e) => {
        cardData.cardBackgroundColor = e.target.value;
        updateTributeCardDisplay();
    });

    // Card Padding
    cardPaddingTop.addEventListener('input', (e) => {
        cardData.cardPaddingTop = e.target.value;
        cardPaddingTopValue.textContent = e.target.value;
        updateTributeCardDisplay();
    });
    cardPaddingBottom.addEventListener('input', (e) => {
        cardData.cardPaddingBottom = e.target.value;
        cardPaddingBottomValue.textContent = e.target.value;
        updateTributeCardDisplay();
    });
    cardPaddingLeft.addEventListener('input', (e) => {
        cardData.cardPaddingLeft = e.target.value;
        cardPaddingLeftValue.textContent = e.target.value;
        updateTributeCardDisplay();
    });
    cardPaddingRight.addEventListener('input', (e) => {
        cardData.cardPaddingRight = e.target.value;
        cardPaddingRightValue.textContent = e.target.value;
        updateTributeCardDisplay();
    });

    // Generate & Download Buttons
    generateBtn.addEventListener('click', updateTributeCardDisplay);
    downloadBtn.addEventListener('click', () => {
        html2canvas(tributeCard, {
            scale: 2,
            useCORS: true, // Attempt to load cross-origin images (important for file:// if possible, or local server)
            allowTaint: false, // Must be false to use toDataURL
            backgroundColor: null
        }).then(canvas => {
            try {
                const link = document.createElement('a');
                link.download = 'shardhajali-card.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
            } catch (error) {
                console.error('Download Error:', error);
                alert('ક્ષમા કરશો, ઈમેજ ડાઉનલોડ કરવામાં સમસ્યા આવી છે.\n\nજો તમે ફાઇલ સીધી ખોલી છે (file://), તો કૃપા કરીને લોકલ સર્વર (http://localhost) નો ઉપયોગ કરો અથવા ઓનલાઇન હોસ્ટ કરો.\n\nTechnical Error: ' + error.message);
            }
        }).catch(error => {
            console.error('html2canvas Error:', error);
            alert('ક્ષમા કરશો, કાર્ડ રેન્ડર કરવામાં સમસ્યા આવી છે.\n\nTechnical Error: ' + error.message);
        });
    });

    // --- 8. Initialization ---
    renderControlPanel();
    advancedStylingOptions.classList.add('hidden');
    toggleAdvancedStyling.checked = false;
});