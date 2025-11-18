// src/lib/imageUtils.ts

/**
 * Opciones para optimizar imágenes de Hygraph
 */
export interface OptimizeImageOptions {
  width?: number;
  quality?: number;
  format?: 'webp' | 'jpg' | 'png' | 'auto';
}

/**
 * Optimiza una URL de imagen de Hygraph aplicando transformaciones
 * para reducir el tamaño y mejorar el rendimiento.
 *
 * @param url - URL original de la imagen de Hygraph
 * @param options - Opciones de optimización (width, quality, format)
 * @returns URL optimizada con los parámetros de transformación
 *
 * @example
 * optimizeHygraphImage('https://ap-south-1.graphassets.com/ENV_ID/cmhsppth3pqz07ofgsynh08h/imagen.png')
 * // Returns: 'https://ap-south-1.graphassets.com/ENV_ID/resize=width:800/quality=value:70/output=format:webp/cmhsppth3pqz07ofgsynh08h/imagen.png'
 *
 * @example
 * optimizeHygraphImage(url, { width: 1200, quality: 80 })
 */
export function optimizeHygraphImage(
  url: string,
  options: OptimizeImageOptions = {}
): string {
  // Valores por defecto optimizados
  const {
    width = 800,
    quality = 70,
    format = 'webp'
  } = options;

  // Verificar que la URL es válida
  if (!url || !url.includes('graphassets.com')) {
    console.warn('Invalid Hygraph image URL:', url);
    return url;
  }

  try {
    // Parsear la URL
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/').filter(Boolean);

    // La estructura es: /ENV_ID/HANDLE o /ENV_ID/transformations.../HANDLE
    // Necesitamos insertar las transformaciones después del ENV_ID
    if (pathParts.length < 2) {
      console.warn('Unexpected Hygraph URL structure:', url);
      return url;
    }

    // Construir las transformaciones en el formato de Hygraph
    const transformations = [
      `resize=width:${width}`,
      `quality=value:${quality}`,
      `output=format:${format}`
    ];

    // Reconstruir la URL: protocolo + host + /ENV_ID/ + transformaciones + /HANDLE
    const envId = pathParts[0];
    const handle = pathParts[pathParts.length - 1];

    const optimizedUrl = `${urlObj.protocol}//${urlObj.host}/${envId}/${transformations.join('/')}/${handle}`;

    return optimizedUrl;
  } catch (error) {
    console.error('Error optimizing Hygraph image URL:', error);
    return url;
  }
}

/**
 * Presets de optimización para diferentes contextos
 */
export const IMAGE_PRESETS = {
  // Para thumbnails en el portfolio grid
  thumbnail: {
    width: 800,
    quality: 70,
    format: 'webp' as const,
  },
  // Para imágenes en la galería de detalles
  gallery: {
    width: 800,
    quality: 70,
    format: 'webp' as const,
  },
  // Para imágenes hero o destacadas
  hero: {
    width: 800,
    quality: 70,
    format: 'webp' as const,
  },
} as const;
