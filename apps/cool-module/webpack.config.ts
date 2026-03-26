import path from "path";
import { fileURLToPath } from "url";
import type { Configuration } from "webpack";
import { getLoaders } from "@eputs/shared-configs";
import { getPlugins } from "@eputs/shared-configs";
import { getRemoteFederationConfig } from "@eputs/shared-configs";

import { ModuleFederationPlugin } from "@module-federation/enhanced/webpack";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const federationConfig = getRemoteFederationConfig("cool_module", {
    "./Button": "./src/components/Button",
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
        port: 3001,
        open: true,
    },
    mode: "development",
};

export default config;
