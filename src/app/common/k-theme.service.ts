import { computed, effect, Injectable, signal } from '@angular/core';

export interface AppTheme {
  name: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class KThemeService {
  private appTheme = signal<'light' | 'dark' | 'system'>('system');

  private themes: AppTheme[] = [
    { name: 'light', icon: 'light_mode' },
    { name: 'dark', icon: 'dark_mode' },
    { name: 'system', icon: 'desktop_windows' },
  ];

  selectedTheme = computed(() =>
    this.themes.find((t) => t.name === this.appTheme())
  );

  getThemes() {
    return this.themes;
  }

  setTheme(theme: string) {
    const validThemes: ('light' | 'dark' | 'system')[] = ['light', 'dark', 'system'];
    if (validThemes.includes(theme as any)) {
      this.appTheme.set(theme as 'light' | 'dark' | 'system');
    } else {
      console.error(`Invalid theme: ${String(theme)}`);
    }
  }

  constructor() {
    effect(() => {
      const appTheme = this.appTheme();
      const colorScheme = appTheme === 'system' ? 'light dark' : appTheme;
      document.body.style.setProperty('color-scheme', colorScheme);
    });
  }
}
