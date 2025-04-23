"use client";

import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

const MetaPixel = ({ pixelId }: { pixelId: string }) => {
  useEffect(() => {
    ReactPixel.init(pixelId); // inicializa o pixel
    ReactPixel.pageView();    // registra visualização de página
  }, [pixelId]);

  return null;
};

export default MetaPixel;
