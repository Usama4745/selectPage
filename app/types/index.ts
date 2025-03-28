// /types/index.ts
export interface Skip {
    id: string;
    size: number;
    hire_period_days: number;
    price_before_vat: number;
    allows_heavy_waste: boolean;
    allowed_on_road: boolean;
  }
  
  export interface BookingState {
    selectedSkip: Skip | null;
  }