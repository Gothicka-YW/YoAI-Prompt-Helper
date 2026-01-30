// Tabs
const PRESETS = {
  "3d": `Transform the provided YoWorld avatar into a stylized 3D clay-like character.

Render the avatar as if sculpted from smooth modeling clay:
– fuller, rounded forms
– softened edges
– slightly exaggerated volume while preserving original proportions
– cohesive, tactile solidity

Preserve all identifying characteristics exactly as provided, including facial structure, body shape, skin tone, eye shape and color, hair color and style, and all defining features.
Do not alter age, ethnicity, gender expression, or core appearance.

STYLE & MATERIALS:
– smooth clay or polymer-like surface
– matte to soft-satin finish
– uniform material with no visible texture
– subtle form shading only (from shape, not texture)
– gentle, diffused highlights

STRICT MATERIAL RULES:
– NO painterly textures
– NO brush strokes
– NO surface grain, noise, pores, or fabric detail
– NO hand-painted or illustrative effects
– NO gradients unrelated to form curvature

COMPOSITION:
This image must contain ONLY the avatar.
Do NOT generate any background, environment, floor, horizon, sky, room, gradient, vignette, fog, glow, or atmospheric elements.
The avatar exists in complete isolation.

POSE & FRAMING:
– natural, confident pose
– full body visible head to toe
– centered composition
– neutral camera angle

RESTRICTIONS:
– no shadows cast outside the avatar silhouette
– no rim lighting, bloom, haze, or glow
– no added props, accessories, makeup, tattoos, or clothing changes unless already present

Focus on sculptural volume, clay-like fullness, and exact likeness.`,
  "bratz": `Transform the provided YoWorld avatar into a Bratz-inspired fashion-doll illustrated character,
while maintaining normal YoWorld human proportions.

Render the avatar in a bold, fashion-forward cartoon style:
– expressive, glossy eyes with bold eyeliner and defined lashes
– fuller lips with clean, graphic gloss
– contoured facial structure using flat or stepped shading
– smooth, polished doll-like finish

IDENTITY & PROPORTION LOCK (CRITICAL):
Preserve the original body proportions, scale, and pose exactly as provided.
Maintain a realistic human head-to-body ratio consistent with YoWorld avatars.
Do NOT enlarge the head, eyes, hands, feet, or facial features beyond natural YoWorld scale.
Do NOT stylize into chibi, super-deformed, caricature, or exaggerated proportions.

Preserve all identifying characteristics exactly as provided, including facial structure, skin tone, eye shape and color, hair color and style, makeup, beauty marks, and existing visual effects.
Do not alter age, ethnicity, gender expression, or core appearance.

FACIAL RENDERING (STRICT):
– clean, smooth cartoon facial rendering
– bold, closed outlines around eyes, lips, nose, and face
– flat or softly stepped color fills
– NO blended, airbrushed, or painterly face shading
– NO skin texture, pores, grain, or realism effects

STYLE & FINISH:
– graphic, production-style illustration
– smooth surfaces with crisp edges
– minimal gradients allowed ONLY for structural depth (not beauty blending)
– non-painterly, non-textured appearance

ITEM & OUTFIT RULES:
– retain all existing makeup, accessories, beauty marks, and effects
– include all handheld items exactly as shown
– do not add or remove clothing, props, or accessories

COMPOSITION:
– full body visible, including feet or shoes
– centered composition
– image must contain ONLY the avatar

BACKGROUND & SCENE RULES:
– no background, environment, floor, horizon, sky, room, vignette, gradient, or scenery
– output must be transparent or plain with no spatial context

GLOBAL RESTRICTIONS:
– NO painterly textures
– NO brush strokes, canvas grain, or noise
– NO watercolor, oil paint, pastel, chalk, or acrylic effects
– NO glow, bloom, haze, or lighting spill
– NO shadows cast outside the avatar silhouette

PRIORITY ORDER:
1. Normal human proportions (no chibi)
2. Clean cartoon face with bold lines
3. Exact likeness
4. Bratz-inspired fashion aesthetic`,
  "monster_high": `Transform the provided YoWorld avatar into a monster-doll–style articulated toy illustration.

Render the avatar as a gothic fashion doll with tall, slender human proportions and visible articulation.
The overall style must be clean, graphic, and cartoon-based — NOT painterly.

IDENTITY LOCK:
Preserve all identifying characteristics exactly as provided, including facial structure, skin tone, eye shape and color, hair color and style, proportions, and all defining features.
Do not alter age, ethnicity, gender expression, or core appearance.

FACIAL RENDERING (CRITICAL):
– face must be rendered with bold, smooth cartoon linework
– clean, closed outlines around facial features
– flat or softly stepped color fills
– NO blended shading on the face
– NO soft gradients on cheeks, nose, or forehead
– NO painterly skin texture
– facial rendering should resemble vector-style cartoon art

PROPORTION & SHAPE:
– tall, slender fashion-doll anatomy
– human-scale proportions
– no chibi or caricature distortion

ARTICULATION (ILLUSTRATED):
– visible joint markers at shoulders, elbows, wrists, hips, knees, and ankles
– clean seam lines or circular joint indicators
– joints appear designed and intentional

STYLE & FINISH (BODY & CLOTHING):
– smooth surfaces
– crisp edges
– flat-to-soft shading only
– minimal gradients limited to form edges (not faces)

STRICT STYLE CONSTRAINTS:
– NO painterly textures
– NO brush strokes
– NO canvas grain, noise, or paper texture
– NO watercolor, oil paint, pastel, chalk, or acrylic effects
– NO sketch lines or rough illustration
– NO airbrushed or blended face shading

COMPOSITION:
This image must contain ONLY the avatar.
Do NOT generate any background, environment, floor, horizon, sky, room, gradient, vignette, or atmospheric elements.

POSE & FRAMING:
– fashion-doll display pose
– full body visible head to toe
– centered composition

RESTRICTIONS:
– no shadows outside the avatar silhouette
– no glow, bloom, haze, or lighting spill
– no added props, accessories, makeup, tattoos, or clothing changes unless already present

PRIORITY ORDER:
1. Clean cartoon face with bold outlines
2. Exact likeness
3. Articulated monster-doll aesthetic`,
  "photorealism": `Transform the provided YoWorld avatar into a photorealistic human depiction.

Render the avatar as a true-to-life photographic image with FULL BODY visibility:
– realistic human anatomy and proportions
– natural skin appearance with real-world detail
– accurate lighting and depth consistent with studio photography
– believable materials, surfaces, and fabric behavior

FULL BODY REQUIREMENT (CRITICAL):
– the avatar must be fully visible from head to toe
– feet or shoes must be clearly shown
– no cropping at the ankles, knees, waist, shoulders, or head
– extend the canvas as needed to include the entire figure
– framing must prioritize full-body visibility over facial close-up

IDENTITY LOCK (CRITICAL):
Preserve all identifying characteristics exactly as provided, including facial structure, skin tone, eye shape and color, hair color and style, body type, proportions, and defining features.
Do not alter age, ethnicity, gender expression, weight, or core appearance.
No beautification, reshaping, or idealization beyond realistic photography.

FACIAL & SKIN RENDERING:
– natural skin texture with pores and subtle variation
– realistic facial geometry and expression
– no beauty smoothing, airbrushing, or cosmetic blur
– no stylized makeup unless already present
– lighting must reveal form without exaggeration

BODY & PROPORTIONS:
– maintain the avatar’s original body shape and stance
– no slimming, elongation, or distortion
– realistic muscle tone and volume
– body should feel physically grounded and proportional

CLOTHING & ITEMS:
– retain all clothing, handheld items, hats, jewelry, and accessories exactly as shown
– fabrics should behave realistically (folds, weight, seams)
– no redesign or stylization of garments

CAMERA & FRAMING:
– neutral, eye-level or slightly lowered camera angle suitable for full-body studio photography
– correct perspective and scale
– centered, clean framing

BACKGROUND & SCENE RULES:
– no background, environment, floor, horizon, sky, room, or scenery
– no cinematic or narrative context
– output must be transparent or plain with no spatial context

LIGHTING RULES:
– realistic studio lighting applied to the avatar only
– no dramatic cinematic lighting
– no glow, bloom, haze, rim light, or lens effects
– no shadows cast outside the avatar silhouette

GLOBAL RESTRICTIONS:
– NO painterly textures or artistic effects
– NO illustration or cartoon stylization
– NO beauty filters or editorial retouching
– NO film grain overlays
– NO added props or objects

PRIORITY ORDER:
1. FULL BODY, head-to-toe visibility
2. Exact likeness and realistic anatomy
3. True photographic realism
4. Clean isolation with no background`,
  "male": `Transform the provided YoWorld male avatar into a clean, semi-realistic illustration.

IDENTITY LOCK (CRITICAL):
Preserve all identifying characteristics exactly as provided, including facial structure, skin tone, eye shape and color, hair color and style, and all defining features.
Do not alter age, ethnicity, gender expression, or core appearance.

PROPORTIONS & ANATOMY:
– correct proportions to look natural and human (no bobbleheads, no chibi)
– lengthen the legs ONLY (do not change torso/head size)
– keep the body full and volumetric (not flat)

ITEMS & ACCESSORIES (CRITICAL):
– ensure exact accuracy of handheld items, hat, jewelry, and accessories
– do not add or remove props, accessories, or clothing

TEXTURE & DETAIL:
– keep the existing texturing details from the avatar (hair, clothing, materials)
– semi-realistic shading is allowed, but avoid photoreal skin pores or realism creep

COMPOSITION:
This image must contain ONLY the avatar.
– include the full figure head-to-toe, with shoes visible
– add extra margin space and extend canvas as needed to avoid any cropping
– centered in the frame

BACKGROUND & SCENE RULES:
– transparent background
– no environment, scenery, floor, horizon, vignette, gradient, or extra objects

PRIORITY ORDER:
1. Exact likeness + skin tone
2. Items/accessories accuracy
3. Full-body framing (shoes visible), no cropping
4. Natural proportions with subtly lengthened legs`,
  "gothic": `Transform the provided YoWorld avatar into a Gothic Illustration Cartoon character with dark, dramatic tones and ornate detailing.

IDENTITY LOCK (CRITICAL):
Preserve all identifying characteristics exactly as provided, including facial structure, skin tone, eye shape and color, hair color and style, makeup, beauty marks, and all defining features.
Do not alter age, ethnicity, gender expression, or core appearance.

POSE & PROPORTIONS:
– preserve the avatar’s existing pose and stance (no pose changes)
– use natural, human proportions (no chibi, no bobbleheads)

GOTHIC STYLE & MATERIALS:
– emphasize lace, velvet, corsets, layered fabrics, and ornate detailing
– fine linework and illustrated textured shading for depth (not photoreal)
– apply chiaroscuro lighting: strong contrasts, moody shadows, dramatic form lighting
– keep edges clean and readable

ITEMS & ACCESSORIES (CRITICAL):
– ensure exact accuracy of handheld items, hat, jewelry, and accessories
– do not add or remove props, accessories, or clothing pieces

COMPOSITION:
This image must contain ONLY the avatar.
– full body visible head to toe, including feet/shoes
– extend canvas as needed to avoid cropping
– centered composition

BACKGROUND & SCENE RULES:
– transparent background
– no extra objects, scenery, environment, floor, horizon, vignette, or gradient
– no shadows cast outside the avatar silhouette

PRIORITY ORDER:
1. Exact likeness (including hair, makeup, beauty marks) + skin tone
2. Items/accessories accuracy
3. Full-body framing (shoes visible), no cropping
4. Gothic illustration style with chiaroscuro lighting and ornate fabric detail`,
  "glam": `Glamourize the provided YoWorld avatar into a clean, polished, high-clarity cartoon rendering.

IDENTITY LOCK (CRITICAL):
Preserve all identifying characteristics exactly as provided, including facial structure, body type, proportions, skin tone, eye shape and color, hair color and style, makeup (if present), beauty marks, and all defining features.
Do not alter age, ethnicity, gender expression, or core appearance.

POSE & PROPORTIONS:
– preserve the avatar’s original stance and pose (no pose changes)
– maintain overall YoWorld proportions and scale (no chibi, no bobbleheads)
– keep the result clean and readable with a crisp silhouette

ITEMS & ACCESSORIES (CRITICAL):
– ensure exact accuracy of handheld items, hat, jewelry, and accessories
– do not add or remove props, accessories, makeup, tattoos, or clothing items

GLAM STYLE & FINISH:
– smooth, flat-to-soft shading
– clean vector-like or cel-shaded surfaces
– crisp edges and tidy linework (if linework is present)
– controlled highlights applied to the avatar only
– balanced, even color saturation
– no “realism creep” (keep it illustrated/cartoon-based)

COMPOSITION:
This image must contain ONLY the avatar.
– full body visible head to toe, including shoes
– extend canvas as needed to avoid any cropping
– centered composition

BACKGROUND & SCENE RULES:
– transparent background
– no environment, scenery, floor, horizon, sky, room, vignette, gradient, or extra objects
– no shadows cast outside the avatar silhouette

GLOBAL STYLE RESTRICTIONS:
– NO painterly textures or brush strokes
– NO canvas grain, noise, or gritty overlays
– NO watercolor, oil paint, pastel, chalk, or acrylic effects
– NO soft-focus blur or artistic smudging
– NO glow spill, haze, bloom, rim light, or lighting outside the avatar silhouette

PRIORITY ORDER:
1. Exact likeness (face, hair, skin tone, makeup/beauty marks if present)
2. Item/outfit accuracy (including handheld items, hat, jewelry, accessories)
3. Full-body framing (shoes visible) + transparent background
4. Clean, polished glam finish with controlled highlights`,
  "powerpuff": `Transform the provided YoWorld avatar into a Powerpuff-style cartoon character.

IDENTITY LOCK (CRITICAL):
Preserve all identifying characteristics exactly as provided, including facial structure, body type, proportions, skin tone, eye shape and color, hair color and style, makeup (if present), beauty marks, and all defining features.
Do not alter age, ethnicity, gender expression, or core appearance.

PROPORTIONS & SHAPE (IMPORTANT):
– keep overall YoWorld proportions and scale (NO chibi, NO bobbleheads)
– simplify shapes into clean, readable forms with a strong silhouette
– keep hands/feet/head size natural to YoWorld (do not exaggerate anatomy)

FACIAL RENDERING (POWERPUFF-LIKE):
– bold, clean cartoon look
– simplified facial features with crisp outlines
– large, expressive eyes are allowed ONLY if they do not change overall YoWorld head size or distort the likeness
– flat-to-minimal shading

ITEMS & ACCESSORIES (CRITICAL):
– ensure exact accuracy of handheld items, hat, jewelry, and accessories
– do not add or remove props, accessories, makeup, tattoos, or clothing items

COMPOSITION:
This image must contain ONLY the avatar.
– full body visible head to toe, including shoes
– extend canvas as needed to avoid any cropping
– centered composition

BACKGROUND & SCENE RULES:
– transparent background
– no environment, scenery, floor, horizon, sky, room, vignette, gradient, or extra objects
– no shadows cast outside the avatar silhouette

GLOBAL STYLE RESTRICTIONS:
– NO painterly textures or brush strokes
– NO canvas grain, noise, or gritty overlays
– NO watercolor, oil paint, pastel, chalk, or acrylic effects
– NO glow spill, haze, bloom, or lighting outside the avatar silhouette

PRIORITY ORDER:
1. Exact likeness + preserved YoWorld proportions
2. Item/outfit accuracy (including handheld items)
3. Full-body framing (shoes visible) + transparent background
4. Clean Powerpuff-style simplification with crisp edges`,
  "pop_art": `Transform the provided YoWorld avatar into a bold Pop Art / halftone poster illustration.

IDENTITY LOCK (CRITICAL):
Preserve all identifying characteristics exactly as provided, including facial structure, body type, proportions, skin tone, eye shape and color, hair color and style, makeup (if present), beauty marks, and all defining features.
Do not alter age, ethnicity, gender expression, or core appearance.

POP ART STYLE (POSTER / SCREENPRINT):
– bold, graphic shapes and strong outlines
– limited, high-contrast color palette (poster-like)
– comic-style shading and color blocking
– controlled halftone dots are allowed (clean and intentional, not gritty noise)

ITEMS & ACCESSORIES (CRITICAL):
– ensure exact accuracy of handheld items, hat, jewelry, and accessories
– do not add or remove props, accessories, makeup, tattoos, or clothing items

COMPOSITION:
This image must contain ONLY the avatar.
– full body visible head to toe, including shoes
– extend canvas as needed to avoid any cropping
– centered composition

BACKGROUND & SCENE RULES:
– transparent background
– no environment, scenery, floor, horizon, sky, room, vignette, gradient, or extra objects
– no shadows cast outside the avatar silhouette

GLOBAL STYLE RESTRICTIONS:
– NO painterly textures or brush strokes
– NO canvas grain, random noise, or dirty overlays (halftone dots must be clean)
– NO watercolor, oil paint, pastel, chalk, or acrylic effects
– NO glow spill, haze, bloom, or lighting outside the avatar silhouette

PRIORITY ORDER:
1. Exact likeness + proportions
2. Item/outfit accuracy (including handheld items)
3. Full-body framing (shoes visible) + transparent background
4. Bold Pop Art poster finish with clean halftone treatment`,
  "pixel_art": `Transform the provided YoWorld avatar into TRUE pixel art (sprite-style) while preserving exact identity.

IDENTITY LOCK (CRITICAL):
Preserve all identifying characteristics exactly as provided, including facial structure, body type, proportions, skin tone, eye shape and color, hair color and style, makeup (if present), beauty marks, and all defining features.
Do not alter age, ethnicity, gender expression, or core appearance.

PIXEL ART STYLE (CRITICAL):
– render on a fixed pixel grid at LOW native resolution (e.g., 128×256 or 160×320)
– then upscale 6×–10× using NEAREST-NEIGHBOR only (no smoothing, no interpolation)
– each “pixel” must be clearly visible (blocky, crisp squares)
– NO blur, NO smudging, NO soft gradients
– shading must be done with limited palette + optional controlled dithering (not smooth blending)
– keep the silhouette and outfit details readable at pixel scale
– use a limited, cohesive color palette (avoid noisy ramps)
– optional: 1–2 px outline is allowed if it improves readability

ITEMS & ACCESSORIES (CRITICAL):
– ensure exact accuracy of handheld items, hat, jewelry, and accessories
– do not add or remove props, accessories, makeup, tattoos, or clothing items

COMPOSITION:
This image must contain ONLY the avatar.
– full body visible head to toe, including shoes
– extend canvas as needed to avoid any cropping
– centered composition

BACKGROUND & SCENE RULES:
– transparent background
– no environment, scenery, floor, horizon, sky, room, vignette, gradient, or extra objects
– no shadows cast outside the avatar silhouette

GLOBAL STYLE RESTRICTIONS:
– NO painterly textures or brush strokes
– NO canvas grain, noise, or gritty overlays
– NO glow spill, haze, bloom, or lighting outside the avatar silhouette
– NO anti-aliasing, NO sub-pixel smoothing, NO motion blur, NO depth of field
– NO photorealism, NO 3D rendering, NO cinematic lighting
– NO smooth shading; keep hard pixel clusters

PRIORITY ORDER:
1. Exact likeness + item/outfit accuracy
2. Full-body framing (shoes visible) + transparent background
3. Crisp pixel readability and clean silhouette
4. Controlled dithering only when necessary`,
  "fashion": `Transform the provided YoWorld avatar into a high-fashion editorial runway look.

Create a couture-inspired, avant-garde fashion image while preserving the avatar’s recognizable identity.

IDENTITY LOCK (CRITICAL):
Preserve all identifying characteristics exactly as provided, including facial structure, body type, skin tone, eye shape and color, hair color and style, and all defining features.
Do not alter age, ethnicity, gender expression, or core appearance.

POSE & PROPORTIONS:
– preserve the avatar’s original stance and pose (no pose changes)
– maintain overall YoWorld proportions and scale (no chibi, no bobbleheads)
– subtly lengthen the legs ONLY (do not change torso/head size)
– keep the result volumetric, full-bodied, and 3D in form (not flat)

HAIR & MAKEUP (EDITORIAL):
– sleek, runway-ready hair rendering with clean shapes and controlled shine
– bold, high-fashion makeup that enhances what is already present (do not change identity)
– crisp edges and clean facial rendering (avoid realism creep)

CLOTHING, ACCESSORIES & ITEMS (CRITICAL):
– retain the specific clothing pieces exactly as shown; no replacing or removing items
– retain and accurately render all handheld items, hat, jewelry, and accessories
– do not add new props, extra accessories, or new objects
– elevate the look through couture styling details WITHOUT changing what the items are

TEXTURE, MATERIALS & DEPTH:
– emphasize layered fabrics, tailored structure, and avant-garde styling details
– add strong, controlled highlights and shadows to hair and clothing for depth
– materials should look rich and dimensional, but remain illustrated/cartoon-based (not photoreal)

COMPOSITION:
This image must contain ONLY the avatar.
– full body visible head to toe, including shoes
– extend canvas as needed to avoid cropping
– centered composition

BACKGROUND & SCENE RULES:
– transparent background
– no props, scenery, environment, floor, horizon, sky, room, vignette, or gradient
– no shadows cast outside the avatar silhouette

GLOBAL STYLE RESTRICTIONS:
– NO painterly textures or brush strokes
– NO canvas grain, noise, or gritty overlays
– NO glow spill, haze, bloom, or lighting outside the avatar silhouette

PRIORITY ORDER:
1. Exact likeness + skin tone + recognizable features
2. Item/outfit accuracy (including handheld items, hat, jewelry, accessories)
3. Full-body framing (shoes visible) + transparent background
4. Editorial couture styling with strong depth and clean rendering`,
  "cyberpunk": `Transform the provided YoWorld avatar into a gritty cyberpunk–style cartoon illustration.

Render the avatar in a bold, urban cyberpunk aesthetic:
– neon accent lighting (cyan, magenta, electric purple, acid green)
– stylized tech implants and cybernetic details
– futuristic clothing with worn, layered design language
– edgy, street-level cyberpunk attitude

IDENTITY & PROPORTION LOCK:
Preserve the avatar’s original proportions, pose, and all recognizable features exactly as provided, including facial structure, skin tone, eye shape and color, hair color and style, and defining details.
Do not alter age, ethnicity, gender expression, or core appearance.
Do NOT exaggerate anatomy or introduce chibi, caricature, or realism creep.

FACIAL RENDERING (CRITICAL):
– clean cartoon facial rendering
– bold, smooth linework with closed outlines
– flat or softly stepped shading only
– NO blended, airbrushed, or painterly face shading
– NO skin texture, pores, grain, or photoreal detail

STYLE & MATERIAL TREATMENT:
– graphic, illustrated cyberpunk style (not 3D, not photorealistic)
– sharp edges and crisp silhouettes
– metallic elements suggested through color blocking and highlights only
– fabric wear implied via graphic design, NOT texture simulation
– high contrast without noise or grit overlays

CYBERPUNK DETAILS:
– neon-lit circuitry accents, panels, or trims
– stylized implants integrated cleanly into the design
– layered futuristic clothing with urban influence
– metallic elements appear smooth and illustrated, not textured

COMPOSITION:
– full body visible, head to toe, including shoes
– extend canvas as needed to avoid cropping
– centered composition
– image must contain ONLY the avatar

BACKGROUND & SCENE RULES:
– no background, environment, floor, horizon, sky, room, vignette, gradient, or scenery
– output must be transparent or plain with no spatial context

GLOBAL STYLE RESTRICTIONS:
– NO painterly textures
– NO brush strokes, canvas grain, or noise
– NO watercolor, oil paint, pastel, chalk, or acrylic effects
– NO photorealism or cinematic lighting
– NO glow spill, haze, bloom, or lighting outside the avatar silhouette
– NO extra props or objects beyond what the avatar already has

PRIORITY ORDER:
1. Clean cartoon linework and non-painterly finish
2. Preserved identity and proportions
3. Gritty cyberpunk aesthetic through design, not texture
4. Full-body clarity with transparent background`,
  "futuristic": `Transform the provided YoWorld avatar into a clean futuristic cartoon illustration.

Render a sleek, high-tech fashion look:
– smooth fabrics and modern sci-fi silhouettes
– minimalist, polished design language
– controlled glowing accents (subtle, clean, and stylized)

IDENTITY & PROPORTION LOCK:
Preserve the avatar’s proportions, pose, and recognizable features exactly as provided, including facial structure, skin tone, eye shape and color, hair color and style, and defining details.
Do not alter age, ethnicity, gender expression, or core appearance.

STYLE & FINISH:
– clean cartoon rendering with crisp edges
– dimensional shading for form (no realism creep)
– avoid gritty textures; keep surfaces sleek and readable

COMPOSITION:
This image must contain ONLY the avatar.
– full body visible head to toe, including shoes
– extend canvas as needed to avoid cropping
– centered composition

BACKGROUND & SCENE RULES:
– transparent background
– no extra objects, props, scenery, environment, floor, horizon, vignette, or gradient

GLOBAL STYLE RESTRICTIONS:
– NO painterly textures or brush strokes
– NO canvas grain/noise overlays
– NO glow spill, haze, bloom, or lighting outside the avatar silhouette

PRIORITY ORDER:
1. Exact likeness + skin tone
2. Preserved pose/proportions
3. Full-body framing (shoes visible) + transparent background
4. Clean futuristic styling with sleek materials and controlled glow accents`,
  "dr_suess": `Transform the provided YoWorld avatar into a chaotic, surreal, Dr. Seuss–inspired cartoon character.

Render the avatar in a whimsical, storybook-style cartoon aesthetic:
– playful, exaggerated proportions
– tall, twisting, elastic forms
– curved silhouettes and rhythmic shapes
– intentionally odd but cohesive anatomy

IDENTITY PRESERVATION:
Preserve the avatar’s recognizable identity, including facial structure, skin tone, eye shape and color, hair color and style, and overall character likeness.
Do not change age, ethnicity, gender expression, or core identity.
Stylize features through surreal distortion only, not replacement.

PROPORTIONS & DISTORTION:
– exaggerate proportions in a whimsical, surreal manner
– legs may be lengthened and slightly curved or bent
– torso and limbs may stretch, tilt, or arc playfully
– distortions should feel imaginative and intentional, not random
– avoid chibi or super-deformed styles

STYLE & LINEWORK:
– clean, bold cartoon outlines
– smooth, graphic linework
– flat to softly stepped color fills
– crisp edges and high clarity
– NO painterly textures or blended shading

COLOR & PATTERNS:
– wild, vibrant color combinations
– bold stripes, zigzags, dots, spirals, and mismatched patterns
– high-contrast, playful palette
– patterns should feel whimsical and rhythmic, not chaotic noise

HAIR, CLOTHING & ACCESSORIES:
– render hair, clothing, hats, jewelry, and accessories with flowing, gravity-defying curves
– shapes may curl, swoop, or bend in surreal ways
– retain all handheld items, hats, jewelry, and accessories exactly as shown, but reinterpret them with quirky, Seussian-style distortions
– do not add or remove items

COMPOSITION:
– full body visible head to toe, including shoes
– extend canvas as needed to avoid cropping
– centered composition

BACKGROUND & SCENE RULES:
– no background, environment, floor, horizon, sky, room, gradient, vignette, or scenery
– avatar must exist in isolation
– output must be transparent or plain with no spatial context

GLOBAL STYLE RESTRICTIONS:
– NO painterly textures
– NO brush strokes, canvas grain, or noise
– NO watercolor, oil paint, pastel, chalk, or acrylic effects
– NO soft-focus blur or realism creep
– NO shadows cast outside the avatar silhouette

PRIORITY ORDER:
1. Whimsical, surreal Seussian-style distortion
2. Clean cartoon linework and bold color
3. Preserved identity and recognizable features
4. Full-body clarity with no background`,
  "elven": `Transform the provided YoWorld avatar into an elven fantasy–inspired illustrated cartoon character.

Render the avatar with an elegant, ethereal elven aesthetic:
– graceful posture and refined silhouette
– subtle elongation of the body and limbs (delicate, not exaggerated)
– light, otherworldly presence conveyed through form and posture
– smooth, flowing visual rhythm

IDENTITY & PROPORTION LOCK:
Preserve all recognizable identity features exactly as provided, including facial structure, skin tone, eye shape and color, hair color and style, and overall likeness.
Do NOT alter age, ethnicity, gender expression, or core identity.
Maintain the avatar’s original pose and overall scale.

BODY & ETHEREAL ADJUSTMENTS (PRIMARY FOCUS):
– subtly elongate the neck, limbs, and fingers for an elven feel
– refine body contours to appear lighter, more graceful, and otherworldly
– soften transitions between body forms for an airy, fluid appearance
– changes should affect the avatar’s presence and anatomy, not clothing

CLOTHING & ITEM PRESERVATION (CRITICAL):
– retain all clothing exactly as shown
– do NOT redesign, replace, distort, or stylize clothing into fantasy costumes
– fabrics, silhouettes, and outfit details must remain recognizable and intact
– include all existing accessories, jewelry, hats, and handheld items unchanged

FACIAL RENDERING:
– clean cartoon facial rendering
– smooth, refined features with gentle elegance
– bold but delicate linework
– flat to softly stepped shading only
– NO painterly blending, airbrushing, or texture

STYLE & FINISH:
– graphic, illustrated fantasy style
– smooth surfaces with crisp edges
– subtle glow-like softness achieved through form and color, NOT effects
– non-painterly, non-textured appearance

COMPOSITION:
– full body visible, head to toe, including shoes
– extend canvas as needed to avoid cropping
– centered composition
– image must contain ONLY the avatar

BACKGROUND & SCENE RULES:
– no background, environment, floor, horizon, sky, room, vignette, gradient, or scenery
– output must be transparent or plain with no spatial context

GLOBAL RESTRICTIONS:
– NO painterly textures
– NO brush strokes, canvas grain, or noise
– NO watercolor, oil paint, pastel, chalk, or acrylic effects
– NO glow, bloom, haze, or lighting spill
– NO added props or objects

PRIORITY ORDER:
1. Ethereal elven body presence and refined anatomy
2. Preserved clothing and accessories (unchanged)
3. Clean cartoon rendering (non-painterly)
4. Exact likeness and full-body clarity`,
  "rustic": `Transform the provided YoWorld avatar into a soft rustic cartoon illustration with bougie bohemian, country farm-living vibes.

RUSTIC STYLE DIRECTION:
– earthy, warm color palette
– woven fabrics, cozy layers, natural accents
– soft, friendly cartoon finish with gentle depth

IDENTITY & PROPORTION LOCK:
Preserve the avatar’s proportions, pose, and recognizable features exactly as provided, including facial structure, skin tone, eye shape and color, hair color and style, and defining details.
Do not alter age, ethnicity, gender expression, or core appearance.

CLOTHING & ITEMS:
– retain all existing clothing pieces and accessories as shown
– do not add extra props or objects
– keep details recognizable and clean

COMPOSITION:
This image must contain ONLY the avatar.
– full body visible head to toe, including shoes
– extend canvas as needed to avoid cropping
– centered composition

BACKGROUND & SCENE RULES:
– transparent background
– no extra objects, scenery, environment, floor, horizon, vignette, or gradient

GLOBAL STYLE RESTRICTIONS:
– NO painterly textures or brush strokes
– NO gritty noise overlays
– NO lighting spill, haze, or bloom outside the avatar silhouette

PRIORITY ORDER:
1. Exact likeness + skin tone
2. Preserved pose/proportions + clothing accuracy
3. Full-body framing (shoes visible) + transparent background
4. Rustic cozy aesthetic through color, fabric cues, and clean shading`
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
  function formatPresetLabel(key) {
    if (key === 'dr_suess') return 'Dr. Suess';
    if (key === '3d') return '3D (Clay)';
    if (key === 'monster_high') return 'Monster High';
    if (key === 'pixel_art') return 'Pixel Art';
    if (key === 'pop_art') return 'Pop Art';
    return key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
  }

  // Elements referenced across helpers must be declared before use (avoid TDZ)
  let assembleBtn = null;

  // Toast helper
  function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.style.display = 'block';
    setTimeout(() => { toast.style.display = 'none'; }, 1800);
  }

  // --- Theme Selector (Resources tab, applies to entire popup) ---
  function applyTheme(themeKey) {
    const key = themeKey || 'calico';
    document.documentElement.setAttribute('data-theme', key);
  }

  const themeSelect = document.getElementById('theme-select');
  const savedTheme = localStorage.getItem('yoprompt_theme') || 'calico';
  applyTheme(savedTheme);
  if (themeSelect) {
    themeSelect.value = savedTheme;
    themeSelect.addEventListener('change', () => {
      const val = themeSelect.value || 'calico';
      localStorage.setItem('yoprompt_theme', val);
      applyTheme(val);
      // Theme changes can slightly affect layout (fonts/background rendering), so re-lock height.
      requestAnimationFrame(() => lockPopupHeightToAviPresets());
    });
    // If form-state restore changes the select after initial paint, re-apply once.
    requestAnimationFrame(() => applyTheme(themeSelect.value || savedTheme));
  }

  // --- Popup Height Lock (match Avi Presets tab) ---
  // Chrome extension popups size to their content; if tabs have different content heights
  // the popup will visually "jump". We lock the content area height to whatever the Avi
  // Presets tab would naturally need.
  function lockPopupHeightToAviPresets() {
    const content = document.querySelector('.content');
    const presets = document.getElementById('presets');
    if (!content || !presets) return;

    // Clone the Avi Presets section so we can measure it even if another tab is active.
    const clone = presets.cloneNode(true);
    clone.classList.add('active');
    clone.style.display = 'block';
    clone.style.position = 'absolute';
    clone.style.visibility = 'hidden';
    clone.style.pointerEvents = 'none';
    clone.style.left = '-99999px';
    clone.style.top = '0';
    clone.style.height = 'auto';
    clone.style.maxHeight = 'none';

    content.appendChild(clone);
    const cloneRect = clone.getBoundingClientRect();
    content.removeChild(clone);

    const cs = window.getComputedStyle(content);
    const padTop = parseFloat(cs.paddingTop) || 0;
    const padBottom = parseFloat(cs.paddingBottom) || 0;
    const desired = Math.ceil(cloneRect.height + padTop + padBottom);

    if (desired > 0) {
      content.style.height = desired + 'px';
    }
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
  const contentEl = document.querySelector('.content');
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
      if (contentEl) contentEl.classList.toggle('mypresets-active', lastTab === 'mypresets');
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
      if (contentEl) contentEl.classList.toggle('mypresets-active', btn.dataset.tab === 'mypresets');
    });
  });

  // Lock once after initial layout + once after fonts settle.
  requestAnimationFrame(() => lockPopupHeightToAviPresets());
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => lockPopupHeightToAviPresets()).catch(() => {});
  }

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
          if (k === 'theme-select') return;
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
        if (el.id === 'theme-select') return;
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
        if (el.id === 'theme-select') return;
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
      opt.textContent = formatPresetLabel(key);
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
    assembleBtn = document.getElementById('assemble');
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
                opt.textContent = formatPresetLabel(key);
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
