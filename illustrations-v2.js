/* Twelve narrative scenes per industry, arranged in a 4 × 3 atlas. */
const MarketingIllustrations = (() => {
  const industries = {
    metal: {
      name: '板金加工',
      events: ['治具の置き場所で、段取り時間は変わる', '曲げ加工の不良で、ラインが止まった', '田中さんが不在。材質に合う送り速度は？', '治具の新しい配置を、標準作業書へ', '組立工程にも、段取り改善を伝えたい'],
      descriptions: ['離れた治具をまとめる配置を考える加工担当者', '曲げ角度が合わない金属部品を確認する作業者', '材質の違う材料と送り速度の設定を前に迷う担当者', '治具配置の変更を図で作業書に書き込む手元', '板金と組立の担当者が治具配置の改善図を見て相談する場面'],
      object: '治具配置',
      success: '治具配置を変え、段取り時間を短縮',
      failure: '手順を見誤り、加工不良が発生',
      repeat: '新人の佐藤も、同じ治具配置に気づいた'
    },
    textile: {
      name: '繊維工業',
      events: ['型入れの順番で、裁断ロスは変わる', '縫い目のほつれで、ラインが止まった', '田中さんが不在。生地に合う針と送り速度は？', '型入れの新しい順番を、標準作業書へ', '仕上げ・検品にも、改善事例を伝えたい'],
      descriptions: ['生地の上で型紙を詰めて配置し、裁断ロスを減らす方法を考える担当者', 'ミシンのそばで縫い目のほつれを確認する検品担当者', '異なる生地とミシンの送り速度・針を前に迷う担当者', '型紙の新しい配置を図で作業書に書き込む手元', '縫製と仕上げ・検品の担当者が改善図を見て相談する場面'],
      object: '型入れの順番',
      success: '型入れを変え、裁断ロスを削減',
      failure: '裁断手順を見誤り、生地をムダに',
      repeat: '新人の佐藤も、同じ型入れに気づいた'
    },
    transport: {
      name: '自動車部品',
      events: ['部品トレーの配置で、手待ち時間は変わる', '溶接不良で、ラインが止まった', '田中さんが不在。圧入工程の判断に迷う', '部品トレーの新しい配置を、標準作業書へ', '内装ラインにも、組立の改善を伝えたい'],
      descriptions: ['離れた部品トレーを手元にまとめる配置を考える組立担当者', '停止した溶接設備の前で部品の溶接不良を確認する作業者', '軸と軸受の圧入条件を前に、一人で判断に迷う担当者', '部品トレーの新しい配置を図で作業書に書き込む手元', '組立と内装ラインの担当者がトレー配置の改善図を見て相談する場面'],
      object: '部品トレー配置',
      success: 'トレー配置を変え、手待ち時間を短縮',
      failure: '手順を見誤り、組付けミスが発生',
      repeat: '新人の佐藤も、同じトレー配置に気づいた'
    },
    plastic: {
      name: 'プラスチック製品製造業',
      events: ['金型・治具の配置で、段取り時間は変わる', 'ヒケ不良で、ラインが止まった', '田中さんが不在。樹脂ロットに合う温度・冷却時間は？', '金型・治具の新しい配置を、成形条件標準書へ', '別の成形ラインにも、段取り改善を伝えたい'],
      descriptions: ['離れた金型・治具をまとめる配置を考える成形担当者', '肉厚部にヒケが出た成形品を確認する作業者', '樹脂ロットの粘度差と温度・冷却時間の設定を前に迷う担当者', '金型・治具配置の変更を図で標準書に書き込む手元', '成形ラインの担当者どうしが配置の改善図を見て相談する場面'],
      object: '金型・治具配置',
      success: '金型・治具配置を変え、段取り時間を短縮',
      failure: '手順を見誤り、成形不良が発生',
      repeat: '新人の佐藤も、同じ金型・治具配置に気づいた'
    },
    electric: {
      name: '電気機械器具製造業',
      events: ['部品棚の配置で、手待ち時間は変わる', 'はんだ不良で、ラインが止まった', '田中さんが不在。機種に合うこて温度は？', '部品棚の新しい配置を、標準作業書へ', '別の組立ラインにも、改善事例を伝えたい'],
      descriptions: ['離れた部品棚を手元にまとめる配置を考える実装担当者', '導通検査ではんだ未着を確認する検査担当者', '機種ごとに異なるこて温度・検査基準値を前に迷う担当者', '部品棚の新しい配置を図で標準書に書き込む手元', '実装と組立ラインの担当者が配置の改善図を見て相談する場面'],
      object: '部品棚配置',
      success: '部品棚配置を変え、手待ち時間を短縮',
      failure: '手順を見誤り、組付け不良が発生',
      repeat: '新人の佐藤も、同じ部品棚配置に気づいた'
    },
    printing: {
      name: '印刷業',
      events: ['版・インキの準備順で、刷り出し時間は変わる', '見当ズレ・色ずれで、ラインが止まった', '田中さんが不在。用紙に合うインキ濃度は？', '段取りの新しい準備順を、標準作業書へ', '製本・断裁にも、改善事例を伝えたい'],
      descriptions: ['版・用紙・インキの準備順を考える印刷担当者', '見当ズレによる色ずれを確認する検査担当者', '用紙の紙質変化とインキ濃度・見当合わせを前に迷う担当者', '段取りの新しい準備順を図で標準書に書き込む手元', '印刷と製本・断裁の担当者が改善図を見て相談する場面'],
      object: '段取り準備順序',
      success: '準備順序を変え、刷り出し時間を短縮',
      failure: '手順を見誤り、刷り直しが発生',
      repeat: '新人の佐藤も、同じ準備順序に気づいた'
    },
    food: {
      name: '食品製造業',
      events: ['盛付の順序で、歩留まりは変わる', 'シール部のピンホールで、ラインが止まった', '田中さんが不在。原材料ロットに合う加熱時間は？', '盛付の新しい順序を、標準作業書へ', '別の惣菜ラインにも、改善事例を伝えたい'],
      descriptions: ['崩れやすい具材の配置順を考える盛付担当者', 'リークテストでシール部のピンホールを確認する検品担当者', '原材料ロットの水分量差と加熱時間・味付け量を前に迷う担当者', '盛付の新しい順序を図で標準書に書き込む手元', '調理と盛付ラインの担当者が改善図を見て相談する場面'],
      object: '盛付順序',
      success: '盛付順序を変え、歩留まりを改善',
      failure: '手順を見誤り、規格外品が発生',
      repeat: '新人の佐藤も、同じ盛付順序に気づいた'
    }
  };
  function scene(industry, cell, caption, description, label = '') {
    return {industry, cell, caption, description, label};
  }
  function event(industry, index, label = '') {
    const data = industries[industry];
    return scene(industry, index, data.events[index], data.descriptions[index], label);
  }
  function imageStyle(item) {
    return `background-image:url('assets/${item.industry}-story-v2.png');background-position:${item.cell % 4 / 3 * 100}% ${Math.floor(item.cell / 4) * 50}%`;
  }
  function art(item, compact = false) {
    if (typeof item === 'string') item = event(item, 0);
    return `<figure class="scene-art${compact ? ' compact' : ''}" data-scene="${item.industry}-${item.cell}"><div class="scene-picture" role="img" aria-label="${item.description}" style="${imageStyle(item)}"></div>${compact ? '' : `<figcaption>${item.label ? `<span class="scene-stage">${item.label}</span>` : ''}${item.caption}</figcaption>`}</figure>`;
  }
  function thumbnail(industry, index) {
    return `<span class="mc-scene" aria-hidden="true" style="${imageStyle(event(industry, index))}"></span>`;
  }
  function forState(state, industry) {
    const data = industries[industry], index = state.missionIndex || 0;
    const missionLabel = `MISSION 0${index + 1}`;
    const contextual = label => event(industry, index, label);
    if (state.step <= 1) return event(industry, 0, `${data.name}の現場体験`);
    if (state.step === 4 || (state.step === 9 && state.illustrationPhase === 'boss-choice')) {
      const choice = state.step === 4 ? state.action : state.bossChoice;
      if (['memo', 'record'].includes(choice)) {
        if (state.step === 9) return scene(industry, 5, '結果と経緯を、次の人も確認できる記録に。', `${data.name}の担当者が作業結果と経緯を書き残す場面`, '選んだ行動：結果を記録する');
        if (index === 3) return contextual('選んだ行動：作業書を更新');
        if (index === 4) return contextual('選んだ行動：改善事例をまとめて共有');
        return scene(industry, 5, '記録は残った。次の人も見つけられるだろうか。', `${data.name}の担当者が、自分の手元のノートに記録する場面`, '選んだ行動：記録する');
      }
      if (choice === 'verbal' && index === 2 && state.step === 4) return contextual('電話で確認した判断｜会話の記録は残っていない');
      if (choice === 'verbal') return scene(industry, 6, 'その場では伝わった。でも、会話は残らない。', '忙しい相手に口頭で伝え、会話の内容が薄れていく場面', '選んだ行動：口頭で伝える');
      if (index === 3) return event(industry, 0, '自分のときだけ、新しい手順で作業する');
      return scene(industry, 7, '日々の作業に戻るうちに、気づきが薄れていく。', '作業に戻る担当者の頭から改善のイメージが消えていく場面', '選んだ行動：記録を残さない');
    }
    if (state.step === 5) return scene(industry, 11, '現場は動き続け、新人が同じ工程を担当する。', `${data.name}の同じ工程と、めくられていくカレンダー`, '3か月後');
    if (state.step === 6 && index === 0) return scene(industry, 11, data.repeat, `${data.object}を見て同じ改善を考える新人`, '同じ気づきが、もう一度');
    if (state.step === 7) return scene(industry, 8, '前にもあったはずの記録を、探してみる。', `${data.name}の過去の作業記録をパソコンとノートで探す担当者`, missionLabel + '｜検索');
    if (state.step === 8) return contextual('ここまでの体験を振り返る');
    if (state.step === 9 && state.illustrationPhase === 'trial') {
      if (index === 0) return scene(industry, state.searchFound ? 9 : 10, state.searchFound ? data.success : data.failure, state.searchFound ? `${data.object}を変えた成果を確認する担当者` : `${data.name}の作業ミスを前に、原因を確認する担当者と班長`, state.searchFound ? '試行の結果：成功' : '試行の結果：失敗');
      // The side panel explicitly recaps the trigger; the main text reports the outcome.
      return contextual('今回、解決しようとした課題');
    }
    if (state.step === 10) return contextual('MISSION COMPLETE｜体験した課題');
    if (state.step === 11) return event(industry, 3, '記録を、次の人が使える手順へ');
    if (state.step === 12) return event(industry, 4, '実際の画面はスタッフがご案内します');
    return contextual(state.step === 6 ? '3か月後、同じ課題が再び' : missionLabel + '｜現場の出来事');
  }
  return { art, thumbnail, forState };
})();
