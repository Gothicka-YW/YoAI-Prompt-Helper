// Tabs
const PRESETS = {
  "3d": `- Transform this flat cartoon avatar into a fully textured, three-dimensional figure with realistic shading, depth, and detailed surfaces.
- Preserve the proportions, pose, and recognizable features including makeup and beauty marks of the original character, but enhance with natural skin/cloth/hair textures, highlights, and shadows.
- Ensure the result looks volumetric and full-bodied, not flat.
- Lengthen the legs to average human length.
- Ensure accuracy of handheld items, hat, and accessories.
- Image will show full body, including feet/shoes.
- Retain a transparent background with no extra objects or scenery.
- Illustrated style.`,
  "bratz": `- Transform this avatar into a Bratz Doll inspired character: big glossy eyes with bold liner, fuller lips with a soft gloss, contoured face, fashion-forward styling.
- Preserve the original proportions, pose, and key recognizable features while enhancing with doll-like smooth skin and subtle gradient shading for depth.
- Retain makeup, beauty marks, and effects.
- Include the handheld items shown.
- Image will show full body, including feet or shoes.
- Output on a transparent background; avoid extra props or scenery.`,
  "male": `- Transform this male avatar in a semi-realistic manner.
- Include the full figure, head-to-toe.
- Correct the proportions; no bobbleheads, no Chibi.
- Lengthen the legs.
- Ensure accuracy of handheld items, hat, jewelry, and accessories.
- Ensure accuracy of skin tone.
- Image will show full body, including feet/shoes.
- Add extra margin space to ensure the complete body is included.
- Keep the texturing details.
- No cropping.
- Centered in the frame.
- Transparent background.
- Extend the image size to include full view of shoes.`,
  "gothic": `- Transform this avatar in a Gothic Illustration Cartoon style with dark, dramatic tones and ornate detailing.
- Image will show full body, including feet/shoes — no cutting off feet. Extend the image size to accommodate.
- Use natural, human proportions.
- Emphasize lace, velvet, corsets, layered fabrics, and fine linework with textured shading.
- Apply chiaroscuro lighting for strong contrasts and a moody atmosphere.
- Preserve all hair and facial features, including glossy lips, makeup, and beauty marks.
- Ensure accuracy of handheld items, hat, jewelry, and accessories.
- Preserve existing avatar pose; do not alter stance.
- Keep the background transparent with no extra objects or scenery.
- Preserve avatar’s recognizable features; clean edges.`,
  "glam": `- Transform this avatar with a sleek, glamorous cartoon look: sultry styling, dramatic eyelashes, glossy lips, luxurious hair, large eyes, and an elegant evening vibe.
- Preserve the avatar’s proportions, pose, and recognizable features.
- Add natural skin, cloth, and hair textures with highlights and shadows for depth.
- Retain makeup, beauty marks, and effects.
- Lengthen the legs.
- Ensure accuracy of handheld items, hat, jewelry, and accessories.
- Transparent background, no extra objects.
- Full body shown, including feet/shoes.
- Extend canvas if needed to fit the full figure vertically.`,
  "fashion": `- Transform this avatar with a high-fashion editorial look inspired by runway and couture styling.
- Emphasize dramatic poses, bold makeup, sleek hair.
- Present avant-garde details in clothing and accessories.
- Preserve the avatar’s proportions, stance, and recognizable features.
- Edit hair and clothing textures with strong highlights, shadows, and layered fabrics for depth.
- Retain specific clothing pieces.
- Ensure accuracy of handheld items, hat, jewelry, and accessories.
- Retain skin tone and color of the presented avatar.
- Lengthen the legs.
- Ensure the result looks volumetric and full-bodied.
- Include full body, head-to-toe, with shoes visible; extend canvas if needed to avoid cropping.
- Transparent background, no props or scenery, keeping focus solely on the styled figure.`,
  "cyberpunk": `- Transform this avatar with a gritty cartoon illustratedcyberpunk aesthetic: neon accents, tech implants, worn futuristic fabrics.
- Apply edgy, urban vibes with bold contrasts and layered metallic textures.
- Preserve the avatar’s proportions, pose, and recognizable features.
- Include full body, head-to-toe, with shoes visible: extend canvas if needed to avoid cropping.
- Transparent background, no extra objects.`,
  "futuristic": `- Transform this avatar with a clean, futuristic cartoon aesthetic: smooth fabrics, advanced sci-fi fashion, glowing accents.
- Minimalist styling with sleek details and a high-tech appearance.
- Preserve the avatar’s proportions, pose, and recognizable features.
- Include full body, head-to-toe, with shoes visible: extend canvas if needed to avoid cropping.
- Transparent background, no extra objects.`,
  "dr_suess": `- Transform this avatar into a chaotic, surreal Dr. Seuss–inspired character.
- Stretch and bend proportions in playful, exaggerated ways — tall, twisting forms or oddly rounded shapes.
- Use wild, vibrant color combinations with bold stripes, zigzags, and mismatched patterns.
- Preserve the avatar’s recognizable features, but stylize them with surreal, whimsical distortions.
- Render hair, clothing, and accessories with curvy, flowing, almost gravity-defying designs.
- Lengthen the legs while keeping proportions whimsical and surreal.
- Ensure accuracy of handheld items, hats, jewelry, and accessories, but twist them into quirky, Seussian forms.
- Include full body, head-to-toe, with shoes visible: extend canvas if needed to avoid cropping.
- Transparent background, no extra scenery.`,
  "elven": `- Transform this avatar into an elven fantasy illustrated cartoon character: elegant, ethereal styling with natural, flowing lines.
- Emphasize delicate features, fine hair detail, and fantasy-inspired attire.
- Preserve the avatar’s proportions, pose, and recognizable features.
- Include full body, head-to-toe, with shoes visible: extend canvas if needed to avoid cropping.
- Transparent background, no extra objects.`,
  "rustic": `- Transform this avatar with a soft rustic cartoon aesthetic: bougie bohemian, country farm living vibes.
- Earthy tones, woven fabrics, cozy and natural accents.
- Preserve the avatar’s proportions, pose, and recognizable features.
- Include full body, head-to-toe, with shoes visible: extend canvas if needed to avoid cropping.
- Transparent background, no extra objects.`
};

const BG_PRESETS = {
  "fantasy_forest": `- Create a background of a whimsical forest clearing in cartoon illustrated style.
- Include glowing fireflies, oversized colorful flowers, and tall stylized trees with soft foliage.
- Add a sparkling stream or magical mist for depth and atmosphere.
- Preserve the clean cartoon aesthetic; no photorealistic textures.
- Ensure edges are smooth and the scene fills the entire landscape frame.
- Render as a full cartoon illustrated landscape background scene with no empty areas.`,
  "gothic_castle": `- Create a background of a gothic castle interior with cartoon illustrated style.
- Include tall arched windows, velvet curtains, chandeliers, and dark stone walls.
- Keep the mood dramatic but stylized, not photorealistic.
- Preserve smooth edges and cartoon textures.
- Scene should fill the entire landscape frame.
- Render as a full cartoon illustrated landscape background scene with no empty areas.`,
  "runway": `- Create a background of a high-fashion runway in cartoon illustrated style.
- Include bold stage spotlights, geometric backdrop panels, and glossy runway floor.
- Stylize to feel editorial and glamorous, not realistic.
- Preserve edges, clean lines, and minimal background clutter.
- Scene should fill the entire landscape frame.
- Render as a full cartoon illustrated landscape background scene with no empty areas.`,
  "barn_loft": `- Create a background of a rustic barn loft in cartoon illustrated style.
- Include wooden beams, planks, hanging string lights, and cozy rugs.
- Add small decorative plants or rustic lanterns for atmosphere.
- Keep textures simple and stylized to avoid realism.
- Scene should fill the entire landscape frame.
- Render as a full cartoon illustrated landscape background scene with no empty areas.`,
  "neon_city": `- Create a background of a cyberpunk neon city in cartoon illustrated style.
- Include glowing billboards, skyscraper silhouettes, and neon light effects.
- Use bright pinks, purples, and blues for a futuristic palette.
- Keep stylized and clean, avoiding excessive clutter.
- Scene should fill the entire landscape frame.
- Render as a full cartoon illustrated landscape background scene with no empty areas.`,
  "space_hub": `- Create a background of a sleek futuristic space hub in cartoon illustrated style.
- Include metallic arches, glowing holographic panels, and wide starry windows.
- Emphasize clean minimalism and high-tech atmosphere.
- Stylize textures without realism.
- Scene should fill the entire landscape frame.
- Render as a full cartoon illustrated landscape background scene with no empty areas.`,
  "elven_glade": `- Create a background of a magical elven glade in cartoon illustrated style.
- Include glowing mushrooms, golden leaves, and softly lit streams.
- Use whimsical, ethereal colors like greens, blues, and golds.
- Preserve cartoon illustration aesthetic without realism.
- Scene should fill the entire landscape frame.
- Render as a full cartoon illustrated landscape background scene with no empty areas.`,
  "club_lounge": `- Create a background of a glamorous cartoon club lounge.
- Include velvet couches, spotlights, and disco ball overhead.
- Use bold jewel-tone colors and glittery accents.
- Keep stylized textures for furniture and lighting.
- Scene should fill the entire landscape frame.
- Render as a full cartoon illustrated landscape background scene with no empty areas.`,
  "magic_library": `- Create a background of a magical academy library in cartoon illustrated style.
- Include oversized shelves, floating glowing books, and mystical runes.
- Use rich deep colors like purple, gold, and navy blue.
- Stylize heavily; no photorealistic wood or textures.
- Scene should fill the entire landscape frame.
- Render as a full cartoon illustrated landscape background scene with no empty areas.`,
  "ballroom": `- Create a background of a royal ballroom in cartoon illustrated style.
- Include chandeliers, marble floor, golden drapes, and elegant arches.
- Emphasize grandeur but keep simple stylized textures.
- Avoid excessive clutter; avatar should remain central focus.
- Scene should fill the entire landscape frame.
- Render as a full cartoon illustrated landscape background scene with no empty areas.`,
  "new_years": `- Create a background of a festive New Years cartoon celebration.
- Include colorful fireworks, glittering lights, confetti, and champagne flutes.
- Use gold, black, and jewel tones for celebration vibe.
- Keep clean cartoon styling without realism.
- Scene should fill the entire landscape frame.
- Render as a full cartoon illustrated landscape background scene with no empty areas.`,
  "fourth_july": `- Create a background of a 4th of July celebration in cartoon illustrated style.
- Include colorful fireworks, flags, and picnic blanket or festive garlands.
- Use red, white, and blue tones.
- Keep stylized fireworks and textures.
- Scene should fill the entire landscape frame.
- Render as a full cartoon illustrated landscape background scene with no empty areas.`,
  "halloween": `- Create a background of a playful Halloween night scene in cartoon illustrated style.
- Include pumpkins, bats, cobwebs, and haunted house silhouette.
- Use spooky but fun colors like orange, purple, and black.
- Keep cartoon vibe, not scary realism.
- Scene should fill the entire landscape frame.
- Render as a full cartoon illustrated landscape background scene with no empty areas.`,
  "thanksgiving": `- Create a background of a Thanksgiving harvest scene in cartoon illustrated style.
- Include autumn leaves, cornucopia, and rustic wooden harvest table.
- Use warm colors: orange, gold, and brown tones.
- Keep simple stylized edges.
- Scene should fill the entire landscape frame.
- Render as a full cartoon illustrated landscape background scene with no empty areas.`,
  "christmas": `- Create a background of a Christmas cartoon celebration.
- Include decorated tree, glowing lights, snowy window, and stockings.
- Use red, green, gold, and white colors.
- Keep cartoon textures for tree and gifts.
- Scene should fill the entire landscape frame.
- Render as a full cartoon illustrated landscape background scene with no empty areas.`,
  "birthday": `- Create a background of a birthday party in cartoon illustrated style.
- Include balloons, cake, streamers, and colorful confetti.
- Use pastel or vibrant colors for cheerful tone.
- Keep cartoon textures for decorations.
- Scene should fill the entire landscape frame.
- Render as a full cartoon illustrated landscape background scene with no empty areas.`
};

document.addEventListener('DOMContentLoaded', function() {
  // Toast helper
  function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.style.display = 'block';
    setTimeout(() => { toast.style.display = 'none'; }, 1800);
  }

  // Bug report email copy
  const bugEmail = 'ywa.paint@gmail.com';
  const bugLink = document.getElementById('copy-bug-email-link');
  if (bugLink) {
    bugLink.addEventListener('click', function(e) {
      e.preventDefault();
      navigator.clipboard.writeText(bugEmail).then(() => {
        showToast('Copied bug report email!');
      });
    });
  }
  // --- Tab State Persistence ---
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  // Restore last tab
  const lastTab = localStorage.getItem('yoprompt_last_tab');
  if (lastTab) {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(tab => tab.classList.remove('active'));
    const btn = document.querySelector(`.tab-button[data-tab="${lastTab}"]`);
    const tab = document.getElementById(lastTab);
    if (btn && tab) {
      btn.classList.add('active');
      tab.classList.add('active');
    }
  }
  // Tab click handler
  tabButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(tab => tab.classList.remove('active'));
      btn.classList.add('active');
      const tab = document.getElementById(btn.dataset.tab);
      if (tab) tab.classList.add('active');
      localStorage.setItem('yoprompt_last_tab', btn.dataset.tab);
    });
  });

  // --- Form State Persistence (all tabs) ---
  // Save on input/change, restore on load
  const formSelectors = [
    '#mypreset-form',
    '#prompt',
    '#presets',
    '#background',
    '#resources'
  ];
  formSelectors.forEach(sel => {
    const form = document.querySelector(sel);
    if (!form) return;
    // Restore
    const saved = localStorage.getItem('yoprompt_form_' + sel);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        Object.entries(data).forEach(([k, v]) => {
          const el = form.querySelector(`[name="${k}"]`) || form.querySelector(`#${k}`);
          if (!el) return;
          if (el.type === 'checkbox' || el.type === 'radio') {
            el.checked = !!v;
          } else if (el.tagName === 'SELECT') {
            el.value = v;
          } else {
            el.value = v;
          }
        });
      } catch {}
    }
    // Save
    form.addEventListener('input', function() {
      const data = {};
      form.querySelectorAll('input,select,textarea').forEach(el => {
        if (el.type === 'checkbox' || el.type === 'radio') {
          data[el.name || el.id] = el.checked;
        } else {
          data[el.name || el.id] = el.value;
        }
      });
      localStorage.setItem('yoprompt_form_' + sel, JSON.stringify(data));
    });
    form.addEventListener('change', function() {
      const data = {};
      form.querySelectorAll('input,select,textarea').forEach(el => {
        if (el.type === 'checkbox' || el.type === 'radio') {
          data[el.name || el.id] = el.checked;
        } else {
          data[el.name || el.id] = el.value;
        }
      });
      localStorage.setItem('yoprompt_form_' + sel, JSON.stringify(data));
    });
  });
  // --- My Presets Logic ---
  const myPresetForm = document.getElementById('mypreset-form');
  const myPresetList = document.getElementById('mypreset-list');
  let editingPresetId = null;

  // Utility: get all presets from chrome.storage.sync
  function getAllMyPresets(cb) {
    if (!chrome?.storage?.sync) return cb([]);
    chrome.storage.sync.get(['yoprompt_mypresets'], (res) => {
      cb(Array.isArray(res.yoprompt_mypresets) ? res.yoprompt_mypresets : []);
    });
  }
  // Utility: save all presets
  function saveAllMyPresets(presets, cb) {
    if (!chrome?.storage?.sync) return;
    chrome.storage.sync.set({yoprompt_mypresets: presets}, cb);
  }
  // Render list
  function renderMyPresets() {
    getAllMyPresets((presets) => {
      myPresetList.innerHTML = '';
      if (!presets.length) {
        myPresetList.innerHTML = '<li class="muted">No saved presets yet.</li>';
        return;
      }
      presets.forEach((preset, idx) => {
        const li = document.createElement('li');
        li.innerHTML = `<b>${preset.title}</b> <span class="muted">[${preset.type === 'avatar' ? 'Avatar' : 'BG'}]</span><br><span style="font-size:11px;">${preset.output.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</span><br>
          <button class="ghost" data-edit="${idx}">Edit</button>
          <button class="ghost" data-delete="${idx}">Delete</button>`;
        myPresetList.appendChild(li);
      });
    });
  }
  // Save handler
  if (myPresetForm) {
    myPresetForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const title = document.getElementById('mypreset-title').value.trim();
      const type = document.getElementById('mypreset-type').value;
      const output = document.getElementById('mypreset-output').value.trim();
      if (!title || !output) return;
      getAllMyPresets((presets) => {
        if (editingPresetId !== null) {
          presets[editingPresetId] = {title, type, output};
          editingPresetId = null;
        } else {
          presets.push({title, type, output});
        }
        saveAllMyPresets(presets, renderMyPresets);
        myPresetForm.reset();
      });
    });
    myPresetForm.addEventListener('reset', function() { editingPresetId = null; });
  }
  // Edit/Delete handlers
  if (myPresetList) {
    myPresetList.addEventListener('click', function(e) {
      if (e.target.dataset.edit) {
        getAllMyPresets((presets) => {
          const p = presets[e.target.dataset.edit];
          document.getElementById('mypreset-title').value = p.title;
          document.getElementById('mypreset-type').value = p.type;
          document.getElementById('mypreset-output').value = p.output;
          editingPresetId = Number(e.target.dataset.edit);
        });
      } else if (e.target.dataset.delete) {
        getAllMyPresets((presets) => {
          presets.splice(e.target.dataset.delete, 1);
          saveAllMyPresets(presets, renderMyPresets);
        });
      }
    });
  }
  renderMyPresets();

  // Import to Avatar Presets
  const importAvatarBtn = document.getElementById('import-avatar-preset');
  if (importAvatarBtn) {
    importAvatarBtn.addEventListener('click', () => {
      getAllMyPresets((presets) => {
        const avatarPresets = presets.filter(p => p.type === 'avatar');
        if (!avatarPresets.length) return alert('No Avatar presets saved.');
        const pick = prompt('Enter the number to import:\n' + avatarPresets.map((p,i)=>`${i+1}. ${p.title}`).join('\n'));
        const idx = Number(pick)-1;
        if (avatarPresets[idx]) {
          // Add to PRESETS and update dropdown
          PRESETS[avatarPresets[idx].title.toLowerCase().replace(/\s+/g,'_')] = avatarPresets[idx].output;
          const presetSelect = document.getElementById('preset-select');
          if (presetSelect) {
            const opt = document.createElement('option');
            opt.value = avatarPresets[idx].title.toLowerCase().replace(/\s+/g,'_');
            opt.textContent = avatarPresets[idx].title;
            presetSelect.appendChild(opt);
            presetSelect.value = opt.value;
            presetSelect.dispatchEvent(new Event('change'));
          }
        }
      });
    });
  }
  // Import to BG Presets
  const importBgBtn = document.getElementById('import-bg-preset');
  if (importBgBtn) {
    importBgBtn.addEventListener('click', () => {
      getAllMyPresets((presets) => {
        const bgPresets = presets.filter(p => p.type === 'bg');
        if (!bgPresets.length) return alert('No BG presets saved.');
        const pick = prompt('Enter the number to import:\n' + bgPresets.map((p,i)=>`${i+1}. ${p.title}`).join('\n'));
        const idx = Number(pick)-1;
        if (bgPresets[idx]) {
          // Add to BG_PRESETS and update dropdown
          BG_PRESETS[bgPresets[idx].title.toLowerCase().replace(/\s+/g,'_')] = bgPresets[idx].output;
          const bgSelect = document.getElementById('bg-select');
          if (bgSelect) {
            const opt = document.createElement('option');
            opt.value = bgPresets[idx].title.toLowerCase().replace(/\s+/g,'_');
            opt.textContent = bgPresets[idx].title;
            bgSelect.appendChild(opt);
            bgSelect.value = opt.value;
            bgSelect.dispatchEvent(new Event('change'));
          }
        }
      });
    });
  }
  // --- Prompt Creator Randomizer, Save, Load ---
  function getPromptFields() {
    return {
      artStyle: document.getElementById('pc-art-style'),
      outputStyle: document.getElementById('pc-output-style'),
      body: document.querySelectorAll('input[name="pc-body"]'),
      pose: document.getElementById('pc-pose'),
      fullbody: document.getElementById('pc-fullbody'),
      expression: document.getElementById('pc-expression'),
      handItem: document.getElementById('pc-hand-item'),
      hairFace: document.querySelectorAll('.pc-hf'),
      accAccuracy: document.getElementById('pc-acc-accuracy'),
      effects: document.querySelectorAll('.pc-eff'),
      lighting: document.getElementById('pc-lighting'),
      bgTrans: document.getElementById('pc-bg-trans')
    };
  }

  function randomizePromptFields() {
    const f = getPromptFields();
    // Helper to pick a random option (excluding first/empty)
    function pick(select) {
      if (!select || select.options.length < 2) return;
      const idx = 1 + Math.floor(Math.random() * (select.options.length - 1));
      select.selectedIndex = idx;
    }
    pick(f.artStyle);
    pick(f.outputStyle);
    pick(f.expression);
    pick(f.lighting);
    // Body radio
    if (f.body && f.body.length) {
      const idx = Math.floor(Math.random() * f.body.length);
      f.body[idx].checked = true;
    }
    // Pose, fullbody, accAccuracy, bgTrans: random true/false
    [f.pose, f.fullbody, f.accAccuracy, f.bgTrans].forEach(el => { if (el) el.checked = Math.random() < 0.5; });
    // Hand item: random example or blank
    const handExamples = ["holding a rose", "holding a phone", "holding a book", "holding a sword", "holding a coffee cup", "holding a paintbrush", "holding a plush toy", "holding a camera", "holding a gift box", ""];
    if (f.handItem) f.handItem.value = handExamples[Math.floor(Math.random() * handExamples.length)];
    // Hair/Face: randomly check 0-2
    if (f.hairFace && f.hairFace.length) {
      f.hairFace.forEach(cb => cb.checked = false);
      const n = Math.floor(Math.random() * 3); // 0-2
      const arr = Array.from(f.hairFace);
      for (let i = 0; i < n; ++i) {
        arr[Math.floor(Math.random() * arr.length)].checked = true;
      }
    }
    // Effects: randomly check up to 2 (never 'None' with others)
    if (f.effects && f.effects.length) {
      f.effects.forEach(cb => cb.checked = false);
      let n = Math.floor(Math.random() * 3); // 0-2
      const arr = Array.from(f.effects).filter(cb => cb.value !== 'None');
      for (let i = 0; i < n; ++i) {
        arr[Math.floor(Math.random() * arr.length)].checked = true;
      }
      // 10% chance to pick 'None' only
      if (Math.random() < 0.1) {
        f.effects.forEach(cb => { if (cb.value === 'None') cb.checked = true; });
      }
    }
    // After randomizing, auto-assemble the prompt
    if (typeof assembleBtn?.click === 'function') assembleBtn.click();
  }

  function getPromptSettings() {
    const f = getPromptFields();
    return {
      artStyle: f.artStyle?.value || '',
      outputStyle: f.outputStyle?.value || '',
      body: Array.from(f.body).find(r => r.checked)?.value || '',
      pose: !!f.pose?.checked,
      fullbody: !!f.fullbody?.checked,
      expression: f.expression?.value || '',
      handItem: f.handItem?.value || '',
      hairFace: Array.from(f.hairFace).filter(cb => cb.checked).map(cb => cb.value),
      accAccuracy: !!f.accAccuracy?.checked,
      effects: Array.from(f.effects).filter(cb => cb.checked).map(cb => cb.value),
      lighting: f.lighting?.value || '',
      bgTrans: !!f.bgTrans?.checked
    };
  }

  function setPromptSettings(settings) {
    const f = getPromptFields();
    if (f.artStyle) f.artStyle.value = settings.artStyle || '';
    if (f.outputStyle) f.outputStyle.value = settings.outputStyle || '';
    if (f.body && f.body.length) {
      Array.from(f.body).forEach(r => r.checked = (r.value === settings.body));
    }
    if (f.pose) f.pose.checked = !!settings.pose;
    if (f.fullbody) f.fullbody.checked = !!settings.fullbody;
    if (f.expression) f.expression.value = settings.expression || '';
    if (f.handItem) f.handItem.value = settings.handItem || '';
    if (f.hairFace && f.hairFace.length) {
      f.hairFace.forEach(cb => cb.checked = settings.hairFace?.includes(cb.value));
    }
    if (f.accAccuracy) f.accAccuracy.checked = !!settings.accAccuracy;
    if (f.effects && f.effects.length) {
      f.effects.forEach(cb => cb.checked = settings.effects?.includes(cb.value));
    }
    if (f.lighting) f.lighting.value = settings.lighting || '';
    if (f.bgTrans) f.bgTrans.checked = !!settings.bgTrans;
  }

  // Button event listeners
  const randomizeBtn = document.getElementById('randomize');
  if (randomizeBtn) randomizeBtn.addEventListener('click', randomizePromptFields);

  const saveBtn = document.getElementById('save-settings');
  if (saveBtn) saveBtn.addEventListener('click', () => {
    const settings = getPromptSettings();
    localStorage.setItem('yoprompt-pc-settings', JSON.stringify(settings));
    saveBtn.textContent = 'Saved!';
    setTimeout(() => { saveBtn.textContent = 'Save Settings'; }, 1200);
  });

  const loadBtn = document.getElementById('load-settings');
  if (loadBtn) loadBtn.addEventListener('click', () => {
    const settings = localStorage.getItem('yoprompt-pc-settings');
    if (settings) {
      setPromptSettings(JSON.parse(settings));
      loadBtn.textContent = 'Loaded!';
      setTimeout(() => { loadBtn.textContent = 'Load Settings'; }, 1200);
    } else {
      loadBtn.textContent = 'No Saved Settings';
      setTimeout(() => { loadBtn.textContent = 'Load Settings'; }, 1200);
    }
  });
  // Tab switching with My Presets height fix
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      const tabId = btn.dataset.tab;
      document.getElementById(tabId).classList.add('active');
      // Height fix for My Presets
      const content = document.querySelector('.content');
      if (tabId === 'mypresets') {
        content.classList.add('mypresets-active');
      } else {
        content.classList.remove('mypresets-active');
      }
    });
  });

  // AI Presets tab
  const presetSelect = document.getElementById('preset-select');
  const presetOut = document.getElementById('preset-output');
  const copyPresetBtn = document.getElementById('copy-preset');
  const presetFeedback = document.getElementById('copy-preset-feedback');
  if (presetSelect && presetOut && copyPresetBtn) {
    // Clear existing options except the first (placeholder)
    Array.from(presetSelect.options).forEach((opt, idx) => {
      if (idx > 0) presetSelect.removeChild(opt);
    });
    // Add options alphabetically
    Object.keys(PRESETS).sort().forEach(key => {
      const opt = document.createElement('option');
      opt.value = key;
      // Display label: capitalize and replace underscores with spaces, special case for Dr. Suess
      if (key === 'dr_suess') {
        opt.textContent = 'Dr. Suess';
      } else {
        opt.textContent = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
      }
      presetSelect.appendChild(opt);
    });
    presetSelect.addEventListener('change', () => {
      const label = presetSelect.value;
      const text = PRESETS[label] || '';
      presetOut.value = text;
      copyPresetBtn.disabled = !text;
    });
    copyPresetBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(presetOut.value);
        if (presetFeedback) {
          presetFeedback.textContent = 'Copied!';
          setTimeout(() => { presetFeedback.textContent = ''; }, 1200);
        }
      } catch (e) {
        if (presetFeedback) {
          presetFeedback.textContent = 'Copy failed';
          setTimeout(() => { presetFeedback.textContent = ''; }, 1200);
        }
      }
    });
  }

  // BG Creator tab
  const bgSelect = document.getElementById('bg-select');
    // Prompt Creator tab logic
    const assembleBtn = document.getElementById('assemble');
    const copyBtn = document.getElementById('copy');
    const outputArea = document.getElementById('output');
    if (assembleBtn && copyBtn && outputArea) {
      assembleBtn.addEventListener('click', () => {
        // Gather values from all Prompt Creator fields
        const artStyle = document.getElementById('pc-art-style')?.value;
        const outputStyle = document.getElementById('pc-output-style')?.value;
        const body = document.querySelector('input[name="pc-body"]:checked')?.parentElement?.textContent.trim();
        const pose = document.getElementById('pc-pose')?.checked;
        const fullbody = document.getElementById('pc-fullbody')?.checked;
        const expression = document.getElementById('pc-expression')?.value;
        const handItem = document.getElementById('pc-hand-item')?.value;
        const hairFace = Array.from(document.querySelectorAll('.pc-hf:checked')).map(cb => cb.value);
        const accAccuracy = document.getElementById('pc-acc-accuracy')?.checked;
        const effects = Array.from(document.querySelectorAll('.pc-eff:checked')).map(cb => cb.value).filter(v => v !== 'None');
        const lighting = document.getElementById('pc-lighting')?.value;
        const bgTrans = document.getElementById('pc-bg-trans')?.checked;

    // Assemble prompt in strict logical order
    let prompt = '';
    // 1. Style
    if (artStyle) prompt += `Art Style: ${artStyle}.\n`;
    if (outputStyle) prompt += `Output Style: ${outputStyle}.\n`;
    // 2. Body
    if (body) prompt += `Body: ${body}.\n`;
    // 3. Pose
    if (pose) prompt += `Preserve existing pose.\n`;
    if (fullbody) prompt += `Ensure full body (feet not cut off).\n`;
    // 4. Face
    if (expression) prompt += `Facial Expression: ${expression}.\n`;
    if (hairFace.length) prompt += `Face/Hair: ${hairFace.join('; ')}.\n`;
    // 5. Clothing (not a separate field, but could be in hairFace or handItem)
    // 6. Accessories
    if (handItem) prompt += `Hand/Item: ${handItem}.\n`;
    if (accAccuracy) prompt += `Ensure accessory accuracy (esp. hand-held items).\n`;
    // 7. Effects
    if (effects.length) prompt += `Effects: ${effects.join('; ')}.\n`;
    // 8. Lighting
    if (lighting && lighting !== 'None / Preserve current lighting') prompt += `Lighting: ${lighting}.\n`;
    // 9. Background
    if (bgTrans) prompt += `Keep the background transparent.\n`;
    // 10. Notes (future: add notes field if needed)
    outputArea.value = prompt.trim();
    copyBtn.disabled = !prompt.trim();
      });
      copyBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(outputArea.value);
          copyBtn.textContent = 'Copied!';
          setTimeout(() => { copyBtn.textContent = 'Copy Prompt'; }, 1200);
        } catch {
          copyBtn.textContent = 'Copy failed';
          setTimeout(() => { copyBtn.textContent = 'Copy Prompt'; }, 1200);
        }
      });
    }
  const bgOut = document.getElementById('bg-output');
  const bgCopyBtn = document.getElementById('bg-copy');
  if (bgSelect && bgOut && bgCopyBtn) {
    bgSelect.addEventListener('change', () => {
      const label = bgSelect.value;
      const text = BG_PRESETS[label] || '';
      bgOut.value = text;
      bgCopyBtn.disabled = !text;
    });
    bgCopyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(bgOut.value);
        bgCopyBtn.textContent = 'Copied!';
        setTimeout(() => { bgCopyBtn.textContent = 'Copy'; }, 1200);
      } catch (e) {
        bgCopyBtn.textContent = 'Copy failed';
        setTimeout(() => { bgCopyBtn.textContent = 'Copy'; }, 1200);
      }
    });
  }

  // --- Import/Export Presets Logic ---
  const exportBtn = document.getElementById('export-presets-btn');
  const importBtn = document.getElementById('import-presets-btn');
  const importFile = document.getElementById('import-presets-file');
  const feedback = document.getElementById('import-export-feedback');

  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const data = {
        ai: PRESETS,
        bg: BG_PRESETS
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'yoprompt-presets.json';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 100);
      if (feedback) {
        feedback.textContent = 'Exported!';
        setTimeout(() => { feedback.textContent = ''; }, 1200);
      }
    });
  }
  if (importBtn && importFile) {
    importBtn.addEventListener('click', () => {
      importFile.value = '';
      importFile.click();
    });
    importFile.addEventListener('change', (e) => {
      const file = importFile.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(evt) {
        try {
          const data = JSON.parse(evt.target.result);
          if (data && typeof data === 'object' && data.ai && data.bg) {
            // Overwrite all presets
            Object.keys(PRESETS).forEach(k => delete PRESETS[k]);
            Object.keys(BG_PRESETS).forEach(k => delete BG_PRESETS[k]);
            Object.assign(PRESETS, data.ai);
            Object.assign(BG_PRESETS, data.bg);
            // Refresh dropdowns
            const presetSelect = document.getElementById('preset-select');
            if (presetSelect) {
              Array.from(presetSelect.options).forEach(opt => {
                if (opt.value && opt.value !== '') presetSelect.removeChild(opt);
              });
              Object.keys(PRESETS).forEach(key => {
                const opt = document.createElement('option');
                opt.value = key;
                opt.textContent = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
                presetSelect.appendChild(opt);
              });
            }
            const bgSelect = document.getElementById('bg-select');
            if (bgSelect) {
              Array.from(bgSelect.options).forEach(opt => {
                if (opt.value && opt.value !== '') bgSelect.removeChild(opt);
              });
              Object.keys(BG_PRESETS).forEach(key => {
                const opt = document.createElement('option');
                opt.value = key;
                opt.textContent = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
                bgSelect.appendChild(opt);
              });
            }
            if (feedback) {
              feedback.textContent = 'Imported!';
              setTimeout(() => { feedback.textContent = ''; }, 1200);
            }
          } else throw new Error('Invalid format');
        } catch {
          if (feedback) {
            feedback.textContent = 'Import failed';
            setTimeout(() => { feedback.textContent = ''; }, 2000);
          }
        }
      };
      reader.readAsText(file);
    });
  }
});
