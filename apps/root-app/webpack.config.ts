import {
    getHostFederationConfig,
    getLoaders,
    getPlugins,
} from "@eputs/configs";
import path from "path";
import { fileURLToPath } from "url";
import type { Configuration } from "webpack";
import { ModuleFederationPlugin } from "@module-federation/enhanced/webpack";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostFederation = getHostFederationConfig("root-app", {
    "cool_module": `cool_module@${"http://localhost:3001"}/remoteEntry.js`,
    "module2": `module2@${"http://localhost:3002"}/remoteEntry.js`,
});

const config: Configuration = {
    entry: "./src/index.tsx",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        clean: true,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devtool: "source-map",
    module: {
        rules: getLoaders(),
    },
    plugins: [
        ...getPlugins(__dirname),
        new ModuleFederationPlugin(hostFederation),
    ],
    devServer: {
        static: path.join(__dirname, "dist"),
        hot: true,
        historyApiFallback: true,
        port: 3000,
        open: true,
    },
    mode: "development",
};

export default config;
