import type { RuleSetRule } from "webpack";

export function getLoaders(): RuleSetRule[] {
    const tsLoader = {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        [
                            "@babel/preset-react",
                            {
                                runtime: "automatic",
                            },
                        ],
                        "@babel/preset-typescript",
                    ],
                },
            },
        ],
    };

    const cssLoader = {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
    };

    const assetsLoader = {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
    };

    return [tsLoader, cssLoader, assetsLoader];
}
