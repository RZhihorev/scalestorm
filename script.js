function showCalculationTest() {
    const output = document.getElementById('results-output');
    const palliativeScenarioCheckbox = document.getElementById('palliative-scenario');
    
    const ageInput = document.getElementById('age');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const hemoglobinInput = document.getElementById('hemoglobin');
    const leukocytesInput = document.getElementById('leukocytes');
    const plateletsInput = document.getElementById('platelets');

    const isPalliativeScenario = palliativeScenarioCheckbox.checked;

    const age = ageInput.valueAsNumber;
    const height = heightInput.valueAsNumber;
    const weight = weightInput.valueAsNumber;
    const hemoglobin = hemoglobinInput.valueAsNumber;
    const leukocytes = leukocytesInput.valueAsNumber;
    const platelets = plateletsInput.valueAsNumber;

    const bmi = Number((weight / (height / 100) ** 2).toFixed(2));

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
            '5. Индекс массы тела, кг/м.кв.: ' +
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
            g8Toxicity.group + ';'
        );
        reportLines.push(
            'Риск развития гематологической токсичности 3-4 степени ' +
            'в соответствующей группе исследования составляет ' +
            g8Toxicity.hematologic + ';'
        );
        reportLines.push(
            'Риск развития негематологической токсичности 3-4 степени ' +
            'в соответствующей группе исследования составляет ' +
            g8Toxicity.nonHematologic + '.'
        );
    }
    reportLines.push('');

    reportLines.push('[CARG — оценка риска токсичности лекарственной противоопухолевой терапии]');
    if (age < 65) {
        reportLines.push('Не применима (возраст пациента менее 65 лет)');
    } else {
        reportLines.push('1. Возраст, лет:');
        reportLines.push('2. Гастроинтестинальная или генитоуретральная локализация опухоли:');
        reportLines.push('3. Стандартное дозирование химиотерапии (без редукции):');
        reportLines.push('4. Более одного противоопухолевого препарата:');
        reportLines.push('5. Гемоглобин:');
        reportLines.push('6. Снижение слуха:');
        reportLines.push('7. Падения за последние 6 месяцев:');
        reportLines.push('8. Способность самостоятельно принимать лекарства:');
        reportLines.push('9. Способность пройти один квартал:');
        reportLines.push('10. Снижение социальной активности из-за состояния физического или эмоционального здоровья (ограничения возникают по меньшей мере иногда):');
        reportLines.push('');
        reportLines.push('Итоговый показатель CARG:');
    }
    reportLines.push('');

    reportLines.push('ПАЛЛИАТИВНЫЕ ШКАЛЫ ');
    reportLines.push('');

    reportLines.push('[PPS — шкала функционального статуса в паллиативной помощи]');
    if (isPalliativeScenario) {
        reportLines.push('1. Способность передвигаться:');
        reportLines.push('2. Степень активности и выраженность заболевания:');
        reportLines.push('3. Способность к самообслуживанию:');
        reportLines.push('4. Приём пищи и жидкости:');
        reportLines.push('5. Уровень сознания:');
        reportLines.push('');
        reportLines.push('Итоговый показатель PPS: ____ %');
    } else {
        reportLines.push('Не применимо (пациент подлежит радикальному лечению).');
    }
    reportLines.push('');

    reportLines.push('[PPI — паллиативный прогностический индекс]');
    if (isPalliativeScenario) {
        reportLines.push('1. Значение PPS:');
        reportLines.push('2. Приём пищи:');
        reportLines.push('3. Отёки:');
        reportLines.push('4. Одышка в покое:');
        reportLines.push('5. Делирий по критериям DSM-IV:');
        reportLines.push('');
        reportLines.push('Итоговый показатель PPI: ____ баллов');
        reportLines.push('Прогностическая интерпретация:');
    } else {
        reportLines.push('Не применимо (пациент подлежит радикальному лечению).');
    }
    reportLines.push('');

    reportLines.push('ШКАЛЫ ОЦЕНКИ РИСКОВ ВТЭО ');
    reportLines.push('');

    reportLines.push('[Шкала Khorana — оценка риска ВТЭО при лекарственной противоопухолевой терапии]');
    reportLines.push('1. Локализация опухоли (первичный очаг):');
    reportLines.push('2. Количество тромбоцитов до химиотерапии:');
    reportLines.push('3. Концентрация гемоглобина <100 г/л или применение эритропоэтина:');
    reportLines.push('4. Количество лейкоцитов до химиотерапии:');
    reportLines.push('5. Индекс массы тела:');
    reportLines.push('');

    reportLines.push('Итоговый показатель Khorana: ____ баллов');
    reportLines.push('Категория риска ВТЭО: ____________________');
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