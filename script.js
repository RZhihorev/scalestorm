function showCalculationTest() {
    const output = document.getElementById('results-output');

    const palliativeScenarioCheckbox = document.getElementById('palliative-scenario');
    const isPalliativeScenario = palliativeScenarioCheckbox.checked;
    
    // Список базовых параметров пациента
    const ageInput = document.getElementById('age');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const hemoglobinInput = document.getElementById('hemoglobin');
    const erythropoetinCheckbox = document.getElementById('cbx-erythropoietin');
    const leukocytesInput = document.getElementById('leukocytes');
    const plateletsInput = document.getElementById('platelets');
    const creatinineInput = document.getElementById('creatinine');

    const male = document.getElementById('male').checked
    const female = document.getElementById('female').checked

    const age = ageInput.valueAsNumber;
    const height = heightInput.valueAsNumber;
    const weight = weightInput.valueAsNumber;
    const hemoglobin = hemoglobinInput.valueAsNumber;
    const erythropoietin = erythropoetinCheckbox.checked;
    const leukocytes = leukocytesInput.valueAsNumber;
    const platelets = plateletsInput.valueAsNumber;
    const creatinine = creatinineInput.valueAsNumber;

    const bmi = Number((weight / (height / 100) ** 2).toFixed(2));

    // Список переменных для Caprini
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

    // СОСТАВЛЕНИЕ ОТЧЁТА ДЛЯ ПОЛЬЗОВАТЕЛЯ
    const reportLines = [];

    reportLines.push('ГЕРИАТРИЧЕСКИЕ ШКАЛЫ ');
    reportLines.push('');
    
    reportLines.push('[G8 — скрининг гериатрической уязвимости]');
    if (age < 70) {
        reportLines.push('Не применима (возраст пациента менее 70 лет)');
    } else {
        reportLines.push(
            '1. Снизилось ли потребление пищи за последние 3 месяца ' +
            'из-за потери аппетита, проблем с пищеварением ' +
            'или трудностей с жеванием или глотанием: ' +
            g8FoodIntakeAnswers[g8FoodIntakeInput] + ';'
        );
        
        reportLines.push(
            '2. Потеря массы за последние 3 месяца: ' +
            g8WeightLossAnswers[g8WeightLossInput] + ';'
        );
        
        reportLines.push(
            '3. Мобильность: ' +
            g8MobilityAnswers[g8MobilityInput] + ';'
        );

        reportLines.push(
            '4. Нейропсихологические проблемы: ' +
            g8DementiaAnswers[g8DementiaInput] + ';'
        );

        reportLines.push(
            '5. Индекс массы тела: ' +
            bmi + ' кг/м.кв. ' + g8BmiLabels[g8BmiScore] + ';'
        );

        reportLines.push(
            '6. Приём более трёх лекарственных препаратов в сутки: ' +
            g8MoreThreeDrugsAnswers[g8MoreThreeDrugsInput] + ';'
        );

        reportLines.push(
            '7. Самооценка здоровья по сравнению со сверстниками: ' +
            g8SelfEsteemAnswers[g8SelfEsteemInput] + ';'
        );

        reportLines.push(
            '8. Возраст, лет: ' +
            age + ' ' + g8AgeLabels[g8AgeScore] + '.'
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
            g8Toxicity.hematologic + ';'
        );
        reportLines.push(
            ' - риск развития негематологической токсичности 3-4 степени ' +
            'в соответствующей группе исследования - ' +
            g8Toxicity.nonHematologic + '.'
        );
    }
    reportLines.push('');

    reportLines.push('[CARG — оценка риска токсичности лекарственной противоопухолевой терапии]');
    if (age < 65) {
        reportLines.push('Не применима (возраст пациента менее 65 лет)');
    } else {
        reportLines.push(
            '1. Возраст, лет: ' + 
            age + ' ' + cargAgeLabels[cargAgeIndex] + ';'
        );

        reportLines.push(
            '2. Гастроинтестинальная или генитоуретральная локализация опухоли: ' +
            cargGiGuCancerLabels[cargGiGuCancerIndex] + ';'
        );

        reportLines.push(
            '3. Стандартное дозирование химиотерапии (без редукции): ' +
            cargStandartDosageLabels[cargStandartDosageIndex] + ';'
        );

        reportLines.push(
            '4. Более одного противоопухолевого препарата: ' +
            cargPolytherapyLabels[cargPolytherapyIndex] + ';'
        );

        reportLines.push(
            '5. Гемоглобин, г/л: ' + 
            hemoglobin + ' (' + cargHemoglobinLabels[cargHemoglobinIndex] + ');'
        );

        reportLines.push(
            '6. Клиренс креатинина, формула Jelliffe, с использованием идеальной массы тела (' + 
            idealWeight.toFixed(2) + ' кг, формула Devine): ' +
            clearanceCrJelliffeAbs + ' мл/мин ' +
            cargLowClearanceLabels[cargLowClearanceIndex] + ';'
        );

        reportLines.push(
            '7. Сниженный слух или глухота: ' +
            cargHearingLossLabels[cargHearingLossIndex] + ';'
        );

        reportLines.push(
            '8. Падения за последние 6 месяцев: ' +
            cargFallsLabels[cargFallsIndex] + ';'
        );

        reportLines.push(
            '9. Прием лекарств с посторонней помощью: ' +
            cargDrugsIntakeWithHelpLabels[cargDrugsIntakeWithHelpIndex] + ';'
        );

        reportLines.push(
            '10. Состояние здоровья ограничивает ходьбу на 1 квартал: ' +
            cargNoOneBlockWalkingLabels[cargNoOneBlockWalkingIndex] + ';'
        );

        reportLines.push(
            '11. Снижение социальной активности из-за ' +
            'состояния физического или эмоционального здоровья ' +
            '(ограничения возникают по меньшей мере иногда): ' +
            cargSocialActivityLossLabels[cargSocialActivityLossIndex] + '.'
        );

        reportLines.push('');
        reportLines.push(
            'Сумма баллов CARG: ' +
            cargTotalScore
        );
        reportLines.push(
            'Оценка риска токсичности химиотерапии по модели Cancer and Aging Research Group (Hurria et al., 2011): ' +
            cargTotalScoreLabels[cargTotalScoreIndex] + '.'
        );
    }
    reportLines.push('');

    reportLines.push('ПАЛЛИАТИВНЫЕ ШКАЛЫ ');
    reportLines.push('');

    reportLines.push('[PPS — шкала функционального статуса в паллиативной помощи]');
    if (isPalliativeScenario) {
        reportLines.push(
            '1. Способность передвигаться: ' +
            ppsMobilityAnswers[ppsMobilityInput] + ';'
        );

        reportLines.push(
            '2. Степень активности и выраженность заболевания: ' +
            ppsIllnessAnswers[ppsIllnessInput] + ';'
        );

        reportLines.push(
            '3. Самообслуживание: ' +
            ppsSelfCareAnswers[ppsSelfCareInput] + ';'
        );

        reportLines.push(
            '4. Приём пищи и жидкости: ' +
            ppsFoodIntakeAnswers[ppsFoodIntakeInput] + ';'
        );

        reportLines.push(
            '5. Уровень сознания: ' +
            ppsConsciousnessAnswers[ppsConsciousnessInput] + '.'
        );

        reportLines.push('');
        reportLines.push(
            'Итоговый показатель PPS (ручная верификация): ' +
            ppsTotalInput + '%.'
        );
    } else {
        reportLines.push('Не применимо (пациент подлежит радикальному лечению).');
    }
    reportLines.push('');

    reportLines.push('[PPI — паллиативный прогностический индекс]');
    if (isPalliativeScenario) {
        reportLines.push(
            '1. Значение PPS: ' +
            ppsTotalInput + '% ' +
            ppiPpsAnswers[ppiPpsIndex] + ';'
        );

        reportLines.push(
            '2. Приём пищи: ' +
            ppiFoodIntakeAnswers[ppiFoodIntakeInput] + ';'
        );

        reportLines.push(
            '3. Отёки: ' +
            ppiSwellingAnswers[ppiSwellingInput] + ';'
        );

        reportLines.push(
            '4. Одышка в покое: ' +
            ppiDyspnoeaAnswers[ppiDyspnoeaInput] + ';'
        );

        reportLines.push(
            '5. Делирий по критериям DSM-IV: ' +
            ppiDeliriumAnswers[ppiDeliriumInput] + '.'
        );

        reportLines.push('');
        reportLines.push(
            'Сумма баллов PPI: ' +
            ppiTotalScore
        );

        reportLines.push(
            'Прогностическая интерпретация: ' +
            ppiTotalScoreLabels[ppiTotalScoreIndex] + '.'
        );
    } else {
        reportLines.push('Не применимо (пациент подлежит радикальному лечению).');
    }
    reportLines.push('');

    reportLines.push('ШКАЛЫ ОЦЕНКИ РИСКОВ ВТЭО ');
    reportLines.push('');

    reportLines.push('[Шкала Khorana — оценка риска ВТЭО при лекарственной противоопухолевой терапии]');

    reportLines.push(
        '1. Локализация опухоли (первичный очаг): ' +
        khoranaSiteAnswers[khoranaSiteInput] + ';'
    );

    reportLines.push(
        '2. Количество тромбоцитов до химиотерапии: ' +
        platelets + ' * 10^9/л ' +
        khoranaPlateletsAnswers[khoranaPlateletsScore] + ';'
    );

    reportLines.push(
        '3. Концентрация гемоглобина <100 г/л или применение эритропоэтина: ' +
        hemoglobin + ' г/л ' + khoranaHemoglobinAnswers[khoranaHemoglobinScore] + ', ' +
        khoranaErythropoetinAnswers[khoranaErythropoetinScore] + '; ' +
        khoranaEryHemAnswers[khoranaEryHemScore] + ';'
    );

    reportLines.push(
        '4. Количество лейкоцитов до химиотерапии: ' +
        leukocytes + ' * 10^9/л ' +
        khoranaLeukocytesAnswers[khoranaLeukocytesScore] + ';'
    );

    reportLines.push(
        '5. Индекс массы тела: ' +
        bmi + ' кг/м.кв. ' + khoranaBmiAnswers[khoranaBmiScore] + '.'
    );
    reportLines.push('');

    reportLines.push(
        'Сумма баллов Khorana: ' +
        khoranaTotalScore
    );

    reportLines.push(
        'Категория риска ВТЭО: ' +
        khoranaTotalScoreLabels[khoranaTotalScoreIndex] + '.'
    );

    reportLines.push('');

    reportLines.push('[Шкала Caprini — оценка риска ВТЭО]');
    reportLines.push('1. Возраст 41 - 60 лет:');
    reportLines.push('2. Отёк нижних конечностей:');
    reportLines.push('3. Варикозные вены:');
    reportLines.push('4. Индекс массы летла более 25 кг/м.кв.:');
    reportLines.push('5. Малое хирургическое вмешательство:');
    reportLines.push('6. Сепсис (давностью до 1 месяца):');
    reportLines.push('7. Серьёзное заболевание лёгких (в том числе пневмония давностью до 1 месяца):');
    reportLines.push('8. Приём оральных контрацептивов, заместительная гормонотерапия:');
    reportLines.push('9. Беременность и послеродовой период (до 1 месяца):');
    reportLines.push('10. В анамнезе: необъяснимые мертворождения, выкидыши (3 и более), преждевременные роды с токсикозом или задержка внутриутробного развития:');
    reportLines.push('11. Острый инфаркт миокарда:');
    reportLines.push('12. Хроническая сердечная недостаточность (давностью до 1 месяца):');
    reportLines.push('13. Постельный режим у нехирургического пациента:');
    reportLines.push('14. Воспалительные заблевания толстой кишки в анамнезе:');
    reportLines.push('15. Большое хирургическое вмешательство давностью до 1 месяца в анамнезе:');
    reportLines.push('16. Хроническая обструктивная болезнь лёгких:');

    reportLines.push('17. Возраст 61 - 74 года:');
    reportLines.push('18. Артроскопическая хирургия:');
    reportLines.push('19. Злокачественное новообразование:');
    reportLines.push('20. Лапароскопическое вмешательство (длительностью более 45 минут):');
    reportLines.push('21. Постельный режим более 72 часов:');
    reportLines.push('22. Иммобилизация конечности (давностью до 1 месяца):');
    reportLines.push('23. Катетеризация центральных вен:');
    reportLines.push('24. Большое хирургическое вмешательство (длительностью более 45 минут):');

    reportLines.push('25. Возраст старше 75 лет:');
    reportLines.push('26. Личный анамнез ВТЭО:');
    reportLines.push('27. Семейный анамнез ВТЭО:');
    reportLines.push('28. Мутация типа Лейден:');
    reportLines.push('29. Мутация протромбина 20210А:');
    reportLines.push('30. Гипергомоцистеинемия:');
    reportLines.push('31. Гепарининдуцированная тромбоцитопения:');
    reportLines.push('32. Повышенный уровень антител к кардиолипину:');
    reportLines.push('33. Волчаночный антикоагулянт:');

    reportLines.push('34. Инсульт (давностью до 1 месяца):');
    reportLines.push('35. Множественная травма (давностью до 1 месяца):');
    reportLines.push('36. Эндопротезирование крупных суставов:');
    reportLines.push('37. Перелом костей бедра и голени (давностью до 1 месяца):');
    reportLines.push('38. Травма спинного мозга/паралич (давностью до 1 месяца):');
    reportLines.push('');

    reportLines.push('Итоговый показатель Caprini: ____ баллов');
    reportLines.push('Категория риска ВТЭО: ____________________');
    reportLines.push('');

    output.textContent = reportLines.join('\n');
}

const startButton = document.getElementById('main-button');

if (startButton) {
    startButton.addEventListener('click', showCalculationTest);
}