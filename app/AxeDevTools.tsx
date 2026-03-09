"use client";

import { useEffect } from "react";

export default function AxeDevTools() {
  useEffect(() => {
    setTimeout(() => {
      import("axe-core").then((axe) => {
        axe.default.run().then((results) => {
          console.log("Axe violations:", results.violations);
        });
      });
    }, 1000);
  }, []);

  return null;
}
