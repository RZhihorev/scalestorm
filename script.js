function showCalculationTest() {
    const output = document.getElementById('results-output');
    const palliativeScenarioCheckbox = document.getElementById('palliative-scenario');
    const ageInput = document.getElementById('age');

    const isPalliativeScenario = palliativeScenarioCheckbox.checked;
    const age = ageInput.valueAsNumber;
    const reportLines = [];

    reportLines.push('ГЕРИАТРИЧЕСКИЕ ШКАЛЫ ');
    reportLines.push('');
    
    reportLines.push('[G8 — скрининг гериатрической уязвимости]');
    if (age < 70) {
        reportLines.push('Не применима (возраст пациента менее 70 лет)');
    } else {
        reportLines.push('1. Снизилось ли потребление пищи за последние 3 месяца из-за потери аппетита, проблем с пищеварением или трудностей с жеванием или глотанием:');
        reportLines.push('2. Потеря массы за последние 3 месяца:');
        reportLines.push('3. Мобильность:');
        reportLines.push('4. Нейропсихологические проблемы:');
        reportLines.push('5. Индекс массы тела, кг/м.кв.:');
        reportLines.push('6. Приём более трёх лекарственных препаратов в сутки:');
        reportLines.push('7. Самооценка здоровья по сравнению со сверстниками:');
        reportLines.push('8. Возраст, лет:');
        reportLines.push('');
        reportLines.push('Итоговый показатель G8:');
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