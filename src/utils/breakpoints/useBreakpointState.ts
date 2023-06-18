export type BreakpointMap = { [mode: string]: boolean };

// scss variable for some reason not exports (?)
export const thresholds = {
  mobile: 900,
  tablet: 1300,
}

export const getDefaultBreakpointMap = (): BreakpointMap => ({
  mobile: false,
  tablet: false,
  desktop: true,
})

export const getUpdatedBreakpointMap = (width: number): BreakpointMap => {
  const mobile = width < thresholds.mobile;
  const tablet = width < thresholds.tablet && !mobile;
  const desktop = width >= thresholds.tablet;

  return { mobile, tablet, desktop }
}
