/* Shared scenes from the generated 3 × 2 illustration sheet. */
const MarketingIllustrations = (() => {
  const scenes = {
    metal: ['0% 0%', '板金加工の現場', '加工設備と部品を見ながら改善を相談する作業者'],
    textile: ['50% 0%', '縫製の現場', 'ミシンで縫製する作業者と仕上がりを確認する同僚'],
    transport: ['100% 0%', '自動車部品の組立現場', '部品トレーを前に組付けについて相談する作業者'],
    record: ['0% 100%', '経験を、記録に残す', '作業中の気づきや手順をノートに書き留める作業者'],
    search: ['50% 100%', '過去の知識を、探す', 'パソコンで過去の部品や作業の記録を探す作業者'],
    share: ['100% 100%', '次の人へ、知識をつなぐ', 'マニュアルを一緒に読みながら技能を伝える先輩と後輩']
  };
  function art(key, compact = false) {
    const [position, caption, description] = scenes[key] || scenes.metal;
    return `<figure class="scene-art${compact ? ' compact' : ''}" data-scene="${key}"><div class="scene-picture" role="img" aria-label="${description}" style="background-position:${position}"></div>${compact ? '' : `<figcaption>${caption}</figcaption>`}</figure>`;
  }
  function forState(state, industry) {
    if (state.step === 0 || state.step === 1) return industry;
    if (state.step === 7) return 'search';
    if (state.step >= 10) return 'share';
    if (state.step === 4) return ['memo', 'record'].includes(state.action) ? 'record' : state.action === 'verbal' ? 'share' : industry;
    if (state.step === 8) return 'record';
    if ([2, 3, 6].includes(state.step) && state.missionIndex >= 2) return state.missionIndex === 3 ? 'record' : 'share';
    return industry;
  }
  return { art, forState };
})();
