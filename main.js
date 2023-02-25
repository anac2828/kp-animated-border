(function setGlowEffectRX() {
  const glowEffects = document.querySelectorAll('.glow-effect');

  glowEffects.forEach(glowEffect => {
    const rx = getComputedStyle(glowEffect).borderRadius;
    const glowLines = glowEffect.querySelectorAll('rect');

    glowLines.forEach(line => {
      line.setAttribute('rx', rx);
    });
  });
})();
