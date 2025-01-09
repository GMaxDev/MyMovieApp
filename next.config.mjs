import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // Chemin absolu du fichier courant
const __dirname = path.dirname(__filename);       // Répertoire contenant le fichier

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
};

export default nextConfig;
