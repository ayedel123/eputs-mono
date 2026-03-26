// packages/shared-configs/src/federation/paths.ts
import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const FEDERATION_TS_CONFIG_PATH = path.resolve(
    __dirname,
    "./tsconfig.federation.json",
);
