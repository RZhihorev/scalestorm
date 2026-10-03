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

    output.textContent = reportLines.join('\n');
}

const startButton = document.getElementById('main-button');

if (startButton) {
    startButton.addEventListener('click', showCalculationTest);
}