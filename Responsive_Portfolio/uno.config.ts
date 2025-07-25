// uno.config.ts
import { defineConfig, presetWind, presetTypography } from 'unocss';

export default defineConfig({
  presets: [
    presetWind(),        // Enables Tailwind/Windi-like classes
    presetTypography(),  // (optional) adds prose typography classes
  ],
  // You can add custom rules, colors, theme, etc. here if needed.
});
