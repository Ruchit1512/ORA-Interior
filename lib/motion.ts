export const ease = [0.22, 1, 0.36, 1] as const;

export const viewportConfig = {
  once: false,
  amount: 0.15,
};

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewportConfig,
  transition: { duration: 0.7, ease, delay },
});

export const fadeDown = (delay = 0) => ({
  initial: { opacity: 0, y: -25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewportConfig,
  transition: { duration: 0.7, ease, delay },
});

export const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: viewportConfig,
  transition: { duration: 0.7, ease, delay },
});

export const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: viewportConfig,
  transition: { duration: 0.7, ease, delay },
});

export const scaleFade = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.96 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: viewportConfig,
  transition: { duration: 0.7, ease, delay },
});

export const zoomIn = (delay = 0, initialScale = 0.88) => ({
  initial: { opacity: 0, scale: initialScale },
  whileInView: { opacity: 1, scale: 1 },
  viewport: viewportConfig,
  transition: { duration: 0.85, ease, delay },
});

export const buttonHover = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.98 },
};
