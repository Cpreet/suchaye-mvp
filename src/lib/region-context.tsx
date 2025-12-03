import React, { createContext, useContext, useState } from 'react';
import type { Region, Currency, Language } from './types';
import { REGION_CURRENCY_MAP } from './types';

interface RegionContextType {
  region: Region;
  setRegion: (region: Region) => void;
  currency: Currency;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export function RegionProvider({ children }: { children: React.ReactNode }) {
  const [region, setRegionState] = useState<Region>('india');
  const [currency, setCurrency] = useState<Currency>('INR');
  const [language, setLanguage] = useState<Language>('en');

  const setRegion = (newRegion: Region) => {
    setRegionState(newRegion);
    setCurrency(REGION_CURRENCY_MAP[newRegion]);
  };

  return (
    <RegionContext.Provider value={{ region, setRegion, currency, language, setLanguage }}>
      {children}
    </RegionContext.Provider>
  );
}

export function useRegion() {
  const context = useContext(RegionContext);
  if (context === undefined) {
    throw new Error('useRegion must be used within a RegionProvider');
  }
  return context;
}

