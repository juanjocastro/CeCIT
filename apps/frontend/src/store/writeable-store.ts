import { writable } from 'svelte/store';
import type { BenefitCardType } from '../types/benefit.type';

export const isOpened = writable(0);
export const actualCard = writable<BenefitCardType | null>(null);
