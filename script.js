// Базовые элементы страницы
const gokModeCheckbox = document.getElementById('gok-mode');

const g8Block = document.getElementById('g8-block');
const cargBlock = document.getElementById('carg-block');

const palliativeScenarioCheckbox = document.getElementById('palliative-scenario');
const ppsBlock = document.getElementById('pps-block');
const ppiBlock = document.getElementById('ppi-block');

const imdcCheckbox = document.getElementById('imdc-activator');
const imdcBlock = document.getElementById('imdc-block');

const startButton = document.getElementById('main-button');
const copyButton = document.getElementById('copy-button');

const output = document.getElementById('results-output');


// Список параметров пациента для управления элементами страницы
const ageInput = document.getElementById('age');
const male = document.getElementById('male')
const female = document.getElementById('female')

const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const hemoglobinInput = document.getElementById('hemoglobin');
const erythropoetinCheckbox = document.getElementById('cbx-erythropoietin');
const leukocytesInput = document.getElementById('leukocytes');
const plateletsInput = document.getElementById('platelets');
const creatinineInput = document.getElementById('creatinine');

// Быстрое заполнение необходимых полей
function fillTestData() {
    ageInput.value = '80';

    male.checked = true;
    female.checked = false;

    heightInput.value = '175';
    weightInput.value = '80';

    hemoglobinInput.value = '99';
    erythropoetinCheckbox.checked = false;

    leukocytesInput.value = '6.5';
    plateletsInput.value = '250';
    creatinineInput.value = '90';

    document.querySelector('input[name="pps-total"][value="90"]').checked = true;
}

// Запуск быстрого заполнения необходимых полей при нажатии клавиш Alt+Q
document.addEventListener("keydown", (event) => {
    if (
        event.altKey &&
        !event.ctrlKey &&
        !event.shiftKey &&
        !event.metaKey &&
        event.code === "KeyQ"
    ) {
        event.preventDefault();

        if (!event.repeat) {
            fillTestData();
        }
    }
});

function updateBlocksVisibility() {
    const age = ageInput.valueAsNumber;

    const gokEnabled = gokModeCheckbox.checked;
    const palliativeEnabled = palliativeScenarioCheckbox.checked;

    g8Block.hidden = !(gokEnabled || age >= 70);
    cargBlock.hidden = !(gokEnabled || age >= 65);

    const showPalliative = gokEnabled || palliativeEnabled;

    ppsBlock.hidden = !showPalliative;
    ppiBlock.hidden = !showPalliative;
}

gokModeCheckbox.addEventListener('change', updateBlocksVisibility);
ageInput.addEventListener('input', updateBlocksVisibility);
palliativeScenarioCheckbox.addEventListener(
    'change',
    updateBlocksVisibility
);

// Скрытие / показ IMDC блока в зависмости от потребности
function toggleImdcBlock() {
    imdcBlock.hidden = !imdcCheckbox.checked;
}

imdcCheckbox.addEventListener('change', toggleImdcBlock);


// Функция формирования отчёта (ОСНОВНАЯ ФУНКЦИЯ)
function showCalculationTest() {
    const gokMode = gokModeCheckbox.checked

    const palliativeScenarioCheckbox = document.getElementById('palliative-scenario');
    const isPalliativeScenario = palliativeScenarioCheckbox.checked;

    const imdcCheckbox = document.getElementById('imdc-activator');
    const isImdc = imdcCheckbox.checked;
    
    const ageInput = document.getElementById('age');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const hemoglobinInput = document.getElementById('hemoglobin');
    const erythropoetinCheckbox = document.getElementById('cbx-erythropoietin');
    const leukocytesInput = document.getElementById('leukocytes');
    const plateletsInput = document.getElementById('platelets');
    const creatinineInput = document.getElementById('creatinine');

    const height = heightInput.valueAsNumber;
    const weight = weightInput.valueAsNumber;
    const hemoglobin = hemoglobinInput.valueAsNumber;
    const erythropoietin = erythropoetinCheckbox.checked;
    const leukocytes = leukocytesInput.valueAsNumber;
    const platelets = plateletsInput.valueAsNumber;
    const creatinine = creatinineInput.valueAsNumber;

    const male = document.getElementById('male').checked
    const female = document.getElementById('female').checked

    const age = ageInput.valueAsNumber;

    const lastTwoDigits = age % 100;
    const lastDigit = age % 10;

    let ageWord;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        ageWord = "лет";
    } else if (lastDigit === 1) {
        ageWord = "год";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        ageWord = "года";
    } else {
        ageWord = "лет";
    }

    const bmi = Number((weight / (height / 100) ** 2).toFixed(2));
    
    let bmiLabel;

    if (bmi < 16) {
        bmiLabel = 'выраженный дефицит массы тела'
    } else if (bmi >= 16 && bmi < 17) {
        bmiLabel = 'умеренный дефицит массы тела'
    } else if (bmi >= 17 && bmi < 18.5) {
        bmiLabel = 'лёгкий дефицит массы тела'
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiLabel = 'нормальная масса тела'
    } else if (bmi >= 25 && bmi < 30) {
        bmiLabel = 'предожирение'
    } else if (bmi >= 30 && bmi < 35) {
        bmiLabel = 'ожирение I степени'
    } else if (bmi >= 35 && bmi < 40) {
        bmiLabel = 'ожирение II степени'
    } else if (bmi >= 40) {
        bmiLabel = 'ожирение III степени'
    }

    // Список чекбоксов для Caprini
    const capriniFootSwellingCheckbox = document.getElementById('caprini-foot-swelling');
    const capriniFootSwelling = capriniFootSwellingCheckbox.checked;

    const capriniVaricoseVeinsCheckbox = document.getElementById('caprini-varicose-veins');
    const capriniVaricoseVeins = capriniVaricoseVeinsCheckbox.checked;

    const capriniSmallSurgeryCheckbox = document.getElementById('caprini-small-surgery');
    const capriniSmallSurgery = capriniSmallSurgeryCheckbox.checked;

    const capriniSepsisCheckbox = document.getElementById('caprini-sepsis');
    const capriniSepsis = capriniSepsisCheckbox.checked;

    const capriniLungDiseaseCheckbox = document.getElementById('caprini-lung-disease');
    const capriniLungDisease = capriniLungDiseaseCheckbox.checked;

    const capriniContraceptionHrtCheckbox = document.getElementById('caprini-contraception-hrt');
    const capriniContraceptionHrt = capriniContraceptionHrtCheckbox.checked;

    const capriniPregnancyCheckbox = document.getElementById('caprini-pregnancy');
    const capriniPregnancy = capriniPregnancyCheckbox.checked;

    const capriniObstetricsPathologyCheckbox = document.getElementById('caprini-obstetrics-pathology');
    const capriniObstetricsPathology = capriniObstetricsPathologyCheckbox.checked;

    const capriniMyocardialInfarctionCheckbox = document.getElementById('captini-myocardial-infarction');
    const capriniMyocardialInfarction = capriniMyocardialInfarctionCheckbox.checked;

    const capriniHeartFailureCheckbox = document.getElementById('caprini-heart-failure');
    const capriniHeartFailure = capriniHeartFailureCheckbox.checked;

    const capriniBedRestCheckbox = document.getElementById('caprini-bed-rest');
    const capriniBedRest = capriniBedRestCheckbox.checked;

    const capriniInflammedBowelCheckbox = document.getElementById('caprini-inflammed-bowel');
    const capriniInflammedBowel = capriniInflammedBowelCheckbox.checked;

    const capriniBigSurgeryStoryCheckbox = document.getElementById('caprini-big-surgery-story');
    const capriniBigSurgeryStory = capriniBigSurgeryStoryCheckbox.checked;

    const capriniCopdCheckbox = document.getElementById('caprini-copd');
    const capriniCopd = capriniCopdCheckbox.checked;

    const capriniArthroSurgeryCheckbox = document.getElementById('caprini-arthro-surgery');
    const capriniArthroSurgery = capriniArthroSurgeryCheckbox.checked;

    const capriniOncologyCheckbox = document.getElementById('caprini-oncology');
    const capriniOncology = capriniOncologyCheckbox.checked;

    const capriniLaparoSurgeryCheckbox = document.getElementById('caprini-laparo-surgery');
    const capriniLaparoSurgery = capriniLaparoSurgeryCheckbox.checked;

    const capriniBedRestLongCheckbox = document.getElementById('caprini-bed-rest-long');
    const capriniBedRestLong = capriniBedRestLongCheckbox.checked;

    const capriniLimbImmobilizationCheckbox = document.getElementById('caprini-limb-immobilization');
    const capriniLimbImmobilization = capriniLimbImmobilizationCheckbox.checked;

    const capriniCathCentVeinsCheckbox = document.getElementById('caprini-cath-cent-veins');
    const capriniCathCentVeins = capriniCathCentVeinsCheckbox.checked;

    const capriniBigSurgeryCheckbox = document.getElementById('caprini-big-surgery');
    const capriniBigSurgery = capriniBigSurgeryCheckbox.checked;

    const capriniVeOfPatientCheckbox = document.getElementById('caprini-ve-of-patient');
    const capriniVeOfPatient = capriniVeOfPatientCheckbox.checked;

    const capriniVeInFamilyCheckbox = document.getElementById('caprini-ve-in-family');
    const capriniVeInFamily = capriniVeInFamilyCheckbox.checked;

    const capriniLeidenMutationCheckbox = document.getElementById('caprini-leiden-mutation');
    const capriniLeidenMutation = capriniLeidenMutationCheckbox.checked;

    const capriniProthrombinMutationCheckbox = document.getElementById('caprini-prothrombin-mutation');
    const capriniProthrombinMutation = capriniProthrombinMutationCheckbox.checked;

    const capriniHighHomocysteineCheckbox = document.getElementById('caprini-high-homocysteine');
    const capriniHighHomocysteine = capriniHighHomocysteineCheckbox.checked;

    const capriniHeparinAndThrombocytopeniaCheckbox = document.getElementById('caprini-heparin-and-thrombocytopenia');
    const capriniHeparinAndThrombocytopenia = capriniHeparinAndThrombocytopeniaCheckbox.checked;

    const capriniCardiolipinAntibodyCheckbox = document.getElementById('caprini-cardiolipin-antibody');
    const capriniCardiolipinAntibody = capriniCardiolipinAntibodyCheckbox.checked;

    const capriniLupusAnticoagulantCheckbox = document.getElementById('caprini-lupus-anticoagulant');
    const capriniLupusAnticoagulant = capriniLupusAnticoagulantCheckbox.checked;

    const capriniStrokeCheckbox = document.getElementById('caprini-stroke');
    const capriniStroke = capriniStrokeCheckbox.checked;

    const capriniPolytraumaCheckbox = document.getElementById('caprini-polytrauma');
    const capriniPolytrauma = capriniPolytraumaCheckbox.checked;

    const capriniEndoprothesisCheckbox = document.getElementById('caprini-endoprothesis');
    const capriniEndoprothesis = capriniEndoprothesisCheckbox.checked;

    const capriniFemurAndTibiaFractureCheckbox = document.getElementById('caprini-femur-and-tibia-fracture');
    const capriniFemurAndTibiaFracture = capriniFemurAndTibiaFractureCheckbox.checked;

    const capriniParalysisCheckbox = document.getElementById('caprini-paralysis');
    const capriniParalysis = capriniParalysisCheckbox.checked;

    // Список переменных для расчёта G8
    const g8FoodIntakeInput = Number(
        document.querySelector('input[name="g8-food-intake"]:checked').value
    );
    const g8FoodIntakeAnswers = [
        'выраженное снижение (0 баллов)',
        'умеренное снижение (1 балл)',
        'снижения не было (2 балла)'
    ];

    const g8WeightLossInput = Number(
        document.querySelector('input[name="g8-weight-loss"]:checked').value
    );
    const g8WeightLossAnswers = [
        'более 3 кг (0 баллов)',
        'пациент не знает (1 балл)',
        'от 1 до 3 кг (2 балла)',
        'потери массы не было (3 балла)'
    ];
    
    const g8MobilityInput = Number(
        document.querySelector('input[name="g8-mobility"]:checked').value
    );
    const g8MobilityAnswers = [
        'прикован к постели или креслу (0 баллов)',
        'может встать с постели/кресла, но не выходит из дома (1 балл)',
        'выходит из дома (2 балла)'
    ];

    const g8DementiaInput = Number(
        document.querySelector('input[name="g8-dementia"]:checked').value
    );
    const g8DementiaAnswers = [
        'тяжелая деменция или депрессия (0 баллов)',
        'лёгкая деменция (1 балл)',
        'психологических проблем нет (2 балла)'
    ];

    let g8BmiScore;
    if (bmi < 19) {
        g8BmiScore = 0
    } else if (bmi < 21) {
        g8BmiScore = 1
    } else if (bmi < 23) {
        g8BmiScore = 2
    } else if (bmi >= 23) {
        g8BmiScore = 3
    }
    const g8BmiLabels = ['(0 баллов)', '(1 балл)', '(2 балла)', '(3 балла)'];

    const g8MoreThreeDrugsInput = Number(
        document.querySelector('input[name="g8-more-three-drugs"]:checked').value
    );
    const g8MoreThreeDrugsAnswers = [
        'да (0 баллов)',
        'нет (1 балл)'
    ];

    const g8SelfEsteemInput = Number(
        document.querySelector('input[name="g8-self-esteem"]:checked').value
    );
    const g8SelfEsteemAnswers = [
        'хуже (0 баллов)',
        'затрудняется ответить (1 балл)',
        'такое же (2 балла)',
        'лучше (3 балла)'
    ];

    let g8AgeScore;
    if (age > 85) {
        g8AgeScore = 0
    } else if (age >= 80 && age <= 85) {
        g8AgeScore = 1
    } else if (age < 80) {
        g8AgeScore = 2
    }
    const g8AgeLabels = ['(0 баллов)', '(1 балл)', '(2 балла)'];

    let g8TotalScore = 
        g8FoodIntakeInput + 
        g8WeightLossInput + 
        g8MobilityInput + 
        g8DementiaInput + 
        g8BmiScore + 
        g8MoreThreeDrugsInput + 
        g8SelfEsteemInput + 
        g8AgeScore;

    const g8Toxicity = g8TotalScore < 14
        ? {
            group: 'менее 14 баллов',
            hematologic: '43,0%',
            nonHematologic: '50,6%'
        }
        : {
            group: '14 баллов и более',
            hematologic: '25,9%',
            nonHematologic: '24,1%'
        };

    // Переменные для CARG
    let cargAgeScore;
    let cargAgeIndex;
    if (age < 72) {
        cargAgeScore = 0;
        cargAgeIndex = 0;
    } else if (age >= 72) {
        cargAgeScore = 2;
        cargAgeIndex = 1;
    }
    const cargAgeLabels = ['(0 баллов)', '(2 балла)'];

    const cargGiCUCancerCheckbox = document.getElementById('carg-gi-gu-cancer')
    const isCargGiGuCancer = cargGiCUCancerCheckbox.checked

    let cargGiGuCancerScore;
    let cargGiGuCancerIndex;
    if (!isCargGiGuCancer) {
        cargGiGuCancerScore = 0;
        cargGiGuCancerIndex = 0;
    } else {
        cargGiGuCancerScore = 2;
        cargGiGuCancerIndex = 1;
    }
    const cargGiGuCancerLabels = ['нет (0 баллов)', 'да (2 балла)'];   

    const cargStandartDosageCheckbox = document.getElementById('carg-standart-dosage')
    const isStandartDosage = cargStandartDosageCheckbox.checked

    let cargStandartDosageScore;
    let cargStandartDosageIndex;
    if (!isStandartDosage) {
        cargStandartDosageScore = 0;
        cargStandartDosageIndex = 0;
    } else {
        cargStandartDosageScore = 2;
        cargStandartDosageIndex = 1;
    }
    const cargStandartDosageLabels = ['нет (0 баллов)', 'да (2 балла)']; 

    const cargPolytherapyCheckbox = document.getElementById('carg-polytherapy')
    const isPolytherapy = cargPolytherapyCheckbox.checked

    let cargPolytherapyScore;
    let cargPolytherapyIndex;
    if (!isPolytherapy) {
        cargPolytherapyScore = 0;
        cargPolytherapyIndex = 0;
    } else {
        cargPolytherapyScore = 2;
        cargPolytherapyIndex = 1;
    }
    const cargPolytherapyLabels = ['нет (0 баллов)', 'да (2 балла)'];
    
    let cargHemoglobinScore;
    let cargHemoglobinIndex;
    if (male) {
        if (hemoglobin >= 110) {
            cargHemoglobinScore = 0;
            cargHemoglobinIndex = 0;
        } else if (hemoglobin < 110) {
            cargHemoglobinScore = 3;
            cargHemoglobinIndex = 1;
        }
    } else if (female) {
        if (hemoglobin >= 100) {
            cargHemoglobinScore = 0;
            cargHemoglobinIndex = 2;
        } else if (hemoglobin < 100) {
            cargHemoglobinScore = 3;
            cargHemoglobinIndex = 3;
        }
    }
    const cargHemoglobinLabels = [
        'мужской пол, концентрация гемоглобина 110 г/л и выше; 0 баллов',
        'мужской пол, концентрация гемоглобина менее 110 г/л; 3 балла',
        'женский пол, концентрация гемоглобина 100 г/л и выше; 0 баллов',
        'женский пол, концентрация гемоглобина менее 100 г/л; 3 балла',
    ];    

    const baseWeight = male ? 50 : 45.5;
    const idealWeight = baseWeight + (2.3 / 2.54) * (height - 152.4);

    const BSA = 0.007184 * height ** 0.725 * idealWeight ** 0.425;
    const sexFactorForJelliffe = male ? 1 : 0.9;
    const clearanceCrJelliffeNorm =
        ((98 - 0.8 * (age - 20)) * 88.4) /
        creatinine *
        sexFactorForJelliffe;
    const clearanceCrJelliffeAbs = (clearanceCrJelliffeNorm * BSA / 1.73).toFixed(2);

    let cargLowClearanceScore;
    let cargLowClearanceIndex;
    if (clearanceCrJelliffeAbs >= 34) {
        cargLowClearanceScore = 0;
        cargLowClearanceIndex = 0;
    } else if (clearanceCrJelliffeAbs < 34) {
        cargLowClearanceScore = 3;
        cargLowClearanceIndex = 1;
    }
    const cargLowClearanceLabels = ['(34 мл/мин и выше; 0 баллов)', '(менее 34 мл/мин; 2 балла)'];

    const cargHearingLossCheckbox = document.getElementById('carg-hearing-loss')
    const isHearingLoss = cargHearingLossCheckbox.checked

    let cargHearingLossScore;
    let cargHearingLossIndex;
    if (!isHearingLoss) {
        cargHearingLossScore = 0;
        cargHearingLossIndex = 0;
    } else {
        cargHearingLossScore = 2;
        cargHearingLossIndex = 1;
    }
    const cargHearingLossLabels = ['нет (0 баллов)', 'да (2 балла)'];
    
    const cargFallsCheckbox = document.getElementById('carg-falls')
    const isFalls = cargFallsCheckbox.checked

    let cargFallsScore;
    let cargFallsIndex;
    if (!isFalls) {
        cargFallsScore = 0;
        cargFallsIndex = 0;
    } else {
        cargFallsScore = 3;
        cargFallsIndex = 1;
    }
    const cargFallsLabels = ['нет (0 баллов)', 'да (3 балла)'];

    const cargDrugsIntakeWithHelpCheckbox = document.getElementById('carg-grugs-intake-with-help')
    const isDrugsIntakeWithHelp = cargDrugsIntakeWithHelpCheckbox.checked

    let cargDrugsIntakeWithHelpScore;
    let cargDrugsIntakeWithHelpIndex;
    if (!isDrugsIntakeWithHelp) {
        cargDrugsIntakeWithHelpScore = 0;
        cargDrugsIntakeWithHelpIndex = 0;
    } else {
        cargDrugsIntakeWithHelpScore = 1;
        cargDrugsIntakeWithHelpIndex = 1;
    }
    const cargDrugsIntakeWithHelpLabels = ['нет (0 баллов)', 'да (1 балл)'];

    const cargNoOneBlockWalkingCheckbox = document.getElementById('carg-no-one-block-walking')
    const isNoOneBlockWalking = cargNoOneBlockWalkingCheckbox.checked

    let cargNoOneBlockWalkingScore;
    let cargNoOneBlockWalkingIndex;
    if (!isNoOneBlockWalking) {
        cargNoOneBlockWalkingScore = 0;
        cargNoOneBlockWalkingIndex = 0;
    } else {
        cargNoOneBlockWalkingScore = 2;
        cargNoOneBlockWalkingIndex = 1;
    }
    const cargNoOneBlockWalkingLabels = ['нет (0 баллов)', 'да (2 балла)'];

    const cargSocialActivityLossCheckbox = document.getElementById('carg-social-activity-loss')
    const isSocialActivityLoss = cargSocialActivityLossCheckbox.checked

    let cargSocialActivityLossScore;
    let cargSocialActivityLossIndex;
    if (!isSocialActivityLoss) {
        cargSocialActivityLossScore = 0;
        cargSocialActivityLossIndex = 0;
    } else {
        cargSocialActivityLossScore = 1;
        cargSocialActivityLossIndex = 1;
    }
    const cargSocialActivityLossLabels = ['нет (0 баллов)', 'да (1 балл)'];

    let cargTotalScore =
        cargAgeScore +
        cargGiGuCancerScore +
        cargStandartDosageScore +
        cargPolytherapyScore +
        cargHemoglobinScore +
        cargLowClearanceScore +
        cargHearingLossScore +
        cargFallsScore +
        cargDrugsIntakeWithHelpScore +
        cargNoOneBlockWalkingScore +
        cargSocialActivityLossScore;
    
    let cargTotalScoreIndex;
    if (cargTotalScore < 6) {
        cargTotalScoreIndex = 0;
    } else if (cargTotalScore > 5 && cargTotalScore < 10) {
        cargTotalScoreIndex = 1;
    } else if (cargTotalScore > 9) {
        cargTotalScoreIndex = 2;
    }
    const cargTotalScoreLabels = [
        '0-5 баллов:\n - низкий риск;\n - вероятность токсичности 3-5 степени - 30%',
        '6-9 баллов:\n - умеренный риск;\n - вероятность токсичности 3-5 степени - 52%',
        '10 и более баллов:\n - высокий риск;\n - вероятность токсичности 3-5 степени - 83%'
    ];

    // Переменные для PPS
    const ppsMobilityInput = Number(
        document.querySelector('input[name="pps-mobility"]:checked').value
    );
    const ppsMobilityAnswers = [
        'полноценная',
        'снижена',
        'преимущественно сидит/лежит',
        'преимущественно лежит',
        'прикован к постели',
        'смерть'
    ];

    const ppsIllnessInput = Number(
        document.querySelector('input[name="pps-illness"]:checked').value
    );
    const ppsIllnessAnswers = [
        'нормальная деятельность и работоспособность, нет признаков заболевания',
        'нормальная деятельность и работоспособность, заметны некоторые признаки заболевания',
        'нормальная деятельность требует усилий, заметны некоторые признаки заболевания',
        'неспособность к профессиональной деятельности/работе, серьёзные признаки заболевания',
        'неспособность заниматься хобби и выполнять работу по дому, серьёзные признаки заболевания',
        'полная нетрудособность, распространённый патологический процесс',
        'неспособность к большинству видов деятельности, распространённый патологический процесс',
        'неспособность к какой-либо деятельности, распространённый патологический процесс'
    ];
    
    const ppsSelfCareInput = Number(
        document.querySelector('input[name="pps-self-care"]:checked').value
    );
    const ppsSelfCareAnswers = [
        'полное',
        'периодически необходима помощь',
        'необходима значительная помощь',
        'помощь необходима большую часть времени',
        'необходима постоянная помощь'
    ];

    const ppsFoodIntakeInput = Number(
        document.querySelector('input[name="pps-food-intake"]:checked').value
    );
    const ppsFoodIntakeAnswers = [
        'в норме',
        'в норме или сокращен',
        'только пьёт маленькими глотками',
        'только уход за полостью рта'
    ];

    const ppsConsciousnessInput = Number(
        document.querySelector('input[name="pps-consciousness"]:checked').value
    );
    const ppsConsciousnessAnswers = [
        'ясное сознание',
        'ясное или спутанность сознания',
        'ясное или присутствует вялость +/- спутанность сознания',
        'вялость или кома +/- спутанность сознания'
    ];

    const ppsTotalInput = Number(
        document.querySelector('input[name="pps-total"]:checked').value
    );

    // Переменные для PPI
    let ppiPpsScore;
    let ppiPpsIndex;
    if (ppsTotalInput >= 60) {
        ppiPpsScore = 0;
        ppiPpsIndex = 0;
    } else if (ppsTotalInput >= 30 && ppsTotalInput <=50) {
        ppiPpsScore = 2.5;
        ppiPpsIndex = 1;
    } else if (ppsTotalInput >= 10 && ppsTotalInput <=20) {
        ppiPpsScore = 4;
        ppiPpsIndex = 2; 
    }

    const ppiPpsAnswers = [
        '(60% и выше; 0 баллов)',
        '(от 30% до 50% включительно; 2,5 балла)',
        '(от 10 до 20% включительно; 4 балла)'
    ];

    const ppiFoodIntakeInput = Number(
        document.querySelector('input[name="ppi-food-intake"]:checked').value
    );

    let ppiFoodIntakeScore;
    if (ppiFoodIntakeInput === 0) {
        ppiFoodIntakeScore = 2.5;
    } else if (ppiFoodIntakeInput === 1) {
        ppiFoodIntakeScore = 1;
    } else if (ppiFoodIntakeInput === 2) {
        ppiFoodIntakeScore = 0;
    }

    const ppiFoodIntakeAnswers = [
        'несколько глотков или ложек пищи/жидкости за прием (2,5 балла)',
        'снижен, но больше нескольких глотков/ложек за приём (1 балл)',
        'нормальный (0 баллов)'
    ];

    const ppiSwellingInput = Number(
        document.querySelector('input[name="ppi-swelling"]:checked').value
    );

    let ppiSwellingScore;
    if (ppiSwellingInput === 0) {
        ppiSwellingScore = 1;
    } else if (ppiSwellingInput === 1) {
        ppiSwellingScore = 0;
    } 

    const ppiSwellingAnswers = [
        'да (1 балл)',
        'нет (0 баллов)'
    ];

    const ppiDyspnoeaInput = Number(
        document.querySelector('input[name="ppi-dyspnoea"]:checked').value
    );

    let ppiDyspnoeaScore;
    if (ppiDyspnoeaInput === 0) {
        ppiDyspnoeaScore = 3.5;
    } else if (ppiDyspnoeaInput === 1) {
        ppiDyspnoeaScore = 0;
    } 

    const ppiDyspnoeaAnswers = [
        'да (3,5 балла)',
        'нет (0 баллов)'
    ];

    const ppiDeliriumInput = Number(
        document.querySelector('input[name="ppi-delirium"]:checked').value
    );

    let ppiDeliriumScore;
    if (ppiDeliriumInput === 0) {
        ppiDeliriumScore = 4;
    } else if (ppiDeliriumInput === 1) {
        ppiDeliriumScore = 0;
    } 

    const ppiDeliriumAnswers = [
        'да (4 балла)',
        'нет (0 баллов)'
    ];

    let ppiTotalScore =
        ppiPpsScore +
        ppiFoodIntakeScore +
        ppiSwellingScore +
        ppiDyspnoeaScore +
        ppiDeliriumScore;

    let ppiTotalScoreIndex;
    if (ppiTotalScore <= 4) {
        ppiTotalScoreIndex = 0;
    } else if (ppiTotalScore > 4 && ppiTotalScore <= 6) {
        ppiTotalScoreIndex = 1;
    } else if (ppiTotalScore > 6) {
        ppiTotalScoreIndex = 2;
    }

    const ppiTotalScoreLabels = [
        '4 балла и меньше (низкий риск)',
        '5-6 баллов (умеренный риск)',
        'более 6 баллов (высокий риск)'
    ];

    // Переменные для Khorana
    const khoranaSiteInput = Number(
        document.querySelector('input[name="khorana-site"]:checked').value
    );

    const khoranaSiteAnswers = [
        'низкий риск (молочная железа, колоректальный рак, голова и шея, прочие нозологии; 0 баллов)',
        'высокий риск (лёгкое, лимфома, гинекология, урология исключая простату; 1 балл)',
        'очень высокий риск (желудок, поджелудочная железа; 2 балла)'
    ];

    let khoranaPlateletsScore;
    if (platelets < 350) {
        khoranaPlateletsScore = 0;
    } else if (platelets >= 350) {
        khoranaPlateletsScore = 1;
    }

    const khoranaPlateletsAnswers = [
        '(менее 350 * 10^9/л; 0 баллов)',
        '(350 * 10^9/л и более; 1 балл)'
    ];

    let khoranaHemoglobinScore;
    if (hemoglobin >= 100) {
        khoranaHemoglobinScore = 0;
    } else if (hemoglobin < 100) {
        khoranaHemoglobinScore = 1;
    }

    const khoranaHemoglobinAnswers = [
        '(100 г/л и выше',
        '(менее 100 г/л'
    ];

    let khoranaErythropoetinScore;
    if (!erythropoietin) {
        khoranaErythropoetinScore = 0;
    } else if (erythropoietin) {
        khoranaErythropoetinScore = 1;
    }

    const khoranaErythropoetinAnswers = [
        'эритропоэтин не получает',
        'эритропоэтин получает'
    ];

    let khoranaEryHemScore;
    if (khoranaHemoglobinScore === 0 && khoranaErythropoetinScore === 0) {
        khoranaEryHemScore = 0;
    } else {
        khoranaEryHemScore = 1;
    }

    const khoranaEryHemAnswers = [
        '0 баллов)',
        '1 балл)'
    ];
    
    let khoranaLeukocytesScore;
    if (leukocytes <= 11) {
        khoranaLeukocytesScore = 0;
    } else if (leukocytes > 11) {
        khoranaLeukocytesScore = 1;
    }

    const khoranaLeukocytesAnswers = [
        '(менее или 11 * 10^9/л; 0 баллов)',
        '(более 11 * 10^9/л и более; 1 балл)'
    ];

    let khoranaBmiScore;
    if (bmi < 35) {
        khoranaBmiScore = 0;
    } else if (bmi >= 35) {
        khoranaBmiScore = 1;
    }

    const khoranaBmiAnswers = [
        '(до 35 кг/м.кв.; 0 баллов)',
        '(35 кг/м.кв. и более; 1 балл)'
    ];

    let khoranaTotalScore = 
        khoranaSiteInput +
        khoranaPlateletsScore +
        khoranaEryHemScore +
        khoranaLeukocytesScore +
        khoranaBmiScore;

    let khoranaTotalScoreIndex;
    if (khoranaTotalScore === 0) {
        khoranaTotalScoreIndex = 0
    } else if (khoranaTotalScore > 0 && khoranaTotalScore < 3) {
        khoranaTotalScoreIndex = 1
    } else if (khoranaTotalScore > 2) {
        khoranaTotalScoreIndex = 2
    }

    const khoranaTotalScoreLabels = [
        'низкий риск (частота ВТЭО 0,3% - 0,8% в исходном исследовании при медиане наблюдения 2,5 месяца)',
        'промежуточный риск (частота ВТЭО 1,8% - 2,0% в исходном исследовании при медиане наблюдения 2,5 месяца)',
        'высокий риск (частота ВТЭО 6,7% - 7,1% в исходном исследовании при медиане наблюдения 2,5 месяца)'
    ];

    // Переменные для Caprini
    let capriniAge4160Index;
    let capriniAge4160Score;
    if (age < 41) {
        capriniAge4160Index = 0;
        capriniAge4160Score = 0;
    } else if (age > 40 && age < 61) {
        capriniAge4160Index = 1;
        capriniAge4160Score = 1;
    } else if (age > 60) {
        capriniAge4160Index = 2;
        capriniAge4160Score = 0;
    }

    const capriniAge4160Answers = [
        'нет (возраст менее 41 года, 0 баллов)',
        'да (1 балл)',
        'нет (возраст более 60 лет, 0 баллов)'
    ];

    let capriniFootSwellingIndex;
    let capriniFootSwellingScore;
    if (capriniFootSwelling) {
        capriniFootSwellingIndex = 0;
        capriniFootSwellingScore = 1;
    } else {
        capriniFootSwellingIndex = 1;
        capriniFootSwellingScore = 0;        
    }

    const capriniFootSwellingAnswers = [
        'да (1 балл)',
        'нет (0 баллов)'
    ];

    let capriniVaricoseVeinsIndex;
    let capriniVaricoseVeinsScore;
    if (capriniVaricoseVeins) {
        capriniVaricoseVeinsIndex = 0;
        capriniVaricoseVeinsScore = 1;
    } else {
        capriniVaricoseVeinsIndex = 1;
        capriniVaricoseVeinsScore = 0;        
    }

    const capriniVaricoseVeinsAnswers = [
        'да (1 балл)',
        'нет (0 баллов)'
    ];

    let capriniBmiIndex;
    let capriniBmiScore;
    if (bmi <= 25) {
        capriniBmiIndex = 0;
        capriniBmiScore = 0;
    } else if (bmi > 25) {
        capriniBmiIndex = 1;
        capriniBmiScore = 1;
    }

    const capriniBmiAnswers = [
        'нет (ИМТ ' + bmi + 'кг/м.кв., 0 баллов)',
        'да (ИМТ ' + bmi + 'кг/м.кв., 1 балл)'
    ];

    let capriniSmallSurgeryIndex;
    let capriniSmallSurgeryScore;
    if (capriniSmallSurgery) {
        capriniSmallSurgeryIndex = 0;
        capriniSmallSurgeryScore = 1;
    } else {
        capriniSmallSurgeryIndex = 1;
        capriniSmallSurgeryScore = 0;        
    }

    const capriniSmallSurgeryAnswers = [
        'да (1 балл)',
        'нет (0 баллов)'
    ];

    let capriniSepsisIndex;
    let capriniSepsisScore;
    if (capriniSepsis) {
        capriniSepsisIndex = 0;
        capriniSepsisScore = 1;
    } else {
        capriniSepsisIndex = 1;
        capriniSepsisScore = 0;        
    }

    const capriniSepsisAnswers = [
        'да (1 балл)',
        'нет (0 баллов)'
    ];

    let capriniLungDiseaseIndex;
    let capriniLungDiseaseScore;
    if (capriniLungDisease) {
        capriniLungDiseaseIndex = 0;
        capriniLungDiseaseScore = 1;
    } else {
        capriniLungDiseaseIndex = 1;
        capriniLungDiseaseScore = 0;        
    }

    const capriniLungDiseaseAnswers = [
        'да (1 балл)',
        'нет (0 баллов)'
    ];

    let capriniContraceptionHrtIndex;
    let capriniContraceptionHrtScore;
    if (capriniContraceptionHrt) {
        capriniContraceptionHrtIndex = 0;
        capriniContraceptionHrtScore = 1;
    } else {
        capriniContraceptionHrtIndex = 1;
        capriniContraceptionHrtScore = 0;        
    }

    const capriniContraceptionHrtAnswers = [
        'да (1 балл)',
        'нет (0 баллов)'
    ];

    let capriniPregnancyIndex;
    let capriniPregnancyScore;
    if (capriniPregnancy) {
        capriniPregnancyIndex = 0;
        capriniPregnancyScore = 1;
    } else {
        capriniPregnancyIndex = 1;
        capriniPregnancyScore = 0;        
    }

    const capriniPregnancyAnswers = [
        'да (1 балл)',
        'нет (0 баллов)'
    ];

    let capriniObstetricsPathologyIndex;
    let capriniObstetricsPathologyScore;
    if (capriniObstetricsPathology) {
        capriniObstetricsPathologyIndex = 0;
        capriniObstetricsPathologyScore = 1;
    } else {
        capriniObstetricsPathologyIndex = 1;
        capriniObstetricsPathologyScore = 0;        
    }

    const capriniObstetricsPathologyAnswers = [
        'да (1 балл)',
        'нет (0 баллов)'
    ];

    let capriniMyocardialInfarctionIndex;
    let capriniMyocardialInfarctionScore;
    if (capriniMyocardialInfarction) {
        capriniMyocardialInfarctionIndex = 0;
        capriniMyocardialInfarctionScore = 1;
    } else {
        capriniMyocardialInfarctionIndex = 1;
        capriniMyocardialInfarctionScore = 0;        
    }

    const capriniMyocardialInfarctionAnswers = [
        'да (1 балл)',
        'нет (0 баллов)'
    ];

    let capriniHeartFailureIndex;
    let capriniHeartFailureScore;
    if (capriniHeartFailure) {
        capriniHeartFailureIndex = 0;
        capriniHeartFailureScore = 1;
    } else {
        capriniHeartFailureIndex = 1;
        capriniHeartFailureScore = 0;        
    }

    const capriniHeartFailureAnswers = [
        'да (1 балл)',
        'нет (0 баллов)'
    ];

    let capriniBedRestIndex;
    let capriniBedRestScore;
    if (capriniBedRest) {
        capriniBedRestIndex = 0;
        capriniBedRestScore = 1;
    } else {
        capriniBedRestIndex = 1;
        capriniBedRestScore = 0;        
    }

    const capriniBedRestAnswers = [
        'да (1 балл)',
        'нет (0 баллов)'
    ];

    let capriniInflammedBowelIndex;
    let capriniInflammedBowelScore;
    if (capriniInflammedBowel) {
        capriniInflammedBowelIndex = 0;
        capriniInflammedBowelScore = 1;
    } else {
        capriniInflammedBowelIndex = 1;
        capriniInflammedBowelScore = 0;        
    }

    const capriniInflammedBowelAnswers = [
        'да (1 балл)',
        'нет (0 баллов)'
    ];

    let capriniBigSurgeryStoryIndex;
    let capriniBigSurgeryStoryScore;
    if (capriniBigSurgeryStory) {
        capriniBigSurgeryStoryIndex = 0;
        capriniBigSurgeryStoryScore = 1;
    } else {
        capriniBigSurgeryStoryIndex = 1;
        capriniBigSurgeryStoryScore = 0;        
    }

    const capriniBigSurgeryStoryAnswers = [
        'да (1 балл)',
        'нет (0 баллов)'
    ];

    let capriniCopdIndex;
    let capriniCopdScore;
    if (capriniCopd) {
        capriniCopdIndex = 0;
        capriniCopdScore = 1;
    } else {
        capriniCopdIndex = 1;
        capriniCopdScore = 0;        
    }

    const capriniCopdAnswers = [
        'да (1 балл)',
        'нет (0 баллов)'
    ];

    let capriniAge6174Index;
    let capriniAge6174Score;
    if (age < 61) {
        capriniAge6174Index = 0;
        capriniAge6174Score = 0;
    } else if (age > 60 && age < 75) {
        capriniAge6174Index = 1;
        capriniAge6174Score = 2;
    } else if (age >= 75) {
        capriniAge6174Index = 2;
        capriniAge6174Score = 0;
    }

    const capriniAge6174Answers = [
        'нет (возраст менее 61 года, 0 баллов)',
        'да (2 балла)',
        'нет (возраст более 74 лет, 0 баллов)'
    ];

    let capriniArthroSurgeryIndex;
    let capriniArthroSurgeryScore;
    if (capriniArthroSurgery) {
        capriniArthroSurgeryIndex = 0;
        capriniArthroSurgeryScore = 2;
    } else {
        capriniArthroSurgeryIndex = 1;
        capriniArthroSurgeryScore = 0;        
    }

    const capriniArthroSurgeryAnswers = [
        'да (2 балла)',
        'нет (0 баллов)'
    ];

    let capriniOncologyIndex;
    let capriniOncologyScore;
    if (capriniOncology) {
        capriniOncologyIndex = 0;
        capriniOncologyScore = 2;
    } else {
        capriniOncologyIndex = 1;
        capriniOncologyScore = 0;        
    }

    const capriniOncologyAnswers = [
        'да (2 балла)',
        'нет (0 баллов)'
    ];

    let capriniLaparoSurgeryIndex;
    let capriniLaparoSurgeryScore;
    if (capriniLaparoSurgery) {
        capriniLaparoSurgeryIndex = 0;
        capriniLaparoSurgeryScore = 2;
    } else {
        capriniLaparoSurgeryIndex = 1;
        capriniLaparoSurgeryScore = 0;        
    }

    const capriniLaparoSurgeryAnswers = [
        'да (2 балла)',
        'нет (0 баллов)'
    ];

    let capriniBedRestLongIndex;
    let capriniBedRestLongScore;
    if (capriniBedRestLong) {
        capriniBedRestLongIndex = 0;
        capriniBedRestLongScore = 2;
    } else {
        capriniBedRestLongIndex = 1;
        capriniBedRestLongScore = 0;        
    }

    const capriniBedRestLongAnswers = [
        'да (2 балла)',
        'нет (0 баллов)'
    ];

    let capriniLimbImmobilizationIndex;
    let capriniLimbImmobilizationScore;
    if (capriniLimbImmobilization) {
        capriniLimbImmobilizationIndex = 0;
        capriniLimbImmobilizationScore = 2;
    } else {
        capriniLimbImmobilizationIndex = 1;
        capriniLimbImmobilizationScore = 0;        
    }

    const capriniLimbImmobilizationAnswers = [
        'да (2 балла)',
        'нет (0 баллов)'
    ];

    let capriniCathCentVeinsIndex;
    let capriniCathCentVeinsScore;
    if (capriniCathCentVeins) {
        capriniCathCentVeinsIndex = 0;
        capriniCathCentVeinsScore = 2;
    } else {
        capriniCathCentVeinsIndex = 1;
        capriniCathCentVeinsScore = 0;        
    }

    const capriniCathCentVeinsAnswers = [
        'да (2 балла)',
        'нет (0 баллов)'
    ];

    let capriniBigSurgeryIndex;
    let capriniBigSurgeryScore;
    if (capriniBigSurgery) {
        capriniBigSurgeryIndex = 0;
        capriniBigSurgeryScore = 2;
    } else {
        capriniBigSurgeryIndex = 1;
        capriniBigSurgeryScore = 0;        
    }

    const capriniBigSurgeryAnswers = [
        'да (2 балла)',
        'нет (0 баллов)'
    ];

    let capriniAge75Index;
    let capriniAge75Score;
    if (age < 75) {
        capriniAge75Index = 0;
        capriniAge75Score = 0;
    } else if (age >= 75) {
        capriniAge75Index = 1;
        capriniAge75Score = 3;
    }

    const capriniAge75Answers = [
        'нет (возраст менее 75 лет, 0 баллов)',
        'да (3 балла)'
    ];

    let capriniVeOfPatientIndex;
    let capriniVeOfPatientScore;
    if (capriniVeOfPatient) {
        capriniVeOfPatientIndex = 0;
        capriniVeOfPatientScore = 3;
    } else {
        capriniVeOfPatientIndex = 1;
        capriniVeOfPatientScore = 0;        
    }

    const capriniVeOfPatientAnswers = [
        'да (3 балла)',
        'нет (0 баллов)'
    ];

    let capriniVeInFamilyIndex;
    let capriniVeInFamilyScore;
    if (capriniVeInFamily) {
        capriniVeInFamilyIndex = 0;
        capriniVeInFamilyScore = 3;
    } else {
        capriniVeInFamilyIndex = 1;
        capriniVeInFamilyScore = 0;        
    }

    const capriniVeInFamilyAnswers = [
        'да (3 балла)',
        'нет (0 баллов)'
    ];

    let capriniLeidenMutationIndex;
    let capriniLeidenMutationScore;
    if (capriniLeidenMutation) {
        capriniLeidenMutationIndex = 0;
        capriniLeidenMutationScore = 3;
    } else {
        capriniLeidenMutationIndex = 1;
        capriniLeidenMutationScore = 0;        
    }

    const capriniLeidenMutationAnswers = [
        'да (3 балла)',
        'нет (0 баллов)'
    ];

    let capriniProthrombinMutationIndex;
    let capriniProthrombinMutationScore;
    if (capriniProthrombinMutation) {
        capriniProthrombinMutationIndex = 0;
        capriniProthrombinMutationScore = 3;
    } else {
        capriniProthrombinMutationIndex = 1;
        capriniProthrombinMutationScore = 0;        
    }

    const capriniProthrombinMutationAnswers = [
        'да (3 балла)',
        'нет (0 баллов)'
    ];

    let capriniHighHomocysteineIndex;
    let capriniHighHomocysteineScore;
    if (capriniHighHomocysteine) {
        capriniHighHomocysteineIndex = 0;
        capriniHighHomocysteineScore = 3;
    } else {
        capriniHighHomocysteineIndex = 1;
        capriniHighHomocysteineScore = 0;        
    }

    const capriniHighHomocysteineAnswers = [
        'да (3 балла)',
        'нет (0 баллов)'
    ];

    let capriniHeparinAndThrombocytopeniaIndex;
    let capriniHeparinAndThrombocytopeniaScore;
    if (capriniHeparinAndThrombocytopenia) {
        capriniHeparinAndThrombocytopeniaIndex = 0;
        capriniHeparinAndThrombocytopeniaScore = 3;
    } else {
        capriniHeparinAndThrombocytopeniaIndex = 1;
        capriniHeparinAndThrombocytopeniaScore = 0;        
    }

    const capriniHeparinAndThrombocytopeniaAnswers = [
        'да (3 балла)',
        'нет (0 баллов)'
    ];

    let capriniCardiolipinAntibodyIndex;
    let capriniCardiolipinAntibodyScore;
    if (capriniCardiolipinAntibody) {
        capriniCardiolipinAntibodyIndex = 0;
        capriniCardiolipinAntibodyScore = 3;
    } else {
        capriniCardiolipinAntibodyIndex = 1;
        capriniCardiolipinAntibodyScore = 0;        
    }

    const capriniCardiolipinAntibodyAnswers = [
        'да (3 балла)',
        'нет (0 баллов)'
    ];

    let capriniLupusAnticoagulantIndex;
    let capriniLupusAnticoagulantScore;
    if (capriniLupusAnticoagulant) {
        capriniLupusAnticoagulantIndex = 0;
        capriniLupusAnticoagulantScore = 3;
    } else {
        capriniLupusAnticoagulantIndex = 1;
        capriniLupusAnticoagulantScore = 0;        
    }

    const capriniLupusAnticoagulantAnswers = [
        'да (3 балла)',
        'нет (0 баллов)'
    ];

    let capriniStrokeIndex;
    let capriniStrokeScore;
    if (capriniStroke) {
        capriniStrokeIndex = 0;
        capriniStrokeScore = 5;
    } else {
        capriniStrokeIndex = 1;
        capriniStrokeScore = 0;        
    }

    const capriniStrokeAnswers = [
        'да (5 баллов)',
        'нет (0 баллов)'
    ];

    let capriniPolytraumaIndex;
    let capriniPolytraumaScore;
    if (capriniPolytrauma) {
        capriniPolytraumaIndex = 0;
        capriniPolytraumaScore = 5;
    } else {
        capriniPolytraumaIndex = 1;
        capriniPolytraumaScore = 0;        
    }

    const capriniPolytraumaAnswers = [
        'да (5 баллов)',
        'нет (0 баллов)'
    ];

    let capriniEndoprothesisIndex;
    let capriniEndoprothesisScore;
    if (capriniEndoprothesis) {
        capriniEndoprothesisIndex = 0;
        capriniEndoprothesisScore = 5;
    } else {
        capriniEndoprothesisIndex = 1;
        capriniEndoprothesisScore = 0;        
    }

    const capriniEndoprothesisAnswers = [
        'да (5 баллов)',
        'нет (0 баллов)'
    ];

    let capriniFemurAndTibiaFractureIndex;
    let capriniFemurAndTibiaFractureScore;
    if (capriniFemurAndTibiaFracture) {
        capriniFemurAndTibiaFractureIndex = 0;
        capriniFemurAndTibiaFractureScore = 5;
    } else {
        capriniFemurAndTibiaFractureIndex = 1;
        capriniFemurAndTibiaFractureScore = 0;        
    }

    const capriniFemurAndTibiaFractureAnswers = [
        'да (5 баллов)',
        'нет (0 баллов)'
    ];

    let capriniParalysisIndex;
    let capriniParalysisScore;
    if (capriniParalysis) {
        capriniParalysisIndex = 0;
        capriniParalysisScore = 5;
    } else {
        capriniParalysisIndex = 1;
        capriniParalysisScore = 0;        
    }

    const capriniParalysisAnswers = [
        'да (5 баллов)',
        'нет (0 баллов)'
    ];

    let capriniTotalScore = 
       capriniAge4160Score +
       capriniFootSwellingScore +
       capriniVaricoseVeinsScore +
       capriniBmiScore +
       capriniSmallSurgeryScore +
       capriniSepsisScore +
       capriniLungDiseaseScore +
       capriniContraceptionHrtScore +
       capriniPregnancyScore +
       capriniObstetricsPathologyScore +
       capriniMyocardialInfarctionScore +
       capriniHeartFailureScore +
       capriniBedRestScore +
       capriniInflammedBowelScore +
       capriniBigSurgeryStoryScore +
       capriniCopdScore +
       capriniAge6174Score +
       capriniArthroSurgeryScore +
       capriniOncologyScore +
       capriniLaparoSurgeryScore +
       capriniBedRestLongScore +
       capriniLimbImmobilizationScore +
       capriniCathCentVeinsScore +
       capriniBigSurgeryScore +
       capriniAge75Score +
       capriniVeOfPatientScore +
       capriniVeInFamilyScore +
       capriniLeidenMutationScore +
       capriniProthrombinMutationScore +
       capriniHighHomocysteineScore +
       capriniHeparinAndThrombocytopeniaScore +
       capriniCardiolipinAntibodyScore +
       capriniLupusAnticoagulantScore +
       capriniStrokeScore +
       capriniPolytraumaScore +
       capriniEndoprothesisScore +
       capriniFemurAndTibiaFractureScore +
       capriniParalysisScore;

    let capriniTotalScoreIndex;
    if (capriniTotalScore < 2) {
        capriniTotalScoreIndex = 0
    } else if (capriniTotalScore > 1 && capriniTotalScore < 3) {
        capriniTotalScoreIndex = 1
    } else if (capriniTotalScore > 2 && capriniTotalScore < 5) {
        capriniTotalScoreIndex = 2
    } else if (capriniTotalScore > 4) {
        capriniTotalScoreIndex = 3
    }

    const capriniTotalScoreLabels = [
        'низкий риск',
        'умеренный риск',
        'высокий риск',
        'очень высокий риск'
    ];

    // Переменные для IMDC
    const imdcKarnovskyCheckbox = document.getElementById('imdc-karnovsky');
    const imdcKarnovsky = imdcKarnovskyCheckbox.checked;

    let imdcKarnovskyScore;
    let imdcKarnovskyIndex;
    if (imdcKarnovsky) {
        imdcKarnovskyScore = 1;
        imdcKarnovskyIndex = 1;
    } else {
        imdcKarnovskyScore = 0;
        imdcKarnovskyIndex = 0;
    }

    const imdcOneYearCheckbox = document.getElementById('imdc-one-year');
    const imdcOneYear = imdcOneYearCheckbox.checked;

    let imdcOneYearScore;
    let imdcOneYearIndex;
    if (imdcOneYear) {
        imdcOneYearScore = 1;
        imdcOneYearIndex = 1;
    } else {
        imdcOneYearScore = 0;
        imdcOneYearIndex = 0;
    }

    const imdcHemoglobinCheckbox = document.getElementById('imdc-hemoglobin');
    const imdcHemoglobin = imdcHemoglobinCheckbox.checked;

    let imdcHemoglobinScore;
    let imdcHemoglobinIndex;
    if (imdcHemoglobin) {
        imdcHemoglobinScore = 1;
        imdcHemoglobinIndex = 1;
    } else {
        imdcHemoglobinScore = 0;
        imdcHemoglobinIndex = 0;
    }

    const imdcCalciumCheckbox = document.getElementById('imdc-calcium');
    const imdcCalcium = imdcCalciumCheckbox.checked;

    let imdcCalciumScore;
    let imdcCalciumIndex;
    if (imdcCalcium) {
        imdcCalciumScore = 1;
        imdcCalciumIndex = 1;
    } else {
        imdcCalciumScore = 0;
        imdcCalciumIndex = 0;
    }

    const imdcNeutrophilsCheckbox = document.getElementById('imdc-neutrophils');
    const imdcNeutrophils = imdcNeutrophilsCheckbox.checked;

    let imdcNeutrophilsScore;
    let imdcNeutrophilsIndex;
    if (imdcNeutrophils) {
        imdcNeutrophilsScore = 1;
        imdcNeutrophilsIndex = 1;
    } else {
        imdcNeutrophilsScore = 0;
        imdcNeutrophilsIndex = 0;
    }

    const imdcPlateletsCheckbox = document.getElementById('imdc-platelets');
    const imdcPlatelets = imdcPlateletsCheckbox.checked;

    let imdcPlateletsScore;
    let imdcPlateletsIndex;
    if (imdcPlatelets) {
        imdcPlateletsScore = 1;
        imdcPlateletsIndex = 1;
    } else {
        imdcPlateletsScore = 0;
        imdcPlateletsIndex = 0;
    }

    const imdcAnswers = [
        'нет (0 баллов)',
        'да (1 балл)'
    ]

    let imdcTotalScore = 
        imdcKarnovskyScore +
        imdcOneYearScore +
        imdcHemoglobinScore +
        imdcCalciumScore +
        imdcNeutrophilsScore +
        imdcPlateletsScore;

    let imdcTotalScoreIndex;
    if (imdcTotalScore === 0) {
        imdcTotalScoreIndex = 0
    } else if (imdcTotalScore > 0 && imdcTotalScore < 3) {
        imdcTotalScoreIndex = 1
    } else if (imdcTotalScore > 2) {
        imdcTotalScoreIndex = 2
    }

    const imdcTotalScoreLabels = [
        'благоприятный прогноз (0 баллов)',
        'промежуточный прогноз (1-2 балла)',
        'неблагоприятный прогноз (3 и более баллов)'
    ];

    // СОСТАВЛЕНИЕ ОТЧЁТА ДЛЯ ПОЛЬЗОВАТЕЛЯ
    const reportLines = [];

    reportLines.push('ИСХОДНЫЕ ДАННЫЕ ПАЦИЕНТА');
    reportLines.push('');

    reportLines.push('Общие сведения');
    reportLines.push('Рост: ' + height + ' см');
    reportLines.push('Вес: ' + weight + ' кг');
    reportLines.push('Возраст: ' + age + ' ' + ageWord);

    if (male) {
        reportLines.push('Пол: мужской');
    } else if (female) {
        reportLines.push('Пол: женский');
    }

    reportLines.push('');
    reportLines.push('Лабораторные показатели');
    reportLines.push('Гемоглобин: ' + hemoglobin + ' г/л');
    reportLines.push('Лейкоциты: ' + leukocytes + ' x 10^9/л');
    reportLines.push('Тромбоциты: ' + platelets + ' x 10^9/л');
    reportLines.push('Креатинин: ' + creatinine + ' мкмоль/л');

    reportLines.push('');
    reportLines.push('Расчётные показатели');
    reportLines.push(
        'Индекс массы тела: ' + bmi + ' кг/м.кв. (' +
        bmiLabel + ')'
    );

    reportLines.push('');

    reportLines.push('ГЕРИАТРИЧЕСКИЕ ШКАЛЫ');
    reportLines.push('');
    
    reportLines.push('[G8 — скрининг гериатрической уязвимости]');
    if (age < 70 && !gokMode) {
        reportLines.push('Не применима (возраст пациента менее 70 лет)');
    } else if (age >= 70 || gokMode) {
        reportLines.push(
            '1. Снизилось ли потребление пищи за последние 3 месяца ' +
            'из-за потери аппетита, проблем с пищеварением ' +
            'или трудностей с жеванием или глотанием: ' +
            g8FoodIntakeAnswers[g8FoodIntakeInput]
        );
        
        reportLines.push(
            '2. Потеря массы за последние 3 месяца: ' +
            g8WeightLossAnswers[g8WeightLossInput]
        );
        
        reportLines.push(
            '3. Мобильность: ' +
            g8MobilityAnswers[g8MobilityInput]
        );

        reportLines.push(
            '4. Нейропсихологические проблемы: ' +
            g8DementiaAnswers[g8DementiaInput]
        );

        reportLines.push(
            '5. Индекс массы тела: ' +
            bmi + ' кг/м.кв. ' + g8BmiLabels[g8BmiScore]
        );

        reportLines.push(
            '6. Приём более трёх лекарственных препаратов в сутки: ' +
            g8MoreThreeDrugsAnswers[g8MoreThreeDrugsInput]
        );

        reportLines.push(
            '7. Самооценка здоровья по сравнению со сверстниками: ' +
            g8SelfEsteemAnswers[g8SelfEsteemInput]
        );

        reportLines.push(
            '8. Возраст: ' +
            age + ' ' + ageWord + ' ' + g8AgeLabels[g8AgeScore]
        );
        
        reportLines.push('');

        reportLines.push(
            'Сумма баллов G8: ' +
            g8TotalScore
        );

        reportLines.push(
            'Прогностическая интерпретация (по Югай С. В. и соавт., 2022): ' +
            g8Toxicity.group + ':'
        );
        reportLines.push(
            ' - риск развития гематологической токсичности 3-4 степени ' +
            'в соответствующей группе исследования - ' +
            g8Toxicity.hematologic
        );
        reportLines.push(
            ' - риск развития негематологической токсичности 3-4 степени ' +
            'в соответствующей группе исследования - ' +
            g8Toxicity.nonHematologic
        );
    }
    reportLines.push('');

    reportLines.push('[CARG — оценка риска токсичности лекарственной противоопухолевой терапии]');
    if (age < 65 && gokMode) {
        reportLines.push('Не применима (возраст пациента менее 65 лет)');
    } else if (age >= 65 || !gokMode) {
        reportLines.push(
            '1. Возраст: ' + 
            age + ' ' + ageWord + ' ' + cargAgeLabels[cargAgeIndex]
        );

        reportLines.push(
            '2. Гастроинтестинальная или генитоуретральная локализация опухоли: ' +
            cargGiGuCancerLabels[cargGiGuCancerIndex]
        );

        reportLines.push(
            '3. Стандартное дозирование химиотерапии (без редукции): ' +
            cargStandartDosageLabels[cargStandartDosageIndex]
        );

        reportLines.push(
            '4. Более одного противоопухолевого препарата: ' +
            cargPolytherapyLabels[cargPolytherapyIndex]
        );

        reportLines.push(
            '5. Гемоглобин: ' + 
            hemoglobin + ' г/л (' + cargHemoglobinLabels[cargHemoglobinIndex] + ')'
        );

        reportLines.push(
            '6. Клиренс креатинина, формула Jelliffe, с использованием идеальной массы тела (' + 
            idealWeight.toFixed(2) + ' кг, формула Devine): ' +
            clearanceCrJelliffeAbs + ' мл/мин ' +
            cargLowClearanceLabels[cargLowClearanceIndex]
        );

        reportLines.push(
            '7. Сниженный слух или глухота: ' +
            cargHearingLossLabels[cargHearingLossIndex]
        );

        reportLines.push(
            '8. Падения за последние 6 месяцев: ' +
            cargFallsLabels[cargFallsIndex]
        );

        reportLines.push(
            '9. Прием лекарств с посторонней помощью: ' +
            cargDrugsIntakeWithHelpLabels[cargDrugsIntakeWithHelpIndex]
        );

        reportLines.push(
            '10. Состояние здоровья ограничивает ходьбу на 1 квартал: ' +
            cargNoOneBlockWalkingLabels[cargNoOneBlockWalkingIndex]
        );

        reportLines.push(
            '11. Снижение социальной активности из-за ' +
            'состояния физического или эмоционального здоровья ' +
            '(ограничения возникают по меньшей мере иногда): ' +
            cargSocialActivityLossLabels[cargSocialActivityLossIndex]
        );

        reportLines.push('');
        reportLines.push(
            'Сумма баллов CARG: ' +
            cargTotalScore
        );
        reportLines.push(
            'Оценка риска токсичности химиотерапии по модели Cancer and Aging Research Group (Hurria et al., 2011): ' +
            cargTotalScoreLabels[cargTotalScoreIndex]
        );
    }
    reportLines.push('');

    reportLines.push('ПАЛЛИАТИВНЫЕ ШКАЛЫ');
    reportLines.push('');

    reportLines.push('[PPS — шкала функционального статуса в паллиативной помощи]');
    if (isPalliativeScenario || gokMode) {
        reportLines.push(
            '1. Способность передвигаться: ' +
            ppsMobilityAnswers[ppsMobilityInput]
        );

        reportLines.push(
            '2. Степень активности и выраженность заболевания: ' +
            ppsIllnessAnswers[ppsIllnessInput]
        );

        reportLines.push(
            '3. Самообслуживание: ' +
            ppsSelfCareAnswers[ppsSelfCareInput]
        );

        reportLines.push(
            '4. Приём пищи и жидкости: ' +
            ppsFoodIntakeAnswers[ppsFoodIntakeInput]
        );

        reportLines.push(
            '5. Уровень сознания: ' +
            ppsConsciousnessAnswers[ppsConsciousnessInput]
        );

        reportLines.push('');
        reportLines.push(
            'Итоговый показатель PPS (ручная верификация): ' +
            ppsTotalInput + '%'
        );
    } else {
        reportLines.push('Не применимо (пациент подлежит радикальному лечению)');
    }
    reportLines.push('');

    reportLines.push('[PPI — паллиативный прогностический индекс]');
    if (isPalliativeScenario || gokMode) {
        reportLines.push(
            '1. Значение PPS: ' +
            ppsTotalInput + '% ' +
            ppiPpsAnswers[ppiPpsIndex]
        );

        reportLines.push(
            '2. Приём пищи: ' +
            ppiFoodIntakeAnswers[ppiFoodIntakeInput]
        );

        reportLines.push(
            '3. Отёки: ' +
            ppiSwellingAnswers[ppiSwellingInput]
        );

        reportLines.push(
            '4. Одышка в покое: ' +
            ppiDyspnoeaAnswers[ppiDyspnoeaInput]
        );

        reportLines.push(
            '5. Делирий по критериям DSM-IV: ' +
            ppiDeliriumAnswers[ppiDeliriumInput]
        );

        reportLines.push('');
        reportLines.push(
            'Сумма баллов PPI: ' +
            ppiTotalScore
        );

        reportLines.push(
            'Прогностическая интерпретация: ' +
            ppiTotalScoreLabels[ppiTotalScoreIndex]
        );
    } else {
        reportLines.push('Не применимо (пациент подлежит радикальному лечению)');
    }
    reportLines.push('');

    reportLines.push('ШКАЛЫ ОЦЕНКИ РИСКОВ ВТЭО');
    reportLines.push('');

    reportLines.push('[Шкала Khorana — оценка риска ВТЭО при лекарственной противоопухолевой терапии]');

    reportLines.push(
        '1. Локализация опухоли (первичный очаг): ' +
        khoranaSiteAnswers[khoranaSiteInput]
    );

    reportLines.push(
        '2. Количество тромбоцитов до химиотерапии: ' +
        platelets + ' * 10^9/л ' +
        khoranaPlateletsAnswers[khoranaPlateletsScore]
    );

    reportLines.push(
        '3. Концентрация гемоглобина <100 г/л или применение эритропоэтина: ' +
        hemoglobin + ' г/л ' + khoranaHemoglobinAnswers[khoranaHemoglobinScore] + ', ' +
        khoranaErythropoetinAnswers[khoranaErythropoetinScore] + '; ' +
        khoranaEryHemAnswers[khoranaEryHemScore]
    );

    reportLines.push(
        '4. Количество лейкоцитов до химиотерапии: ' +
        leukocytes + ' * 10^9/л ' +
        khoranaLeukocytesAnswers[khoranaLeukocytesScore]
    );

    reportLines.push(
        '5. Индекс массы тела: ' +
        bmi + ' кг/м.кв. ' + khoranaBmiAnswers[khoranaBmiScore]
    );
    reportLines.push('');

    reportLines.push(
        'Сумма баллов Khorana: ' +
        khoranaTotalScore
    );

    reportLines.push(
        'Категория риска ВТЭО: ' +
        khoranaTotalScoreLabels[khoranaTotalScoreIndex]
    );

    reportLines.push('');

    // Отчёт по Caprini
    reportLines.push('[Шкала Caprini — оценка риска ВТЭО]');
    
    // 1 балл
    reportLines.push(
        '1. Возраст 41 - 60 лет: ' +
        capriniAge4160Answers[capriniAge4160Index]
    );

    reportLines.push(
        '2. Отёк нижних конечностей: ' +
        capriniFootSwellingAnswers[capriniFootSwellingIndex]
    );

    reportLines.push(
        '3. Варикозные вены: ' +
        capriniVaricoseVeinsAnswers[capriniVaricoseVeinsIndex]
    );

    reportLines.push(
        '4. Индекс массы тела более 25 кг/м.кв.: ' +
        capriniBmiAnswers[capriniBmiIndex]
    );

    reportLines.push(
        '5. Малое хирургическое вмешательство: ' +
        capriniSmallSurgeryAnswers[capriniSmallSurgeryIndex]
    );

    reportLines.push(
        '6. Сепсис (давностью до 1 месяца): ' +
        capriniSepsisAnswers[capriniSepsisIndex]
    );

    reportLines.push(
        '7. Серьёзное заболевание лёгких (в том числе пневмония давностью до 1 месяца): ' +
        capriniLungDiseaseAnswers[capriniLungDiseaseIndex]
    );

    reportLines.push(
        '8. Приём оральных контрацептивов, заместительная гормонотерапия: ' +
        capriniContraceptionHrtAnswers[capriniContraceptionHrtIndex]
    );

    reportLines.push(
        '9. Беременность и послеродовой период (до 1 месяца): ' +
        capriniPregnancyAnswers[capriniPregnancyIndex]
    );

    reportLines.push(
        '10. В анамнезе: необъяснимые мертворождения, выкидыши (3 и более), преждевременные роды с токсикозом или задержка внутриутробного развития: ' +
        capriniObstetricsPathologyAnswers[capriniObstetricsPathologyIndex]
    );

    reportLines.push(
        '11. Острый инфаркт миокарда: ' +
        capriniMyocardialInfarctionAnswers[capriniMyocardialInfarctionIndex]
    );

    reportLines.push(
        '12. Хроническая сердечная недостаточность (давностью до 1 месяца): ' +
        capriniHeartFailureAnswers[capriniHeartFailureIndex]
    );

    reportLines.push(
        '13. Постельный режим у нехирургического пациента: ' +
        capriniBedRestAnswers[capriniBedRestIndex]
    );

    reportLines.push(
        '14. Воспалительные заблевания толстой кишки в анамнезе: ' +
        capriniInflammedBowelAnswers[capriniInflammedBowelIndex]
    );
    
    reportLines.push(
        '15. Большое хирургическое вмешательство давностью до 1 месяца в анамнезе: ' +
        capriniBigSurgeryStoryAnswers[capriniBigSurgeryStoryIndex]
    );

    reportLines.push(
        '16. Хроническая обструктивная болезнь лёгких: ' +
        capriniCopdAnswers[capriniCopdIndex]
    );

    // 2 балла
    reportLines.push(
        '17. Возраст 61 - 74 года: ' +
        capriniAge6174Answers[capriniAge6174Index]
    );

    reportLines.push(
        '18. Артроскопическая хирургия: ' +
        capriniArthroSurgeryAnswers[capriniArthroSurgeryIndex]
    );

    reportLines.push(
        '19. Злокачественное новообразование: ' +
        capriniOncologyAnswers[capriniOncologyIndex]
    );

    reportLines.push(
        '20. Лапароскопическое вмешательство (длительностью более 45 минут): ' +
        capriniLaparoSurgeryAnswers[capriniLaparoSurgeryIndex]
    );

    reportLines.push(
        '21. Постельный режим более 72 часов: ' +
        capriniBedRestLongAnswers[capriniBedRestLongIndex]
    );

    reportLines.push(
        '22. Иммобилизация конечности (давностью до 1 месяца): ' +
        capriniLimbImmobilizationAnswers[capriniLimbImmobilizationIndex]
    );

    reportLines.push(
        '23. Катетеризация центральных вен: ' +
        capriniCathCentVeinsAnswers[capriniCathCentVeinsIndex]
    );

    reportLines.push(
        '24. Большое хирургическое вмешательство (длительностью более 45 минут): ' +
        capriniBigSurgeryAnswers[capriniBigSurgeryIndex]
    );

    // 3 балла
    reportLines.push(
        '25. Возраст 75 лет и более: ' +
        capriniAge75Answers[capriniAge75Index]
    );

    reportLines.push(
        '26. Личный анамнез ВТЭО: ' +
        capriniVeOfPatientAnswers[capriniVeOfPatientIndex]
    );

    reportLines.push(
        '27. Семейный анамнез ВТЭО: ' +
        capriniVeInFamilyAnswers[capriniVeInFamilyIndex]
    );

    reportLines.push(
        '28. Мутация типа Лейден: ' +
        capriniLeidenMutationAnswers[capriniLeidenMutationIndex]
    );

    reportLines.push(
        '29. Мутация протромбина 20210А: ' +
        capriniProthrombinMutationAnswers[capriniProthrombinMutationIndex]
    );

    reportLines.push(
        '30. Гипергомоцистеинемия: ' +
        capriniHighHomocysteineAnswers[capriniHighHomocysteineIndex]
    );

    reportLines.push(
        '31. Гепарининдуцированная тромбоцитопения: ' +
        capriniHeparinAndThrombocytopeniaAnswers[capriniHeparinAndThrombocytopeniaIndex]
    );

    reportLines.push(
        '32. Повышенный уровень антител к кардиолипину: ' +
        capriniCardiolipinAntibodyAnswers[capriniCardiolipinAntibodyIndex]
    );

    reportLines.push(
        '33. Волчаночный антикоагулянт: ' +
        capriniLupusAnticoagulantAnswers[capriniLupusAnticoagulantIndex]
    );

    reportLines.push(
        '34. Инсульт (давностью до 1 месяца): ' +
        capriniStrokeAnswers[capriniStrokeIndex]
    );

    reportLines.push(
        '35. Множественная травма (давностью до 1 месяца): ' +
        capriniPolytraumaAnswers[capriniPolytraumaIndex]
    );

    reportLines.push(
        '36. Эндопротезирование крупных суставов: ' +
        capriniEndoprothesisAnswers[capriniEndoprothesisIndex]
    );

    reportLines.push(
        '37. Перелом костей бедра и голени (давностью до 1 месяца): ' +
        capriniFemurAndTibiaFractureAnswers[capriniFemurAndTibiaFractureIndex]
    );

    reportLines.push(
        '38. Травма спинного мозга/паралич (давностью до 1 месяца): ' +
        capriniParalysisAnswers[capriniParalysisIndex]
    );

    reportLines.push('');

    reportLines.push(
        'Сумма баллов Caprini: ' +
        capriniTotalScore
    );
    
    reportLines.push(
        'Категория риска ВТЭО: ' +
        capriniTotalScoreLabels[capriniTotalScoreIndex]
    );
    reportLines.push('');

    reportLines.push('СПЕЦИАЛЬНЫЕ ШКАЛЫ');
    reportLines.push('');

    reportLines.push('[Шкала IMDC — оценка прогноза при метастатическом почечно-клеточном раке]');
    
    if (isImdc) {
        reportLines.push(
            '1. Общее состояние по шкале Карновского 70% и ниже: ' +
            imdcAnswers[imdcKarnovskyIndex]
        );

        reportLines.push(
            '2. Время от постановки диагноза до начала лекарственного лечения менее 1 года: ' +
            imdcAnswers[imdcOneYearIndex]
        );

        reportLines.push(
            '3. Гемоглобин ниже нижней границы нормы: ' +
            imdcAnswers[imdcHemoglobinIndex]
        );

        reportLines.push(
            '4. Скорректированный кальций выше верхней границы нормы: ' +
            imdcAnswers[imdcCalciumIndex]
        );

        reportLines.push(
            '5. Абсолютное число нейтрофилов выше верхней границы нормы: ' +
            imdcAnswers[imdcNeutrophilsIndex]
        );

        reportLines.push(
            '6. Число тромбоцитов выше верхней границы нормы: ' +
            imdcAnswers[imdcPlateletsIndex]
        );

        reportLines.push('')

        reportLines.push(
            'Сумма баллов IMDC: ' +
            imdcTotalScore
        )

        reportLines.push(
            'Группа прогноза (D. Heng, 2010 г.): ' +
            imdcTotalScoreLabels[imdcTotalScoreIndex]
        )
    } else {
        reportLines.push('Не применимо (не почечно-клеточный рак)')
    }

    output.textContent = reportLines.join('\n');
    copyButton.disabled = false;
}

// Функция копирования отчёта
const originalCopyText = copyButton?.textContent;
let resetTimer;

async function copyOutput() {
    let title = 'ПРОТОКОЛ РАСЧЁТА КЛИНИЧЕСКИХ ШКАЛ';
    let report = output.textContent.trim();

    await navigator.clipboard.writeText(`${title}\n\n${report}`);

    copyButton.textContent = 'Скопировано!';

    clearTimeout(resetTimer);

    resetTimer = setTimeout(() => {
        copyButton.textContent = originalCopyText;
    }, 2000);
}

// Подключение обработчиков.
if (startButton) {
    startButton.addEventListener('click', showCalculationTest);
}

if (copyButton) {
    copyButton.addEventListener('click', copyOutput);
}