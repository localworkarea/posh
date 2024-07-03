onUpdate: self => {
    const progress = self.progress * 100;

    if (progress <= 15) {
      // Анимация для первой линии (0-15%)
      const lineProgress = progress / 15;
      gsap.to(linePc01, { strokeDashoffset: (1 - lineProgress) * linePc01.getTotalLength(), overwrite: true });
      gsap.to(linePc02, { strokeDashoffset: linePc02.getTotalLength(), overwrite: true });
      gsap.to(linePc03, { strokeDashoffset: linePc03.getTotalLength(), overwrite: true });
    } else if (progress <= 33) {
      // Анимация для первой линии (15-33%)
      const lineProgress = (progress - 15) / 18;
      gsap.to(linePc01, { strokeDashoffset: -lineProgress * linePc01.getTotalLength(), overwrite: true });
      gsap.to(linePc02, { strokeDashoffset: linePc02.getTotalLength(), overwrite: true });
      gsap.to(linePc03, { strokeDashoffset: linePc03.getTotalLength(), overwrite: true });
    } else if (progress <= 43) {
      // Анимация для второй линии (33-43%)
      const lineProgress = (progress - 33) / 10;
      gsap.to(linePc01, { strokeDashoffset: -linePc01.getTotalLength(), overwrite: true });
      gsap.to(linePc02, { strokeDashoffset: (1 - lineProgress) * linePc02.getTotalLength(), overwrite: true });
      gsap.to(linePc03, { strokeDashoffset: linePc03.getTotalLength(), overwrite: true });
    } else if (progress <= 66) {
      // Анимация для второй линии (43-66%)
      const lineProgress = (progress - 43) / 23;
      gsap.to(linePc01, { strokeDashoffset: -linePc01.getTotalLength(), overwrite: true });
      gsap.to(linePc02, { strokeDashoffset: -lineProgress * linePc02.getTotalLength(), overwrite: true });
      gsap.to(linePc03, { strokeDashoffset: linePc03.getTotalLength(), overwrite: true });
    } else if (progress <= 81) {
      // Анимация для третьей линии (66-76%)
      const lineProgress = (progress - 66) / 10;
      gsap.to(linePc01, { strokeDashoffset: -linePc01.getTotalLength(), overwrite: true });
      gsap.to(linePc02, { strokeDashoffset: -linePc02.getTotalLength(), overwrite: true });
      gsap.to(linePc03, { strokeDashoffset: (1 - lineProgress) * linePc03.getTotalLength(), overwrite: true });
    } else {
      // Анимация для третьей линии (76-100%)
      const lineProgress = (progress - 76) / 24;
      gsap.to(linePc01, { strokeDashoffset: -linePc01.getTotalLength(), overwrite: true });
      gsap.to(linePc02, { strokeDashoffset: -linePc02.getTotalLength(), overwrite: true });
      gsap.to(linePc03, { strokeDashoffset: -lineProgress * linePc03.getTotalLength(), overwrite: true });
    }
  }
});
// линия 1
// 0 - 10
// 10 - 25
// линия 2
// 25 - 30
// 30 - 40
// линия 3
// 40 - 42
// 42 - 50
// линия 4
// 50 - 60
// 60 - 75
// линия 5
// 75 - 80
// 80 - 100

// Линия 1 - 0-25% (0 - 10% - идем в 0 дальше в минус по скроллу)
// Линия 2 - 25% - 40% (25 - 30% - идем в 0 дальше в минус по скроллу)
// Линия 3 - 40% - 50% (40 - 42% - идем в 0 дальше в минус по скроллу)
// Линия 4 - 50% - 75% (50 - 60% - идем в 0 дальше в минус по скроллу)
// Линия 5-  75% -100% (75 - 80% - идем в 0 дальше в минус по скроллу)

onUpdate: self => {
    const progress = self.progress * 100;

    if (progress <= 10) {
      // Анимация для первой линии (0-10%)
      const lineProgress = progress / 10;
      gsap.to(lineMob01, { strokeDashoffset: (1 - lineProgress) * lineMob01.getTotalLength(), overwrite: true });
      gsap.to(lineMob02, { strokeDashoffset: lineMob02.getTotalLength(), overwrite: true });
      gsap.to(lineMob03, { strokeDashoffset: lineMob03.getTotalLength(), overwrite: true });
      gsap.to(lineMob04, { strokeDashoffset: lineMob04.getTotalLength(), overwrite: true });
      gsap.to(lineMob05, { strokeDashoffset: lineMob05.getTotalLength(), overwrite: true });
    } else if (progress <= 25) {
      // Анимация для первой линии (10-25%)
      const lineProgress = (progress - 10) / 15;
      gsap.to(lineMob01, { strokeDashoffset: -lineProgress * lineMob01.getTotalLength(), overwrite: true });
      gsap.to(lineMob02, { strokeDashoffset: lineMob02.getTotalLength(), overwrite: true });
      gsap.to(lineMob03, { strokeDashoffset: lineMob03.getTotalLength(), overwrite: true });
      gsap.to(lineMob04, { strokeDashoffset: lineMob04.getTotalLength(), overwrite: true });
      gsap.to(lineMob05, { strokeDashoffset: lineMob05.getTotalLength(), overwrite: true });
    } else if (progress <= 30) {
      // Анимация для второй линии (25-30%)
      const lineProgress = (progress - 25) / 5;
      gsap.to(lineMob01, { strokeDashoffset: -lineMob01.getTotalLength(), overwrite: true });
      gsap.to(lineMob02, { strokeDashoffset: (1 - lineProgress) * lineMob02.getTotalLength(), overwrite: true });
      gsap.to(lineMob03, { strokeDashoffset: lineMob03.getTotalLength(), overwrite: true });
      gsap.to(lineMob04, { strokeDashoffset: lineMob04.getTotalLength(), overwrite: true });
      gsap.to(lineMob05, { strokeDashoffset: lineMob05.getTotalLength(), overwrite: true });
    } else if (progress <= 40) {
      // Анимация для второй линии (30-40%)
      const lineProgress = (progress - 30) / 10;
      gsap.to(lineMob01, { strokeDashoffset: -lineMob01.getTotalLength(), overwrite: true });
      gsap.to(lineMob02, { strokeDashoffset: -lineProgress * lineMob02.getTotalLength(), overwrite: true });
      gsap.to(lineMob03, { strokeDashoffset: lineMob03.getTotalLength(), overwrite: true });
      gsap.to(lineMob04, { strokeDashoffset: lineMob04.getTotalLength(), overwrite: true });
      gsap.to(lineMob05, { strokeDashoffset: lineMob05.getTotalLength(), overwrite: true });
    } else if (progress <= 42) {
      // Анимация для третьей линии (40-42%)
      const lineProgress = (progress - 40) / 2;
      gsap.to(lineMob01, { strokeDashoffset: -lineMob01.getTotalLength(), overwrite: true });
      gsap.to(lineMob02, { strokeDashoffset: -lineMob02.getTotalLength(), overwrite: true });
      gsap.to(lineMob03, { strokeDashoffset: (1 - lineProgress) * lineMob03.getTotalLength(), overwrite: true });
      gsap.to(lineMob04, { strokeDashoffset: lineMob04.getTotalLength(), overwrite: true });
      gsap.to(lineMob05, { strokeDashoffset: lineMob05.getTotalLength(), overwrite: true });
    } else if (progress <= 50) {
      // Анимация для третьей линии (42-50%)
      const lineProgress = (progress - 42) / 8;
      gsap.to(lineMob01, { strokeDashoffset: -lineMob01.getTotalLength(), overwrite: true });
      gsap.to(lineMob02, { strokeDashoffset: -lineMob02.getTotalLength(), overwrite: true });
      gsap.to(lineMob03, { strokeDashoffset: -lineProgress * lineMob03.getTotalLength(), overwrite: true });
      gsap.to(lineMob04, { strokeDashoffset: lineMob04.getTotalLength(), overwrite: true });
      gsap.to(lineMob05, { strokeDashoffset: lineMob05.getTotalLength(), overwrite: true });
    } else if (progress <= 60) {
      // Анимация для четвертой линии (50-60%)
      const lineProgress = (progress - 50) / 10;
      gsap.to(lineMob01, { strokeDashoffset: -lineMob01.getTotalLength(), overwrite: true });
      gsap.to(lineMob02, { strokeDashoffset: -lineMob02.getTotalLength(), overwrite: true });
      gsap.to(lineMob03, { strokeDashoffset: -lineMob03.getTotalLength(), overwrite: true });
      gsap.to(lineMob04, { strokeDashoffset: (1 - lineProgress) * lineMob04.getTotalLength(), overwrite: true });
      gsap.to(lineMob05, { strokeDashoffset: lineMob05.getTotalLength(), overwrite: true });
    } else if (progress <= 75) {
      // Анимация для четвертой линии (60-75%)
      const lineProgress = (progress - 60) / 15;
      gsap.to(lineMob01, { strokeDashoffset: -lineMob01.getTotalLength(), overwrite: true });
      gsap.to(lineMob02, { strokeDashoffset: -lineMob02.getTotalLength(), overwrite: true });
      gsap.to(lineMob03, { strokeDashoffset: -lineMob03.getTotalLength(), overwrite: true });
      gsap.to(lineMob04, { strokeDashoffset: -lineProgress * lineMob04.getTotalLength(), overwrite: true });
      gsap.to(lineMob05, { strokeDashoffset: lineMob05.getTotalLength(), overwrite: true });
    } else if (progress <= 80) {
      // Анимация для пятой линии (75-80%)
      const lineProgress = (progress - 75) / 5;
      gsap.to(lineMob01, { strokeDashoffset: -lineMob01.getTotalLength(), overwrite: true });
      gsap.to(lineMob02, { strokeDashoffset: -lineMob02.getTotalLength(), overwrite: true });
      gsap.to(lineMob03, { strokeDashoffset: -lineMob03.getTotalLength(), overwrite: true });
      gsap.to(lineMob04, { strokeDashoffset: -lineMob04.getTotalLength(), overwrite: true });
      gsap.to(lineMob05, { strokeDashoffset: (1 - lineProgress) * lineMob05.getTotalLength(), overwrite: true });
    } else {
      // Когда прогресс больше 80%, все линии уходят в минус
      gsap.to(lineMob01, { strokeDashoffset: -lineMob01.getTotalLength(), overwrite: true });
      gsap.to(lineMob02, { strokeDashoffset: -lineMob02.getTotalLength(), overwrite: true });
      gsap.to(lineMob03, { strokeDashoffset: -lineMob03.getTotalLength(), overwrite: true });
      gsap.to(lineMob04, { strokeDashoffset: -lineMob04.getTotalLength(), overwrite: true });
      gsap.to(lineMob05, { strokeDashoffset: -lineMob05.getTotalLength(), overwrite: true });
    }
  }

  В общем такие баги: когда скролю вниз, то анимация начинается примерно через 10% когда уже прошел всю высоту скроле где расположена линиия, но когда возвращаюсь, то анимация начинается на 10% раньше чем я дойду до линии. Последняя 5 линия вообще не видно ни в ту ни в обратную сторону