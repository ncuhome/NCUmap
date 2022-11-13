import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { CJK, literalsCollector } from "vite-plugin-literals-collector";
import { execSync } from "child_process";
import { readdirSync, renameSync } from "fs";

const minifyFont = (target: string[]) => {
  if (target.length > 0) {
    const text = target.join("").replace(" ", "");
    console.log(text, readdirSync("dist/assets"));

    const file =
      "dist/assets/" +
      readdirSync("dist/assets").filter((f) => f.endsWith("otf"))[0];
    execSync(`pyftsubset ${file} --text=${text}`);
    console.log(readdirSync("dist/assets"));
    renameSync(file.replace(".otf", ".subset.otf"), file);
    execSync("ls -l dist/assets");
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    literalsCollector({
      include: [/Map\.tsx$/],
      target: CJK,
      // onResult: minifyFont,
    }),
  ],
});
