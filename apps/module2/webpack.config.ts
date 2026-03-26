import path from "path";
import { fileURLToPath } from "url";
import type { Configuration } from "webpack";
import { getLoaders } from "@eputs/configs";
import { getPlugins } from "@eputs/configs";
import { getRemoteFederationConfig } from "@eputs/configs";

import { ModuleFederationPlugin } from "@module-federation/enhanced/webpack";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const federationConfig = getRemoteFederationConfig("module2", {
    "./Module2": "./src/components/Module2",
});

const config: Configuration = {
    entry: "./src/index.tsx",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "auto",
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
        new ModuleFederationPlugin(federationConfig),
    ],
    devServer: {
        static: path.join(__dirname, "dist"),
        hot: true,
        historyApiFallback: true,
        port: 3002,
        open: true,
    },
    mode: "development",
};

export default config;
